"use client";

import { useEffect, useRef, useState } from "react";

export function InViewMount({
  children,
  fallback,
  rootMargin = "300px 0px",
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.unobserve(node);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{shouldRender ? children : fallback}</div>;
}
