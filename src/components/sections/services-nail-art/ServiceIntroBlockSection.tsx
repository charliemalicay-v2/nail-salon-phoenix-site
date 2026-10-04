import Link from "next/link";

export default function ServiceIntroBlockSection() {
  return (
      <section className="service-intro-block">
        <div>
          <p className="eyebrow">
            Know Before You Book
          </p>
          <h2>
            Bring the reference. We will translate it to your hands.
          </h2>
        </div>
        <div>
          <div className="service-rich-body">
            <p>
              The best nail art considers more than the image on your phone. Your artist adapts color, scale, placement and finish to your nail length and shape, then confirms the complexity and price before beginning. The result can be an exact statement or a restrained detail that still feels distinctly yours.
            </p>
          </div>
          <nav className="service-path-links" aria-label={"Compare Custom Nail Art & Designs with related services"}>
            <span>
              Compare with
            </span>
            <Link href="/services/gel-x-nails/">
              Aprés Gel-X Full Set
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
