import Link from "next/link";

export default function ServiceCompareSection() {
  return (
      <section className="service-compare">
        <div className="service-compare-copy">
          <p className="eyebrow">
            Make the Right Choice
          </p>
          <h2>
            How it compares.
          </h2>
          <p>
            Choose the service that matches your requested result and reserve the complete appointment scope.
          </p>
        </div>
        <div className="service-compare-grid">
          <article>
            <h3>
              Choose Gel-X
            </h3>
            <p>
              For immediate lightweight length and a fresh set each visit.
            </p>
          </article>
          <article>
            <Link href="/services/builder-gel-nails/">
              <h3>
                Choose Builder Gel
              </h3>
              <p>
                To reinforce and grow your own natural nails.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/acrylic-nails/">
              <h3>
                Choose Acrylic
              </h3>
              <p>
                For maximum sculpted strength and ongoing fills.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
        </div>
      </section>
  );
}
