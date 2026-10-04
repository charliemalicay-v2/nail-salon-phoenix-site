

export default function ServiceFaqSection() {
  return (
      <section className="service-faq faq-section">
        <div>
          <p className="eyebrow">
            Booking FAQs
          </p>
          <h2>
            Choose once. Book correctly.
          </h2>
          <p>
            Call the front desk if you need help matching the complete service scope to an appointment.
          </p>
          <a href="tel:+16026075686">
            Call the front desk →
          </a>
        </div>
        <div className="faq-list">
          <details open>
            <summary>
              Which pedicure should I book?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Compare the eight base pedicures by exact name, price, total duration and included massage length. Regular polish is included; optional add-ons are booked separately.
            </p>
          </details>
          <details>
            <summary>
              Are massage minutes included in the base-pedicure listings?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Yes. Each base pedicure shows its included massage length beside the total appointment duration.
            </p>
          </details>
          <details>
            <summary>
              Are prices final?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              A plus sign identifies a starting price. Selected removal, length, shape, design, finish, repair or other add-ons can change the total.
            </p>
          </details>
          <details>
            <summary>
              Do I need to add removal or nail art when booking?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Yes. Select relevant add-ons so the reserved appointment reflects the complete service scope.
            </p>
          </details>
          <details>
            <summary>
              Can I book these services online?
              <span aria-hidden="true">
                +
              </span>
            </summary>
            <p>
              Yes. Each item shown here is marked bookable in the active Element 16 catalog.
            </p>
          </details>
        </div>
      </section>
  );
}
