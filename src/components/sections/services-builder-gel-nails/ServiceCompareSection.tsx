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
              Builder Gel
            </h3>
            <p>
              Choose among the exact Builder Gel Full Set, Fill and Manicure entries.
            </p>
          </article>
          <article>
            <h3>
              Gel Manicure
            </h3>
            <p>
              Use the Gel Manicure entry when that is the service you want.
            </p>
          </article>
          <article>
            <Link href="/services/gel-x-nails/">
              <h3>
                Gel-X
              </h3>
              <p>
                Review Gel-X options when you want that separate full-cover service category.
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
