import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import CmsPublicHeroSection from "@/components/sections/faqs/CmsPublicHeroSection";
import CmsPublicBlocks from "@/components/sections/faqs/CmsPublicBlocks";

export const metadata: Metadata = {
  "title": "Element Nail Bar FAQs | Phoenix Nail Appointments & Services",
  "description": "Answers about appointments, pedicures, nail art, removals, pricing, parking and visits to Element Nail Bar on 16th Street in Phoenix.",
  "keywords": "Element Nail Bar FAQ,Phoenix nail salon questions",
  "alternates": {
    "canonical": "https://nailsalonphoenix.com/faqs/"
  },
  "openGraph": {
    "title": "Element Nail Bar FAQs",
    "description": "Helpful answers before your visit to Element Nail Bar in Phoenix.",
    "url": "https://nailsalonphoenix.com/faqs/",
    "type": "website",
    "images": [
      "https://nailsalonphoenix.com/media/images/organic-deluxe-pedicure-phoenix-optimized.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Element Nail Bar FAQs",
    "description": "Helpful answers before your visit to Element Nail Bar in Phoenix.",
    "images": [
      "https://nailsalonphoenix.com/media/images/organic-deluxe-pedicure-phoenix-optimized.webp"
    ]
  }
};

const jsonLd0 = {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://nailsalonphoenix.com/faqs/#page","name":"Element Nail Bar FAQs | Phoenix Nail Appointments & Services","description":"Answers about appointments, pedicures, nail art, removals, pricing, parking and visits to Element Nail Bar on 16th Street in Phoenix.","url":"https://nailsalonphoenix.com/faqs/","isPartOf":{"@id":"https://nailsalonphoenix.com/#website"},"about":{"@id":"https://nailsalonphoenix.com/#salon"},"breadcrumb":{"@id":"https://nailsalonphoenix.com/faqs/#breadcrumbs"},"mainEntity":{"@id":"https://nailsalonphoenix.com/faqs/#faq"}},{"@type":"BreadcrumbList","@id":"https://nailsalonphoenix.com/faqs/#breadcrumbs","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nailsalonphoenix.com/"},{"@type":"ListItem","position":2,"name":"Frequently Asked Questions","item":"https://nailsalonphoenix.com/faqs/"}]},{"@type":"NailSalon","@id":"https://nailsalonphoenix.com/#salon","name":"Element Nail Bar — 16th Street","url":"https://nailsalonphoenix.com/","telephone":"+1-602-607-5686","email":"contact@elementnailbar.com","image":"https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp","address":{"@type":"PostalAddress","streetAddress":"6022 N 16th St","addressLocality":"Phoenix","addressRegion":"AZ","postalCode":"85016","addressCountry":"US"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:30","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"10:00","closes":"17:00"}],"hasMap":"https://www.google.com/maps/dir/?api=1&destination=Element+Nail+Bar%2C+6022+N+16th+St%2C+Phoenix%2C+AZ+85016","potentialAction":{"@type":"ReserveAction","target":"https://nailsalonphoenix.com/booking/"}},{"@type":"FAQPage","@id":"https://nailsalonphoenix.com/faqs/#faq","mainEntity":[{"@type":"Question","name":"Do I need an appointment?","acceptedAnswer":{"@type":"Answer","text":"Walk-ins are welcome, but appointments are recommended—especially for Gel-X, Builder Gel, acrylic, detailed nail art, removals or multiple services."}},{"@type":"Question","name":"How do I choose the right pedicure?","acceptedAnswer":{"@type":"Answer","text":"Use the current Menu to compare eight base pedicures by exact name, price, total duration and included massage length. Regular polish is included, and optional add-ons are selected separately. Call the salon if you need help matching the service to your appointment."}},{"@type":"Question","name":"Should I include removal or nail art when booking?","acceptedAnswer":{"@type":"Answer","text":"Yes. Include existing-product removal, repairs, extra length and nail-art time so the artist has enough time and can confirm the service plan before beginning."}},{"@type":"Question","name":"Where is the salon and is parking available?","acceptedAnswer":{"@type":"Answer","text":"Element Nail Bar is at 6022 N 16th St, Phoenix, AZ 85016. Free on-site parking is available."}},{"@type":"Question","name":"Where can I see current prices?","acceptedAnswer":{"@type":"Answer","text":"The Menu lists current starting prices. Final pricing can vary with length, shape, design, removal and repairs, so confirm the complete service with your artist."}},{"@type":"Question","name":"What is the difference between Builder Gel, Gel-X and acrylic?","acceptedAnswer":{"@type":"Answer","text":"Builder Gel is typically used as a structured overlay on the natural nail. Gel-X uses full-cover soft-gel tips for added length, while acrylic creates a firm sculpted enhancement. The best option depends on your current nails, desired length and maintenance preferences."}},{"@type":"Question","name":"Do you offer dip powder or SNS nails?","acceptedAnswer":{"@type":"Answer","text":"Yes. Dip powder, sometimes called SNS, is available. Include removal when reserving if you already have product on your nails."}},{"@type":"Question","name":"Can I reserve for a group?","acceptedAnswer":{"@type":"Answer","text":"Call the salon before booking a group so the front desk can review the services, timing and available artists for everyone in the party."}},{"@type":"Question","name":"Where can I review salon policies?","acceptedAnswer":{"@type":"Answer","text":"The Salon Policy page explains reservations, cancellations, service adjustments and other visit expectations."}}]}]};

export default function Page() {
  return (
    <SiteFrame className="cms-public-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <CmsPublicHeroSection />
      <CmsPublicBlocks />
    </SiteFrame>
  );
}
