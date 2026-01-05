"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center p-6 overflow-hidden">

            {/* Background Handled by Layout */}

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center"
            >

                {/* Left: Text Content */}
                <div className="mb-10 md:mb-0 text-white space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                            Let's <br /> Create.
                        </h1>
                        <p className="text-lg text-indigo-100/80 font-light max-w-md leading-relaxed">
                            Whether you have a question, a project in mind, or just want to say hello — I'm always open to discussing new ideas.
                        </p>
                    </motion.div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center space-x-4 text-indigo-200">
                            <span className="w-12 h-[1px] bg-indigo-500/50"></span>
                            <span className="text-sm font-mono tracking-widest uppercase">Contact</span>
                        </div>
                        <p className="text-xl font-medium text-white">hello@faithblog.com</p>
                    </div>
                </div>

                {/* Right: Glass Form */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                    {submitted ? (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6 text-3xl">
                                ✓
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">Message Sent</h3>
                            <p className="text-indigo-200">I'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-indigo-200 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 focus:border-indigo-400 focus:bg-black/30 text-white rounded-xl focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-indigo-200 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 focus:border-indigo-400 focus:bg-black/30 text-white rounded-xl focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-indigo-200 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 focus:border-indigo-400 focus:bg-black/30 text-white rounded-xl focus:outline-none transition-all resize-none placeholder:text-white/20"
                                    placeholder="Tell me about your idea..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
