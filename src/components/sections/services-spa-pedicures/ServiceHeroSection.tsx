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
            Spa Pedicures
          </p>
          <p className="eyebrow">
            Seven Pedicure Levels · Phoenix
          </p>
          <h1>
            Spa Pedicures
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Choose the reset your feet need.
          </p>
          <p className="service-hero-description">
            Compare seven Phoenix pedicures at Element Nail Bar on 16th Street, with current prices, durations, massage details and online booking.
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
          <img src="/media/images/spa-pedicure-area-phoenix-optimized.webp" alt="Spa pedicure at Element Nail Bar on 16th Street in Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
