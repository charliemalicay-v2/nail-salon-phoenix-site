

export default function BookingBannerSection() {
  return (
      <section className="booking-banner">
        <p className="eyebrow">
          Ready To Book?
        </p>
        <h2>
          Your chair is waiting.
        </h2>
        <p>
          Reserve online, or call our front desk if you want help choosing the right service or appointment length.
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
