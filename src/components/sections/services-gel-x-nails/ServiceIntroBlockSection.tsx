import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            A complete shape change without traditional acrylic.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              Gel-X uses pre-shaped, full-coverage soft-gel tips bonded to the natural nail. Because each tip already carries its architecture, Gel-X creates clean, consistent length with a lighter feel than many traditional extensions. Sets are soaked off and replaced rather than filled, making every appointment a fresh foundation.
            </p>
          </div>
          <nav className="service-path-links" aria-label="Compare Aprés Gel-X Nails with related services">
            <span>
              Compare with
            </span>
            <Link href="/services/builder-gel-nails/">
              Builder Gel Nails
            </Link>
            <Link href="/services/acrylic-nails/">
              Acrylic Nails
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
