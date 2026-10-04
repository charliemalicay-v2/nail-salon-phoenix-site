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
                Versus Organic
              </h3>
              <p>
                Pearl emphasizes a luminous, cooling finish; Organic emphasizes botanical hydration.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/jelly-spa-pedicure/">
              <h3>
                Versus Jelly
              </h3>
              <p>
                Pearl is 60 minutes and refined; Jelly is a longer, texture-led hydration ritual.
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
              You want visible polish, cooling care and a 15-minute massage.
            </p>
          </article>
        </div>
      </section>
  );
}
