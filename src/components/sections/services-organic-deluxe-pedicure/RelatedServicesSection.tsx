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
          <Link href="/services/spa-pedicures/">
            <span>
              Pedicures
            </span>
            <b>
              Explore Pedicures →
            </b>
          </Link>
          <Link href="/services/deluxe-pedicure/">
            <span>
              Deluxe Pedicure
            </span>
            <b>
              Explore Deluxe Pedicure →
            </b>
          </Link>
          <Link href="/services/pearl-spa-pedicure/">
            <span>
              Pearl Spa Pedicure
            </span>
            <b>
              Explore Pearl Spa Pedicure →
            </b>
          </Link>
        </div>
      </section>
  );
}
