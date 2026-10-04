import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nailsalonphoenix.com"),
  applicationName: "Element Nail Bar – 16th Street",
  icons: {
    icon: [{ url: "/favicon.png" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// The page chrome (header, footer, …) lives in <SiteFrame>, which each page renders around its own content.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
