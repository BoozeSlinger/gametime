'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { ChevronRight } from "lucide-react";

const slides = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1543353071-10c8ba85a949?q=80&w=2070",
    headline: "YOUR ULTIMATE GAMEDAY DESTINATION",
    subhead: "50+ HD SCREENS. PREMIUM AUDIO. EVERY TOUCHDOWN."
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070",
    headline: "VICTORY TASTES BETTER HERE",
    subhead: "CRAFT BURGERS. ICE COLD BREWS. LEGENDARY WINGS."
  },
  {
     type: "image",
     src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000",
     headline: "THE HUDDLE CLUB",
     subhead: "JOIN THE ELITE. EXCLUSIVE REWARDS. VIP ACCESS."
  }
];

export default function HeroV2() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stadium-black">
      <AnimatePresence mode="popLayout">
        <motion.div
           key={current}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0 z-0"
        >
           <Image
             src={slides[current].src}
             alt="Hero"
             fill
             className="object-cover opacity-60"
             priority
           />
           <div className="absolute inset-0 bg-linear-to-t from-stadium-black via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
         <motion.div
           key={`text-${current}`}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
         >
             <h1 className="text-6xl md:text-9xl font-athletic italic font-black text-white tracking-tight uppercase leading-[0.8] mb-4 drop-shadow-2xl">
               {slides[current].headline.split(' ').map((word, i) => (
                 <span key={i} className={i === 1 ? "text-victory-red block md:inline mx-2" : "block md:inline mx-2"}>{word}</span>
               ))}
             </h1>
             <p className="font-tech text-white/80 tracking-[0.3em] uppercase text-sm md:text-lg mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-black/30 p-4 rounded-full border border-white/10">
                {slides[current].subhead}
             </p>

             <div className="flex gap-4 justify-center">
                 <Link href="/v2/reservations" className="group px-8 py-4 bg-victory-red text-white font-athletic italic text-xl uppercase tracking-wider hover:bg-white hover:text-victory-red transition-all -skew-x-12 shadow-[0_0_20px_rgba(209,48,46,0.5)] hover:shadow-[0_0_40px_rgba(209,48,46,0.8)]">
                    <span className="skew-x-12 block group-hover:scale-110 transition-transform">Book Your Table</span>
                 </Link>
                 <Link href="/v2/menu" className="group px-8 py-4 bg-transparent border-2 border-white text-white font-athletic italic text-xl uppercase tracking-wider hover:bg-white hover:text-stadium-black transition-all -skew-x-12">
                    <span className="skew-x-12 block group-hover:scale-110 transition-transform">See The Menu</span>
                 </Link>
             </div>
         </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
         <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
      </div>
    </div>
  );
}
