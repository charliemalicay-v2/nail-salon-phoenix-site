

export default function BookingBannerSection() {
  return (
      <section className="booking-banner">
        <p className="eyebrow">
          Ready To Book?
        </p>
        <h2>
          Choose your time.
        </h2>
        <p>
          Select the exact service and any relevant add-ons shown in the current catalog.
        </p>
        <div>
          <a className="button brass" href="/booking/">
            Book your appointment
          </a>
          <a href="tel:+16026075686">
            Call 602-607-5686
          </a>
        </div>
      </section>
  );
}
