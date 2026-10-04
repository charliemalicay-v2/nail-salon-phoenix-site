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
            Dip Powder / SNS Nails
          </p>
          <p className="eyebrow">
            Dip Powder · Active Booking Options
          </p>
          <h1>
            Dip Powder / SNS Nails
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Two exact booking options One clear catalog.
          </p>
          <p className="service-hero-description">
            Dip powder and SNS nail services in Phoenix with exact online-booking names, starting prices and appointment times listed below.
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
          <img src="/media/images/dip-powder-editorial-phoenix.webp" alt="Editorial image of taupe and cocoa dip powder nails" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
