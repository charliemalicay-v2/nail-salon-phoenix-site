import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import CmsPublicHeroSection from "@/components/sections/contact/CmsPublicHeroSection";
import CmsPublicBlocks from "@/components/sections/contact/CmsPublicBlocks";

export const metadata: Metadata = {
  "title": "Contact Element Nail Bar | 16th Street Phoenix",
  "description": "Call, email or get directions to Element Nail Bar at 6022 N 16th St, Phoenix, AZ 85016. View salon hours and reserve an appointment.",
  "keywords": "contact Element Nail Bar,nail salon 6022 N 16th St Phoenix",
  "alternates": {
    "canonical": "https://nailsalonphoenix.com/contact/"
  },
  "openGraph": {
    "title": "Contact Element Nail Bar · 16th Street",
    "description": "Contact or visit Element Nail Bar at 6022 N 16th St in Phoenix.",
    "url": "https://nailsalonphoenix.com/contact/",
    "type": "website",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Contact Element Nail Bar · 16th Street",
    "description": "Contact or visit Element Nail Bar at 6022 N 16th St in Phoenix.",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp"
    ]
  }
};

const jsonLd0 = {"@context":"https://schema.org","@graph":[{"@type":"ContactPage","@id":"https://nailsalonphoenix.com/contact/#page","name":"Contact Element Nail Bar | 16th Street Phoenix","description":"Call, email or get directions to Element Nail Bar at 6022 N 16th St, Phoenix, AZ 85016. View salon hours and reserve an appointment.","url":"https://nailsalonphoenix.com/contact/","isPartOf":{"@id":"https://nailsalonphoenix.com/#website"},"about":{"@id":"https://nailsalonphoenix.com/#salon"},"breadcrumb":{"@id":"https://nailsalonphoenix.com/contact/#breadcrumbs"}},{"@type":"BreadcrumbList","@id":"https://nailsalonphoenix.com/contact/#breadcrumbs","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nailsalonphoenix.com/"},{"@type":"ListItem","position":2,"name":"Contact","item":"https://nailsalonphoenix.com/contact/"}]},{"@type":"NailSalon","@id":"https://nailsalonphoenix.com/#salon","name":"Element Nail Bar — 16th Street","url":"https://nailsalonphoenix.com/","telephone":"+1-602-607-5686","email":"contact@elementnailbar.com","image":"https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp","address":{"@type":"PostalAddress","streetAddress":"6022 N 16th St","addressLocality":"Phoenix","addressRegion":"AZ","postalCode":"85016","addressCountry":"US"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:30","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"10:00","closes":"17:00"}],"hasMap":"https://www.google.com/maps/dir/?api=1&destination=Element+Nail+Bar%2C+6022+N+16th+St%2C+Phoenix%2C+AZ+85016","potentialAction":{"@type":"ReserveAction","target":"https://nailsalonphoenix.com/booking/"}}]};

export default function Page() {
  return (
    <SiteFrame className="cms-public-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <CmsPublicHeroSection />
      <CmsPublicBlocks />
    </SiteFrame>
  );
}
