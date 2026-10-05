import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Where the booking app runs, and the public address it believes it is served from (it checks the Origin / Referer of
// state-changing requests against it). See README, "Booking".
const BOOKING_ORIGIN = (process.env.BOOKING_ORIGIN || "https://nailsalonphoenix.com").replace(/\/+$/, "");
const BOOKING_PUBLIC_ORIGIN = (process.env.BOOKING_PUBLIC_ORIGIN || "https://nailsalonphoenix.com").replace(/\/+$/, "");

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // The booking app's API: forward to the booking app, presenting the origin it expects.
  if (pathname.startsWith("/api/")) {
    const headers = new Headers(request.headers);
    if (headers.has("origin")) headers.set("origin", BOOKING_PUBLIC_ORIGIN);
    const referer = headers.get("referer");
    if (referer) {
      try {
        headers.set("referer", BOOKING_PUBLIC_ORIGIN + new URL(referer).pathname + new URL(referer).search);
      } catch {
        headers.delete("referer");
      }
    }
    return NextResponse.rewrite(new URL(pathname + search, BOOKING_ORIGIN), { request: { headers } });
  }

  // Pages use trailing-slash URLs (/menu/, like the original). Next's built-in redirect is turned off in next.config.ts
  // (skipTrailingSlashRedirect) because it would also rewrite the API calls above (/api/v1/events -> /api/v1/events/),
  // which the booking backend rejects. This does the same job for pages only.
  // Next's own client-side requests (prefetches and navigations, marked with ?_rsc or an RSC header) arrive without the
  // trailing slash; redirecting them would loop, so they are left alone. Only browser page loads are redirected.
  const isInternalRequest = request.nextUrl.searchParams.has("_rsc") || request.headers.has("rsc");
  if (pathname === "/" || pathname.endsWith("/") || isInternalRequest) return NextResponse.next();
  // A plain URL, not NextURL: NextURL normalizes the trailing slash away again when it is serialized.
  return NextResponse.redirect(new URL(pathname + "/" + search, request.url), 308);
}

export const config = {
  // The API, plus every page: not the booking page and its assets (rewrites in next.config.ts), Next internals or files.
  matcher: ["/api/:path*", "/((?!api/|assets/|booking|_next/|.*\\..*).*)"],
};
