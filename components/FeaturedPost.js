import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <div className="w-full">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                        priority="true"
                    />
                </div>

                <div className="order-1 md:order-2 flex flex-col justify-center p-6 md:p-12">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">
                        <span>Featured Story</span>
                        <span className="w-8 h-px bg-indigo-400"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-white">
                        <Link href={`/blog/${post.slug}`} className="hover:text-indigo-200 transition-colors">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="text-slate-200 text-lg leading-relaxed mb-8 max-w-md font-light">
                        {post.excerpt}
                    </p>
                    <div>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-block bg-white text-indigo-950 px-8 py-4 text-sm font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
                        >
                            Read Full Article
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
