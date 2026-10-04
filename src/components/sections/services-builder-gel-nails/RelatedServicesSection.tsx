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
          <Link href="/services/gel-x-nails/">
            <span>
              Aprés Gel-X Full Set
            </span>
            <b>
              Explore Aprés Gel-X Full Set →
            </b>
          </Link>
          <Link href="/services/dip-powder-nails/">
            <span>
              Dip Powder / SNS Nails
            </span>
            <b>
              Explore Dip Powder / SNS Nails →
            </b>
          </Link>
          <Link href="/services/nail-art/">
            <span>
              {"Custom Nail Art & Designs"}
            </span>
            <b>
              {"Explore Custom Nail Art & Designs →"}
            </b>
          </Link>
        </div>
      </section>
  );
}
