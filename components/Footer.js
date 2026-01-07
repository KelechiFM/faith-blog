import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-white/10 mt-auto backdrop-blur-md transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-display font-semibold tracking-tight text-slate-900 dark:text-white">
                            {siteConfig.name}
                        </Link>
                        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xs font-light">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/blog" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/media" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Media</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
                        <ul className="space-y-3">
                            <li><a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Instagram</a></li>
                            <li><a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Twitter</a></li>
                            <li><a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-500">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with purpose.</p>
                </div>
            </div>
        </footer>
    );
}
