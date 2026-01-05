import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/lib/data";

export default function Home() {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const latestPosts = posts.filter((p) => p.id !== featuredPost.id).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero / Featured Post */}
      <FeaturedPost post={featuredPost} />

      {/* Latest Stories */}
      <section className="py-12 md:py-20">
        <ScrollReveal className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Latest Stories</h2>
          <Link href="/blog" className="hidden md:inline-block text-sm font-medium border-b border-foreground hover:text-accent hover:border-accent transition-colors pb-0.5">View all articles</Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-block text-sm font-medium border-b border-foreground hover:text-accent hover:border-accent transition-colors pb-0.5">View all articles</Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

import Link from "next/link";
