"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "@/components/GlassCard"; // Import Global Component

// Background Bubbles handled globally in layout

export default function AboutPage() {
    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div className="relative  min-h-screen text-white overflow-hidden pb-32">

            {/* Background Handled in Layout */}

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* 1. Header Section */}
                <section className="py-32 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-display font-bold mb-8 text-white"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Navigating modern complexity through <span className="text-white font-bold">faith</span>, reason, and <span className="text-white font-bold">timeless wisdom</span>.
                    </motion.p>
                </section>

                {/* 2. Mission Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-stretch">
                    <GlassCard>
                        <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4">Our Mission</div>
                        <h2 className="text-4xl font-display font-bold mb-6 leading-tight text-white">
                            Bridging ancient wisdom & modern life.
                        </h2>
                        <div className="space-y-6 text-slate-100 leading-relaxed text-lg font-light">
                            <p>We believe faith isn't a relic, but a living guide. We explore deep questions with honesty and intellectual rigor.</p>
                            <p>Creating a space where every perspective is valued and dialogue flows freely.</p>
                        </div>
                    </GlassCard>

                    <div className="flex flex-col gap-6 h-full">
                        <GlassCard className="flex-1 flex flex-col justify-center">
                            <div className="bg-indigo-500/20 w-14 h-14 flex items-center justify-center rounded-full mb-4 text-indigo-300">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2 text-white">Authenticity</h3>
                            <p className="text-slate-200">Exploring theology and culture without avoiding the hard stuff.</p>
                        </GlassCard>
                        <GlassCard className="flex-1 flex flex-col justify-center">
                            <div className="bg-indigo-500/20 w-14 h-14 flex items-center justify-center rounded-full mb-4 text-indigo-300">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2 text-white">Community</h3>
                            <p className="text-slate-200">Building a table where everyone has a seat.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* 3. Timeline */}
                <section className="mb-32 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-display font-bold text-center mb-16 text-white">Our Journey</h2>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/30 before:to-transparent">
                        {[
                            { year: "2020", title: "The Beginning", desc: "Launched as a simple personal journal." },
                            { year: "2021", title: "Viral Growth", desc: "Reached 100k readers with 'Faith in Digital Age'." },
                            { year: "Present", title: "Expansion", desc: "Launching podcasts and local meetups." }
                        ].map((item, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-indigo-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
                                </div>
                                <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] !p-6 !rounded-xl relative z-10 bg-slate-900/40 backdrop-blur-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                                        <span className="text-xs font-mono text-indigo-300 bg-white/10 px-2 py-1 rounded border border-white/5">{item.year}</span>
                                    </div>
                                    <p className="text-white text-sm leading-relaxed font-medium">{item.desc}</p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Team Section */}
                <section className="mb-32">
                    <h2 className="text-4xl font-display font-semibold text-center mb-16 text-white">Meet the Minds</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: "Dr. Sarah Jenkins", role: "Editor in Chief", img: "/images/sarah-editor.png" },
                            { name: "Mark Davis", role: "Contributing Author", img: "/images/mark-author.png" }
                        ].map((member, i) => (
                            <GlassCard key={i} className="flex items-center gap-6">
                                <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                                    <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white">{member.name}</h3>
                                    <p className="text-indigo-300 text-sm uppercase tracking-wider mb-2 font-semibold">{member.role}</p>
                                    <p className="text-slate-200 text-sm">Passionate about bringing clarity to complex topics.</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </section>

                {/* 5. Contact Form */}
                <section className="max-w-3xl mx-auto">
                    <GlassCard>
                        <h2 className="text-3xl font-display font-semibold mb-8 text-center">Start a Conversation</h2>
                        {formStatus === "success" ? (
                            <div className="text-center py-12">
                                <span className="text-5xl">✨</span>
                                <h3 className="text-xl font-medium mt-4">Message Received</h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Name" className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-400 text-white placeholder:text-white/20 transition-colors" />
                                    <input type="email" placeholder="Email" className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-400 text-white placeholder:text-white/20 transition-colors" />
                                </div>
                                <textarea rows={4} placeholder="Your thoughts..." className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-400 text-white placeholder:text-white/20 transition-colors resize-none" />
                                <button className="w-full bg-white text-indigo-950 font-bold py-4 rounded-lg hover:bg-indigo-50 transition-colors">
                                    {formStatus === "submitting" ? "Sending..." : "SEND MESSAGE"}
                                </button>
                            </form>
                        )}
                    </GlassCard>
                </section>

            </div>
        </div>
    );
}
