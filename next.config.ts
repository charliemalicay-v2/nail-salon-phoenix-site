import type { NextConfig } from "next";

// The online booking app (page, scripts, stylesheet and /api/v1 backend) is a separate application. It is served
// through this site's own URLs by proxying to wherever that app runs. Today that is the original site, so the
// default works as is. When this site takes over nailsalonphoenix.com, BOOKING_ORIGIN must point at a hostname
// that still reaches the original app (see README, "Booking").
const BOOKING_ORIGIN = (process.env.BOOKING_ORIGIN || "https://nailsalonphoenix.com").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  // The original site uses trailing-slash URLs (/services/, /menu/); keep them so links and SEO paths carry over.
  trailingSlash: true,
  // Next's built-in slash redirect would also rewrite the booking app's API calls (/api/v1/events -> /api/v1/events/),
  // which its backend rejects. It is turned off here and replaced, for pages only, by src/proxy.ts.
  skipTrailingSlashRedirect: true,
  // A package-lock.json exists higher up the tree; pin the root to this project.
  turbopack: { root: process.cwd() },
  async rewrites() {
    return {
      // Before the filesystem, so the booking page wins over anything at /booking in this project.
      beforeFiles: [
        { source: "/booking", destination: `${BOOKING_ORIGIN}/booking/` },
        { source: "/booking/:path*", destination: `${BOOKING_ORIGIN}/booking/:path*` },
      ],
      // After the filesystem, so this project's own files (e.g. /assets/wikimedia/*) are served first.
      afterFiles: [
        { source: "/api/:path*", destination: `${BOOKING_ORIGIN}/api/:path*` },
        { source: "/assets/:path*", destination: `${BOOKING_ORIGIN}/assets/:path*` },
      ],
    };
  },
};

export default nextConfig;
