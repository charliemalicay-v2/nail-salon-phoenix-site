import Link from "next/link";

export default function ServiceIntroBlockSection2() {
  return (
      <section className="service-intro-block" aria-labelledby="gel-x-nails-north-phoenix">
        <div>
          <p className="eyebrow">
            North Phoenix Appointment Planning
          </p>
          <h2 id="gel-x-nails-north-phoenix">
            Planning a Gel-X appointment from North Phoenix?
          </h2>
        </div>
        <div>
          <p>
            Reserve the complete soft-gel extension scope before making the trip: old-product removal, length, shape, repairs, finish, and design time. Start with the North Phoenix hub, or use the Desert Ridge guide when that community is the actual origin. Both pages lead to the one verified salon at 6022 N 16th St and avoid a false North Phoenix storefront claim.
          </p>
          <nav className="service-path-links" aria-label="North Phoenix guides for Aprés Gel-X Nails">
            <Link href="/north-phoenix/">
              North Phoenix guide hub
            </Link>
            <Link href="/desert-ridge/">
              Desert Ridge destination guide
            </Link>
          </nav>
        </div>
      </section>
  );
}
