import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/content/ContentPage";
import { loadPage, pageName } from "@/content/load";

// The blog index is paginated with ?page=N (as on the original), so it is rendered per request.
// Page 1 is src/content/pages/blog.json, page N is blog__pN.json.
export async function generateMetadata({ searchParams }: PageProps<"/blog">): Promise<Metadata> {
  const { page } = await searchParams;
  const data = loadPage(pageName("blog", page));
  return data ? (data.meta as Metadata) : {};
}

export default async function BlogIndex({ searchParams }: PageProps<"/blog">) {
  const { page } = await searchParams;
  const data = loadPage(pageName("blog", page));
  if (!data) notFound();
  return <ContentPage page={data} />;
}
