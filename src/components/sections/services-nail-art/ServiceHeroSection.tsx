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
            {"Custom Nail Art & Designs"}
          </p>
          <p className="eyebrow">
            Designed With Your Artist · Phoenix
          </p>
          <h1>
            {"Custom Nail Art & Designs"}
            <br />
            <em>
              in Phoenix.
            </em>
          </h1>
          <p className="service-hero-tagline">
            Your idea, made wearable.
          </p>
          <p className="service-hero-description">
            Custom nail art and nail designs in Phoenix, including French, chrome, ombré, minimalist and hand-painted sets.
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
          <img src="/media/images/custom-nail-art-editorial-phoenix.webp" alt="Editorial image of forest green and gold minimalist nail art" width="1000" height="1000" decoding="async" fetchPriority="high" />
          <figcaption>
            Element Nail Bar · 6022 N 16th St, Phoenix
          </figcaption>
        </figure>
      </section>
  );
}
