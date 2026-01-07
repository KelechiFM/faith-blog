"use client";

import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";
import { posts } from "@/lib/data";

export default function Home() {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const latestPosts = posts.filter((p) => p.id !== featuredPost.id).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero / Featured Post */}
      <GlassCard className="mt-12 mb-20 !p-0 overflow-hidden" delay={0.2}>
        <FeaturedPost post={featuredPost} />
      </GlassCard>

      {/* Latest Stories */}
      <section className="mb-24">
        <ScrollReveal className="flex items-end justify-between mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-300">Latest Stories</h2>
          <Link href="/blog" className="hidden md:inline-block text-sm font-bold text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-colors">View all articles →</Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(p => !p.featured).map((post, i) => (
            <GlassCard key={post.id} className="h-full !p-0 overflow-hidden group flex flex-col transition-all hover:scale-[1.02]" delay={0.1 * i}>
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3 text-xs font-mono text-indigo-600 dark:text-indigo-300">
                    <span>{post.date}</span>
                    <span className="w-px h-3 bg-slate-300 dark:bg-indigo-500/30"></span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 leading-snug text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-100 line-clamp-2 mb-4 flex-1 font-light">{post.excerpt}</p>
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">Read Article</span>
                </div>
              </Link>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-block text-sm font-medium text-indigo-300 hover:text-white">View all articles →</Link>
        </div>
      </section>

      {/* Newsletter */}
      <GlassCard className="mb-20 py-8">
        <Newsletter />
      </GlassCard>
    </div>
  );
}
