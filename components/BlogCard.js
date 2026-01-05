import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function BlogCard({ post }) {
    return (
        <ScrollReveal className="group flex flex-col h-full bg-white border border-transparent hover:border-border transition-all duration-300 p-5 rounded-sm hover:shadow-sm">
            <div className="relative overflow-hidden aspect-[4/3] w-full mb-4 bg-muted/10">
                <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
                    {post.category}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="text-xs text-muted mb-2">{post.date}</div>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-display font-semibold mb-3 leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-widest hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
                    >
                        Read Story
                    </Link>
                </div>
            </div>
        </ScrollReveal>
    );
}
