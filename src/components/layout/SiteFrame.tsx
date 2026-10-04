import Announcement from "@/components/layout/Announcement";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActions from "@/components/layout/MobileActions";
import SideMenuButton from "@/components/layout/SideMenuButton";

// The original wraps every page in <main id="top"> and gives it a page-specific class (menu-page, services-page,
// blog-article-page, …). Much of its CSS keys off that class, so each page passes its own.
export default function SiteFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <main id="top" className={className}>
      <SideMenuButton />
      <Announcement />
      <Header />
      {children}
      <Footer />
      <MobileActions />
    </main>
  );
}
