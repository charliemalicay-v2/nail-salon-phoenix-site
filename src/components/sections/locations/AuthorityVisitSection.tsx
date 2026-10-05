import Link from "next/link";

export default function AuthorityVisitSection() {
  return (
      <section className="authority-visit" data-area-service-primary="Phoenix nail service area guides to Element 16">
        <div>
          <p className="eyebrow">
            Plan a pedicure visit
          </p>
          <h2>
            Choose the pedicure experience before you travel.
          </h2>
          <p>
            Compare the current pedicure choices, then include the finish, existing gel removal, French, repairs, or available add-ons that apply. Reserving those details before leaving helps the appointment match the work requested.
          </p>
          <div className="location-hero-actions">
            <Link className="button pale" href="/services/spa-pedicures/">
              Compare spa pedicures
            </Link>
            <a className="button brass" href="/booking/">
              Reserve an appointment
            </a>
          </div>
        </div>
        <picture className="responsive-local-picture">
          <img className="responsive-local-image" src="/media/images/organic-deluxe-pedicure-phoenix-optimized.webp" srcSet="/media/images/organic-deluxe-pedicure-phoenix-optimized.webp 1200w" sizes="(max-width: 1000px) calc(100vw - 36px), 660px" alt="Organic Spa Pedicure performed at Element Nail Bar — 16th Street in Phoenix" width="1200" height="900" loading="lazy" fetchPriority="auto" decoding="async" />
        </picture>
      </section>
  );
}
