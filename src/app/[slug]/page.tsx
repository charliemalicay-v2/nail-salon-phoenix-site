import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/content/ContentPage";
import { loadPage, pageIndex } from "@/content/load";

// Area guides and blog posts that live at the site root (e.g. /gilbert/, /best-jelly-nails-in-phoenix/).
// Content comes from src/content/pages/<slug>.json.
export const dynamicParams = false;

const slugs = pageIndex.filter((p) => /^\/[^/]+\/$/.test(p.route)).map((p) => p.route.slice(1, -1));

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = loadPage(slug);
  return page ? (page.meta as Metadata) : {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = loadPage(slug);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
