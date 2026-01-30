"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface RouteSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  align?: "left" | "right";
}

export default function RouteSection({ title, subtitle, children, align = "left" }: RouteSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const contentX = useTransform(scrollYProgress, [0, 0.3], [align === "left" ? -100 : 100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Route Line Drawing Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <motion.path
          d={align === "left" ? "M -50 400 L 200 400 L 400 100 L 1200 100" : "M 1050 400 L 800 400 L 600 100 L -200 100"}
          fill="transparent"
          strokeWidth="4"
          stroke="var(--color-victory-red)"
          style={{ pathLength, opacity: 0.3 }}
          strokeDasharray="20 10"
        />
        <motion.circle
          cx={align === "left" ? 1150 : -150}
          cy={100}
          r="8"
          fill="var(--color-victory-red)"
          style={{ opacity: pathLength }}
        />
      </svg>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          style={{ x: contentX, opacity: contentOpacity }}
          className={`max-w-4xl ${align === "right" ? "ml-auto text-right" : ""}`}
        >
          <div className="inline-block relative mb-4">
            <span className="tech text-victory-red text-xs tracking-[0.5em] uppercase">{subtitle}</span>
            <div className="absolute -bottom-1 left-0 w-full h-px bg-victory-red/30"></div>
          </div>
          
          <div className="relative mb-12">
            <h2 className="text-5xl md:text-8xl athletic italic leading-tight">
              {title}
            </h2>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-victory-red hidden lg:block"></div>
          </div>

          <div className={`p-8 border-l-4 border-victory-red bg-charcoal/40 backdrop-blur-sm shadow-2xl skew-container`}>
            <div className="skew-content">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
