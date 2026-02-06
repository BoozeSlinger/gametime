"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/hero_sports_bar.png",
  "/blonde_bartender.png",
  "/packed_sports_bar.png",
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
    <section className="relative flex flex-col pt-20">
      {/* Full Width Hero Slider */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={heroImages[currentImage]} 
              alt="GameTime Atmosphere" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-stadium-black/20 via-transparent to-stadium-black z-10"></div>
        <div className="absolute inset-0 bg-linear-to-r from-stadium-black/40 via-transparent to-stadium-black/40 z-10"></div>
        
        {/* Floating Branding Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 0.1, y: 0 }}
             transition={{ duration: 1 }}
             className="w-[500px] h-[500px] relative"
           >
             <Image src="/logo.png" alt="Overlay Logo" fill className="object-contain" />
           </motion.div>
        </div>
      </div>

      {/* Copy Section Below Images */}
      <div className="container mx-auto px-4 py-16 text-center relative z-20 bg-stadium-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
             <Image src="/logo.png" alt="GameTime Logo" width={300} height={150} className="h-auto w-auto max-w-[250px]" priority />
          </div>
          
          <h1 className="text-5xl md:text-8xl athletic italic uppercase leading-tight mb-8">
            CHINO&apos;S NEWEST <br />
            <span className="text-victory-red">DEFINITIVE</span> SPORTS EXPERIENCE
          </h1>
          
          <p className="tech text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto uppercase tracking-wider">
            Premium Craft Beers &bull; High-Octane Flavor &bull; The Ultimate Neighborhood Huddle
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-victory-red hover:bg-[#b52a28] text-white px-12 py-5 rounded-none font-bold italic tracking-tighter uppercase transition-all hover:shadow-glow-intense active:scale-95 group flex items-center gap-2">
              View The Playbook
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>→</motion.span>
            </button>
            <button className="border-2 border-victory-red text-victory-red hover:bg-victory-red hover:text-white px-12 py-5 rounded-none font-bold italic tracking-tighter uppercase transition-all active:scale-95">
              Reserve a Table
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
