import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Markup is ported 1:1 from the original site, which uses plain <img> tags with explicit sizing and plain
    // <a href="/booking/"> links (the booking app is a separate, proxied application, so those need a full page load).
    files: ["src/components/**/*.tsx"],
    rules: { "@next/next/no-img-element": "off", "@next/next/no-html-link-for-pages": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Capture, spec and tooling files from the site-duplicator run.
    ".duplicator/**",
  ]),
]);

export default eslintConfig;
