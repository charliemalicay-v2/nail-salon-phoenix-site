import Link from "next/link";

export default function ServiceDirectorySection() {
  return (
      <section className="service-directory">
        <div className="service-directory-heading">
          <p className="eyebrow">
            Explore Nail Services
          </p>
          <h2>
            Nail care, clearly explained.
          </h2>
          <p>
            Each guide explains who the service is for, what happens during the appointment, how it compares and how to maintain it.
          </p>
        </div>
        <div className="service-directory-grid">
          <Link href="/services/acrylic-nails/">
            <span>
              001
            </span>
            <img src="/media/images/acrylic-nails-phoenix-optimized.webp" alt="Sculpted acrylic nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                Color Acrylic Services
              </h3>
              <p>
                Compare the exact online-booking options for Acrylic Nails: Color Acrylic Full Set ($60+, 60 min), Color Acrylic Fill ($50+, 60 min).
              </p>
              <b>
                Explore Acrylic Nails →
              </b>
            </div>
          </Link>
          <Link href="/services/builder-gel-nails/">
            <span>
              002
            </span>
            <img src="/media/images/builder-gel-editorial-phoenix.webp" alt="Builder Gel manicure at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                Builder Gel Nails
              </h3>
              <p>
                Compare the exact online-booking options for Builder Gel Nails: Builder Gel Full Set ($70+, 60 min), Builder Gel Fill ($60+, 60 min), Builder Gel Manicure ($70+, 55 min).
              </p>
              <b>
                Explore Builder Gel Nails →
              </b>
            </div>
          </Link>
          <Link href="/services/dip-powder-nails/">
            <span>
              003
            </span>
            <img src="/media/images/dip-powder-editorial-phoenix.webp" alt="Dip nail color at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                {"Dip Powder & SNS Nails"}
              </h3>
              <p>
                Compare the exact online-booking options for Dip Powder / SNS Nails: Dip Full Set ($65+, 60 min), Dip Manicure ($65+, 60 min).
              </p>
              <b>
                Explore Dip Powder / SNS Nails →
              </b>
            </div>
          </Link>
          <Link href="/services/gel-x-nails/">
            <span>
              004
            </span>
            <img src="/media/images/gel-x-nails-phoenix-optimized.webp" alt="Gel-X nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                Aprés Gel-X Full Set
              </h3>
              <p>
                Aprés Gel-X Full Set at Element Nail Bar on 16th Street: $75+, 75 min, available in online booking.
              </p>
              <b>
                Explore Aprés Gel-X Full Set →
              </b>
            </div>
          </Link>
          <Link href="/services/nail-art/">
            <span>
              005
            </span>
            <img src="/media/images/custom-nail-art-editorial-phoenix.webp" alt="Custom nail design at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                {"Nail Art & Nail Designs"}
              </h3>
              <p>
                {"Compare the exact online-booking options for Custom Nail Art & Designs: [Design] ($10+, 15 min), Design Nails ($15+, 15 min)."}
              </p>
              <b>
                {"Explore Custom Nail Art & Designs →"}
              </b>
            </div>
          </Link>
          <Link href="/services/spa-pedicures/">
            <span>
              006
            </span>
            <img src="/media/images/spa-pedicure-area-phoenix-optimized.webp" alt="Pedicure area at Element Nail Bar in Phoenix" width="700" height="520" loading="lazy" decoding="async" />
            <div>
              <h3>
                Spa Pedicures
              </h3>
              <p>
                Compare the exact online-booking options for Pedicures: Organic Spa Pedicure ($65, 50 minutes · 12-min massage), CBD Experience Pedicure ($105, 75 minutes · 25-min massage), Gold Enchantment Pedicure ($120, 85 minutes · 30-min massage), Jelly Spa Pedicure ($90, 70 minutes · 20-min massage), Róse Berry Pedicure ($85, 65 minutes · 20-min massage), Pearl Spa Pedicure ($75, 60 minutes · 12-min massage), Deluxe Pedicure ($49, 40 minutes · 8-min massage), Classic Pedicure ($35, 25 minutes · 5-min massage).
              </p>
              <b>
                Explore Pedicures →
              </b>
            </div>
          </Link>
        </div>
      </section>
  );
}
