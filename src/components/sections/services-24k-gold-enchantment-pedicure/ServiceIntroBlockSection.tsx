import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            The longest, most ceremonial pedicure on the menu.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Gold Enchantment is reserved for the days when time itself is the luxury. An 85-minute appointment moves through gold-inspired soaking, exfoliation and mask care before natural jade stone therapy and a 30-minute signature massage. It is a cosmetic spa ritual designed for indulgence—not a medical or anti-aging treatment.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare 24K Gold Enchantment Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
            </Link>
            <Link href="/services/cbd-rejuvenating-pedicure/">
              CBD Experience Pedicure
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
