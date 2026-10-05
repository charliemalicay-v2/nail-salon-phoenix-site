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
            Builder Gel Nails
          </p>
          <p className="eyebrow">
            Builder Gel · BIAB · Structured Manicure
          </p>
          <h1>
            Builder Gel Nails
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Three exact booking options One clear catalog.
          </p>
          <p className="service-hero-description">
            Builder Gel services in Phoenix with exact online-booking names, starting prices and appointment options at Element Nail Bar on 16th Street.
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
          <img src="/media/images/builder-gel-editorial-phoenix.webp" alt="Editorial image of a natural milky nude Builder Gel manicure" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
