import Link from "next/link";

export default function ServiceIntroBlockSection2() {
  return (
      <section className="service-intro-block" aria-labelledby="nail-art-north-phoenix">
        <div>
          <p className="eyebrow">
            North Phoenix Appointment Planning
          </p>
          <h2 id="nail-art-north-phoenix">
            Planning custom nail art from North Phoenix?
          </h2>
        </div>
        <div>
          <p>
            Choose the must-have motif, finish, or palette and reserve enough design time before traveling. The North Phoenix hub helps select the truthful starting-area guide; the Shadow Mountain page is useful when that close-in mountain neighborhood controls the route. Include existing-product removal and repairs, and bring references that communicate priorities rather than requiring an exact copy.
          </p>
          <nav className="service-path-links" aria-label={"North Phoenix guides for Custom Nail Art & Designs"}>
            <Link href="/north-phoenix/">
              North Phoenix guide hub
            </Link>
            <Link href="/shadow-mountain/">
              Shadow Mountain appointment guide
            </Link>
          </nav>
        </div>
      </section>
  );
}
