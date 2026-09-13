import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects
    .filter((project) => project.featured)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    }));

  return [{ url: siteUrl, lastModified: new Date() }, ...projectEntries];
}
