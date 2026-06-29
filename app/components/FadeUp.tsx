"use client";

import { useEffect, useRef, useState } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
};

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function FadeUp({ children, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setVisible(true);

    if (isInViewport(el)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" },
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      if (isInViewport(el)) {
        reveal();
        observer.disconnect();
      }
    });

    const onScroll = () => {
      if (isInViewport(el)) {
        reveal();
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const fallback = window.setTimeout(reveal, 1500);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up${visible ? " visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
