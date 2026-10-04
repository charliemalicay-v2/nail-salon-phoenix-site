import Link from "next/link";

export default function Footer() {
  return (
      <footer className="site-footer">
        <div className="footer-columns">
          <div className="footer-brand">
            <img className="footer-official-logo" src="/media/images/element-nail-bar-logo-144.webp" alt="Element Nail Bar official logo" width="144" height="144" loading="lazy" decoding="async" />
            <p>
              Element Nail Bar is an artist-led nail salon in Phoenix for restorative spa pedicures, Aprés Gel-X®, Builder Gel, dip/SNS, acrylic nails and custom nail art—delivered with specialist technique and visible cleanliness.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/element_nail_bar/" aria-label="Element Nail Bar on Instagram">
                IG
              </a>
              <a href="tel:+16026075686" aria-label="Call Element Nail Bar">
                ☎
              </a>
              <a href="mailto:contact@elementnailbar.com" aria-label="Email Element Nail Bar">
                @
              </a>
              <a href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"} aria-label="Element Nail Bar directions">
                ⌖
              </a>
            </div>
          </div>
          <div className="footer-column">
            <b>
              EXPLORE
            </b>
            <Link href="/">
              Home
            </Link>
            <Link href="/menu/">
              {"Menu & Pricing"}
            </Link>
            <Link href="/services/">
              Service Guides
            </Link>
            <Link href="/locations/">
              Phoenix Area Guides
            </Link>
            <Link href="/blog/">
              Nail Care Blog
            </Link>
            <Link href="/booking/">
              Online Booking
            </Link>
            <Link href="/about-us/">
              About Us
            </Link>
            <Link href="/faqs/">
              FAQs
            </Link>
            <Link href="/contact/">
              Contact
            </Link>
            <Link href="/salon-policy/">
              Salon Policy
            </Link>
            <Link href="/#reviews">
              Reviews
            </Link>
          </div>
          <div className="footer-column">
            <b>
              OUR SERVICES
            </b>
            <Link href="/services/acrylic-nails/">
              Acrylic Nails
            </Link>
            <Link href="/services/builder-gel-nails/">
              Builder Gel Nails
            </Link>
            <Link href="/services/dip-powder-nails/">
              Dip Powder / SNS Nails
            </Link>
            <Link href="/services/gel-x-nails/">
              Aprés Gel-X Full Set
            </Link>
            <Link href="/services/nail-art/">
              {"Custom Nail Art & Designs"}
            </Link>
            <Link href="/services/spa-pedicures/">
              Pedicures
            </Link>
            <Link href="/services/organic-deluxe-pedicure/">
              Organic Spa Pedicure
            </Link>
          </div>
          <div className="footer-column footer-hours">
            <b>
              HOURS
            </b>
            <div>
              <span>
                Mon – Sat
              </span>
              <strong>
                9:30 AM–7 PM
              </strong>
            </div>
            <div>
              <span>
                Sunday
              </span>
              <strong>
                10 AM–5 PM
              </strong>
            </div>
          </div>
          <div className="footer-column footer-visit">
            <b>
              VISIT US
            </b>
            <a href={"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016"}>
              <span aria-hidden="true">
                ⌖
              </span>
              <span>
                Element Nail Bar
                <br />
                6022 N 16th St
                <br />
                Phoenix, AZ 85016
              </span>
            </a>
            <a href="tel:+16026075686">
              <span aria-hidden="true">
                ☎
              </span>
              <span>
                602-607-5686
              </span>
            </a>
            <a href="mailto:contact@elementnailbar.com">
              <span aria-hidden="true">
                ✉
              </span>
              <span>
                contact@elementnailbar.com
              </span>
            </a>
          </div>
        </div>
        <aside className="footer-network" aria-label="Element Nail Bar Phoenix locations">
          <div>
            <b>
              FIND YOUR ELEMENT
            </b>
            <p>
              This is our 16th Street salon in Phoenix. Choose the location that best fits your day.
            </p>
          </div>
          <Link className="current-location" href="/">
            <span>
              16th Street
            </span>
            <small>
              6022 N 16th St · Phoenix
            </small>
          </Link>
          <a href="https://nailsalondowntownphoenix.com/">
            <span>
              Downtown Phoenix
            </span>
            <small>
              530 E McDowell Rd #103 · Phoenix
            </small>
          </a>
          <a href="https://elementnailbar.com/locations">
            <span>
              All Element locations
            </span>
            <small>
              Explore the Phoenix-area salon network →
            </small>
          </a>
        </aside>
        <div className="footer-map">
          <iframe title="Element Nail Bar 16th Street location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={"https://www.google.com/maps?q=Element+Nail+Bar,+6022+N+16th+St,+Phoenix,+AZ+85016&output=embed"} />
        </div>
        <div className="footer-bottom">
          <small>
            © 2026 Element Nail Bar · Phoenix, Arizona
          </small>
          <div>
            <Link href="/contact/">
              Contact
            </Link>
            <Link href="/salon-policy/">
              Salon Policy
            </Link>
            <a href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
  );
}
