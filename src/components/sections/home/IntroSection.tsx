import Link from "next/link";

export default function IntroSection() {
  return (
      <section className="intro-section">
        <div className="intro-mark">
          16
        </div>
        <div>
          <p className="eyebrow">
            Phoenix Nail Salon · 16th Street
          </p>
          <h2>
            Specialized nails. Organic care.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            {"Element Nail Bar at 6022 N 16th St is a Phoenix nail salon built around the right artist, a clear service plan and enough time to do the work well.\n\nBook spa pedicures, Builder Gel, Aprés Gel-X, dip powder, acrylic nails or custom nail art. Whether you need simple maintenance or a full reset, we’ll help you choose the service that fits."}
          </p>
          <Link className="line-link dark" href="/services">
            {"Explore services "}
            <span>
              →
            </span>
          </Link>
        </div>
      </section>
  );
}
