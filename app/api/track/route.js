import { NextResponse } from "next/server";

function clean(value) {
  return typeof value === "string" ? value.trim().slice(0, 240) : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const event = clean(body?.event);

    if (!event) {
      return NextResponse.json({ message: "Missing event name." }, { status: 400 });
    }

    const payload = {
      event,
      path: clean(body?.path),
      title: clean(body?.title),
      page_type: clean(body?.page_type),
      label: clean(body?.label),
      href: clean(body?.href),
      section: clean(body?.section),
      value: clean(body?.value),
      timestamp: clean(body?.timestamp) || new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "",
      referrer: request.headers.get("referer") || ""
    };

    if (process.env.ANALYTICS_WEBHOOK_URL) {
      const response = await fetch(process.env.ANALYTICS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        return NextResponse.json({ message: "Analytics forward failed." }, { status: 502 });
      }
    } else {
      console.info("[yellow-rose-capital] analytics", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to record event." },
      { status: 500 }
    );
  }
}
