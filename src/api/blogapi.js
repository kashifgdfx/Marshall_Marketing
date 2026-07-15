const BASE_URL = "https://a-backend-phi.vercel.app/api";

export const fetchBlogs = async (page = 1) => {
    const res = await fetch(`${BASE_URL}/blogs?page=${page}`);

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    return res.json();
};

export const BlogData = async (slug) => {
    const res = await fetch(`${BASE_URL}/blogs/slug/${slug}`);

    if (!res.ok) {
        throw new Error("Failed to fetch blog");
    }

    return res.json();
};