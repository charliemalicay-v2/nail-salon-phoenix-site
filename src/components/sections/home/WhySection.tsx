import Link from "next/link";

export default function WhySection() {
  return (
      <section className="why-section" id="why">
        <div className="why-copy">
          <p className="eyebrow">
            The Element Standard
          </p>
          <h2>
            Choose clearly. Book completely.
          </h2>
          <p>
            A clear appointment starts with the exact service name, published duration and relevant add-ons. Call the front desk if you need current product or sanitation information before booking.
          </p>
          <Link className="button outline" href="/booking/">
            Reserve your chair
          </Link>
        </div>
        <div className="why-grid">
          <article>
            <span>
              01
            </span>
            <h3>
              The exact service
            </h3>
            <p>
              Public names, prices and durations match the active booking catalog.
            </p>
          </article>
          <article>
            <span>
              02
            </span>
            <h3>
              Current details
            </h3>
            <p>
              Call the front desk for current product or sanitation information.
            </p>
          </article>
          <article>
            <span>
              03
            </span>
            <h3>
              Complete appointment
            </h3>
            <p>
              Select relevant removal, length, shape, design, finish or repair add-ons.
            </p>
          </article>
        </div>
      </section>
  );
}
