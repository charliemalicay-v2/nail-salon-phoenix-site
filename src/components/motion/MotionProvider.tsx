"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Site-wide motion, in the spirit of tengilemalamala.com: smooth scrolling (Lenis), staggered scroll reveals,
// a word-by-word hero headline entrance and gentle image parallax.
//
// Everything is progressive enhancement and off for visitors who ask for reduced motion:
//  - an inline script in the root layout adds `html.motion` only when prefers-reduced-motion is not "reduce",
//    and every hidden "before" state in editorial.css is scoped to that class, so without it nothing is hidden;
//  - elements only start hidden once this code has found them below the fold, so first paint never flashes;
//  - hero text that starts hidden has a CSS fail-safe that reveals it after 3s if this code never runs.

const HERO = ".hero, .menu-page-hero, .services-page-hero, .service-hero, .cms-public-hero, .blog-hero, .policy-hero, .authority-hero, .article-header";

// Things that fade/slide in as they enter the viewport (never inside the hero, header, footer or menus).
const REVEAL_TEXT = ["#top section h2", "#top section h3", "#top article h2", "#top .eyebrow", "#top h2 + p", "#top .stars"].join(",");
const REVEAL_BLOCKS = [".service-grid > *", ".blog-card-grid > *", ".facts > *", ".art-grid > *", ".footer-columns > *", ".cms-public-block", ".cms-public-faq details", ".faq-section details"].join(",");
const REVEAL_MEDIA = "#top section figure, #top article figure, #top section picture";
const REVEAL_IMAGES = "#top section img, #top article img";
const REVEAL_ACTIONS = "#top .button, #top .line-link";
const EXCLUDE = `${HERO}, header, .announcement, .mobile-actions, .mobile-menu, .ed-menu, .ed-marquee, .trustindex-shell`;

const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function inFirstScreen(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.92 && r.bottom > 0;
}

/** Sideways carousels and strips: elements out of view horizontally never intersect on scroll, so never hide them. */
function offscreenSideways(el: Element) {
  const r = el.getBoundingClientRect();
  return r.left >= window.innerWidth || r.right <= 0;
}

/** Wrap each word of an element's text in masked spans, keeping markup (<em>, <br>) and spacing. */
function splitWords(root: HTMLElement) {
  if (root.dataset.split) return;
  root.dataset.split = "1";
  root.setAttribute("aria-label", (root.textContent || "").replace(/\s+/g, " ").trim());
  let index = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const mask = document.createElement("span");
          mask.className = "ed-w";
          mask.setAttribute("aria-hidden", "true");
          const inner = document.createElement("span");
          inner.className = "ed-wi";
          inner.style.setProperty("--i", String(index++));
          inner.textContent = part;
          mask.appendChild(inner);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && (child as Element).tagName !== "BR") {
        walk(child);
      }
    });
  };
  walk(root);
  root.classList.add("is-split");
}

function setupHero(): () => void {
  const hero = document.querySelector<HTMLElement>(`#top ${HERO.split(",").join(", #top ")}`);
  if (!hero) return () => {};
  const h1 = hero.querySelector<HTMLElement>("h1");
  if (h1) splitWords(h1);
  // Let the browser paint the hidden state first, then play the entrance.
  const raf = requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-ready")));
  return () => cancelAnimationFrame(raf);
}

function setupReveals(): () => void {
  if (typeof IntersectionObserver === "undefined") return () => {};
  const found = new Set<HTMLElement>();
  const add = (selector: string, kind: "text" | "block" | "media" | "image") => {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      if (el.closest(EXCLUDE) || el.dataset.reveal) return;
      if (kind === "image") {
        const r = el.getBoundingClientRect();
        if (r.width < 160 || r.height < 120) return; // icons, avatars, logos
        if (el.closest(".reveal, figure, picture")) return; // its wrapper already reveals
      }
      if (inFirstScreen(el) || offscreenSideways(el)) return;
      el.dataset.reveal = kind;
      found.add(el);
    });
  };
  add(REVEAL_TEXT, "text");
  add(REVEAL_ACTIONS, "text");
  add(REVEAL_BLOCKS, "block");
  add(REVEAL_MEDIA, "media");
  add(REVEAL_IMAGES, "image");

  // Stagger siblings that arrive together (cards in a row, a heading then its lead paragraph).
  const perParent = new Map<Element, number>();
  found.forEach((el) => {
    const parent = el.parentElement!;
    const n = perParent.get(parent) ?? 0;
    perParent.set(parent, n + 1);
    el.style.setProperty("--reveal-delay", `${Math.min(n, 4) * 90}ms`);
    el.classList.add("reveal");
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add("is-in");
        io.unobserve(el);
        // Once settled, drop the reveal classes so the element's own hover/transition styles apply again.
        window.setTimeout(() => {
          el.classList.remove("reveal", "is-in");
          el.style.removeProperty("--reveal-delay");
        }, 1800);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  found.forEach((el) => io.observe(el));

  // Safety net: never leave content hidden (fast jumps, print, observers that never fire).
  const sweep = () => found.forEach((el) => !el.classList.contains("is-in") && el.getBoundingClientRect().top < window.innerHeight && el.classList.add("is-in"));
  const safety = window.setTimeout(sweep, 2500);
  // Fast scrolls (jumping to the footer, anchors) can skip observer callbacks: once scrolling settles, reveal what is on or above the screen.
  let settle = 0;
  const onScrollSettle = () => {
    window.clearTimeout(settle);
    settle = window.setTimeout(sweep, 400);
  };
  window.addEventListener("scroll", onScrollSettle, { passive: true });
  return () => {
    io.disconnect();
    window.clearTimeout(safety);
    window.clearTimeout(settle);
    window.removeEventListener("scroll", onScrollSettle);
    found.forEach((el) => {
      el.classList.remove("reveal", "is-in", "is-done");
      delete el.dataset.reveal;
      el.style.removeProperty("--reveal-delay");
    });
  };
}

function setupParallax(): () => void {
  if (!window.matchMedia("(min-width: 900px) and (pointer: fine)").matches) return () => {};
  type Item = { img: HTMLImageElement; box: HTMLElement; visible: boolean };
  const items: Item[] = [];
  document.querySelectorAll<HTMLImageElement>("#top section img, #top article img").forEach((img) => {
    if (items.length >= 14 || img.closest(`${HERO}, header, footer, .announcement, .mobile-actions, .trustindex-shell, a`)) return;
    const box = img.parentElement;
    if (!box) return;
    const r = img.getBoundingClientRect();
    if (r.width < 360 || r.height < 260) return;
    const overflow = getComputedStyle(box).overflow;
    if (overflow !== "hidden" && overflow !== "clip") return; // only images that already sit in a crop frame
    items.push({ img, box, visible: false });
  });
  if (!items.length) return () => {};

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const item = items.find((i) => i.box === e.target);
      if (item) item.visible = e.isIntersecting;
    });
  });
  items.forEach((i) => {
    i.img.style.scale = "1.12"; // individual transform properties compose with the site's own hover transforms
    i.img.style.willChange = "translate";
    io.observe(i.box);
  });

  let frame = 0;
  const update = () => {
    frame = 0;
    const vh = window.innerHeight;
    items.forEach((i) => {
      if (!i.visible) return;
      const r = i.box.getBoundingClientRect();
      const progress = (r.top + r.height / 2 - vh / 2) / vh; // about -1 .. 1
      const amp = r.height * 0.05;
      i.img.style.translate = `0 ${(-progress * amp).toFixed(1)}px`;
    });
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(frame);
    io.disconnect();
    items.forEach((i) => {
      i.img.style.removeProperty("scale");
      i.img.style.removeProperty("translate");
      i.img.style.removeProperty("will-change");
    });
  };
}

export default function MotionProvider() {
  const pathname = usePathname();

  // One smooth-scroll instance for the whole session (this component lives in the root layout).
  useEffect(() => {
    if (prefersReduced()) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 0.95, anchors: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Per-page effects; re-run on every client-side navigation.
  useEffect(() => {
    if (prefersReduced()) return;
    document.documentElement.classList.add("motion");
    const cleanups = [setupHero(), setupReveals(), setupParallax()];
    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
