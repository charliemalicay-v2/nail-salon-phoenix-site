import Link from "next/link";

export default function IntroSection2() {
  return (
      <section className="intro-section" aria-labelledby="north-phoenix-home-title">
        <div className="intro-mark">
          N
        </div>
        <div>
          <p className="eyebrow">
            Planning From North Phoenix
          </p>
          <h2 id="north-phoenix-home-title">
            One Central Phoenix salon. Several honest starting points.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Element Nail Bar — 16th Street is the verified salon at 6022 N 16th St, not a second storefront in North Phoenix. Start with our Phoenix area-guide directory or North Phoenix planning hub to choose the page that matches your real origin.
          </p>
          <Link className="line-link dark" href="/locations/">
            {"Open area guides "}
            <span>
              →
            </span>
          </Link>
        </div>
      </section>
  );
}
