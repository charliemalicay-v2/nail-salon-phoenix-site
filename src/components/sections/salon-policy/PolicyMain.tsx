

export default function PolicyMain() {
  return (
      <div className="policy-main">
        <aside className="policy-toc">
          <p className="eyebrow">
            On this page
          </p>
          <nav aria-label="Salon policy sections">
            <a href="#booking">
              <span>
                Planning your visit
              </span>
              {"Booking, arrival & cancellations"}
            </a>
            <a href="#services">
              <span>
                Service standards
              </span>
              {"Health, results & service refinement"}
            </a>
            <a href="#environment">
              <span>
                In the salon
              </span>
              {"Guest conduct & shared space"}
            </a>
            <a href="#payment">
              <span>
                {"Purchases & information"}
              </span>
              {"Gift cards, pricing & privacy"}
            </a>
            <a href="#access">
              <span>
                {"Respect & accessibility"}
              </span>
              {"Media, recording & accommodations"}
            </a>
            <a href="#legal">
              <span>
                Terms
              </span>
              {"Legal terms & contact"}
            </a>
          </nav>
          <div>
            <strong>
              Need help?
            </strong>
            <p>
              Call before your visit and our front desk will walk you through the policy.
            </p>
            <a href="tel:+16026075686">
              602-607-5686 →
            </a>
          </div>
        </aside>
        <div className="policy-content">
          <div className="policy-intro">
            <p className="eyebrow">
              A note to our guests
            </p>
            <h2>
              Thoughtful boundaries,
              <br />
              <em>
                clearly explained.
              </em>
            </h2>
            <p>
              We have rewritten our salon policies in plain language while preserving the practical rules that keep the day running smoothly. If a policy is unclear or you need an accommodation, please contact us before your appointment.
            </p>
          </div>
          <section className="policy-group" id="booking">
            <header>
              <p>
                Planning your visit
              </p>
              <h2>
                {"Booking, arrival & cancellations"}
              </h2>
            </header>
            <article id="appointments">
              <span className="policy-number">
                01
              </span>
              <div>
                <h3>
                  {"Appointments & booking"}
                </h3>
                <div className="policy-body">
                  <p>
                    Appointments may be booked online, by phone or in person. Walk-ins are welcome when an appropriate nail artist is available, but an immediate appointment is not guaranteed.
                  </p>
                  <p>
                    Please book the services, removal and nail art you expect to need. Accurate booking gives your artist enough time and helps us quote the visit clearly. A card or deposit may be required to reserve longer, specialty or group appointments.
                  </p>
                </div>
              </div>
            </article>
            <article id="payment-authorization">
              <span className="policy-number">
                02
              </span>
              <div>
                <h3>
                  {"Payment authorization & dispute resolution"}
                </h3>
                <div className="policy-body">
                  <p>
                    <strong>
                      Card-on-file authorization.
                    </strong>
                    {" By providing a payment method and booking an appointment, you authorize Element Nail Bar and its payment processor to securely retain the credential and charge any deposit or cancellation, late-cancellation or no-show fee clearly disclosed and accepted when the appointment is reserved. Post-service add-ons and gratuities are charged only after you approve the final amount at checkout."}
                  </p>
                  <p>
                    <strong>
                      Service and amount confirmation.
                    </strong>
                    {" By approving the checkout total or signing the receipt, you acknowledge that the listed services were provided and that the transaction amount is accurate. Completed services are final sale except where required by law and remain subject to our 7-Day Service Refinement Policy."}
                  </p>
                  <p>
                    <strong>
                      Prompt notice.
                    </strong>
                    {" Please notify Element Nail Bar within 48 hours of discovering a billing or service concern whenever reasonably possible so we can investigate and attempt to resolve it promptly. This request does not shorten or waive any right that cannot legally be waived."}
                  </p>
                  <p>
                    <strong>
                      Good-faith resolution.
                    </strong>
                    {" For concerns involving service quality, satisfaction or results, you agree to give the salon a reasonable opportunity to inspect the work and offer an appropriate refinement before initiating a payment dispute. Nothing in this policy prevents a guest from reporting an unauthorized transaction or exercising applicable billing-error rights."}
                  </p>
                  <p>
                    <strong>
                      Fraudulent or bad-faith disputes.
                    </strong>
                    {" Element Nail Bar may provide appointment records, receipts, photographs, communications and other service documentation when responding to a payment dispute. If a dispute is proven fraudulent or knowingly submitted in bad faith, the salon reserves the right to pursue its actual losses and lawful recovery costs to the extent permitted by applicable law."}
                  </p>
                </div>
              </div>
            </article>
            <article id="arrival">
              <span className="policy-number">
                03
              </span>
              <div>
                <h3>
                  {"Arrival & late appointments"}
                </h3>
                <div className="policy-body">
                  <p>
                    Please arrive about five minutes early for check-in and color selection. We allow a 10-minute grace period. After that, your service may need to be shortened, adjusted or rescheduled so the next guest is not kept waiting.
                  </p>
                  <p>
                    If you arrive too late for us to complete the booked service safely and to our standard, the visit may be treated as a late cancellation and the applicable fee may apply.
                  </p>
                </div>
              </div>
            </article>
            <article id="cancellations">
              <span className="policy-number">
                04
              </span>
              <div>
                <h3>
                  {"Cancellations, rescheduling & no-shows"}
                </h3>
                <div className="policy-body">
                  <p>
                    {"Individual appointments require at least "}
                    <strong>
                      {"12 hours' notice"}
                    </strong>
                    {" to cancel or reschedule. Groups of three or more require at least "}
                    <strong>
                      {"48 hours' notice"}
                    </strong>
                    .
                  </p>
                  <p>
                    A cancellation or reschedule outside that window may be charged up to 50% of the reserved services. A no-show may be charged up to 100%. Repeated late cancellations or no-shows may require prepayment before another appointment can be reserved.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="policy-group" id="services">
            <header>
              <p>
                Service standards
              </p>
              <h2>
                {"Health, results & service refinement"}
              </h2>
            </header>
            <article id="health">
              <span className="policy-number">
                05
              </span>
              <div>
                <h3>
                  Health disclosures
                </h3>
                <div className="policy-body">
                  <p>
                    Please tell your nail artist before service about allergies, sensitivities, diabetes, pregnancy, medications or any condition that could affect nail or skin care. We may modify or decline a service when we see an open wound, suspected infection or another condition that could make treatment unsafe.
                  </p>
                  <p>
                    Guests who are feeling ill or have a contagious condition should reschedule. We will help find a new time as soon as it is appropriate to return.
                  </p>
                </div>
              </div>
            </article>
            <article id="results-aftercare">
              <span className="policy-number">
                06
              </span>
              <div>
                <h3>
                  {"Results & aftercare"}
                </h3>
                <div className="policy-body">
                  <p>
                    {"Nail services respond differently to each guest's nail condition, lifestyle and home care. Please speak up during the appointment about length, shape, color or comfort so your artist can make adjustments before the service is complete."}
                  </p>
                  <p>
                    Follow the maintenance and aftercare guidance provided by your artist. Picking, prying, improper removal, chemical exposure, impact and delayed maintenance can shorten wear and may make a repair ineligible for complimentary refinement.
                  </p>
                </div>
              </div>
            </article>
            <article id="refinement">
              <span className="policy-number">
                07
              </span>
              <div>
                <h3>
                  7-day service refinement
                </h3>
                <div className="policy-body">
                  <p>
                    If your gel polish, dip powder, Builder Gel or Gel-X service chips, lifts or breaks within seven days, contact the salon within that seven-day window and send a clear photo. When eligible, we will schedule a complimentary refinement of the affected nail or nails in the original color and design.
                  </p>
                  <p>
                    Refinements do not cover a change of mind, accidental damage, outside work, improper home removal or normal wear. Requests made after seven days are treated as a paid repair or maintenance service.
                  </p>
                </div>
              </div>
            </article>
            <article id="final-sale">
              <span className="policy-number">
                08
              </span>
              <div>
                <h3>
                  {"Final sale & no cash refunds"}
                </h3>
                <div className="policy-body">
                  <p>
                    Completed services and retail purchases are final sale except where required by law. We do not issue cash refunds for a completed service. If something does not feel right, tell us before leaving or contact us promptly so a manager can review the service and offer an appropriate remedy under this policy.
                  </p>
                  <p>
                    Opened or used personal-care products cannot be returned for hygiene reasons. Unopened retail items may be reviewed by management with the original receipt.
                  </p>
                </div>
              </div>
            </article>
            <article id="sanitation">
              <span className="policy-number">
                09
              </span>
              <div>
                <h3>
                  {"Safety & sanitation"}
                </h3>
                <div className="policy-body">
                  <p>
                    Ask the salon directly for its current cleaning, sanitation and single-use-item procedures.
                  </p>
                  <p>
                    Guests may not handle professional tools, salon products or equipment unless directed by a team member.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="policy-group" id="environment">
            <header>
              <p>
                In the salon
              </p>
              <h2>
                {"Guest conduct & shared space"}
              </h2>
            </header>
            <article id="children">
              <span className="policy-number">
                10
              </span>
              <div>
                <h3>
                  {"Children & minors"}
                </h3>
                <div className="policy-body">
                  <p>
                    Our salon contains sharp tools, hot equipment and professional products. Children who are not receiving a service should not accompany a guest unless another adult can supervise them throughout the visit.
                  </p>
                  <p>
                    A parent or legal guardian must approve services for a minor and may be asked to remain on-site. The salon may decline or modify a service that is not age-appropriate or cannot be performed safely.
                  </p>
                </div>
              </div>
            </article>
            <article id="belongings">
              <span className="policy-number">
                11
              </span>
              <div>
                <h3>
                  Personal belongings
                </h3>
                <div className="policy-body">
                  <p>
                    Please keep phones, jewelry, bags and other valuables with you. Element Nail Bar is not responsible for items that are lost, stolen, damaged or left behind, except to the extent responsibility cannot be excluded by law.
                  </p>
                </div>
              </div>
            </article>
            <article id="risk">
              <span className="policy-number">
                12
              </span>
              <div>
                <h3>
                  {"Assumption of risk & responsibility"}
                </h3>
                <div className="policy-body">
                  <p>
                    Nail and spa services involve products, tools and processes that may cause irritation, sensitivity or an unexpected reaction. By choosing a service after disclosing relevant health information, you accept the ordinary risks associated with that service.
                  </p>
                  <p>
                    To the fullest extent allowed by law, Element Nail Bar is not responsible for injury or loss caused by omitted health information, failure to follow aftercare, product misuse or conduct outside the salon. Nothing in this policy waives rights or responsibilities that cannot legally be waived.
                  </p>
                </div>
              </div>
            </article>
            <article id="property">
              <span className="policy-number">
                13
              </span>
              <div>
                <h3>
                  Damage to salon property
                </h3>
                <div className="policy-body">
                  <p>
                    Guests are responsible for intentional damage or damage caused by reckless use of salon furnishings, equipment, products or technology. Please tell a team member immediately if something spills, breaks or appears unsafe.
                  </p>
                </div>
              </div>
            </article>
            <article id="refuse-service">
              <span className="policy-number">
                14
              </span>
              <div>
                <h3>
                  Right to refuse service
                </h3>
                <div className="policy-body">
                  <p>
                    We may stop or refuse service when necessary for health, safety or respectful operation of the salon. Harassment, discrimination, threats, intoxication, unsafe conduct, repeated policy violations or abusive treatment of guests or staff will not be accepted.
                  </p>
                  <p>
                    When service is ended because of guest conduct, payment remains due for work already performed and applicable reserved time.
                  </p>
                </div>
              </div>
            </article>
            <article id="alcohol">
              <span className="policy-number">
                15
              </span>
              <div>
                <h3>
                  Alcohol service
                </h3>
                <div className="policy-body">
                  <p>
                    Complimentary alcoholic beverages are available only to guests age 21 or older with valid identification, subject to availability and applicable law. We may limit or decline service at any time. Guests are responsible for arranging safe transportation and may not bring outside alcohol into the salon.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="policy-group" id="payment">
            <header>
              <p>
                {"Purchases & information"}
              </p>
              <h2>
                {"Gift cards, pricing & privacy"}
              </h2>
            </header>
            <article id="gift-cards">
              <span className="policy-number">
                16
              </span>
              <div>
                <h3>
                  Gift cards
                </h3>
                <div className="policy-body">
                  <p>
                    Purchased Element Nail Bar gift-card funds do not expire and are not subject to inactivity fees. Gift cards are redeemable for eligible services and products at participating Element Nail Bar locations and are not redeemable for cash except where required by law.
                  </p>
                  <p>
                    Please purchase directly from Element Nail Bar in person or by phone; we cannot verify cards sold through an unauthorized third party. Treat physical cards like cash. Replacement of a lost or stolen card is not guaranteed and requires proof of purchase and verification of the remaining balance.
                  </p>
                </div>
              </div>
            </article>
            <article id="prices">
              <span className="policy-number">
                17
              </span>
              <div>
                <h3>
                  {"Payments, prices & promotions"}
                </h3>
                <div className="policy-body">
                  <p>
                    We accept approved forms of payment shown at checkout. Prices may vary based on length, shape, removal, design complexity, product and time. Your artist will confirm material add-ons before proceeding whenever possible.
                  </p>
                  <p>
                    Prices and promotions may change without notice. Offers cannot be combined unless the offer states otherwise and have no cash value. Gratuities are never included unless clearly disclosed.
                  </p>
                </div>
              </div>
            </article>
            <article id="privacy">
              <span className="policy-number">
                18
              </span>
              <div>
                <h3>
                  {"Privacy & guest information"}
                </h3>
                <div className="policy-body">
                  <p>
                    We collect the contact, appointment and transaction information reasonably needed to schedule and deliver services, process payment, provide support and communicate about your visit. We do not sell guest information.
                  </p>
                  <p>
                    Appointment reminders and service messages may be sent by text or email. Marketing messages are sent subject to consent and applicable law; you may opt out using the instructions in the message.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="policy-group" id="access">
            <header>
              <p>
                {"Respect & accessibility"}
              </p>
              <h2>
                {"Media, recording & accommodations"}
              </h2>
            </header>
            <article id="media">
              <span className="policy-number">
                19
              </span>
              <div>
                <h3>
                  {"Photos, video & recording"}
                </h3>
                <div className="policy-body">
                  <p>
                    Security cameras may operate in common areas for safety and loss prevention; they are not placed in restrooms or private areas. Guests may not record staff or other guests without their consent.
                  </p>
                  <p>
                    {"We may photograph finished nail work for service documentation. We will ask before using an identifiable guest's image or voice in advertising or social media. You may decline marketing photography without affecting your service."}
                  </p>
                </div>
              </div>
            </article>
            <article id="accessibility">
              <span className="policy-number">
                20
              </span>
              <div>
                <h3>
                  {"Accessibility & service animals"}
                </h3>
                <div className="policy-body">
                  <p>
                    We welcome guests with disabilities and service animals as defined by applicable law. Please call before your visit if an accommodation or additional setup time would make your appointment more comfortable. Pets and emotional-support animals that do not qualify as service animals are not permitted in service areas.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="policy-group" id="legal">
            <header>
              <p>
                Terms
              </p>
              <h2>
                {"Legal terms & contact"}
              </h2>
            </header>
            <article id="force-majeure">
              <span className="policy-number">
                21
              </span>
              <div>
                <h3>
                  Events outside our control
                </h3>
                <div className="policy-body">
                  <p>
                    We may need to delay, modify or cancel an appointment because of severe weather, power or network outages, public-health conditions, government action, supply disruption, emergencies or other events reasonably outside our control. We will contact affected guests and work to reschedule.
                  </p>
                </div>
              </div>
            </article>
            <article id="severability">
              <span className="policy-number">
                22
              </span>
              <div>
                <h3>
                  Severability
                </h3>
                <div className="policy-body">
                  <p>
                    If a court or other authority finds one part of this policy unenforceable, the remaining provisions continue to apply to the fullest extent permitted by law.
                  </p>
                </div>
              </div>
            </article>
            <article id="governing-law">
              <span className="policy-number">
                23
              </span>
              <div>
                <h3>
                  Governing law
                </h3>
                <div className="policy-body">
                  <p>
                    These policies are governed by the laws of the State of Arizona, without regard to conflict-of-law principles. Any court proceeding not subject to a valid arbitration agreement will be brought in a court with jurisdiction in Maricopa County, Arizona.
                  </p>
                </div>
              </div>
            </article>
            <article id="disputes">
              <span className="policy-number">
                24
              </span>
              <div>
                <h3>
                  Dispute resolution
                </h3>
                <div className="policy-body">
                  <p>
                    Please contact salon management first so we can try to resolve a concern directly. To the extent enforceable and after a good-faith informal effort to resolve the matter, disputes may be resolved by individual binding arbitration rather than a jury trial or class action.
                  </p>
                  <p>
                    This section does not apply where arbitration or a class-action waiver is prohibited, and it does not waive any right that cannot legally be waived. Because dispute provisions can affect legal rights, guests may wish to seek independent advice.
                  </p>
                </div>
              </div>
            </article>
            <article id="changes">
              <span className="policy-number">
                25
              </span>
              <div>
                <h3>
                  {"Policy changes & acceptance"}
                </h3>
                <div className="policy-body">
                  <p>
                    We may update these policies as salon operations or applicable requirements change. The version posted on this page applies at the time of your appointment. By booking, entering the salon or receiving a service, you acknowledge the policies then in effect.
                  </p>
                </div>
              </div>
            </article>
            <article id="contact">
              <span className="policy-number">
                26
              </span>
              <div>
                <h3>
                  {"Questions & contact"}
                </h3>
                <div className="policy-body">
                  <p>
                    {"Questions about these policies are welcome before you book. Call "}
                    <a href="tel:+16026075686">
                      602-607-5686
                    </a>
                    {", email "}
                    <a href="mailto:contact@elementnailbar.com">
                      contact@elementnailbar.com
                    </a>
                    {" or visit Element Nail Bar at 6022 N 16th St, Phoenix, AZ 85016."}
                  </p>
                </div>
              </div>
            </article>
          </section>
          <div className="policy-legal-note">
            <p className="eyebrow">
              Please note
            </p>
            <h2>
              Questions are better before the appointment.
            </h2>
            <p>
              These policies apply to services at the 16th Street salon. Nothing here limits a consumer right or salon responsibility that cannot legally be limited. If you have a health concern, accessibility request or question about a fee, call us before your visit so we can help.
            </p>
            <div>
              <a className="button brass" href="tel:+16026075686">
                Call 602-607-5686
              </a>
              <a className="button outline" href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
