import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eco-descarte.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pontos-de-coleta`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/quiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
