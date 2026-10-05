import Link from "next/link";

export default function AuthorityHeroSection() {
  return (
      <section className="authority-hero">
        <nav className="location-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">
            Home
          </Link>
          <span>
            /
          </span>
          <b>
            Phoenix Area Guides
          </b>
        </nav>
        <picture className="responsive-local-picture">
          <img className="responsive-local-image" src="/assets/wikimedia/eff71c13-1280px-Camelback_East_Village-_Phoenix-_AZ-_USA_-_panoramio_-1-.jpg" srcSet="/assets/wikimedia/eff71c13-1280px-Camelback_East_Village-_Phoenix-_AZ-_USA_-_panoramio_-1-.jpg 1200w" sizes="100vw" alt="Camelback East Village, representing the 16th Street Corridor visit guide" width="1200" height="900" loading="eager" fetchPriority="high" decoding="async" />
        </picture>
        <div className="authority-hero-shade" aria-hidden="true" />
        <div className="authority-hero-copy">
          <p className="eyebrow">
            Element Nail Bar · 16th Street
          </p>
          <h1>
            One verified 16th Street salon.
            <br />
            <em>
              Practical Phoenix area guides.
            </em>
          </h1>
          <p>
            Every guide leads to the same salon at 6022 N 16th St. Choose where your trip begins, review the service details that matter, and use live navigation to the 16th Street address.
          </p>
          <div className="authority-hero-meta">
            <address>
              6022 N 16th St
              <br />
              Phoenix, AZ 85016
              <br />
              <a href="tel:+16026075686">
                602-607-5686
              </a>
            </address>
            <p className="authority-hours">
              Monday–Saturday 9:30 AM–7 PM
              <br />
              Sunday 10 AM–5 PM
            </p>
          </div>
          <div className="location-hero-actions">
            <a className="button brass" href="/booking/">
              Reserve now
            </a>
            <a className="button pale" href={"https://www.google.com/maps/dir/?api=1&destination=Element+Nail+Bar%2C+6022+N+16th+St%2C+Phoenix%2C+AZ+85016"}>
              Directions
            </a>
            <a className="button pale" href="tel:+16026075686">
              Call
            </a>
            <Link className="button pale" href="/menu/">
              Menu
            </Link>
          </div>
        </div>
      </section>
  );
}
