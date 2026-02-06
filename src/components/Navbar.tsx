"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Zap, Menu, X } from "lucide-react";
import { useVibe } from "@/context/VibeContext";

export default function Navbar() {
  const { isGameDay, toggleGameDay } = useVibe();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="GameTime Logo" 
              fill 
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/menu">Playbook</NavLink>
          <NavLink href="/team">The Team</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/huddle">The Huddle</NavLink>
          
          <Link href="/reservations" className="bg-victory-red text-white px-6 py-2 athletic text-xs italic tracking-widest hover:shadow-glow-intense transition-all">
            RESERVATIONS
          </Link>
          
          {/* Vibe Switcher */}
          <button 
            onClick={toggleGameDay}
            className={`flex items-center gap-2 px-4 py-2 border-2 transition-all athletic text-xs ${
              isGameDay 
              ? "bg-victory-red border-victory-red text-white shadow-glow-intense" 
              : "border-gray-700 text-gray-400 hover:border-victory-red hover:text-white"
            }`}
          >
            <Zap className={`w-3 h-3 ${isGameDay ? "fill-white" : ""}`} />
            {isGameDay ? "GAME DAY ACTIVE" : "GO GAME DAY"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-stadium-black border-b-2 border-victory-red p-4 flex flex-col gap-4 italic font-bold uppercase tracking-widest"
        >
          <Link href="/menu" onClick={() => setIsMenuOpen(false)}>Playbook</Link>
          <Link href="/team" onClick={() => setIsMenuOpen(false)}>The Team</Link>
          <Link href="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link href="/huddle" onClick={() => setIsMenuOpen(false)}>The Huddle</Link>
          <Link href="/reservations" onClick={() => setIsMenuOpen(false)} className="text-victory-red">Reservations</Link>
          <button 
            onClick={() => {
              toggleGameDay();
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 p-4 bg-victory-red text-white"
          >
            <Zap className="w-4 h-4 fill-white" />
            GAME DAY MODE
          </button>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="tech text-sm uppercase text-gray-400 hover:text-victory-red transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-victory-red transition-all group-hover:w-full"></span>
    </Link>
  );
}
