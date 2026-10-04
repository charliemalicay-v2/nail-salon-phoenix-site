import Link from "next/link";

export default function HeroSection() {
  return (
      <section className="hero" aria-labelledby="hero-title">
        <video className="hero-video" autoPlay muted loop playsInline preload="none" poster="/media/images/element-16th-street-video-poster-optimized.webp?v=20260813" aria-label="Video tour of Element Nail Bar on 16th Street in Phoenix">
          <source src="/media/images/element-16th-street-shop-tour-optimized.mp4?v=20260813" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            Phoenix · Organic Nail Bar
          </p>
          <h1 id="hero-title">
            The nail salon Phoenix
            <br />
            <em>
              returns to.
            </em>
          </h1>
          <p>
            Choose your service. We’ll match you with an artist who specializes in it—then give them the time and clear appointment plan to do it properly.
          </p>
          <div className="hero-actions">
            <Link className="button brass" href="/booking/">
              Reserve Now
            </Link>
            <a className="line-link" href="#services">
              {"Explore services "}
              <span>
                ↘
              </span>
            </a>
          </div>
        </div>
        <span className="hero-video-note">
          Inside Element · 16th Street
        </span>
      </section>
  );
}
