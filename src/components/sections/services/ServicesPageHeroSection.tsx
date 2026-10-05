

export default function ServicesPageHeroSection() {
  return (
      <section className="services-page-hero">
        <div>
          <p className="eyebrow">
            Element Nail Bar · 16th Street
          </p>
          <h1>
            Find the service
            <br />
            <em>
              that fits.
            </em>
          </h1>
          <p>
            Compare exact online-booking names, prices and durations, including eight base pedicure options, then reserve the complete service scope.
          </p>
          <div>
            <a className="button brass" href="/booking/">
              Reserve Now
            </a>
            <a className="line-link" href="#pricing">
              {"View prices "}
              <span>
                ↓
              </span>
            </a>
          </div>
        </div>
        <div className="services-page-mark" aria-hidden="true">
          <span>
            16
          </span>
          <small>
            SERVICE GUIDE
          </small>
        </div>
      </section>
  );
}
