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
            Jelly Spa Pedicure
          </p>
          <p className="eyebrow">
            {"Immersive Hydration · Aloe & Mint"}
          </p>
          <h1>
            Jelly Spa Pedicure
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            A soak that feels completely different.
          </p>
          <p className="service-hero-description">
            A 70-minute Jelly Spa Pedicure in Phoenix with aloe-and-mint jelly soak, callus care, hydrating wrap and a 20-minute massage.
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
          <img src="/media/images/jelly-spa-pedicure-phoenix-optimized.webp" alt="Jelly Spa Pedicure at Element Nail Bar in Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
