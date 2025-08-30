"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 48 }, (_, i) => ({
        id: i,
        d: `M-${480 - i * 8 * position} -${240 + i * 8}C-${
            480 - i * 8 * position
        } -${240 + i * 8} -${380 - i * 8 * position} ${280 - i * 8} ${
            200 - i * 8 * position
        } ${420 - i * 8}C${750 - i * 8 * position} ${580 - i * 8} ${
            850 - i * 8 * position
        } ${950 - i * 8} ${850 - i * 8 * position} ${950 - i * 8}`,
        color: `rgba(15,23,42,${0.15 + i * 0.02})`,
        width: 1.2 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-navy/40"
                viewBox="0 0 1200 800"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.04}
                        initial={{ pathLength: 0.2, opacity: 0.8 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.8, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-60">
            <FloatingPaths position={1.5} />
            <FloatingPaths position={-1.5} />
            <FloatingPaths position={0.8} />
        </div>
    );
}