"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Media", href: "/media" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-display font-semibold tracking-tight text-slate-900 dark:text-white">
                    {siteConfig.name}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/pricing"
                        className="px-5 py-2.5 text-sm font-bold bg-indigo-600 dark:bg-white text-white dark:text-indigo-950 rounded-full hover:bg-indigo-700 dark:hover:bg-slate-200 transition-colors"
                    >
                        Subscribe
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Filter Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-foreground focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-900 dark:text-slate-100 py-2 border-b border-slate-100 dark:border-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400 text-sm">Switch Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
}
