import Link from "next/link";

export default function AuthorityAreaSection3() {
  return (
      <section className="authority-area-section">
        <header>
          <p className="eyebrow">
            North Phoenix urban villages and communities
          </p>
          <h2>
            Choose the area that matches the real starting point.
          </h2>
          <p>
            Deer Valley, Paradise Valley Village within Phoenix, Desert View, and Desert Ridge cover different parts of the city and may use different routes.
          </p>
        </header>
        <div className="authority-area-grid">
          <Link href="/deer-valley-village/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/2f190c68-Phoenix_Deer_Valley_Airport_-_USGS_30_April_1997.jpg" srcSet="/assets/wikimedia/2f190c68-Phoenix_Deer_Valley_Airport_-_USGS_30_April_1997.jpg 1650w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Phoenix Deer Valley Airport aerial view, representing the Deer Valley Village visit guide" width="1650" height="750" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Phoenix urban village
              </span>
              <h3>
                Deer Valley Village
              </h3>
              <p>
                Plan an appointment from Deer Valley Village to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/paradise-valley-village-phoenix/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/993f129c-1280px-2014-_Lookout_Mountain_from_Shadow_Mountain-_Phoenix_Mountain_P" srcSet="/assets/wikimedia/993f129c-1280px-2014-_Lookout_Mountain_from_Shadow_Mountain-_Phoenix_Mountain_P 1280w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Lookout Mountain viewed from Shadow Mountain in Phoenix, representing the Paradise Valley Village within Phoenix visit guide" width="1280" height="853" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Phoenix urban village
              </span>
              <h3>
                Paradise Valley Village, Phoenix
              </h3>
              <p>
                Plan an appointment from Paradise Valley Village, Phoenix to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/desert-view-village/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/b258e036-1280px-Phoenix_skyline_Arizona_USA.jpg" srcSet="/assets/wikimedia/b258e036-1280px-Phoenix_skyline_Arizona_USA.jpg 1200w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Phoenix skyline, representing the Desert View Village planning context visit guide" width="1200" height="879" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                Phoenix urban village
              </span>
              <h3>
                Desert View Village
              </h3>
              <p>
                Plan an appointment from Desert View Village to Element Nail Bar — 16th Street at 6022 N 16th St.
              </p>
              <strong>
                {"Plan the visit "}
                <b aria-hidden="true">
                  →
                </b>
              </strong>
            </div>
          </Link>
          <Link href="/desert-ridge/" className="authority-area-card">
            <picture className="responsive-local-picture">
              <img className="responsive-local-image" src="/assets/wikimedia/2f190c68-Phoenix_Deer_Valley_Airport_-_USGS_30_April_1997.jpg" srcSet="/assets/wikimedia/2f190c68-Phoenix_Deer_Valley_Airport_-_USGS_30_April_1997.jpg 1650w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc((100vw - 68px) / 2), (min-width: 1500px) 345px, 420px" alt="Phoenix Deer Valley Airport aerial view, representing the Desert Ridge route context within northern Phoenix visit guide" width="1650" height="750" loading="lazy" fetchPriority="auto" decoding="async" />
            </picture>
            <div>
              <span>
                community
              </span>
              <h3>
                Desert Ridge
              </h3>
              <p>
                Plan an appointment from Desert Ridge to Element Nail Bar — 16th Street at 6022 N 16th St.
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
