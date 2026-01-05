"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import { posts, categories } from "@/lib/data";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
            <ScrollReveal className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">The Journal</h1>
                <p className="text-muted text-lg max-w-2xl mx-auto">
                    Thoughts on faith, lifestyle, and the pursuit of a meaningful life.
                </p>
            </ScrollReveal>

            {/* Categories */}
            <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-16">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === "All"
                            ? "bg-foreground text-background"
                            : "bg-muted/10 text-muted hover:bg-muted/20"
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === cat
                                ? "bg-foreground text-background"
                                : "bg-muted/10 text-muted hover:bg-muted/20"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </ScrollReveal>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
