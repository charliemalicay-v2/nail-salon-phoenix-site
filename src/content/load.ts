import fs from "node:fs";
import path from "node:path";
import index from "./index.json";
import routes from "./routes.json";

// Content for the area guides, blog posts and blog index. The files are generated from captured pages
// (see README) and are only ever read on the server.

export type Family = "area" | "article" | "blog-index";

export type PageContent = {
  route: string;
  family: Family;
  className: string;
  meta: Record<string, unknown>;
  jsonLd: unknown[];
  html: string;
};

export type PageIndexEntry = { name: string; route: string; family: Family };

export const pageIndex = index as PageIndexEntry[];

/** Every route this site serves; internal links to anything else point at the live site. */
export const knownRoutes = new Set<string>(routes);

const pagesDir = path.join(process.cwd(), "src", "content", "pages");

/** File name of page N of a paginated listing: page 1 is the base name, page N is `<base>__pN`. */
export function pageName(base: string, page: string | string[] | undefined): string {
  const n = Number(Array.isArray(page) ? page[0] : page);
  return Number.isInteger(n) && n > 1 ? `${base}__p${n}` : base;
}

export function loadPage(name: string): PageContent | null {
  if (!/^[a-z0-9_-]+$/i.test(name)) return null;
  const file = path.join(pagesDir, `${name}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as PageContent;
}
