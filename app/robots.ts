import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "Google-Display-Ads-Bot", allow: "/" },
    ],
    sitemap: "https://wondly.net/sitemap.xml",
    host: "https://wondly.net",
  };
}
