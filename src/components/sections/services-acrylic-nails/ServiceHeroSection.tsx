import Link from "next/link";

export default function ServiceHeroSection() {
  return (
      <section className="service-hero">
        <div className="service-hero-copy">
          <p className="service-breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span>
              /
            </span>
            <Link href="/services/">
              Services
            </Link>
            <span>
              /
            </span>
            Acrylic Nails
          </p>
          <p className="eyebrow">
            Sculpted Nail Enhancements · Phoenix
          </p>
          <h1>
            Acrylic Nails
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Strength, shaped around you.
          </p>
          <p className="service-hero-description">
            Custom acrylic nails at our 16th Street Phoenix salon, built for precise length, confident shape and dependable wear.
          </p>
          <div className="service-hero-actions">
            <Link className="button brass" href="/booking/">
              Book this service
            </Link>
            <Link className="line-link" href="/services/">
              {"Compare all services "}
              <span>
                →
              </span>
            </Link>
          </div>
        </div>
        <figure className="service-hero-image">
          <img src="/media/images/acrylic-nails-phoenix-optimized.webp" alt="Custom acrylic nails at Element Nail Bar in Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
