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
            Deluxe Pedicure
          </p>
          <p className="eyebrow">
            The Comfortable Step-Up
          </p>
          <h1>
            Deluxe Pedicure
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            More care, still easy to fit in.
          </p>
          <p className="service-hero-description">
            The Deluxe Pedicure in Phoenix costs $49 and includes herbal soaking, sugar exfoliation, callus care, jade stones and an eight-minute massage.
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
          <img src="/media/images/spa-pedicure-area-phoenix-optimized.webp" alt="Deluxe Pedicure service at Element Nail Bar Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
