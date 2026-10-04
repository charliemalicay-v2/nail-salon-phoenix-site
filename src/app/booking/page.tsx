import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";

export const metadata: Metadata = {
  title: "Book a Nail Appointment in Phoenix | Element Nail Bar",
  description:
    "Book a pedicure, Builder Gel, Gel-X, acrylic, dip powder or nail art appointment at Element Nail Bar, 6022 N 16th St in Phoenix, AZ.",
  openGraph: {
    title: "Reserve My Experience | Element Nail Bar",
    description: "Reserve your nail or spa pedicure appointment at Element Nail Bar on 16th Street in Phoenix.",
    url: "https://nailsalonphoenix.com/booking/",
    type: "website",
    images: ["/media/images/book-now-hero-wide.webp"],
  },
};

// The original /booking/ page is a separate live app backed by /api/v1/booking-catalog.
// This clone does not reimplement that backend, so the page hands off to the live booking system.
const LIVE_BOOKING_URL = "https://nailsalonphoenix.com/booking/";

export default function BookingPage() {
  return (
    <SiteFrame>
    <section className="intro-section">
      <div>
        <p className="eyebrow">Element Nail Bar · 16th Street</p>
        <h1>Book your appointment.</h1>
        <p>
          Online booking runs on the live Element 16 reservation system. Choose your services, add any
          removal or nail-art time, and pick a time that works for you.
        </p>
        <p>
          <a className="button brass" href={LIVE_BOOKING_URL}>
            Continue to online booking
          </a>{" "}
          <a className="line-link" href="tel:+16026075686">
            Or call 602-607-5686
          </a>
        </p>
      </div>
    </section>
    </SiteFrame>
  );
}
