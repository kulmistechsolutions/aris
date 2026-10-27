"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

// Offset for in-page anchors so sections clear the fixed header and the services quick-nav.
const ANCHOR_OFFSET = -150;

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: ANCHOR_OFFSET },
    });
    window.lenis = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  // On navigation (not the first load): jump to the top, or glide to the #hash target.
  const firstLoad = useRef(true);
  useEffect(() => {
    const lenis = window.lenis;
    if (firstLoad.current || !lenis) {
      firstLoad.current = false;
      return;
    }
    const hash = window.location.hash;
    if (hash) {
      const t = setTimeout(() => lenis.scrollTo(hash, { offset: ANCHOR_OFFSET }), 120);
      return () => clearTimeout(t);
    }
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
