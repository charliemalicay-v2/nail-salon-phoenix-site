

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
          Know what you want? Book online in under a minute. Still deciding between services? Call our front desk and we’ll help you choose the right appointment.
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
