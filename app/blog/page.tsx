import Link from "next/link";
import GridBackground from "@/components/blog/GridBackground";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import PostCard from "@/components/blog/PostCard";
import { MOCK_BLOG_POSTS } from "@/data/blog";

export default function BlogListingPage() {
    const featuredPost = MOCK_BLOG_POSTS[0];
    const remainingPosts = MOCK_BLOG_POSTS.slice(1);

    return (
        <div className="relative min-h-screen bg-[#fafafa]">
            <GridBackground />

            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 z-10 border-b border-[#e5e5e5]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#0d0d0d] mb-8">
                        The Browser Blog
                    </h1>


                </div>
            </section>

            {/* Main Content Area */}
            <section className="relative z-10 py-16 sm:py-24 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    {/* Featured Post */}
                    <div className="mb-16">
                        <FeaturedPostCard post={featuredPost} />
                    </div>

                    {/* Grid of Posts */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {remainingPosts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
