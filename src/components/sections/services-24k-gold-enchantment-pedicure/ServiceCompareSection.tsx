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
            <Link href="/services/organic-deluxe-pedicure/">
              <h3>
                Versus Organic Spa
              </h3>
              <p>
                Gold is the longest indulgence; Organic Spa is the better everyday balance of care, time and value.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/cbd-rejuvenating-pedicure/">
              <h3>
                Versus CBD
              </h3>
              <p>
                Gold adds ten minutes overall and five more massage minutes; CBD centers a cooling cosmetic feel.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <h3>
              Best choice when
            </h3>
            <p>
              You want the longest service and massage, not simply a routine pedicure.
            </p>
          </article>
        </div>
      </section>
  );
}
