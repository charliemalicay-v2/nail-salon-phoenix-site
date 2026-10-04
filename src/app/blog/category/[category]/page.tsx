import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/content/ContentPage";
import { loadPage, pageIndex, pageName } from "@/content/load";

// Blog category listings (/blog/category/<name>/, paginated with ?page=N like the original).
// Page 1 is src/content/pages/blog_category_<name>.json, page N is blog_category_<name>__pN.json.
export const dynamicParams = false;

const categories = pageIndex
  .filter((p) => /^\/blog\/category\/[^/]+\/$/.test(p.route))
  .map((p) => p.route.slice("/blog/category/".length, -1));

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params, searchParams }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const { category } = await params;
  const { page } = await searchParams;
  const data = loadPage(pageName(`blog_category_${category}`, page));
  return data ? (data.meta as Metadata) : {};
}

export default async function CategoryPage({ params, searchParams }: PageProps<"/blog/category/[category]">) {
  const { category } = await params;
  const { page } = await searchParams;
  const data = loadPage(pageName(`blog_category_${category}`, page));
  if (!data) notFound();
  return <ContentPage page={data} />;
}
