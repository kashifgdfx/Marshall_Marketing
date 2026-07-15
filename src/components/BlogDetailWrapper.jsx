"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

const BlogDetailWrapper = ({ blog }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h2 className="text-4xl font-bold text-[#071405]">Blog not found</h2>

        <p className="mt-4 max-w-md text-gray-600">
          The article you are looking for does not exist or may have been
          removed.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#348d27] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#193315]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden bg-white custom-padding max-w-[1200px] ">
      {/* BG EFFECTS */}


      {/* HERO */}
      <section className="relative z-10 px-6 pt-24 pb-12">
        <div className="">
          {/* BACK BUTTON */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[#76CE68]/30 bg-[#F7FFF5] px-5 py-2 text-sm font-semibold text-[#348d27] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

        

          {/* TITLE */}
          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[#071405] md:text-5xl">
            {blog.title}
          </h1>

          {/* META */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#348d27]" />

              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#348d27]" />

              <span>{blog.readTime || 5} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      {blog.image?.url && (
        <section className="relative z-10 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={blog.image.url}
                alt={blog.image.alt || blog.title}
                className="h-full  w-full object-cover object-top"
              />
            </div>
          </div>
        </section>
      )}

      {/* BLOG CONTENT */}
      <section className="relative z-10 px-6 py-16">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </section>
    </main>
  );
};

export default BlogDetailWrapper;
