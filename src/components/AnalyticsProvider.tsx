"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getConsent } from "@/lib/consent";

export function AnalyticsProvider() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(getConsent() === "granted");

    const handler = () => setHasConsent(getConsent() === "granted");
    window.addEventListener("consent-updated", handler);
    return () => window.removeEventListener("consent-updated", handler);
  }, []);

  if (!hasConsent) return null;
  return <Analytics />;
}
