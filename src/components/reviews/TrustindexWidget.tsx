"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Live Google reviews via the site's Trustindex widget. The loader is added only when the section
// is within 500px of the viewport (same behaviour as the original site), so it never blocks first paint.
const LOADER_SRC = "https://cdn.trustindex.io/loader.js?e98bc6f372331944e0162a3e272";

export default function TrustindexWidget() {
  const host = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = window.requestAnimationFrame(() => setNear(true));
      return () => window.cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!near || !el || el.querySelector("script")) return;
    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.defer = true;
    el.appendChild(script);
  }, [near]);

  return (
    <div className="trustindex-shell" aria-label="Verified Element Nail Bar guest reviews">
      {/* min-heights reserve the widget's footprint so the page doesn't jump when it loads */}
      <div className="trustindex-widget min-h-[313px] [.menu-reviews_&]:min-h-[328px] max-[680px]:[.menu-reviews_&]:min-h-[366px]">
        <div ref={host} className="trustindex-live-host" aria-hidden={!near} />
        <noscript>
          <Link href="/#reviews">Read Element Nail Bar reviews</Link>
        </noscript>
      </div>
    </div>
  );
}
