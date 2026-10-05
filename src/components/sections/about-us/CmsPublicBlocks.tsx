import Link from "next/link";

export default function CmsPublicBlocks() {
  return (
      <div className="cms-public-blocks">
        <section className="cms-public-block feature">
          <picture className="responsive-local-picture">
            <img className="responsive-local-image" src="/media/images/element-nail-bar-phoenix-interior.webp" srcSet="/media/images/element-nail-bar-phoenix-interior.webp 1400w" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1000px) calc(100vw - 40px), 620px" alt="Interior of Element Nail Bar at 6022 N 16th St in Phoenix" width="1400" height="1400" loading="lazy" fetchPriority="auto" decoding="async" />
          </picture>
          <div>
            <p className="eyebrow">
              Element Nail Bar · Phoenix
            </p>
            <h2>
              Specialized services in one 85016 salon.
            </h2>
            <div className="cms-rich-body">
              <p>
                Guests visit Element 16 for relaxing spa pedicures, custom nail art and detailed nail designs, along with Builder Gel, Aprés Gel-X, acrylic nails, dip powder and manicures. Our team helps each guest choose the service that fits the current nails and desired result.
              </p>
            </div>
            <Link className="line-link dark" href="/menu/">
              {"View menu and pricing "}
              <span>
                →
              </span>
            </Link>
          </div>
        </section>
        <section className="cms-public-block ">
          <div>
            <p className="eyebrow">
              The Element Standard
            </p>
            <h2>
              A clear service plan.
            </h2>
            <div className="cms-rich-body">
              <p>
                Ask the salon directly for its current cleaning, sanitation and single-use-item procedures. Before work begins, review the service, shape, design and starting price so expectations are clear.
              </p>
            </div>
            <Link className="line-link dark" href="/salon-policy/">
              {"Read salon policies "}
              <span>
                →
              </span>
            </Link>
          </div>
        </section>
        <section className="cms-public-cta">
          <p className="eyebrow">
            Visit Element 16
          </p>
          <h2>
            Find us on North 16th Street.
          </h2>
          <div className="cms-rich-body">
            <p>
              Element Nail Bar is located at 6022 N 16th St, Phoenix, AZ 85016, with free on-site parking. Walk-ins are welcome and appointments are recommended.
            </p>
          </div>
          <a className="button brass" href="/booking/">
            Book your visit
          </a>
        </section>
      </div>
  );
}
