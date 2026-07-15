const BASE_URL = "https://www.howtocontact.live";

export default async function sitemap() {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/services/browser-solution`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/services/digital-marketing`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/services/pc-laptop-solution`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/services/printer-solution`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/services/software`, lastModified: new Date(), priority: 0.7 },
  ];

  try {
    const res = await fetch("https://a-backend-phi.vercel.app/api/blogs", { cache: "no-store" });
    const data = await res.json();
    const blogs = data?.blogs || data || [];

    const blogRoutes = blogs.map((blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
      priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    return staticRoutes;
  }
}
