import SiteFrame from "@/components/layout/SiteFrame";
import HtmlContent from "@/components/content/HtmlContent";
import type { PageContent } from "@/content/load";

/** A data-driven page: site frame + structured data + the captured markup. */
export default function ContentPage({ page }: { page: PageContent }) {
  return (
    <SiteFrame className={page.className}>
      {page.jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <HtmlContent html={page.html} />
    </SiteFrame>
  );
}
