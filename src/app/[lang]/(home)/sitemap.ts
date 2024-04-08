import { LANGUAGE } from "@/constants/lang";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return LANGUAGE.map((el) => ({
    url: `${domain}/${el}`,
    priority: 1,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
