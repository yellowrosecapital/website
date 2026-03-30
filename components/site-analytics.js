"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { trackEvent } from "@/lib/tracking";

export function SiteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef("");

  useEffect(() => {
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;

    if (lastPathRef.current === path) {
      return;
    }

    lastPathRef.current = path;
    trackEvent("page_view", {
      path,
      page_type: pathname === "/" ? "home" : "content"
    });
  }, [pathname, searchParams]);

  return null;
}
