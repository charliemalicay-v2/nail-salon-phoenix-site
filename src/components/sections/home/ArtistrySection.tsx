import Link from "next/link";

export default function ArtistrySection() {
  return (
      <section className="artistry-section">
        <div className="artistry-heading">
          <p className="eyebrow">
            The Work
          </p>
          <h2>
            Proof is in the details.
          </h2>
          <Link className="line-link dark" href="/services/nail-art/">
            {"Explore custom nail art "}
            <span>
              →
            </span>
          </Link>
        </div>
        <div className="art-grid">
          <figure>
            <Link href="/services/nail-art/">
              <img src="/media/images/tortoiseshell-nail-art-phoenix.webp" alt="Brown tortoiseshell custom nail art at Element Nail Bar Phoenix" width="900" height="900" loading="lazy" />
              <figcaption>
                Explore custom nail art
              </figcaption>
            </Link>
          </figure>
          <figure>
            <Link href="/services/nail-art/">
              <img src="/media/images/custom-nail-art-editorial-phoenix.webp" alt="Custom nail art at Element Nail Bar in Phoenix" width="900" height="900" loading="lazy" />
              <figcaption>
                Explore custom nail art
              </figcaption>
            </Link>
          </figure>
          <figure>
            <Link href="/services/builder-gel-nails/">
              <img src="/media/images/builder-gel-editorial-phoenix.webp" alt="Editorial image of a natural milky nude Builder Gel manicure" width="900" height="900" loading="lazy" />
              <figcaption>
                Explore Builder Gel nails
              </figcaption>
            </Link>
          </figure>
        </div>
      </section>
  );
}
