import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import PolicyHeroSection from "@/components/sections/salon-policy/PolicyHeroSection";
import PolicyQuickSection from "@/components/sections/salon-policy/PolicyQuickSection";
import PolicyMain from "@/components/sections/salon-policy/PolicyMain";

export const metadata: Metadata = {
  "title": "Salon Policy | Element Nail Bar 16th Street Phoenix",
  "description": "Review appointment, cancellation, late-arrival, service refinement, gift-card and guest policies for Element Nail Bar at 6022 N 16th St in Phoenix, AZ.",
  "keywords": "Element Nail Bar salon policy,nail salon cancellation policy Phoenix",
  "alternates": {
    "canonical": "https://nailsalonphoenix.com/salon-policy/"
  },
  "openGraph": {
    "title": "Salon Policy | Element Nail Bar – 16th Street",
    "description": "Clear policies for appointments, cancellations, service refinements and visits to Element Nail Bar in Phoenix.",
    "url": "https://nailsalonphoenix.com/salon-policy/",
    "type": "website",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-official-logo.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Salon Policy | Element Nail Bar – 16th Street",
    "description": "Clear policies for appointments, cancellations, service refinements and visits to Element Nail Bar in Phoenix.",
    "images": [
      "https://nailsalonphoenix.com/media/images/element-nail-bar-official-logo.png"
    ]
  }
};

const jsonLd0 = {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://nailsalonphoenix.com/salon-policy/#webpage","url":"https://nailsalonphoenix.com/salon-policy/","name":"Salon Policy | Element Nail Bar 16th Street","isPartOf":{"@id":"https://nailsalonphoenix.com/#website"},"about":{"@id":"https://nailsalonphoenix.com/#nailsalon"}},{"@type":"BreadcrumbList","@id":"https://nailsalonphoenix.com/salon-policy/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nailsalonphoenix.com/"},{"@type":"ListItem","position":2,"name":"Salon Policy","item":"https://nailsalonphoenix.com/salon-policy/"}]}]};

export default function Page() {
  return (
    <SiteFrame className="policy-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <PolicyHeroSection />
      <PolicyQuickSection />
      <PolicyMain />
    </SiteFrame>
  );
}
