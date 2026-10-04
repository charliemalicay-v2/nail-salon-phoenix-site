import Link from "next/link";
import TrustindexWidget from "@/components/reviews/TrustindexWidget";

export default function ReviewsSection() {
  return (
      <section className="reviews-section" id="reviews">
        <div>
          <p className="eyebrow">
            Verified Phoenix Guest Reviews
          </p>
          <h2>
            Thoughtful work. Guests who return.
          </h2>
          <div className="stars">
            ★★★★★
          </div>
          <p className="review-intro">
            Read what guests say about their appointments at Element on 16th Street—from the artists and finished work to the pacing and care.
          </p>
          <Link className="line-link" href="/#reviews">
            {"Read verified guest reviews "}
            <span>
              ↓
            </span>
          </Link>
        </div>
        <TrustindexWidget />
      </section>
  );
}
