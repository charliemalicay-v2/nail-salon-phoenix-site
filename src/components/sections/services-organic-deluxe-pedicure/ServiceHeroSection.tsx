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
            Organic Spa Pedicure
          </p>
          <p className="eyebrow">
            Guest Favorite · Organic Spa Pedicure
          </p>
          <h1>
            Organic Spa Pedicure
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Everyday luxury, naturally grounded.
          </p>
          <p className="service-hero-description">
            Book the $65 Organic Spa Pedicure in Phoenix: a 50-minute botanical spa service with callus care and a 12-minute Argan and Jojoba massage.
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
          <img src="/media/images/organic-deluxe-pedicure-phoenix-optimized.webp" alt="Organic Spa Pedicure at Element Nail Bar Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
