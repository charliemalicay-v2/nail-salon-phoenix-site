

export default function ServiceLocalSection() {
  return (
      <section className="service-local">
        <div>
          <p className="eyebrow">
            Your Phoenix Nail Salon
          </p>
          <h2>
            A luxury 24K Gold Pedicure in Phoenix.
          </h2>
          <div className="service-rich-body">
            <p>
              Book the $120 Gold Enchantment Pedicure at Element Nail Bar on 16th Street for an 85-minute ritual and 30-minute massage. Our Phoenix salon is convenient to Biltmore, Uptown, Camelback East and the 85016 neighborhood.
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
