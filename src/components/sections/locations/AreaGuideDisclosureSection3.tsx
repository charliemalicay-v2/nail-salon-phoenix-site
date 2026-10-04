import Link from "next/link";

export default function AreaGuideDisclosureSection3() {
  return (
      <section className="area-guide-disclosure" aria-labelledby="locations-secondary-services">
        <p className="eyebrow">
          Plan enhancements and extensions
        </p>
        <h2 id="locations-secondary-services">
          Builder Gel and Gel-X need different appointment details.
        </h2>
        <p>
          For Builder Gel or BIAB, identify the product already on the nails and whether the visit involves a new overlay, maintenance, removal, or repairs.
        </p>
        <p>
          <Link href="/services/builder-gel-nails/">
            <strong>
              Plan Builder Gel or BIAB
            </strong>
          </Link>
        </p>
        <h3>
          For Gel-X, describe the complete new set.
        </h3>
        <p>
          Include old-product removal, desired length and shape, repairs, finish, and design complexity when they apply.
        </p>
        <p>
          <Link href="/services/gel-x-nails/">
            <strong>
              Plan an Aprés Gel-X set
            </strong>
          </Link>
        </p>
        <h3>
          Reserve first, then check the route.
        </h3>
        <p>
          Complete the appointment details through the booking flow and use live directions to 6022 N 16th St shortly before leaving.
        </p>
      </section>
  );
}
