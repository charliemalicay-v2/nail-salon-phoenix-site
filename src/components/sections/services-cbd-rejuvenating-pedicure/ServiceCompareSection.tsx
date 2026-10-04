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
            <Link href="/services/jelly-spa-pedicure/">
              <h3>
                Versus Jelly
              </h3>
              <p>
                CBD leans cooling and calming; Jelly leans immersive and hydrating.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/24k-gold-enchantment-pedicure/">
              <h3>
                Versus Gold
              </h3>
              <p>
                CBD is 75 minutes with a 25-minute massage; Gold is 85 minutes with the longest massage.
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
              You want extended relaxation and enjoy CBD-infused cosmetic products.
            </p>
          </article>
        </div>
      </section>
  );
}
