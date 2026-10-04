"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function Header() {
  const pathname = norm(usePathname() || "/");
  const isCurrent = (href: string) => (norm(href) === pathname ? "page" : undefined);
  return (
      <header className="site-header">
        <Link className="site-logo" href="/" aria-label="Element Nail Bar 16th Street home" aria-current={isCurrent("/")}>
          <img src="/media/images/element-nail-bar-logo-144.webp" alt="Element Nail Bar official logo" width="144" height="144" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" aria-current={isCurrent("/")}>
            Home
          </Link>
          <div className="nav-dropdown">
            <Link className="nav-trigger" href="/services/" aria-current={isCurrent("/services/")}>
              {"Services "}
              <span aria-hidden="true">
                ⌄
              </span>
            </Link>
            <div className="services-menu" aria-label="Nail services">
              <Link href="/services/acrylic-nails/" aria-current={isCurrent("/services/acrylic-nails/")}>
                Acrylic Nails
              </Link>
              <Link href="/services/builder-gel-nails/" aria-current={isCurrent("/services/builder-gel-nails/")}>
                Builder Gel Nails
              </Link>
              <Link href="/services/dip-powder-nails/" aria-current={isCurrent("/services/dip-powder-nails/")}>
                Dip Powder / SNS Nails
              </Link>
              <Link href="/services/gel-x-nails/" aria-current={isCurrent("/services/gel-x-nails/")}>
                Aprés Gel-X Full Set
              </Link>
              <Link href="/services/nail-art/" aria-current={isCurrent("/services/nail-art/")}>
                {"Custom Nail Art & Designs"}
              </Link>
              <div className="spa-menu">
                <Link className="spa-trigger" href="/services/spa-pedicures/" aria-current={isCurrent("/services/spa-pedicures/")}>
                  {"Spa Pedicure "}
                  <span aria-hidden="true">
                    ›
                  </span>
                </Link>
                <div className="spa-flyout" aria-label="Spa pedicure services">
                  <Link className="featured-service" href="/services/organic-deluxe-pedicure/" aria-current={isCurrent("/services/organic-deluxe-pedicure/")}>
                    Organic Spa Pedicure
                    <small>
                      Guest favorite
                    </small>
                  </Link>
                  <Link className="" href="/services/deluxe-pedicure/" aria-current={isCurrent("/services/deluxe-pedicure/")}>
                    Deluxe Pedicure
                  </Link>
                  <Link className="" href="/services/pearl-spa-pedicure/" aria-current={isCurrent("/services/pearl-spa-pedicure/")}>
                    Pearl Spa Pedicure
                  </Link>
                  <Link className="" href="/services/jelly-spa-pedicure/" aria-current={isCurrent("/services/jelly-spa-pedicure/")}>
                    Jelly Spa Pedicure
                  </Link>
                  <Link className="" href="/services/cbd-rejuvenating-pedicure/" aria-current={isCurrent("/services/cbd-rejuvenating-pedicure/")}>
                    CBD Experience Pedicure
                  </Link>
                  <Link className="" href="/services/24k-gold-enchantment-pedicure/" aria-current={isCurrent("/services/24k-gold-enchantment-pedicure/")}>
                    Gold Enchantment Pedicure
                  </Link>
                </div>
              </div>
              <Link className="all-services-link" href="/services/" aria-current={isCurrent("/services/")}>
                {"Full Menu & Service Guide "}
                <span>
                  →
                </span>
              </Link>
            </div>
          </div>
          <Link href="/#reviews">
            Reviews
          </Link>
          <Link href="/blog/" aria-current={isCurrent("/blog/")}>
            Blog
          </Link>
          <Link href="/#why">
            Why Element
          </Link>
          <Link href="/salon-policy/" aria-current={isCurrent("/salon-policy/")}>
            Salon Policy
          </Link>
          <Link href="/locations/" aria-current={isCurrent("/locations/")}>
            Locations
          </Link>
          <Link href="/#visit">
            Visit
          </Link>
        </nav>
        <Link className="header-book" href="/booking/" aria-current={isCurrent("/booking/")}>
          Book now
        </Link>
        <details className="mobile-menu">
          <summary>
            Menu
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/" aria-current={isCurrent("/")}>
              Home
            </Link>
            <Link href="/menu/" aria-current={isCurrent("/menu/")}>
              {"Menu & Pricing"}
            </Link>
            <details className="mobile-services">
              <summary>
                {"Services "}
                <span>
                  +
                </span>
              </summary>
              <div>
                <Link href="/services/" aria-current={isCurrent("/services/")}>
                  {"All Services & Pricing"}
                </Link>
                <Link href="/services/acrylic-nails/" aria-current={isCurrent("/services/acrylic-nails/")}>
                  Acrylic Nails
                </Link>
                <Link href="/services/builder-gel-nails/" aria-current={isCurrent("/services/builder-gel-nails/")}>
                  Builder Gel Nails
                </Link>
                <Link href="/services/dip-powder-nails/" aria-current={isCurrent("/services/dip-powder-nails/")}>
                  Dip Powder / SNS Nails
                </Link>
                <Link href="/services/gel-x-nails/" aria-current={isCurrent("/services/gel-x-nails/")}>
                  Aprés Gel-X Full Set
                </Link>
                <Link href="/services/nail-art/" aria-current={isCurrent("/services/nail-art/")}>
                  {"Custom Nail Art & Designs"}
                </Link>
                <details className="mobile-spa-services">
                  <summary>
                    {"Spa Pedicure "}
                    <span>
                      +
                    </span>
                  </summary>
                  <div>
                    <Link className="featured-service" href="/services/organic-deluxe-pedicure/" aria-current={isCurrent("/services/organic-deluxe-pedicure/")}>
                      Organic Spa Pedicure
                    </Link>
                    <Link className="" href="/services/deluxe-pedicure/" aria-current={isCurrent("/services/deluxe-pedicure/")}>
                      Deluxe Pedicure
                    </Link>
                    <Link className="" href="/services/pearl-spa-pedicure/" aria-current={isCurrent("/services/pearl-spa-pedicure/")}>
                      Pearl Spa Pedicure
                    </Link>
                    <Link className="" href="/services/jelly-spa-pedicure/" aria-current={isCurrent("/services/jelly-spa-pedicure/")}>
                      Jelly Spa Pedicure
                    </Link>
                    <Link className="" href="/services/cbd-rejuvenating-pedicure/" aria-current={isCurrent("/services/cbd-rejuvenating-pedicure/")}>
                      CBD Experience Pedicure
                    </Link>
                    <Link className="" href="/services/24k-gold-enchantment-pedicure/" aria-current={isCurrent("/services/24k-gold-enchantment-pedicure/")}>
                      Gold Enchantment Pedicure
                    </Link>
                  </div>
                </details>
              </div>
            </details>
            <Link href="/#reviews">
              Reviews
            </Link>
            <Link href="/blog/" aria-current={isCurrent("/blog/")}>
              Blog
            </Link>
            <Link href="/#why">
              Why Element
            </Link>
            <Link href="/salon-policy/" aria-current={isCurrent("/salon-policy/")}>
              Salon Policy
            </Link>
            <Link href="/#visit">
              Visit
            </Link>
          </nav>
        </details>
      </header>
  );
}
