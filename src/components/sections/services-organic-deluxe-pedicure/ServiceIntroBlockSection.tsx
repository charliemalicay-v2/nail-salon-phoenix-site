import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            The pedicure we recommend most often.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Organic Spa is designed for guests who want noticeably softer feet and meaningful relaxation without moving into our longest ritual tier. The service pairs mineral soaking, multi-stage exfoliation, targeted callus care and a clay-based moisture mask with a focused 12-minute massage using Argan and Jojoba cream.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Organic Spa Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/spa-pedicures/">
              Pedicures
            </Link>
            <Link href="/services/deluxe-pedicure/">
              Deluxe Pedicure
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
