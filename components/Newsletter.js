"use client";

import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <ScrollReveal className="bg-muted/5 py-16 md:py-24 px-6 text-center rounded-sm my-20">
            <div className="max-w-xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                    Join the Community
                </h3>
                <p className="text-muted mb-8 text-sm md:text-base leading-relaxed">
                    Get weekly insights on faith, slow living, and finding purpose delivered straight to your inbox. No spam, just heart.
                </p>

                {status === "success" ? (
                    <div className="p-4 bg-green-50 text-green-800 text-sm font-medium rounded-sm animate-in fade-in">
                        Thank you for subscribing! Welcome to the family.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-4 py-3 bg-white border border-border focus:outline-none focus:border-foreground transition-colors text-sm"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-8 py-3 bg-foreground text-background font-medium hover:bg-neutral-800 transition-colors text-sm disabled:opacity-70"
                        >
                            {status === "loading" ? "Joining..." : "Subscribe"}
                        </button>
                    </form>
                )}
            </div>
        </ScrollReveal>
    );
}
