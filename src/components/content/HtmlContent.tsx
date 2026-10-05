import type { ComponentProps } from "react";
import Link from "next/link";
import parse, { attributesToProps, domToReact, Element, type DOMNode, type HTMLReactParserOptions } from "html-react-parser";
import TrustindexWidget from "@/components/reviews/TrustindexWidget";
import { knownRoutes } from "@/content/load";

const ORIGIN = "https://nailsalonphoenix.com";

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");
const isBookingRoute = (href: string) => /^\/booking(\/|$|\?|#)/.test(href);
const isKnownRoute = (href: string) => {
  const p = href.split(/[?#]/)[0];
  return knownRoutes.has(p.endsWith("/") ? p : p + "/");
};

const options: HTMLReactParserOptions = {
  replace(node) {
    if (!(node instanceof Element)) return;

    if (node.attribs["data-component"] === "trustindex-widget") return <TrustindexWidget />;

    if (node.name === "a" && node.attribs.href && isInternal(node.attribs.href)) {
      const props = attributesToProps(node.attribs);
      const children = domToReact(node.children as DOMNode[], options);
      // The booking app is a different application (proxied, see next.config.ts), so it needs a full page load.
      if (isBookingRoute(node.attribs.href)) return <a {...props}>{children}</a>;
      // Pages that are cloned use client-side navigation; anything else keeps pointing at the live site.
      if (isKnownRoute(node.attribs.href)) {
        return <Link {...(props as Omit<ComponentProps<typeof Link>, "href">)} href={node.attribs.href}>{children}</Link>;
      }
      return <a {...props} href={ORIGIN + node.attribs.href}>{children}</a>;
    }
  },
};

/** Renders cleaned page markup (see .duplicator/tools/build-content.mjs) as React elements. */
export default function HtmlContent({ html }: { html: string }) {
  return <>{parse(html, options)}</>;
}
