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
            <Link href="/services/deluxe-pedicure/">
              <h3>
                Versus Deluxe
              </h3>
              <p>
                Organic Spa adds more treatment time, a botanical moisture ritual and a longer massage.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/pearl-spa-pedicure/">
              <h3>
                Versus Pearl
              </h3>
              <p>
                Organic focuses on botanical softness; Pearl centers a luminous, cooling pearl-powder ritual.
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
                Organic is a balanced monthly service; Jelly is longer and designed around immersive hydration.
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
