"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80\u0026w=2070\u0026auto=format\u0026fit=crop", // Bar scene
  "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80\u0026w=2070\u0026auto=format\u0026fit=crop", // Sports crowd
  "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80\u0026w=2129\u0026auto=format\u0026fit=crop", // Wings/Food
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Rotating Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] relative"
        >
          <Image 
            src="/logo.png" 
            alt="GameTime Background Logo" 
            fill 
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 block lg:hidden">
             <Image src="/logo.png" alt="GameTime Logo" width={200} height={100} className="h-auto w-auto max-w-[200px]" priority />
          </div>
          <h1 className="text-6xl md:text-8xl mb-6 italic">
            Where <span className="text-victory-red">Victory</span> <br />
            Meets the <br /> 
            <span className="text-white">Stadium</span>
          </h1>
          <p className="tech text-xl text-gray-400 mb-8 max-w-lg uppercase">
            PREMIUM CRAFT BEERS / HIGH-OCTANE FLAVOR / CHINO&apos;S ULTIMATE HUDDLE
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-victory-red hover:bg-[#b52a28] text-white px-8 py-4 rounded-none font-bold italic tracking-tighter uppercase transition-all hover:shadow-glow-intense active:scale-95 group flex items-center gap-2">
              View The Playbook
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>→</motion.span>
            </button>
            <button className="border-2 border-victory-red text-victory-red hover:bg-victory-red hover:text-white px-8 py-4 rounded-none font-bold italic tracking-tighter uppercase transition-all active:scale-95">
              Reservations
            </button>
          </div>
        </motion.div>

        {/* Right Side: Auto-Rotating Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video bg-charcoal border-2 border-victory-red/30 shadow-2xl overflow-hidden group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={heroImages[currentImage]} 
                alt="Sports Bar Scene" 
                fill 
                className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10"></div>
          
          <div className="absolute bottom-6 left-6 z-20 tech text-[10px] text-victory-red animate-pulse">
            LIVE BROADCAST FEED [ ONLINE ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
