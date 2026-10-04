import Link from "next/link";

export default function SimpleMenuSection3() {
  return (
      <section className="simple-menu-section clean" id="enhancements">
        <header>
          <p className="eyebrow">
            {"Structure, Length & Color"}
          </p>
          <h2>
            Nail Enhancements
          </h2>
        </header>
        <div>
          <article>
            <div>
              <h3>
                <Link href="/services/builder-gel-nails/">
                  Builder Gel Full Set
                </Link>
              </h3>
            </div>
            <b>
              $70+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/builder-gel-nails/">
                  Builder Gel Fill
                </Link>
              </h3>
            </div>
            <b>
              $60+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/builder-gel-nails/">
                  Builder Gel Manicure
                </Link>
              </h3>
            </div>
            <b>
              $70+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/gel-x-nails/">
                  Aprés Gel-X Full Set
                </Link>
              </h3>
            </div>
            <b>
              $75+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/dip-powder-nails/">
                  Dip Full Set
                </Link>
              </h3>
            </div>
            <b>
              $65+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/dip-powder-nails/">
                  Dip Manicure
                </Link>
              </h3>
            </div>
            <b>
              $65+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/acrylic-nails/">
                  Color Acrylic Full Set
                </Link>
              </h3>
            </div>
            <b>
              $60+
            </b>
          </article>
          <article>
            <div>
              <h3>
                <Link href="/services/acrylic-nails/">
                  Color Acrylic Fill
                </Link>
              </h3>
            </div>
            <b>
              $50+
            </b>
          </article>
        </div>
      </section>
  );
}
