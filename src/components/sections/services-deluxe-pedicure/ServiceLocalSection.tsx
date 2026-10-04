

export default function ServiceLocalSection() {
  return (
      <section className="service-local">
        <div>
          <p className="eyebrow">
            Your Phoenix Nail Salon
          </p>
          <h2>
            A practical Deluxe Pedicure near Uptown Phoenix.
          </h2>
          <div className="service-rich-body">
            <p>
              Element 16 lists eight base pedicures by exact name, price, total duration and included massage length; regular polish is included and optional add-ons are booked separately. Our salon is close to Uptown, Biltmore and Bethany Home Road.
            </p>
          </div>
          <div>
            <a className="button forest" href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
              Get directions
            </a>
            <a href="tel:+16026075686">
              Call 602-607-5686
            </a>
          </div>
        </div>
        <div className="service-local-mark" aria-hidden="true">
          <span>
            16
          </span>
          <small>
            PHOENIX · ARIZONA
          </small>
        </div>
      </section>
  );
}
