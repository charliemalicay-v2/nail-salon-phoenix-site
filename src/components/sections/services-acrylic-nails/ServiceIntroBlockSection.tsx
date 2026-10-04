import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            Maximum structure. Complete creative control.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Acrylic combines liquid monomer and polymer powder into a durable enhancement that can be sculpted over the natural nail or used to add length. It is the strongest, most shapeable option on our menu—ideal when you want a crisp coffin, almond, square or stiletto silhouette that holds its architecture between fills.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Acrylic Nails with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/gel-x-nails/">
              Aprés Gel-X Full Set
            </Link>
            <Link href="/services/builder-gel-nails/">
              Builder Gel Nails
            </Link>
          </nav>
          <a className="line-link dark" href="tel:+16026075686">
            {"Not sure? Call the front desk "}
            <span>
              →
            </span>
          </a>
        </div>
      </section>
  );
}
