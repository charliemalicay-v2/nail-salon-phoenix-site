import Link from "next/link";

// A slow, looping strip of the salon's work (the reference site has one between its sections).
// Pure CSS animation: the list is rendered twice and the track slides by exactly one copy. Pauses on hover,
// and becomes a normal horizontally scrollable strip for visitors who prefer reduced motion.
type Item = { src: string; alt: string; label: string; href: string; shape: "tall" | "wide" | "square" };

const items: Item[] = [
  { src: "/media/images/acrylic-nails-phoenix-optimized.webp", alt: "Sculpted acrylic nails", label: "Acrylic Nails", href: "/services/acrylic-nails/", shape: "tall" },
  { src: "/media/images/organic-deluxe-pedicure-phoenix-optimized.webp", alt: "Organic spa pedicure", label: "Organic Spa Pedicure", href: "/services/organic-deluxe-pedicure/", shape: "wide" },
  { src: "/media/images/gel-x-nails-phoenix-optimized.webp", alt: "Aprés Gel-X nails", label: "Aprés Gel-X", href: "/services/gel-x-nails/", shape: "square" },
  { src: "/media/images/tortoiseshell-nail-art-phoenix.webp", alt: "Tortoiseshell nail art", label: "Nail Art", href: "/services/nail-art/", shape: "tall" },
  { src: "/media/images/builder-gel-editorial-phoenix.webp", alt: "Builder Gel manicure", label: "Builder Gel", href: "/services/builder-gel-nails/", shape: "wide" },
  { src: "/media/images/pearl-spa-pedicure-phoenix-optimized.webp", alt: "Pearl spa pedicure", label: "Pearl Spa Pedicure", href: "/services/pearl-spa-pedicure/", shape: "square" },
  { src: "/media/images/dip-powder-editorial-phoenix.webp", alt: "Dip powder nails", label: "Dip Powder / SNS", href: "/services/dip-powder-nails/", shape: "tall" },
  { src: "/media/images/blue-floral-nail-art-phoenix.webp", alt: "Blue floral nail art", label: "Custom Nail Art", href: "/services/nail-art/", shape: "wide" },
  { src: "/media/images/jelly-spa-pedicure-phoenix-optimized.webp", alt: "Jelly spa pedicure", label: "Jelly Spa Pedicure", href: "/services/jelly-spa-pedicure/", shape: "square" },
  { src: "/media/images/neutral-builder-gel-nails-phoenix.webp", alt: "Neutral Builder Gel nails", label: "Builder Gel", href: "/services/builder-gel-nails/", shape: "tall" },
  { src: "/media/images/floral-gel-x-nails-phoenix.webp", alt: "Floral Gel-X nails", label: "Aprés Gel-X", href: "/services/gel-x-nails/", shape: "wide" },
  { src: "/media/images/element-nail-bar-phoenix-interior.webp", alt: "Inside Element Nail Bar on 16th Street", label: "The Salon", href: "/about-us/", shape: "square" },
];

function Strip({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="ed-marquee-list" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.src} className={`ed-marquee-item is-${item.shape}`}>
          <Link href={item.href} tabIndex={hidden ? -1 : undefined}>
            <img src={item.src} alt={hidden ? "" : item.alt} width={1000} height={1000} loading="lazy" draggable={false} />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ImageMarquee() {
  return (
    <section className="ed-marquee" aria-label="A look at our work">
      <div className="ed-marquee-track">
        <Strip />
        <Strip hidden />
      </div>
    </section>
  );
}
