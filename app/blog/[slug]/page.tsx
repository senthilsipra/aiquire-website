import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_BLOG_POSTS } from "@/data/blog";

// In Next.js 14 App Router, to generate static pages for these routes:
export function generateStaticParams() {
    return MOCK_BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Top Navigation & Header */}
            <header className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex items-center gap-4 mb-16">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 border border-[#e5e5e5] px-4 py-2 hover:bg-zinc-50 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to articles
                        </Link>
                        <span className="text-sm font-medium text-zinc-500 border border-[#e5e5e5] px-4 py-2">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#0d0d0d] leading-tight mb-16">
                        {post.title}
                    </h1>

                    {/* Elegant Author Meta Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-4 border-y border-[#e5e5e5] py-6">
                        <div className="md:col-span-2 flex items-center gap-4 mb-4 md:mb-0">
                            <img
                                src={post.author.avatarUrl}
                                alt={post.author.name}
                                className="w-12 h-12 rounded bg-zinc-200 object-cover"
                            />
                            <div>
                                <div className="font-medium text-[#0d0d0d]">{post.author.name}</div>
                                <div className="text-sm text-zinc-500">{post.author.role}</div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#e5e5e5] pt-4 md:pt-0 pb-4 md:pb-0 md:pl-8">
                            <div className="text-sm font-medium text-zinc-600">{post.publishedAt}</div>
                        </div>

                        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#e5e5e5] pt-4 md:pt-0 md:pl-8">
                            <div className="flex items-center justify-between md:justify-start gap-6 text-zinc-500">
                                <span className="flex items-center gap-2 text-sm">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {post.readTimeMin} min read
                                </span>

                                <div className="flex items-center gap-4 border-l border-[#e5e5e5] pl-6 md:hidden lg:flex">
                                    <span className="text-sm">Share</span>
                                    <button className="hover:text-zinc-900 transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                    </button>
                                    <button className="hover:text-[#0077b5] transition-colors">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Image */}
            <div className="container mx-auto px-4 max-w-5xl mb-16">
                <div className="aspect-video w-full bg-zinc-100 border border-[#e5e5e5] overflow-hidden">
                    <img
                        src={post.featuredImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Main Content Body */}
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="prose prose-lg prose-zinc max-w-none">
                    <p className="lead text-xl text-zinc-600 mb-8 italic">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-[#e5e5e5]">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </article>
    );
}
