import Link from "next/link";

export default function AuthorityFinalSection() {
  return (
      <section className="authority-final">
        <picture className="responsive-local-picture">
          <img className="responsive-local-image" src="/assets/wikimedia/d509b55a-Piestewa_Peak.jpg" srcSet="/assets/wikimedia/d509b55a-Piestewa_Peak.jpg 1200w" sizes="(max-width: 1000px) calc(100vw - 36px), 660px" alt="Piestewa Peak, representing the Piestewa Peak visit guide" width="1200" height="301" loading="lazy" fetchPriority="auto" decoding="async" />
        </picture>
        <div>
          <p className="eyebrow">
            Element Nail Bar — 16th Street
          </p>
          <h2>
            Complete the appointment before opening directions.
          </h2>
          <p>
            Select the service, include removal, repairs, length, finish, and nail-art details when they apply, then travel to the 16th Street salon.
          </p>
          <address>
            6022 N 16th St
            <br />
            Phoenix, AZ 85016
          </address>
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
