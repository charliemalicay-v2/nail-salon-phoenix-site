import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";
import "./editorial.css";

// Light weight of the brand serif for large display type (the self-hosted file in globals.css covers 400-700).
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });

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

// Runs before first paint: turns on the motion styles unless the visitor prefers reduced motion. Every "hidden until
// animated" state in editorial.css is scoped to html.motion, so without this nothing is ever hidden.
const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion")}catch(e){}`;

// The page chrome (header, footer, …) lives in <SiteFrame>, which each page renders around its own content.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={display.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
