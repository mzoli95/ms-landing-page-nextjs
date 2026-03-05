"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/components/lib/analytics";

export function ScrollDepthTracker() {
  const hasSent75 = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (hasSent75.current) return;

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const percent = (window.scrollY / maxScroll) * 100;
      if (percent >= 75) {
        hasSent75.current = true;
        trackEvent("scroll_depth", { percent: 75 });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
