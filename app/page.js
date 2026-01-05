"use client";

import Link from "next/link";
import { posts } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">

      {/* Minimal Hero */}
      <section className="py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground leading-[0.9]">
            Engineering <br />
            <span className="text-muted-foreground">the Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
            Explorations in code, design, and the philosophy of building things.
          </p>
        </motion.div>
      </section>

      {/* Blog List - Minimal & Interactive */}
      <section>
        <div className="flex items-end justify-between mb-12 border-b border-border pb-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Latest Writing</h2>
          <Link href="/blog" className="text-sm font-medium hover:text-brand transition-colors">View Archive</Link>
        </div>

        <div className="flex flex-col gap-4">
          {posts.slice(0, 4).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-border/50 group-hover:border-brand/30 transition-colors">
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 md:line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:w-1/4 md:text-right mt-2 md:mt-0">
                    <time className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded-sm uppercase">
                      {post.date}
                    </time>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
