import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            A long, calming pedicure—without medical claims.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              CBD Experience is a cosmetic spa ritual designed for a cooling, calming feel. It pairs CBD-infused soak, scrub and mask products with jade stone technique and a 25-minute massage. The service is for relaxation and skin conditioning; it is not intended to diagnose, treat or cure pain, inflammation or another medical condition.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare CBD Rejuvenating Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/jelly-spa-pedicure/">
              Jelly Spa Pedicure
            </Link>
            <Link href="/services/24k-gold-enchantment-pedicure/">
              Gold Enchantment Pedicure
            </Link>
          </nav>
          <a className="line-link dark" href="tel:+16026075686">
            {"Not sure? Call the front desk "}
            <span>
              →
            </span>
          </a>
        </div>
      </section>
  );
}
