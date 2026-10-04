

export default function VisitSection() {
  return (
      <section className="visit-section" id="visit">
        <div className="visit-map">
          <iframe title="Visit Element on 16th Street." loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={"https://www.google.com/maps?q=Element+Nail+Bar,+6022+N+16th+St,+Phoenix,+AZ+85016&output=embed"} />
        </div>
        <div className="visit-copy">
          <p className="eyebrow">
            Nail Salon in Phoenix, AZ
          </p>
          <h2>
            Visit Element on 16th Street.
          </h2>
          <p>
            Element Nail Bar is located at 6022 N 16th St, Phoenix, AZ 85016—just north of Bethany Home Road and minutes from Uptown Phoenix, Biltmore, Piestewa Peak and the Camelback Corridor. Walk-ins are welcome, appointments are recommended and free parking is available on-site.
          </p>
          <div className="facts">
            <div>
              <span>
                Address
              </span>
              <b>
                6022 N 16th St
                <br />
                Phoenix, AZ 85016
              </b>
            </div>
            <div>
              <span>
                Salon Hours
              </span>
              <b>
                Mon–Sat 9:30 AM–7 PM
                <br />
                Sunday 10 AM–5 PM
              </b>
            </div>
            <div>
              <span>
                Phone
              </span>
              <a href="tel:+16026075686">
                602-607-5686
              </a>
            </div>
            <div>
              <span>
                Parking
              </span>
              <b>
                Free on-site
              </b>
            </div>
          </div>
          <a className="button forest" href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
            Directions to the salon
          </a>
        </div>
      </section>
  );
}
