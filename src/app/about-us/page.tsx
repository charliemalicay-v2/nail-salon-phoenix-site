import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import CmsPublicHeroSection from "@/components/sections/about-us/CmsPublicHeroSection";
import CmsPublicBlocks from "@/components/sections/about-us/CmsPublicBlocks";

export const metadata: Metadata = {
  "title": "About Element Nail Bar | Phoenix Nail Salon on 16th Street",
  "description": "Meet Element Nail Bar on 16th Street, an artist-led Phoenix nail salon for spa pedicures, custom nail art, Builder Gel, Gel-X and more.",
  "keywords": "about Element Nail Bar Phoenix,Phoenix nail salon 16th Street",
  "alternates": {
    "canonical": "https://nailsalonphoenix.com/about-us/"
  },
  "openGraph": {
    "title": "About Element Nail Bar · 16th Street",
    "description": "Learn about the services, care standards and Phoenix location of Element Nail Bar.",
    "url": "https://nailsalonphoenix.com/about-us/",
    "type": "website",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "About Element Nail Bar · 16th Street",
    "description": "Learn about the services, care standards and Phoenix location of Element Nail Bar.",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp"
    ]
  }
};

const jsonLd0 = {"@context":"https://schema.org","@graph":[{"@type":"AboutPage","@id":"https://nailsalonphoenix.com/about-us/#page","name":"About Element Nail Bar | Phoenix Nail Salon on 16th Street","description":"Meet Element Nail Bar on 16th Street, an artist-led Phoenix nail salon for spa pedicures, custom nail art, Builder Gel, Gel-X and more.","url":"https://nailsalonphoenix.com/about-us/","isPartOf":{"@id":"https://nailsalonphoenix.com/#website"},"about":{"@id":"https://nailsalonphoenix.com/#salon"},"breadcrumb":{"@id":"https://nailsalonphoenix.com/about-us/#breadcrumbs"}},{"@type":"BreadcrumbList","@id":"https://nailsalonphoenix.com/about-us/#breadcrumbs","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nailsalonphoenix.com/"},{"@type":"ListItem","position":2,"name":"About Us","item":"https://nailsalonphoenix.com/about-us/"}]},{"@type":"NailSalon","@id":"https://nailsalonphoenix.com/#salon","name":"Element Nail Bar — 16th Street","url":"https://nailsalonphoenix.com/","telephone":"+1-602-607-5686","email":"contact@elementnailbar.com","image":"https://nailsalonphoenix.com/media/images/element-nail-bar-phoenix-interior.webp","address":{"@type":"PostalAddress","streetAddress":"6022 N 16th St","addressLocality":"Phoenix","addressRegion":"AZ","postalCode":"85016","addressCountry":"US"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:30","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"10:00","closes":"17:00"}],"hasMap":"https://www.google.com/maps/dir/?api=1&destination=Element+Nail+Bar%2C+6022+N+16th+St%2C+Phoenix%2C+AZ+85016","potentialAction":{"@type":"ReserveAction","target":"https://nailsalonphoenix.com/booking/"}}]};

export default function Page() {
  return (
    <SiteFrame className="cms-public-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <CmsPublicHeroSection />
      <CmsPublicBlocks />
    </SiteFrame>
  );
}
