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
            <Link href="/services/spa-pedicures/">
              <h3>
                Versus Classic
              </h3>
              <p>
                Deluxe includes sugar exfoliation, callus care, jade stones and an eight-minute massage.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/organic-deluxe-pedicure/">
              <h3>
                Versus Organic Spa
              </h3>
              <p>
                Organic Spa extends the service with botanical treatments, a moisture mask and a 12-minute massage.
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
              You want more than the basics but need to keep the appointment near 40 minutes.
            </p>
          </article>
        </div>
      </section>
  );
}
