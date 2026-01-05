"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { posts, categories } from "@/lib/data";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
            <ScrollReveal className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">The Journal</h1>
                <p className="text-slate-100 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Thoughts on faith, lifestyle, and the pursuit of a meaningful life.
                </p>
            </ScrollReveal>

            {/* Categories */}
            <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-16">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={`px-6 py-2 text-sm font-bold rounded-full transition-all border ${activeCategory === "All"
                        ? "bg-white text-indigo-950 border-white"
                        : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:text-white"
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 text-sm font-bold rounded-full transition-all border ${activeCategory === cat
                            ? "bg-white text-indigo-950 border-white"
                            : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </ScrollReveal>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {filteredPosts.map((post, i) => (
                    <GlassCard key={post.id} className="h-full !p-0 overflow-hidden group flex flex-col transition-all hover:scale-[1.02]" delay={0.05 * i}>
                        <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src={post.image} alt={post.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-3 text-xs font-mono text-indigo-300">
                                    <span>{post.date}</span>
                                    <span className="w-px h-3 bg-indigo-500/30"></span>
                                    <span>{post.category}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold mb-3 leading-snug text-white group-hover:text-indigo-300 transition-colors">{post.title}</h3>
                                <p className="text-sm text-slate-200 line-clamp-2 mb-4 flex-1 font-light">{post.excerpt}</p>
                                <span className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-indigo-300 transition-colors">Read Article</span>
                            </div>
                        </Link>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
