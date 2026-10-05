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
            CBD Rejuvenating Pedicure
          </p>
          <p className="eyebrow">
            Cooling Cosmetic Care · Extended Massage
          </p>
          <h1>
            CBD Rejuvenating Pedicure
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Slow the pace. Cool the day down.
          </p>
          <p className="service-hero-description">
            A 75-minute CBD Rejuvenating Pedicure in Phoenix with CBD-infused cosmetic products, jade stones and a 25-minute massage.
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
          <img src="/media/images/cbd-spa-pedicure-phoenix-optimized.webp" alt="CBD Rejuvenating Pedicure at Element Nail Bar Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
