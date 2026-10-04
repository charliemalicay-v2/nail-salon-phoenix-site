import Link from "next/link";

export default function PolicyHeroSection() {
  return (
      <section className="policy-hero">
        <div className="policy-hero-copy">
          <p className="eyebrow">
            Element Nail Bar · 16th Street
          </p>
          <h1>
            Clear policies.
            <br />
            <em>
              Better visits.
            </em>
          </h1>
          <p>
            These policies protect appointment time, support our artists and create a calm, fair experience for every guest.
          </p>
          <div className="policy-hero-actions">
            <Link className="button brass" href="/booking/">
              Book an appointment
            </Link>
            <a className="line-link" href="tel:+16026075686">
              {"Questions? Call us "}
              <span>
                →
              </span>
            </a>
          </div>
        </div>
        <div className="policy-hero-mark" aria-hidden="true">
          <span>
            16
          </span>
          <small>
            SALON POLICY
          </small>
        </div>
        <p className="policy-updated">
          Last updated August 13, 2026
        </p>
      </section>
  );
}
