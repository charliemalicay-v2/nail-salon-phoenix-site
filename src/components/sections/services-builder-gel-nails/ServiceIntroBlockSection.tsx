import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            Choose the exact booking entry.
          </h2>
        </div>
        <div>
          <div className="service-rich-body" />
          <nav className="service-path-links" aria-label="Compare Builder Gel Nails with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/gel-x-nails/">
              Aprés Gel-X Full Set
            </Link>
            <Link href="/services/dip-powder-nails/">
              Dip Powder / SNS Nails
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
