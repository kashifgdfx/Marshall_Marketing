"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  ArrowRight,
  Clock3,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { fetchBlogs } from "@/api/blogapi";

const BlogWrapper = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
    totalBlogs: 0
  });

  useEffect(() => {
    setLoading(true);
    // API updated to support passing current page parameter
    fetchBlogs(currentPage)
      .then((data) => {
        setBlogs(data.blogs || []);
        if (data.pagination) {
          setPaginationData({
            totalPages: data.pagination.totalPages,
            hasNext: data.pagination.hasNext,
            hasPrev: data.pagination.hasPrev,
            totalBlogs: data.pagination.totalBlogs
          });
        }
        setLoading(false);
        // Scroll to top on page change smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [currentPage]);

  // HANDLERS
  const handlePrevPage = () => {
    if (paginationData.hasPrev) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (paginationData.hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <main className="relative overflow-hidden bg-white min-h-screen">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#76CE68]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#457C3C]/10 blur-3xl pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-28 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#76CE68]/30 bg-[#F7FFF5] px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#348d27]" />
            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#348d27]">
              Latest Blogs
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-[#071405] md:text-7xl">
            Explore Modern
            <span className="bg-gradient-to-r from-[#348d27] to-[#76CE68] bg-clip-text text-transparent">
              {" "} Tech Insights
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Discover expert blogs on cybersecurity, AI solutions,
            printer support, business automation, technical support,
            and enterprise IT innovation.
          </p>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            /* SKELETON LOADING STATE */
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                >
                  {/* IMAGE SKELETON */}
                  <div className="h-[260px] animate-pulse bg-gray-200"></div>

                  {/* CONTENT SKELETON */}
                  <div className="p-7">
                    <div className="h-4 w-24 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="mt-6 h-7 w-4/5 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="mt-5 space-y-3">
                      <div className="h-4 w-full animate-pulse rounded-full bg-gray-200"></div>
                      <div className="h-4 w-5/6 animate-pulse rounded-full bg-gray-200"></div>
                      <div className="h-4 w-4/6 animate-pulse rounded-full bg-gray-200"></div>
                    </div>
                    <div className="mt-8 h-4 w-32 animate-pulse rounded-full bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* BLOG CARDS GRID */
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blog/${blog.slug}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#76CE68]/50 hover:shadow-[0_20px_60px_rgba(52,141,39,0.14)]"
                  >
                    <div>
                      {/* FEATURED TAG */}
                      {blog.isFeatured && (
                        <div className="absolute left-5 top-5 z-20 rounded-full bg-gradient-to-r from-[#76CE68] to-[#348d27] px-4 py-1 text-xs font-semibold text-white shadow-lg">
                          Featured
                        </div>
                      )}

                      {/* IMAGE CONTAINER */}
                      <div className="relative h-[260px] overflow-hidden bg-gray-50">
                        {blog.image?.url ? (
                          <Image
                            src={blog.image.url}
                            alt={blog.image.alt || blog.title || "blog image"}
                            fill
                            sizes="(max-w-7xl) 33vw, 400px"
                            className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                            No Image Available
                          </div>
                        )}
                        {/* IMAGE OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                      </div>

                      {/* CARD CONTENT */}
                      <div className="p-7">
                        {/* META CONTROLS */}
                        <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Clock3 className="h-3.5 w-3.5 text-[#348d27]" />
                            <span>{blog.readTime || 3} min read</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5 text-[#348d27]" />
                            <span>{blog.category || "General"}</span>
                          </div>
                        </div>

                        {/* TITLE */}
                        <h2 className="mt-4 text-xl font-bold leading-snug text-[#071405] transition-all duration-300 group-hover:text-[#348d27] line-clamp-2">
                          {blog.title}
                        </h2>

                        {/* EXCERPT / DESCRIPTION */}
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
                          {blog.excerpt || blog.seo?.metaDescription || "Click to read full detailed guidelines and insights on this topic."}
                        </p>
                      </div>
                    </div>

                    {/* READ MORE CONTAINER AT BOTTOM */}
                    <div className="px-7 pb-7 pt-0">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#348d27]">
                        <span>Read Full Article</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    {/* TOP HOVER LINE */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#76CE68] to-[#348d27] opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                  </Link>
                ))}
              </div>

              {/* PAGINATION UI CONTROLS */}
              {paginationData.totalPages > 1 && (
                <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:justify-between">
                  <p className="text-sm font-medium text-gray-500">
                    Showing Page <span className="font-semibold text-[#071405]">{currentPage}</span> of{" "}
                    <span className="font-semibold text-[#071405]">{paginationData.totalPages}</span> ({paginationData.totalBlogs} articles)
                  </p>

                  <div className="flex items-center gap-3">
                    {/* PREVIOUS BUTTON */}
                    <button
                      onClick={handlePrevPage}
                      disabled={!paginationData.hasPrev}
                      className="inline-flex h-10 items-center gap-1 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>

                    {/* PAGE NUMBERS DISPLAY */}
                    <div className="hidden items-center gap-1.5 md:flex">
                      {Array.from({ length: paginationData.totalPages }, (_, index) => {
                        const pageNum = index + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`h-10 w-10 rounded-xl text-sm font-bold transition-all duration-200 ${
                              currentPage === pageNum
                                ? "bg-[#348d27] text-white shadow-md shadow-[#348d27]/20"
                                : "border border-transparent bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    {/* NEXT BUTTON */}
                    <button
                      onClick={handleNextPage}
                      disabled={!paginationData.hasNext}
                      className="inline-flex h-10 items-center gap-1 rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogWrapper;