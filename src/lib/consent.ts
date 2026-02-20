export const CONSENT_KEY = "skattio-consent";

export type ConsentValue = "granted" | "denied";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(CONSENT_KEY);
  if (val === "granted" || val === "denied") return val;
  return null;
}

export function setConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event("consent-updated"));
}
