"use client";

import { useEffect, useRef } from "react";

/**
 * Agrega la clase `is-visible` a cada elemento hijo con clase `reveal`
 * cuando entra en el viewport. Compatible con el CSS de globals.css.
 */
export function useScrollReveal(rootMargin = "-60px 0px") {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(".reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin]);

  return containerRef;
}
