import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            One clean standard. Seven ways to slow down.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Every pedicure includes thoughtful grooming, a fresh liner and a clear service plan. The difference between tiers is time, exfoliation, hydration, callus care and massage. Start with the Classic for polished essentials, choose Organic Spa for our best everyday balance, or select a longer ritual when massage and deeper skin care are the priority.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Spa Pedicures with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
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
