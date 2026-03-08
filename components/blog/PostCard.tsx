import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function PostCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white border border-[#e5e5e5] hover:border-[#002329] transition-all duration-300 shadow-sm overflow-hidden"
        >
            <div className="relative aspect-[16/9] w-full bg-zinc-100 overflow-hidden border-b border-[#e5e5e5]">
                <img
                    src={post.featuredImageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-[#ce2124] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-zinc-500 font-medium mb-3">
                    <span>{post.publishedAt}</span>
                    <span className="mx-2">&bull;</span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTimeMin} min read
                    </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#0d0d0d] mb-3 group-hover:text-[#ce2124] transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-100">
                    <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full bg-zinc-200"
                    />
                    <div>
                        <div className="text-xs font-bold text-[#0d0d0d]">{post.author.name}</div>
                        <div className="text-[10px] text-zinc-500">{post.author.role}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
