import Link from "next/link";

export default function PedicureDirectorySection() {
  return (
      <section className="pedicure-directory" id="pricing">
        <div className="pedicure-directory-heading">
          <p className="eyebrow">
            Eight Pedicure Options
          </p>
          <h2>
            Compare exact booking facts.
          </h2>
          <p>
            Regular polish is included. Base-service massage minutes are not separately stated because the active booking catalog does not publish them.
          </p>
        </div>
        <div className="pedicure-price-list">
          <Link className="featured-pedicure" href="/services/organic-deluxe-pedicure/">
            <span>
              01
            </span>
            <div>
              <h3>
                Organic Spa Pedicure
                <small>
                  Featured
                </small>
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $65 · 50 min
            </b>
          </Link>
          <Link className="" href="/services/cbd-rejuvenating-pedicure/">
            <span>
              02
            </span>
            <div>
              <h3>
                CBD Experience Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $105 · 75 min
            </b>
          </Link>
          <Link className="" href="/services/24k-gold-enchantment-pedicure/">
            <span>
              03
            </span>
            <div>
              <h3>
                Gold Enchantment Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $120 · 85 min
            </b>
          </Link>
          <Link className="" href="/services/jelly-spa-pedicure/">
            <span>
              04
            </span>
            <div>
              <h3>
                Jelly Spa Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $90 · 70 min
            </b>
          </Link>
          <Link className="" href="/services/spa-pedicures/">
            <span>
              05
            </span>
            <div>
              <h3>
                Róse Berry Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $85 · 65 min
            </b>
          </Link>
          <Link className="" href="/services/pearl-spa-pedicure/">
            <span>
              06
            </span>
            <div>
              <h3>
                Pearl Spa Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $75 · 60 min
            </b>
          </Link>
          <Link className="" href="/services/deluxe-pedicure/">
            <span>
              07
            </span>
            <div>
              <h3>
                Deluxe Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $49 · 40 min
            </b>
          </Link>
          <Link className="" href="/services/spa-pedicures/">
            <span>
              08
            </span>
            <div>
              <h3>
                Classic Pedicure
              </h3>
              <p>
                Available in online booking · Regular polish included
              </p>
            </div>
            <b>
              $35 · 25 min
            </b>
          </Link>
        </div>
      </section>
  );
}
