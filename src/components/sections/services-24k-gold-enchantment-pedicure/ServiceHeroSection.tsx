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
            24K Gold Enchantment Pedicure
          </p>
          <p className="eyebrow">
            Our Longest Pedicure Ritual
          </p>
          <h1>
            24K Gold Enchantment Pedicure
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Eighty-five minutes. Nothing rushed.
          </p>
          <p className="service-hero-description">
            The 85-minute 24K Gold Enchantment Pedicure in Phoenix includes gold-inspired skin care, jade therapy and a 30-minute massage.
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
          <img src="/media/images/gold-enchantment-pedicure-phoenix-optimized.webp" alt="24K Gold Enchantment Pedicure at Element Nail Bar Phoenix" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
