import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            A practical upgrade from the essentials.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Deluxe gives you more skin care and massage than Classic without the time commitment of our longer spa rituals. It is built for regular maintenance when you want callus attention, a smoother finish and a calmer appointment, but do not need an extended mask or specialty product series.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Deluxe Pedicure with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
            </Link>
            <Link href="/services/spa-pedicures/">
              Pedicures
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
