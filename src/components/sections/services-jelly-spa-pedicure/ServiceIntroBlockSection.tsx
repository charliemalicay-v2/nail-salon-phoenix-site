import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            Deep hydration starts with the soak.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Jelly Spa transforms warm water into a soft, cushioning texture that surrounds the feet. Aloe and mint create a cooling, hydrating feel while the extended service moves through exfoliation, callus work, a hot-towel moisture wrap and a 20-minute jade stone massage.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Jelly Spa Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
            </Link>
            <Link href="/services/pearl-spa-pedicure/">
              Pearl Spa Pedicure
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
