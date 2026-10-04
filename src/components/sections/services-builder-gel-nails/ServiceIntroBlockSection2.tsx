import Link from "next/link";

export default function ServiceIntroBlockSection2() {
  return (
      <section className="service-intro-block" aria-labelledby="builder-gel-nails-north-phoenix">
        <div>
          <p className="eyebrow">
            North Phoenix Appointment Planning
          </p>
          <h2 id="builder-gel-nails-north-phoenix">
            Planning Builder Gel maintenance from North Phoenix?
          </h2>
        </div>
        <div>
          <p>
            A structured-gel visit is a repeat-route decision as well as a first appointment. The North Phoenix hub separates close-in origins from farther destinations, and the Deer Valley Village guide explains why one route cannot describe the entire village. Identify the product already on the nail and add removal or repairs so the reserved time reflects the complete Builder Gel or BIAB service.
          </p>
          <nav className="service-path-links" aria-label="North Phoenix guides for Builder Gel Nails">
            <Link href="/north-phoenix/">
              North Phoenix guide hub
            </Link>
            <Link href="/deer-valley-village/">
              Deer Valley Village guide
            </Link>
          </nav>
        </div>
      </section>
  );
}
