import Link from "next/link";

export default function CmsPublicHeroSection() {
  return (
      <section className="cms-public-hero">
        <div>
          <p className="eyebrow">
            The Original · 16th Street
          </p>
          <h1>
            Nail care with
            <br />
            <em>
              a clear point of view.
            </em>
          </h1>
          <p>
            Element Nail Bar is an artist-led Phoenix nail salon focused on thoughtful service selection, clear service planning and enough appointment time to do the work well.
          </p>
          <Link className="button brass" href="/services/">
            Explore services
          </Link>
        </div>
        <span aria-hidden="true">
          16
        </span>
      </section>
  );
}
