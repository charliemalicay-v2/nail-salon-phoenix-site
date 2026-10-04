import Link from "next/link";

export default function AreaGuideDisclosureSection2() {
  return (
      <section className="area-guide-disclosure" aria-labelledby="north-phoenix-directory-title">
        <p className="eyebrow">
          North Phoenix appointment planning
        </p>
        <h2 id="north-phoenix-directory-title">
          Coming from farther north?
        </h2>
        <p>
          <Link href="/north-phoenix/">
            <strong>
              Start with the North Phoenix guide.
            </strong>
          </Link>
          {" It separates close-in mountain neighborhoods, Phoenix urban villages, and longer trips so you can choose the page that best matches your starting point."}
        </p>
      </section>
  );
}
