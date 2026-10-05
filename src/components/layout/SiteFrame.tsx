import Announcement from "@/components/layout/Announcement";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActions from "@/components/layout/MobileActions";

// The original wraps every page in <main id="top"> and gives it a page-specific class (menu-page, services-page,
// blog-article-page, …). Much of its CSS keys off that class, so each page passes its own.
// (The old fixed "Menu" tab on the right edge is gone: the header's Menu button opens the full-screen menu.)
export default function SiteFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <main id="top" className={className}>
      <Announcement />
      <Header />
      {children}
      <Footer />
      <MobileActions />
    </main>
  );
}
