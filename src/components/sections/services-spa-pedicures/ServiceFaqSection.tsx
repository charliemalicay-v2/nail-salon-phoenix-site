

export default function ServiceFaqSection() {
  return (
      <section className="service-faq faq-section" aria-labelledby="service-faq-title">
        <div>
          <p className="eyebrow">
            Questions, Answered
          </p>
          <h2 id="service-faq-title">
            Before you book.
          </h2>
          <p>
            Clear answers help you reserve the right appointment and arrive knowing what to expect.
          </p>
          <a href="tel:+16026075686">
            Call 602-607-5686 →
          </a>
        </div>
        <div className="faq-list">
          <details open>
            <summary>
              Which pedicure should I choose?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Choose Classic for essentials, Deluxe for a comfortable step-up, Organic Spa for our best everyday spa balance, or a longer ritual when deeper hydration and massage are the priority.
            </p>
          </details>
          <details>
            <summary>
              Which pedicure do guests choose most?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Organic Spa is our featured guest favorite because it combines botanical products, callus care, a moisture mask and a 12-minute massage in 50 minutes.
            </p>
          </details>
          <details>
            <summary>
              Are liners and files fresh for every guest?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Yes. Pedicure liners, files and buffers are fresh for every guest, and metal implements follow our hospital-grade cleaning and sterilization process.
            </p>
          </details>
          <details>
            <summary>
              Do you accept walk-ins for pedicures?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Walk-ins are welcome when a pedicure chair and artist are available. Appointments are recommended for evenings, weekends and side-by-side visits.
            </p>
          </details>
          <details>
            <summary>
              How much does Spa Pedicures cost in Phoenix?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              The exact price for each booking option is listed on this page. Selected add-ons may change the total.
            </p>
          </details>
          <details>
            <summary>
              Does Element offer Pedicures near Biltmore and Uptown Phoenix?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Yes. Book at Element Nail Bar, 6022 N 16th St, Phoenix, AZ 85016. Our Phoenix nail salon is just north of Bethany Home Road and convenient to Uptown, Biltmore, Camelback East and Arcadia Lite.
            </p>
          </details>
          <details>
            <summary>
              Do I need an appointment for Pedicures?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Appointments are recommended so we can match you with an artist who specializes in the service and reserve enough time for removal or nail art. Walk-ins are welcome when an appropriate artist and chair are available.
            </p>
          </details>
        </div>
      </section>
  );
}
