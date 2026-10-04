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
          <nav className="service-path-links" aria-label="Compare Dip Powder / SNS Nails with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/builder-gel-nails/">
              Builder Gel Nails
            </Link>
            <Link href="/services/acrylic-nails/">
              Acrylic Nails
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
