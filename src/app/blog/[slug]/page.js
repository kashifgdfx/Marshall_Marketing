import BlogDetailsWrapper from "@/components/BlogDetailWrapper";
import { BlogData } from "../../../api/blogapi";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await BlogData(slug);
  const blog = res?.blog;

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const seo = blog.seo || {};
  const baseUrl = "https://www.howtocontact.live";
  const canonicalUrl = `${baseUrl}/blog/${slug}`;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords?.join(", ") || blog.tags?.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.metaTitle || blog.title,
      description: seo.metaDescription || blog.excerpt,
      url: canonicalUrl,
      type: "article",
      images: blog.image?.url
        ? [
            {
              url: blog.image.url,
              width: 1200,
              height: 630,
              alt: blog.image.alt || blog.title,
            },
          ]
        : [],
      publishedTime: blog.publishedAt,
      authors: [blog.author?.name || "HowToContact Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: blog.image?.url ? [blog.image.url] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const res = await BlogData(slug);

  if (!res?.blog) {
    notFound();
  }

  return <BlogDetailsWrapper blog={res.blog} />;
};

export default page;
