"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
            <ScrollReveal className="text-center mb-12">
                <h1 className="text-4xl font-display font-semibold mb-4">Get in Touch</h1>
                <p className="text-muted">
                    Have a question, a prayer request, or just want to say hello? I'd love to hear from you.
                </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white border border-border p-8 rounded-sm shadow-sm">
                {submitted ? (
                    <div className="text-center py-12">
                        <div className="text-green-600 text-5xl mb-4">✓</div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                        <p className="text-muted">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 bg-muted/5 border border-border focus:outline-none focus:border-foreground transition-colors rounded-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 bg-muted/5 border border-border focus:outline-none focus:border-foreground transition-colors rounded-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 bg-muted/5 border border-border focus:outline-none focus:border-foreground transition-colors rounded-sm resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-foreground text-background font-medium hover:bg-neutral-800 transition-colors uppercase tracking-widest text-sm"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </ScrollReveal>
        </div>
    );
}
