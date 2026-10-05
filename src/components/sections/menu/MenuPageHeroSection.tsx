

export default function MenuPageHeroSection() {
  return (
      <section className="menu-page-hero">
        <div>
          <p className="eyebrow">
            Home / Menu
          </p>
          <h1>
            {"Services & Pricing"}
            <br />
            <em>
              Phoenix.
            </em>
          </h1>
          <p>
            Every price is a starting point—final pricing depends on length, shape and design. When in doubt, ask your artist.
          </p>
          <div className="menu-hero-actions">
            <a className="button brass" href="/booking/">
              Book now
            </a>
            <a className="line-link" href="tel:+16026075686">
              {"Call to ask "}
              <span>
                →
              </span>
            </a>
          </div>
        </div>
        <div className="menu-page-seal" aria-hidden="true">
          <span>
            16
          </span>
          <small>
            {"MENU & PRICING"}
          </small>
        </div>
      </section>
  );
}
