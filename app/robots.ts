import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*.woff2$"],
    },
    sitemap: "https://qeemahcar.com/sitemap.xml", // في موقع بيعها كاش خليه ba3hacash.com
  };
}
