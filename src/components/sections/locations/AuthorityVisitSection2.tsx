import Link from "next/link";

export default function AuthorityVisitSection2() {
  return (
      <section className="authority-visit">
        <div>
          <p className="eyebrow">
            Visit Location 16
          </p>
          <h2>
            Confirm the address, then navigate live.
          </h2>
          <p>
            Element Nail Bar — 16th Street is in Central Phoenix near the 16th Street and Bethany Home Road corridors. Free on-site parking is available. Route conditions can change, so use the exact starting point and check navigation shortly before leaving.
          </p>
          <address>
            Element Nail Bar — 16th Street
            <br />
            6022 N 16th St
            <br />
            Phoenix, AZ 85016
            <br />
            <a href="tel:+16026075686">
              602-607-5686
            </a>
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
          <p className="map-platform-choice">
            <a href={"https://www.google.com/maps/dir/?api=1&destination=Element+Nail+Bar%2C+6022+N+16th+St%2C+Phoenix%2C+AZ+85016"}>
              Open Google Maps
            </a>
            <a href={"https://maps.apple.com/?daddr=6022%20N%2016th%20St%2C%20Phoenix%2C%20AZ%2085016&q=Element%20Nail%20Bar&dirflg=d"}>
              Open Apple Maps
            </a>
          </p>
        </div>
        <picture className="responsive-local-picture">
          <img className="responsive-local-image" src="/assets/wikimedia/00e8e865-1280px-METRO_Light_Rail_Uptown_Phoenix_Station.jpg" srcSet="/assets/wikimedia/00e8e865-1280px-METRO_Light_Rail_Uptown_Phoenix_Station.jpg 1200w" sizes="(max-width: 1000px) calc(100vw - 36px), 660px" alt="Uptown Phoenix light rail station at Camelback Road and Central Avenue, representing the Bethany Home Road and Uptown Phoenix visit guide" width="1200" height="840" loading="lazy" fetchPriority="auto" decoding="async" />
        </picture>
      </section>
  );
}
