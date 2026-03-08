import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function FeaturedPostCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-[#e5e5e5] shadow-sm hover:border-[#002329] transition-all duration-300"
        >
            <div className="grid md:grid-cols-2">
                {/* Left Side: Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1 border-t md:border-t-0 md:border-r border-[#e5e5e5]">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#333333] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                            Featured
                        </span>
                        <div className="flex items-center text-xs text-zinc-500 font-medium">
                            <span>{post.publishedAt}</span>
                            <span className="mx-2">&bull;</span>
                            <span className="flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {post.readTimeMin} min read
                            </span>
                        </div>
                    </div>

                    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] leading-tight mb-6 group-hover:text-[#ce2124] transition-colors">
                        {post.title}
                    </h2>

                    <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                        <img
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full bg-zinc-200"
                        />
                        <div>
                            <div className="text-sm font-bold text-[#0d0d0d]">{post.author.name}</div>
                            <div className="text-xs text-zinc-500">{post.author.role}</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="relative aspect-video md:aspect-auto w-full bg-zinc-100 overflow-hidden order-1 md:order-2">
                    <img
                        src={post.featuredImageUrl}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </Link>
    );
}
