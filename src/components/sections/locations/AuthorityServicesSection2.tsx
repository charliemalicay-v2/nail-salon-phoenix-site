import Link from "next/link";

export default function AuthorityServicesSection2() {
  return (
      <section className="authority-services">
        <header>
          <p className="eyebrow">
            Priority services
          </p>
          <h2>
            Choose the service guide for the details.
          </h2>
          <p>
            Area pages help with travel planning. The dedicated service pages explain inclusions, comparisons, maintenance, and how to reach the current menu.
          </p>
        </header>
        <div>
          <Link href="/services/spa-pedicures/" data-service-link="Spa Pedicures">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/dd5ee3a7-1280px-Arizona_Biltmore_Hotel-_Missouri_Ave-_Biltmore_Area-_Phoenix-_A" srcSet="/assets/wikimedia/dd5ee3a7-1280px-Arizona_Biltmore_Hotel-_Missouri_Ave-_Biltmore_Area-_Phoenix-_A 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Arizona Biltmore in the Biltmore area, representing the Biltmore visit guide" width="1200" height="900" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Treatment-led foot care
              </span>
              <h3>
                Spa Pedicures
              </h3>
              <p>
                Compare the current pedicure levels by care sequence, massage, finish, and add-ons before reserving.
              </p>
              <strong>
                {"Explore the service "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/services/builder-gel-nails/" data-service-link="Builder Gel / BIAB">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/00e8e865-1280px-METRO_Light_Rail_Uptown_Phoenix_Station.jpg" srcSet="/assets/wikimedia/00e8e865-1280px-METRO_Light_Rail_Uptown_Phoenix_Station.jpg 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Uptown Phoenix light rail station at Camelback Road and Central Avenue, representing the Uptown Phoenix visit guide" width="1200" height="840" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Structured natural-nail care
              </span>
              <h3>
                Builder Gel / BIAB
              </h3>
              <p>
                Learn how structured overlays, removal, assessment, and a repeat maintenance plan fit together.
              </p>
              <strong>
                {"Explore the service "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/services/gel-x-nails/" data-service-link="Aprés Gel-X">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/08a14d64-1280px-Central_Phoenix-_AZ-_View_E-_Camelback_Road_and_Central_Avenue-" srcSet="/assets/wikimedia/08a14d64-1280px-Central_Phoenix-_AZ-_View_E-_Camelback_Road_and_Central_Avenue- 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Camelback Road and Central Avenue in Phoenix, representing the Camelback Road Corridor visit guide" width="1200" height="900" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Full-cover soft-gel tips
              </span>
              <h3>
                Aprés Gel-X
              </h3>
              <p>
                Plan old-product removal, length, shape, repairs, and design time as one complete extension booking.
              </p>
              <strong>
                {"Explore the service "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/services/nail-art/" data-service-link="Custom Nail Art">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/d509b55a-Piestewa_Peak.jpg" srcSet="/assets/wikimedia/d509b55a-Piestewa_Peak.jpg 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Piestewa Peak, representing the Piestewa Peak visit guide" width="1200" height="301" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Design-focused appointments
              </span>
              <h3>
                Custom Nail Art
              </h3>
              <p>
                Use references to communicate the palette, finish, motif, and number of detailed nails that matter most.
              </p>
              <strong>
                {"Explore the service "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
        </div>
      </section>
  );
}
