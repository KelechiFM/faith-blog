import ScrollReveal from "@/components/ScrollReveal";
import { mediaMentions } from "@/lib/data";

export default function MediaPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
            <ScrollReveal className="text-center mb-16">
                <h1 className="text-4xl font-display font-semibold mb-4">Press & Media</h1>
                <p className="text-muted text-lg">
                    Interviews, features, and conversations around the web.
                </p>
            </ScrollReveal>

            <div className="space-y-6">
                {mediaMentions.map((item, index) => (
                    <ScrollReveal key={item.id} className="block group">
                        <a href={item.link} className="flex flex-col md:flex-row items-baseline md:items-center justify-between p-6 bg-white border border-border hover:border-accent/50 transition-all rounded-sm hover:shadow-sm">
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{item.outlet}</div>
                                <h3 className="text-xl font-display font-medium group-hover:text-accent transition-colors">{item.title}</h3>
                            </div>
                            <div className="text-sm text-muted mt-4 md:mt-0 font-medium">{item.date}</div>
                        </a>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
