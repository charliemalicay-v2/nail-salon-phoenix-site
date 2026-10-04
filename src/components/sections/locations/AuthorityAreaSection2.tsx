import Link from "next/link";

export default function AuthorityAreaSection2() {
  return (
      <section className="authority-area-section">
        <header>
          <p className="eyebrow">
            Close-in North Phoenix
          </p>
          <h2>
            Use a neighborhood-level guide when it fits.
          </h2>
          <p>
            Moon Valley, Lookout Mountain, Shadow Mountain, Sunnyslope, and North Mountain Village have different route relationships to 6022 N 16th St.
          </p>
        </header>
        <div className="authority-area-grid">
          <Link href="/moon-valley/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M" srcSet="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="North Mountain Park viewed from Shadow Mountain, representing the Moon Valley and the North Mountain context visit guide" width="1200" height="800" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                neighborhood
              </span>
              <h3>
                Moon Valley
              </h3>
              <p>
                Plan an appointment from Moon Valley to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/lookout-mountain/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/993f129c-1280px-2014-_Lookout_Mountain_from_Shadow_Mountain-_Phoenix_Mountain_P" srcSet="/assets/wikimedia/993f129c-1280px-2014-_Lookout_Mountain_from_Shadow_Mountain-_Phoenix_Mountain_P 1280w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Lookout Mountain viewed from Shadow Mountain in Phoenix, representing the Lookout Mountain visit guide" width="1280" height="853" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                neighborhood
              </span>
              <h3>
                Lookout Mountain
              </h3>
              <p>
                Plan an appointment from Lookout Mountain to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/shadow-mountain/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M" srcSet="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="North Mountain Park viewed from Shadow Mountain, representing the Shadow Mountain visit guide" width="1200" height="800" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                neighborhood
              </span>
              <h3>
                Shadow Mountain
              </h3>
              <p>
                Plan an appointment from Shadow Mountain to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/sunnyslope/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/5d7f27e1-1280px-Phoenix-Sunnyslope-Sunnyslope_Rock_Garden-1952-1.jpg" srcSet="/assets/wikimedia/5d7f27e1-1280px-Phoenix-Sunnyslope-Sunnyslope_Rock_Garden-1952-1.jpg 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Sunnyslope Rock Garden, representing the Sunnyslope visit guide" width="1200" height="900" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                neighborhood
              </span>
              <h3>
                Sunnyslope
              </h3>
              <p>
                Plan an appointment from Sunnyslope to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/north-mountain-village/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M" srcSet="/assets/wikimedia/f371fc82-1280px-2014-_View_W_from_Shadow_Mountain-_North_Mountain_Park_in_the_M 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="North Mountain Park viewed from Shadow Mountain, representing the North Mountain Village visit guide" width="1200" height="800" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Phoenix urban village
              </span>
              <h3>
                North Mountain Village
              </h3>
              <p>
                Plan an appointment from North Mountain Village to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
        </div>
      </section>
  );
}
