"use client";

function currentPath() {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

export function trackEvent(event, properties = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    path: properties.path || currentPath(),
    title: properties.title || document.title,
    timestamp: new Date().toISOString(),
    ...properties
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", event, properties);
  }

  if (navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    navigator.sendBeacon("/api/track", blob);
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
    keepalive: true
  });
}
