"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 48 }, (_, i) => {
        const baseOffset = i * 8;
        const positionMultiplier = position * 0.7;
        
        // Create smooth, natural curves using quadratic and cubic bezier curves
        const startX = -480 + baseOffset * positionMultiplier;
        const startY = -240 - baseOffset;
        
        // Control points for smooth S-curves
        const cp1X = startX + 200 + Math.sin(i * 0.3) * 80;
        const cp1Y = startY + 300 + Math.cos(i * 0.2) * 60;
        
        const cp2X = startX + 400 + Math.sin(i * 0.4) * 100;
        const cp2Y = startY + 500 + Math.cos(i * 0.3) * 80;
        
        const endX = startX + 600 + Math.sin(i * 0.5) * 120;
        const endY = startY + 700 + Math.cos(i * 0.4) * 100;
        
        // Additional control points for extended smooth curve
        const cp3X = endX + 150 + Math.sin(i * 0.6) * 90;
        const cp3Y = endY + 100 + Math.cos(i * 0.5) * 70;
        
        const finalX = endX + 300;
        const finalY = endY + 50;
        
        return {
            id: i,
            d: `M${startX} ${startY} Q${cp1X} ${cp1Y} ${cp2X} ${cp2Y} T${endX} ${endY} Q${cp3X} ${cp3Y} ${finalX} ${finalY}`,
            color: `rgba(15,23,42,${0.15 + i * 0.02})`,
            width: 1.2 + i * 0.05,
        };
    });

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