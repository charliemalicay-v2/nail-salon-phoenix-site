

export default function CmsPublicBlocks() {
  return (
      <div className="cms-public-blocks">
        <section className="location-map">
          <div>
            <p className="eyebrow">
              Visit Element 16
            </p>
            <h2>
              6022 N 16th St, Phoenix, AZ 85016
            </h2>
            <div className="cms-rich-body">
              <p>
                Element Nail Bar is just north of Bethany Home Road with free on-site parking. Walk-ins are welcome, and appointments are recommended.
              </p>
            </div>
            <address>
              Element Nail Bar — 16th Street
              <br />
              6022 N 16th St
              <br />
              Phoenix, AZ 85016
              <br />
              <a href="tel:+16026075686">
                602-607-5686
              </a>
            </address>
            <div className="location-map-links">
              <a className="button brass" href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
                Get directions
              </a>
              <a className="button outline" href={"https://maps.apple.com/?daddr=6022%20N%2016th%20St%2C%20Phoenix%2C%20AZ%2085016&q=Element%20Nail%20Bar&dirflg=d"}>
                Open Apple Maps
              </a>
            </div>
          </div>
          <iframe className="location-map-embed" title="Map to Element Nail Bar — 16th Street" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={"https://www.google.com/maps?q=Element%20Nail%20Bar%2C%206022%20N%2016th%20St%2C%20Phoenix%2C%20AZ%2085016&output=embed"} />
        </section>
        <section className="cms-public-block ">
          <div>
            <p className="eyebrow">
              Salon hours
            </p>
            <h2>
              Plan your visit.
            </h2>
            <div className="cms-rich-body">
              <p>
                Monday–Saturday: 9:30 AM–7:00 PM. Sunday: 10:00 AM–5:00 PM. Call 602-607-5686 or email contact@elementnailbar.com when you need help choosing a service or coordinating appointments.
              </p>
            </div>
            <a className="line-link dark" href="mailto:contact@elementnailbar.com">
              {"Email the salon "}
              <span>
                →
              </span>
            </a>
          </div>
        </section>
        <section className="cms-public-cta">
          <p className="eyebrow">
            Ready to reserve?
          </p>
          <h2>
            Choose the complete appointment.
          </h2>
          <div className="cms-rich-body">
            <p>
              Include removal, repairs, extra length and nail-art time so your artist has enough time for the requested service.
            </p>
          </div>
          <a className="button brass" href="/booking/">
            Book now
          </a>
        </section>
      </div>
  );
}
