import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            A polished ritual built around pearl powder.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Element 16 lists eight base pedicures by exact name, price, total duration and included massage length; regular polish is included and optional add-ons are booked separately.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Pearl Spa Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
            </Link>
            <Link href="/services/jelly-spa-pedicure/">
              Jelly Spa Pedicure
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
