"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/components/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: "sm" | "md" | "lg";
  id?: string;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  yOffset = "md",
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        root: null,
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "reveal-on-scroll",
        yOffset === "sm" && "reveal-offset-sm",
        yOffset === "md" && "reveal-offset-md",
        yOffset === "lg" && "reveal-offset-lg",
        isVisible && "reveal-visible",
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
