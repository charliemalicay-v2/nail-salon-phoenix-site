import Link from "next/link";

export default function ServiceIntroBlockSection2() {
  return (
      <section className="service-intro-block" aria-labelledby="spa-pedicures-north-phoenix">
        <div>
          <p className="eyebrow">
            North Phoenix Appointment Planning
          </p>
          <h2 id="spa-pedicures-north-phoenix">
            Planning a spa pedicure from North Phoenix?
          </h2>
        </div>
        <div>
          <p>
            Use the North Phoenix guide hub to choose the page matching your real starting area, then compare the treatment sequence and finish before reserving. Moon Valley guests may have a close-in surface-street choice, while Desert Ridge visitors are planning a deliberate destination trip. Include gel removal, French, repairs, or supported add-ons when they affect appointment time.
          </p>
          <nav className="service-path-links" aria-label="North Phoenix guides for Spa Pedicures">
            <Link href="/north-phoenix/">
              North Phoenix guide hub
            </Link>
            <Link href="/moon-valley/">
              Moon Valley appointment guide
            </Link>
          </nav>
        </div>
      </section>
  );
}
