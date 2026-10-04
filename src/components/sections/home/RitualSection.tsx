import Link from "next/link";

export default function RitualSection() {
  return (
      <section className="ritual-section" id="pedicures">
        <div className="ritual-visual">
          <Link className="ritual-orbit organic-orbit" href="/services/organic-deluxe-pedicure" aria-label="The Organic Spa Pedicure">
            <span>
              Organic
            </span>
            <small>
              SPA PEDICURE
            </small>
          </Link>
          <p>
            $65 · 50 minutes · 12-min massage
          </p>
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">
            Featured Pedicure
          </p>
          <h2>
            The Organic Spa Pedicure
          </h2>
          <p>
            Our featured everyday spa upgrade. A 50-minute service and 12-minute massage make Organic Spa Pedicure easy to compare with every other tier.
          </p>
          <ul>
            <li>
              <span>
                01
              </span>
              Mineral Spa Soak. Softens and prepares dry, tired feet for the care that follows.
            </li>
            <li>
              <span>
                02
              </span>
              Botanical Smoothing. A layered exfoliation treatment leaves rough texture feeling polished and renewed.
            </li>
            <li>
              <span>
                03
              </span>
              Focused Callus Care. Targeted refinement helps pressure points feel smoother and softer.
            </li>
            <li>
              <span>
                04
              </span>
              Warm Hydration. Paraffin delivers a comforting moisture boost beyond basic foot care.
            </li>
            <li>
              <span>
                05
              </span>
              Jade Stone Massage. A generous 12-minute massage leaves feet relaxed, replenished, and ready to go.
            </li>
          </ul>
          <p className="ritual-note">
            Regular polish is included; optional add-ons are selected separately.
          </p>
          <div className="ritual-actions">
            <Link className="button brass" href="/booking/">
              View Organic Spa
            </Link>
            <Link className="line-link dark" href="/services/organic-deluxe-pedicure">
              {"See service details "}
              <span>
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
  );
}
