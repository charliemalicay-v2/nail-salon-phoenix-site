import Link from "next/link";

export default function ServicesSection() {
  return (
      <section className="services-section" id="services">
        <div className="services-intro">
          <p className="eyebrow">
            Our Services
          </p>
          <span aria-hidden="true" />
          <h2>
            Nail Care, Clearly Listed
          </h2>
          <p>
            Names, prices and appointment durations below match the active Element 16 booking catalog. Select relevant add-ons when removal, length, shape, design, finish or repair time is needed.
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <img src="/media/images/spa-pedicure-area-phoenix-optimized.webp" alt="Pedicure area at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Spa Pedicures
              </h3>
              <p>
                Eight online-booking options. Classic Pedicure $35 · 25 minutes · 5-min massage; Deluxe Pedicure $49 · 40 minutes · 8-min massage; Organic Spa Pedicure $65 · 50 minutes · 12-min massage; Pearl Spa Pedicure $75 · 60 minutes · 12-min massage; Róse Berry Pedicure $85 · 65 minutes · 20-min massage; Jelly Spa Pedicure $90 · 70 minutes · 20-min massage; CBD Experience Pedicure $105 · 75 minutes · 25-min massage; Gold Enchantment Pedicure $120 · 85 minutes · 30-min massage. Regular polish is included.
              </p>
              <Link href="/services/spa-pedicures/">
                {"Compare pedicures "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="service-card">
            <img src="/media/images/custom-nail-art-editorial-phoenix.webp" alt="Custom nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Nail Design Add-Ons
              </h3>
              <p>
                [Design] $10+ · 15 min; Design Nails $15+ · 15 min
              </p>
              <Link href="/services/nail-art/">
                {"Explore nail design "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="service-card">
            <img src="/media/images/builder-gel-editorial-phoenix.webp" alt="Builder Gel manicure at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Builder Gel
              </h3>
              <p>
                Builder Gel Full Set $70+ · 60 min; Builder Gel Fill $60+ · 60 min; Builder Gel Manicure $70+ · 55 min
              </p>
              <Link href="/services/builder-gel-nails/">
                {"Explore Builder Gel "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="service-card">
            <img src="/media/images/gel-x-nails-phoenix-optimized.webp" alt="Gel-X nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Aprés Gel-X
              </h3>
              <p>
                Aprés Gel-X Full Set $75+ · 75 min
              </p>
              <Link href="/services/gel-x-nails/">
                {"Explore Gel-X "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="service-card">
            <img src="/media/images/acrylic-nails-phoenix-optimized.webp" alt="Acrylic nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Color Acrylic
              </h3>
              <p>
                Color Acrylic Full Set $60+ · 60 min; Color Acrylic Fill $50+ · 60 min
              </p>
              <Link href="/services/acrylic-nails/">
                {"Explore acrylic "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
          <article className="service-card">
            <img src="/media/images/dip-powder-editorial-phoenix.webp" alt="Dip nail color at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" />
            <div className="service-card-copy">
              <h3>
                Dip Nails
              </h3>
              <p>
                Dip Full Set $65+ · 60 min; Dip Manicure $65+ · 60 min
              </p>
              <Link href="/services/dip-powder-nails/">
                {"Explore dip nails "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>
        <Link className="menu-button" href="/services/">
          {"See full menu & pricing"}
        </Link>
      </section>
  );
}
