

export default function MenuBookingSection() {
  return (
      <section className="menu-booking">
        <div>
          <p className="eyebrow">
            Your Chair Is Waiting
          </p>
          <h2>
            Ready for your Element moment?
          </h2>
          <p>
            Book online in under a minute, or give us a call.
          </p>
        </div>
        <div>
          <a className="button brass" href="/booking/">
            Book your visit
          </a>
          <a className="button forest" href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
            Directions
          </a>
          <a className="menu-call-link" href="tel:+16026075686">
            Call 602-607-5686
          </a>
        </div>
      </section>
  );
}
