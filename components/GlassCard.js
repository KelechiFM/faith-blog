"use client";

import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            className={`bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-500 shadow-xl ${className}`}
        >
            {children}
        </motion.div>
    );
}
