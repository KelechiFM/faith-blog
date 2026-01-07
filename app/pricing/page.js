"use client";

import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const pricingTiers = [
    {
        name: "Seeker",
        price: "Free",
        description: "For those just starting their journey.",
        features: [
            "Weekly Newsletter",
            "Access to public essays",
            "Community comments"
        ],
        cta: "Join for Free",
        popular: false
    },
    {
        name: "Believer",
        price: "$5",
        period: "/month",
        description: "Deepen your faith and understanding.",
        features: [
            "Everything in Seeker",
            "Exclusive deep-dive essays",
            "Monthly Q&A sessions",
            "Ad-free reading experience"
        ],
        cta: "Start Trial",
        popular: true
    },
    {
        name: "Patron",
        price: "$50",
        period: "/year",
        description: "Support the mission and go further.",
        features: [
            "Everything in Believer",
            "Digital devotional downloads",
            "Early access to new content",
            "Direct email access to Faith"
        ],
        cta: "Become a Patron",
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <ScrollReveal className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                        Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-300 dark:to-white">Spiritual Growth</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Choose a plan that fits your journey. Join a community dedicated to faith, reason, and timeless wisdom.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {pricingTiers.map((tier, i) => (
                        <ScrollReveal key={tier.name} delay={i * 0.1} className="h-full">
                            <GlassCard className={`h-full flex flex-col relative p-8 ${tier.popular ? 'border-indigo-400/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]' : ''}`}>
                                {tier.popular && (
                                    <div className="absolute top-0 right-0 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                                        {tier.period && <span className="text-slate-600 dark:text-slate-300 text-sm">{tier.period}</span>}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200">
                                            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-xl font-bold transition-all text-sm ${tier.popular
                                        ? 'bg-indigo-600 dark:bg-white text-white dark:text-indigo-950 hover:bg-indigo-700 dark:hover:bg-indigo-50 shadow-lg shadow-indigo-500/20'
                                        : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10'
                                    }`}>
                                    {tier.cta}
                                </button>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal className="mt-16 text-center">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Questions about plans? <Link href="/contact" className="text-slate-900 dark:text-white underline hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">Contact us</Link>
                    </p>
                </ScrollReveal>
            </div>
        </div>
    );
}
