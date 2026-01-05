import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedPost({ post }) {
    if (!post) return null;

    return (
        <section className="py-12 md:py-20">
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square overflow-hidden bg-muted/10">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                        priority="true"
                    />
                </div>

                <div className="order-1 md:order-2 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                        <span>Featured Story</span>
                        <span className="w-8 h-px bg-accent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6">
                        <Link href={`/blog/${post.slug}`} className="hover:text-muted transition-colors">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
                        {post.excerpt}
                    </p>
                    <div>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors"
                        >
                            Read Full Article
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
