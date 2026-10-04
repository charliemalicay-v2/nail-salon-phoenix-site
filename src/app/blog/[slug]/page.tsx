import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/content/ContentPage";
import { loadPage, pageIndex } from "@/content/load";

// Blog posts under /blog/<slug>/. Content comes from src/content/pages/blog_<slug>.json.
export const dynamicParams = false;

const slugs = pageIndex.filter((p) => /^\/blog\/[^/]+\/$/.test(p.route)).map((p) => p.route.slice("/blog/".length, -1));

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = loadPage(`blog_${slug}`);
  return page ? (page.meta as Metadata) : {};
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const page = loadPage(`blog_${slug}`);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
