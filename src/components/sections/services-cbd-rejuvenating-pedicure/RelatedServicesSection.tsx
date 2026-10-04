import Link from "next/link";

export default function RelatedServicesSection() {
  return (
      <section className="related-services">
        <p className="eyebrow">
          Continue Exploring
        </p>
        <h2>
          Related Phoenix nail services.
        </h2>
        <div>
          <Link href="/services/jelly-spa-pedicure/">
            <span>
              Jelly Spa Pedicure
            </span>
            <b>
              Explore Jelly Spa Pedicure →
            </b>
          </Link>
          <Link href="/services/24k-gold-enchantment-pedicure/">
            <span>
              Gold Enchantment Pedicure
            </span>
            <b>
              Explore Gold Enchantment Pedicure →
            </b>
          </Link>
          <Link href="/services/organic-deluxe-pedicure/">
            <span>
              Organic Spa Pedicure
            </span>
            <b>
              Explore Organic Spa Pedicure →
            </b>
          </Link>
        </div>
      </section>
  );
}
