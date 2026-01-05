"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundBubbles() {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Generate bubbles only on client side to avoid hydration mismatch
        setBubbles(Array.from({ length: 20 }));
    }, []);

    if (bubbles.length === 0) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
            {bubbles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/10 rounded-full"
                    initial={{
                        opacity: 0,
                        y: "110vh",
                        x: Math.random() * 100 + "vw",
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: "-10vh",
                        x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        delay: Math.random() * 20,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 100 + 50 + "px",
                        height: Math.random() * 100 + 50 + "px",
                    }}
                />
            ))}
        </div>
    );
}
