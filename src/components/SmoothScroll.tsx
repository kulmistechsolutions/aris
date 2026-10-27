"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { stripLocale } from "@/lib/i18n";

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

  // On navigation: jump to the top, or glide to the #hash target.
  // A language switch keeps the same page, so it keeps the scroll position too.
  const page = stripLocale(pathname);
  const prevPage = useRef(page);
  useEffect(() => {
    const lenis = window.lenis;
    if (!lenis) return;
    const sameLanguageSwap = prevPage.current === page;
    prevPage.current = page;
    if (sameLanguageSwap) return;
    const hash = window.location.hash;
    if (hash) {
      const t = setTimeout(() => lenis.scrollTo(hash, { offset: ANCHOR_OFFSET }), 120);
      return () => clearTimeout(t);
    }
    lenis.scrollTo(0, { immediate: true });
  }, [page]);

  return null;
}
