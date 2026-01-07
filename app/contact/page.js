"use client";

import { useState } from "react";
// import { motion } from "framer-motion"; // Keeping for reference if needed, but switching to ScrollReveal for consistency
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("submitting"); // Set status to submitting
        setTimeout(() => setFormStatus("success"), 1000); // Simulate API call success
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center p-6 overflow-hidden">

            {/* Background Handled by Layout */}

            <div
                className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center"
            >

                <div className="mb-12 md:mb-0">
                    {/* Assuming ScrollReveal is imported or defined elsewhere */}
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-200 font-light max-w-md leading-relaxed">
                            Whether you have a question, a project in mind, or just want to say hello — I'm always open to discussing new ideas.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Email</p>
                                    <a href="mailto:hello@faithblog.com" className="text-slate-900 dark:text-white text-lg hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">hello@faithblog.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Location</p>
                                    <p className="text-slate-900 dark:text-white text-lg">Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="flex-1">
                    {/* Assuming ScrollReveal and GlassCard are imported or defined elsewhere */}
                    <ScrollReveal delay={0.2}>
                        <GlassCard className="p-8 md:p-10">
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                                {formStatus === "success" ? (
                                    <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                        <p className="text-slate-600 dark:text-slate-300">Thank you for reaching out. I'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 transition-all resize-none"
                                                placeholder="How can I help you?"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-indigo-600 dark:bg-white text-white dark:text-indigo-950 font-bold py-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-slate-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 shadow-lg shadow-indigo-500/20"
                                        >
                                            {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </GlassCard>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
