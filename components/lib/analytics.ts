export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (
        command: "event",
        eventName: string,
        params?: Record<string, string | number | boolean>,
      ) => void;
    }
  ).gtag;

  if (!gtag) return;
  gtag("event", eventName, params);
}
