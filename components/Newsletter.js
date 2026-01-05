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
        <ScrollReveal className="text-center">
            <div className="max-w-xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-white">
                    Join the Community
                </h3>
                <p className="text-indigo-200 mb-8 text-sm md:text-base leading-relaxed">
                    Get weekly insights on faith, slow living, and finding purpose delivered straight to your inbox. No spam, just heart.
                </p>

                {status === "success" ? (
                    <div className="p-4 bg-green-500/20 text-green-300 text-sm font-medium rounded-xl animate-in fade-in border border-green-500/30">
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
                            className="flex-1 px-4 py-3 bg-slate-950/50 border border-white/10 focus:outline-none focus:border-indigo-400 transition-colors text-sm rounded-xl text-white placeholder:text-slate-500"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-8 py-3 bg-white text-indigo-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-sm disabled:opacity-70 shadow-lg shadow-indigo-500/20"
                        >
                            {status === "loading" ? "Joining..." : "Subscribe"}
                        </button>
                    </form>
                )}
            </div>
        </ScrollReveal>
    );
}
