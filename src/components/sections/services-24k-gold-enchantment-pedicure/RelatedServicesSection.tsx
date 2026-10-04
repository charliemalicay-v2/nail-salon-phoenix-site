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
          <Link href="/services/organic-deluxe-pedicure/">
            <span>
              Organic Spa Pedicure
            </span>
            <b>
              Explore Organic Spa Pedicure →
            </b>
          </Link>
          <Link href="/services/cbd-rejuvenating-pedicure/">
            <span>
              CBD Experience Pedicure
            </span>
            <b>
              Explore CBD Experience Pedicure →
            </b>
          </Link>
          <Link href="/services/jelly-spa-pedicure/">
            <span>
              Jelly Spa Pedicure
            </span>
            <b>
              Explore Jelly Spa Pedicure →
            </b>
          </Link>
        </div>
      </section>
  );
}
