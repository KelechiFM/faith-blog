import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { mediaMentions } from "@/lib/data";

export default function MediaPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
            <ScrollReveal className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Press & Media</h1>
                <p className="text-slate-100 text-lg font-light">
                    Interviews, features, and conversations around the web.
                </p>
            </ScrollReveal>

            <div className="space-y-6">
                {mediaMentions.map((item, index) => (
                    <a key={item.id} href={item.link} className="block group">
                        <GlassCard className="flex flex-col md:flex-row items-baseline md:items-center justify-between !p-6 hover:bg-white/10 transition-all border-white/5 hover:border-indigo-400/30">
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-indigo-300 mb-2">{item.outlet}</div>
                                <h3 className="text-xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                            </div>
                            <div className="text-sm text-slate-200 mt-4 md:mt-0 font-medium font-mono">{item.date}</div>
                        </GlassCard>
                    </a>
                ))}
            </div>
        </div>
    );
}
