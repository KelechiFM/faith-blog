import { posts } from "@/lib/data";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
// import { notFound } from "next/navigation"; // Optional: handle 404s properly in real app

// Generate static params for all posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <div className="text-center py-20">Post not found</div>;
    }

    return (
        <article className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    {post.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="text-muted text-sm border-t border-b border-border py-4 inline-flex items-center space-x-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span>By Faith</span>
                </div>
            </ScrollReveal>

            {/* Featured Image */}
            <ScrollReveal className="w-full aspect-video relative overflow-hidden mb-16 rounded-sm bg-muted/10">
                <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                />
            </ScrollReveal>

            {/* Content */}
            <div className="max-w-2xl mx-auto prose prose-neutral prose-lg prose-headings:font-display prose-headings:font-semibold prose-a:text-accent prose-img:rounded-sm font-light leading-loose">
                <ScrollReveal>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </ScrollReveal>
            </div>

            {/* Share / Tags Placeholder */}
            <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-border">
                <p className="text-center text-sm font-medium italic text-muted">
                    "Share this with someone who needs a little peace today."
                </p>
            </div>

            <Newsletter />
        </article>
    );
}
