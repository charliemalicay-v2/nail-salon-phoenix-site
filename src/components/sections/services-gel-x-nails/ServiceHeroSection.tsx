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
            Aprés Gel-X Nails
          </p>
          <p className="eyebrow">
            Aprés Certified · Soft-Gel Extensions
          </p>
          <h1>
            Aprés Gel-X Nails
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Instant length. Lightweight feel.
          </p>
          <p className="service-hero-description">
            Certified Aprés Gel-X extensions in Phoenix with full-coverage soft-gel tips, precise shaping and professional soak-off.
          </p>
          <div className="service-hero-actions">
            <a className="button brass" href="/booking/">
              Book this service
            </a>
            <Link className="line-link" href="/services/">
              {"Compare all services "}
              <span>
                →
              </span>
            </Link>
          </div>
        </div>
        <figure className="service-hero-image">
          <img src="/media/images/gel-x-nails-phoenix-optimized.webp" alt="Floral Aprés Gel-X nails at Element Nail Bar Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
