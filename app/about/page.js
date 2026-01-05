"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useState } from "react";

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
        <div className="bg-background">
            {/* 1. Header Section */}
            <section className="bg-muted/5 py-20 md:py-32 text-center px-6">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">About Us</h1>
                    <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
                        Navigating the complexities of modern life through the lens of <span className="text-foreground font-medium">faith</span>, reason, and <span className="text-foreground font-medium">timeless wisdom</span>.
                    </p>
                </ScrollReveal>
            </section>

            {/* 2. Mission Section (Split Layout) */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <ScrollReveal>
                        <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our Mission</div>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 leading-tight">
                            Bridging the gap between ancient wisdom and modern life.
                        </h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            <p>
                                We believe that faith is not a relic of the past, but a living, breathing guide for the present. Our mission is to provide thoughtful commentary and resources that explore deep questions with honesty and intellectual rigor.
                            </p>
                            <p>
                                Fostering a community of seekers and believers alike, we aim to create a space where dialogue is encouraged and every perspective is valued.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal className="bg-muted/5 p-8 rounded-sm hover:bg-muted/10 transition-colors">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 text-accent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold mb-2">Authenticity & Truth</h3>
                            <p className="text-muted leading-relaxed">Committed to exploring theology and culture without avoiding the hard questions.</p>
                        </ScrollReveal>

                        <ScrollReveal className="bg-muted/5 p-8 rounded-sm hover:bg-muted/10 transition-colors">
                            <div className="bg-accent/10 w-12 h-12 flex items-center justify-center rounded-full mb-6 text-accent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className="text-xl font-display font-semibold mb-2">Community First</h3>
                            <p className="text-muted leading-relaxed">Building a space where dialogue is encouraged and everyone has a seat at the table.</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 3. Timeline Section (Refined) */}
            <section className="bg-muted/5 py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-4xl font-display font-semibold mb-4">Our Journey</h2>
                        <p className="text-muted text-lg">Milestones that shaped who we are today.</p>
                    </ScrollReveal>

                    <div className="space-y-8">
                        {/* Item 1 */}
                        <ScrollReveal className="flex gap-6 items-start group">
                            <div className="flex flex-col items-center mt-1">
                                <div className="w-3 h-3 bg-accent rounded-full ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all"></div>
                                <div className="w-px h-full bg-border mt-3 group-last:hidden min-h-[100px]"></div>
                            </div>
                            <div className="bg-white border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">Founded in 2020</h3>
                                    <span className="text-xs font-medium bg-muted/10 text-accent px-3 py-1 rounded-full">Jan 2020</span>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Faith Blog launched with a simple mission to share daily devotionals. What started as a personal journal quickly grew into a newsletter for close friends.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Item 2 */}
                        <ScrollReveal className="flex gap-6 items-start group">
                            <div className="flex flex-col items-center mt-1">
                                <div className="w-3 h-3 bg-accent rounded-full ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all"></div>
                                <div className="w-px h-full bg-border mt-3 group-last:hidden min-h-[100px]"></div>
                            </div>
                            <div className="bg-white border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">First Viral Post</h3>
                                    <span className="text-xs font-medium bg-muted/10 text-accent px-3 py-1 rounded-full">Aug 2021</span>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Our article on "Faith in the Digital Age" reached over 100k readers, sparking a conversation about the need for digital mindfulness in a hyper-connected world.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Item 3 */}
                        <ScrollReveal className="flex gap-6 items-start group">
                            <div className="flex flex-col items-center mt-1">
                                <div className="w-3 h-3 bg-accent rounded-full ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all"></div>
                            </div>
                            <div className="bg-white border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">Community Expansion</h3>
                                    <span className="text-xs font-medium bg-muted/10 text-accent px-3 py-1 rounded-full">Present</span>
                                </div>
                                <p className="text-muted leading-relaxed">
                                    Launching our podcast and local meetups. We are moving beyond just "content" to create tangible connection and community spaces.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 4. Faith Section (Editorial Layout) */}
            <section className="max-w-6xl mx-auto px-6 py-24 mb-12">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-semibold mb-3">Faith in Practice</h2>
                        <p className="text-muted text-sm tracking-widest uppercase">Theology • Culture • Life</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Column 1: Date/Meta Left Side */}
                    <div className="hidden md:block md:col-span-2 text-right pt-4 border-t border-black/10">
                        <ScrollReveal>
                            <div className="text-5xl font-display font-light mb-1">01</div>
                            <div className="text-xs font-medium text-muted uppercase tracking-widest">Est. 2024</div>
                        </ScrollReveal>
                    </div>

                    {/* Column 2: Main Article Card (Theology) */}
                    <div className="md:col-span-12 lg:col-span-6">
                        <ScrollReveal className="group cursor-pointer">
                            <div className="aspect-square relative overflow-hidden mb-6 bg-muted/20">
                                <img
                                    src="/images/clay-vases.png"
                                    alt="Clay Vases"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            <div className="border-t border-black/10 pt-4">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-medium text-muted uppercase tracking-widest">Creative • Theology</span>
                                </div>

                                <h3 className="text-3xl font-display font-medium mb-3 group-hover:text-accent transition-colors leading-tight">
                                    The Theology of Beauty: Is It Worth Your Zeal?
                                </h3>

                                <p className="text-muted text-lg leading-relaxed mb-6 font-light">
                                    An innovative approach that helps saving material production does not guarantee a success. We explore why beauty is not just a luxury, but a necessity for the soul.
                                </p>

                                <div className="flex items-center justify-between text-sm group/btn">
                                    <div className="flex items-center space-x-2 text-muted">
                                        <span className="font-semibold text-foreground">By Sarah</span>
                                        <span>•</span>
                                        <span>4 mins read</span>
                                    </div>
                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Column 3: Secondary Article / Sidebar */}
                    <div className="md:col-span-12 lg:col-span-4 lg:col-start-9 space-y-16">

                        {/* Secondary Article */}
                        <ScrollReveal className="group cursor-pointer">
                            <div className="border-t border-black/10 pt-4 mb-4">
                                <div className="text-4xl font-display font-light mb-1">02</div>
                                <div className="text-xs font-medium text-muted uppercase tracking-widest">Mar 2025</div>
                            </div>
                            <div className="aspect-[4/5] relative overflow-hidden mb-6 bg-muted/20">
                                <img
                                    src="/images/olive-branch.png"
                                    alt="Olive Branch"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            <h3 className="text-2xl font-display font-medium mb-2 group-hover:text-accent transition-colors">
                                Fashion Rules: Top 10 Soul Care Routines
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-4">
                                Simple, cheap, or even retro, you can find it all in today's spiritual rhythms.
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted">
                                <span className="font-semibold text-foreground">By Faith</span>
                                <span>•</span>
                                <span>2 mins read</span>
                            </div>
                        </ScrollReveal>

                        {/* Editor Note Widget */}
                        <ScrollReveal className="text-center pt-12 border-t border-border">
                            <div className="text-xs font-medium uppercase tracking-widest text-accent mb-6">Editor's Note</div>
                            <div className="w-24 h-24 mx-auto mb-4 relative">
                                <img
                                    src="/images/sarah-editor.png"
                                    alt="Editor"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h4 className="font-display text-lg font-medium mb-1">Sarah Jenkins</h4>
                            <p className="text-muted text-sm italic mb-4">
                                "Fashioning a life of faith is like designing a home; it requires intention, patience, and a lot of light."
                            </p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-8 mx-auto opacity-50" alt="Signature" />
                        </ScrollReveal>

                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-24">
                <ScrollReveal className="mb-16">
                    <h2 className="text-4xl font-display font-semibold mb-4">Meet the Editor</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Editor 1 */}
                    <ScrollReveal className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                        <div className="w-48 h-48 relative shrink-0">
                            <img
                                src="/images/sarah-editor.png"
                                alt="Dr. Sarah Jenkins"
                                className="rounded-full object-cover w-full h-full border border-border"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-semibold">Dr. Sarah Jenkins</h3>
                            <div className="text-accent font-medium text-sm uppercase tracking-wide mb-4">Founder & Editor in Chief</div>
                            <p className="text-muted text-sm leading-relaxed mb-4">
                                Sarah has been writing about theology, philosophy, and modern culture for over a decade. With a PhD in Theological Studies, she aims to make complex ideas accessible to everyone.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start text-muted">
                                <a href="#" className="hover:text-foreground"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                                <a href="#" className="hover:text-foreground"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Editor 2 */}
                    <ScrollReveal className="flex flex-col md:flex-row-reverse gap-8 items-center text-center md:text-right">
                        <div className="w-48 h-48 relative shrink-0">
                            <img
                                src="/images/mark-author.png"
                                alt="Mark Davis"
                                className="rounded-full object-cover w-full h-full border border-border filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-semibold">Mark Davis</h3>
                            <div className="text-accent font-medium text-sm uppercase tracking-wide mb-4">Contributing Author</div>
                            <p className="text-muted text-sm leading-relaxed mb-4">
                                Mark brings a background in history and literature. His articles focus on the historical context of scripture and its application to modern ethical dilemmas.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-end text-muted">
                                <a href="#" className="hover:text-foreground"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. Integrated Contact Section */}
            <section className="bg-slate-100 py-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-display font-semibold mb-6">Get in Touch</h2>
                        <p className="text-muted text-lg mb-10 leading-relaxed">
                            Have a question, a prayer request, or just want to say hello? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full mr-4 text-accent shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-sm uppercase tracking-wide mb-1">Email Us</div>
                                    <div className="text-muted hover:text-foreground transition-colors">support@faithblog.com</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white p-3 rounded-full mr-4 text-accent shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-sm uppercase tracking-wide mb-1">Visit Us</div>
                                    <div className="text-muted">123 Faith Avenue, Denver, CO</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="bg-white p-8 md:p-10 rounded-sm shadow-sm">
                        {formStatus === "success" ? (
                            <div className="text-center py-20">
                                <div className="text-green-600 text-5xl mb-4">✓</div>
                                <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                                <p className="text-muted">Thank you for reaching out.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Name</label>
                                    <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-muted/5 border border-border focus:border-foreground rounded-sm outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email</label>
                                    <input type="email" placeholder="you@example.com" required className="w-full px-4 py-3 bg-muted/5 border border-border focus:border-foreground rounded-sm outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea rows={4} placeholder="How can we help?" required className="w-full px-4 py-3 bg-muted/5 border border-border focus:border-foreground rounded-sm outline-none transition-colors resize-none"></textarea>
                                </div>
                                <button type="submit" disabled={formStatus === "submitting"} className="w-full py-4 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-colors">
                                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
