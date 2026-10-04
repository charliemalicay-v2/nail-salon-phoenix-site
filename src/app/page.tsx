import type { Metadata } from "next";
import SiteFrame from "@/components/layout/SiteFrame";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import ProofStripSection from "@/components/sections/home/ProofStripSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";
import RitualSection from "@/components/sections/home/RitualSection";
import WhySection from "@/components/sections/home/WhySection";
import ArtistrySection from "@/components/sections/home/ArtistrySection";
import BookingBannerSection from "@/components/sections/home/BookingBannerSection";
import VisitSection from "@/components/sections/home/VisitSection";
import AreasSection from "@/components/sections/home/AreasSection";
import IntroSection2 from "@/components/sections/home/IntroSection2";
import FaqSection from "@/components/sections/home/FaqSection";

export const metadata: Metadata = {
  "title": "Nail Salon in Phoenix, AZ | Pedicures, Gel-X & Builder Gel",
  "description": "Visit Element Nail Bar at 6022 N 16th St for spa pedicures, Builder Gel, Aprés Gel-X, acrylic nails and custom nail art in Phoenix.",
  "keywords": "nail salon Phoenix,pedicure Phoenix,Gel-X Phoenix,Builder Gel Phoenix",
  "alternates": {
    "canonical": "https://nailsalonphoenix.com/"
  },
  "openGraph": {
    "title": "Element Nail Bar · 16th Street Phoenix",
    "description": "Specialist nail services, restorative pedicures and clear service planning in Phoenix.",
    "url": "https://nailsalonphoenix.com/",
    "type": "website",
    "images": [
      "https://nailsalonphoenix.com/media/images/gel-x-nails-phoenix-optimized.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Element Nail Bar · 16th Street Phoenix",
    "description": "Specialist nail services, restorative pedicures and clear service planning in Phoenix.",
    "images": [
      "https://nailsalonphoenix.com/media/images/gel-x-nails-phoenix-optimized.webp"
    ]
  }
};

const jsonLd0 = {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://elementnailbar.com/#organization","name":"Element Nail Bar","url":"https://elementnailbar.com/","logo":"https://nailsalonphoenix.com/media/images/element-nail-bar-official-logo.png","sameAs":["https://www.instagram.com/element_nail_bar/"]},{"@type":"NailSalon","@id":"https://nailsalonphoenix.com/#salon","name":"Element Nail Bar — 16th Street","alternateName":"Element Nail Bar Phoenix","description":"Artist-led nail salon in Phoenix offering spa pedicures, Builder Gel, Aprés Gel-X, dip, acrylic and nail design services.","url":"https://nailsalonphoenix.com/","telephone":"+16026075686","email":"contact@elementnailbar.com","image":["https://nailsalonphoenix.com/media/images/floral-gel-x-nails-phoenix.webp","https://nailsalonphoenix.com/media/images/tortoiseshell-nail-art-phoenix.webp","https://nailsalonphoenix.com/media/images/blue-floral-nail-art-phoenix.webp"],"address":{"@type":"PostalAddress","streetAddress":"6022 N 16th St","addressLocality":"Phoenix","addressRegion":"AZ","postalCode":"85016","addressCountry":"US"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:30","closes":"19:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Sunday","opens":"10:00","closes":"17:00"}],"areaServed":[{"@type":"Place","name":"Phoenix"},{"@type":"Place","name":"Phoenix 85016"},{"@type":"Place","name":"Uptown Phoenix"},{"@type":"Place","name":"Madison"},{"@type":"Place","name":"North Central Phoenix"},{"@type":"Place","name":"Biltmore"},{"@type":"Place","name":"Camelback Corridor"},{"@type":"Place","name":"Camelback East"},{"@type":"Place","name":"Piestewa Peak"},{"@type":"Place","name":"Dreamy Draw"},{"@type":"Place","name":"Midtown Phoenix"},{"@type":"Place","name":"Sunnyslope"},{"@type":"Place","name":"North Mountain"}],"hasMap":"https://www.google.com/maps/search/?api=1&query=Element+Nail+Bar+6022+N+16th+St+Phoenix+AZ+85016","parentOrganization":{"@id":"https://elementnailbar.com/#organization"},"brand":{"@id":"https://elementnailbar.com/#organization"},"sameAs":["https://www.instagram.com/element_nail_bar/","https://elementnailbar.com/locations/16th-street"],"amenityFeature":[{"@type":"LocationFeatureSpecification","name":"Free on-site parking","value":true},{"@type":"LocationFeatureSpecification","name":"Walk-ins welcome","value":true}],"knowsAbout":["Spa pedicures","Nail design","Builder Gel","Aprés Gel-X","Dip nails","Color Acrylic","Manicures"],"makesOffer":[{"@type":"Offer","url":"https://nailsalonphoenix.com/services/spa-pedicures/","itemOffered":{"@type":"Service","name":"Spa Pedicures","description":"Eight online-booking options. Classic Pedicure $35 · 25 minutes · 5-min massage; Deluxe Pedicure $49 · 40 minutes · 8-min massage; Organic Spa Pedicure $65 · 50 minutes · 12-min massage; Pearl Spa Pedicure $75 · 60 minutes · 12-min massage; Róse Berry Pedicure $85 · 65 minutes · 20-min massage; Jelly Spa Pedicure $90 · 70 minutes · 20-min massage; CBD Experience Pedicure $105 · 75 minutes · 25-min massage; Gold Enchantment Pedicure $120 · 85 minutes · 30-min massage. Regular polish is included.","image":"https://nailsalonphoenix.com/media/images/spa-pedicure-area-phoenix-optimized.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}},{"@type":"Offer","url":"https://nailsalonphoenix.com/services/nail-art/","itemOffered":{"@type":"Service","name":"Nail Design Add-Ons","description":"[Design] $10+ · 15 min; Design Nails $15+ · 15 min","image":"https://nailsalonphoenix.com/media/images/custom-nail-art-editorial-phoenix.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}},{"@type":"Offer","url":"https://nailsalonphoenix.com/services/builder-gel-nails/","itemOffered":{"@type":"Service","name":"Builder Gel","description":"Builder Gel Full Set $70+ · 60 min; Builder Gel Fill $60+ · 60 min; Builder Gel Manicure $70+ · 55 min","image":"https://nailsalonphoenix.com/media/images/builder-gel-editorial-phoenix.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}},{"@type":"Offer","url":"https://nailsalonphoenix.com/services/gel-x-nails/","itemOffered":{"@type":"Service","name":"Aprés Gel-X","description":"Aprés Gel-X Full Set $75+ · 75 min","image":"https://nailsalonphoenix.com/media/images/gel-x-nails-phoenix-optimized.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}},{"@type":"Offer","url":"https://nailsalonphoenix.com/services/acrylic-nails/","itemOffered":{"@type":"Service","name":"Color Acrylic","description":"Color Acrylic Full Set $60+ · 60 min; Color Acrylic Fill $50+ · 60 min","image":"https://nailsalonphoenix.com/media/images/acrylic-nails-phoenix-optimized.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}},{"@type":"Offer","url":"https://nailsalonphoenix.com/services/dip-powder-nails/","itemOffered":{"@type":"Service","name":"Dip Nails","description":"Dip Full Set $65+ · 60 min; Dip Manicure $65+ · 60 min","image":"https://nailsalonphoenix.com/media/images/dip-powder-editorial-phoenix.webp","provider":{"@id":"https://nailsalonphoenix.com/#salon"},"areaServed":{"@type":"City","name":"Phoenix"}}}]},{"@type":"WebSite","@id":"https://nailsalonphoenix.com/#website","url":"https://nailsalonphoenix.com/","name":"Element Nail Bar — 16th Street","inLanguage":"en-US","publisher":{"@id":"https://nailsalonphoenix.com/#salon"}},{"@type":"WebPage","@id":"https://nailsalonphoenix.com/#webpage","url":"https://nailsalonphoenix.com/","name":"Nail Salon in Phoenix, AZ | Pedicures, Gel-X & Builder Gel","description":"Visit Element Nail Bar at 6022 N 16th St for spa pedicures, Builder Gel, Aprés Gel-X, acrylic nails and custom nail art in Phoenix.","isPartOf":{"@id":"https://nailsalonphoenix.com/#website"},"about":{"@id":"https://nailsalonphoenix.com/#salon"},"mainEntity":{"@id":"https://nailsalonphoenix.com/#salon"}},{"@type":"FAQPage","@id":"https://nailsalonphoenix.com/#faq","mainEntity":[{"@type":"Question","name":"Where is Element Nail Bar on 16th Street in Phoenix?","acceptedAnswer":{"@type":"Answer","text":"Element Nail Bar is located at 6022 N 16th St, Phoenix, AZ 85016, just north of Bethany Home Road. Our Phoenix nail salon is convenient to SR-51, Uptown Phoenix, Biltmore, Piestewa Peak and the Camelback Corridor."}},{"@type":"Question","name":"What are the salon hours at the Phoenix 16th Street location?","acceptedAnswer":{"@type":"Answer","text":"Our 16th Street nail salon is open Monday through Saturday from 9:30 AM to 7:00 PM and Sunday from 10:00 AM to 5:00 PM."}},{"@type":"Question","name":"Do you accept walk-ins or should I book a nail appointment?","acceptedAnswer":{"@type":"Answer","text":"Walk-ins are welcome when a nail artist is available. We recommend booking ahead for afternoons, weekends, specialty nail services and appointments for multiple guests."}},{"@type":"Question","name":"Which nail services do you offer in Phoenix?","acceptedAnswer":{"@type":"Answer","text":"Our Phoenix nail salon offers spa pedicures, manicures, Builder Gel, Aprés Gel-X extensions, dip powder or SNS nails, acrylic nails and custom nail art. Visit our service menu for current options and pricing."}},{"@type":"Question","name":"What is included in the Organic Spa Pedicure?","acceptedAnswer":{"@type":"Answer","text":"Organic Spa Pedicure is listed at $65 for 50 minutes with a 12-minute massage. Regular polish is included; optional add-ons are selected separately."}},{"@type":"Question","name":"Do you offer Builder Gel and Gel-X nails near Biltmore and Uptown Phoenix?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our nail artists provide Builder Gel overlays and Aprés Gel-X extensions at our 16th Street salon, minutes from Biltmore and Uptown Phoenix. We match specialty appointments with artists experienced in the requested technique."}},{"@type":"Question","name":"Where can I ask about current sanitation procedures?","acceptedAnswer":{"@type":"Answer","text":"Call the front desk for current cleaning and sanitation details before your appointment."}},{"@type":"Question","name":"Is free parking available at the 16th Street nail salon?","acceptedAnswer":{"@type":"Answer","text":"Yes. Free on-site parking is available directly at Element Nail Bar, 6022 N 16th St in Phoenix."}},{"@type":"Question","name":"What Phoenix neighborhoods does this Element Nail Bar serve?","acceptedAnswer":{"@type":"Answer","text":"Our 85016 location regularly welcomes guests from Phoenix, Uptown, Biltmore, Piestewa Peak, Arcadia Lite, Camelback East and nearby neighborhoods."}}]}]};

export default function Page() {
  return (
    <SiteFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <HeroSection />
      <IntroSection />
      <ProofStripSection />
      <ServicesSection />
      <ReviewsSection />
      <RitualSection />
      <WhySection />
      <ArtistrySection />
      <BookingBannerSection />
      <VisitSection />
      <AreasSection />
      <IntroSection2 />
      <FaqSection />
    </SiteFrame>
  );
}
