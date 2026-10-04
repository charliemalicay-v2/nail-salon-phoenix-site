import TrustindexWidget from "@/components/reviews/TrustindexWidget";

export default function MenuReviewsSection() {
  return (
      <section className="menu-reviews">
        <div>
          <p className="eyebrow">
            Reviews
          </p>
          <h2>
            Loved by Phoenix.
          </h2>
          <p>
            Verified guest feedback from Element Nail Bar on 16th Street.
          </p>
        </div>
        <TrustindexWidget />
      </section>
  );
}
