const rangeRank = new Map([
  ["Under $50k", 1],
  ["$50k-$100k", 2],
  ["$100k-$250k", 3],
  ["$250k-$500k", 4],
  ["$500k+", 5],
  ["Not sure yet", 0]
]);

function normalize(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function scoreLead(input = {}) {
  const accreditedStatus = normalize(input.accreditedStatus);
  const investorType = normalize(input.investorType);
  const investmentRange = typeof input.investmentRange === "string" ? input.investmentRange.trim() : "Not sure yet";

  let score = 0;

  if (accreditedStatus === "yes") score += 40;
  if (accreditedStatus === "unsure") score += 10;
  if (["business owner", "professional", "high-net-worth individual"].includes(investorType)) {
    score += 10;
  }

  score += (rangeRank.get(investmentRange) || 0) * 8;

  if (typeof input.message === "string" && input.message.trim().length > 80) {
    score += 5;
  }

  const tier = score >= 65 ? "high" : score >= 35 ? "medium" : "low";

  return {
    leadScore: score,
    leadTier: tier,
    prioritize: tier !== "low"
  };
}
