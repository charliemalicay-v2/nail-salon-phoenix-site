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
                Jelly is longer and more immersive; Organic is the balanced monthly favorite.
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
                Jelly centers hydration and texture; Pearl centers cooling care and a luminous finish.
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
              Your priority is deep-feeling hydration and a longer massage.
            </p>
          </article>
        </div>
      </section>
  );
}
