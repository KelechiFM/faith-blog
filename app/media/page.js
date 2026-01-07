import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { mediaMentions } from "@/lib/data";

export default function MediaPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                    Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-white dark:to-white/60">Press</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-200 text-lg font-light">
                    Interviews, features, and conversations around the web.
                </p>
            </div>

            {/* Media Grid */}
            <div className="grid gap-6">
                {mediaMentions.map((item, i) => (
                    <GlassCard key={item.id} className="group flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8 hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 dark:bg-white/10 rounded-full flex items-center justify-center text-2xl">
                            🎙️
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                                <span>{item.outlet}</span>
                                <span className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
                                <span>{item.date}</span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                                {item.title}
                            </h3>
                            <a href={item.link} className="inline-flex items-center text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors mt-2">
                                Listen Now <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
