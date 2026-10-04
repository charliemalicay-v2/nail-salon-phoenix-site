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
                Best everyday upgrade
              </h3>
              <p>
                Organic Spa balances treatment, massage and time without turning the visit into an all-day appointment.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/jelly-spa-pedicure/">
              <h3>
                Best for deep hydration
              </h3>
              <p>
                Jelly layers an unusual hydrating soak with mask and warm towel care.
              </p>
              <b>
                Compare this service →
              </b>
            </Link>
          </article>
          <article>
            <Link href="/services/24k-gold-enchantment-pedicure/">
              <h3>
                Longest massage
              </h3>
              <p>
                The 24K Gold ritual includes the longest massage on the menu.
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
