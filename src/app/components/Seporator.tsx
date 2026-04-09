'use client';

import { motion } from 'framer-motion';

export default function AnimatedDivider() {
    return (
        <div className="max-w-6xl w-full mx-auto px-4">
            <div className="flex items-center justify-center gap-4 my-20">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-25 md:w-75 lg:w-125 h-px bg-linear-to-r from-transparent to-accent/50"
                    style={{ transformOrigin: 'right center' }}
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#A656E1]"
                />
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-25 md:w-75 lg:w-125 h-px bg-linear-to-l from-transparent to-accent/50"
                    style={{ transformOrigin: 'left center' }}
                />
            </div>
        </div>
    );
}