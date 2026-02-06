"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const staff = [
  {
    name: "JAXON R.",
    role: "HEAD BARTENDER",
    bio: "Specializes in craft cocktails and keeping the energy high during the fourth quarter.",
    specialty: "The Walk-Off Old Fashioned",
    img: "/staff_placeholder_1.png"
  },
  {
    name: "SARAH M.",
    role: "HOSPITALITY MANAGER",
    bio: "Ensures every huddle is seamless and every guest feels like an MVP.",
    specialty: "Game Day Logistics",
    img: "/staff_placeholder_2.png"
  },
  {
    name: "CHRIS T.",
    role: "MIXOLOGIST",
    bio: "Precision pouring and a deep knowledge of the craft beer playbook.",
    specialty: "Double Overtime IPA",
    img: "/staff_placeholder_3.png"
  },
  {
    name: "LEO D.",
    role: "BAR MANAGER",
    bio: "The coach behind the bar. Expert in team morale and premium service.",
    specialty: "Team Strategy",
    img: "/staff_placeholder_4.png"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-stadium-black text-referee-white pb-32">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-20 border-b border-victory-red/20 bg-charcoal/30 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-victory-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4">
          <p className="tech text-victory-red tracking-[0.5em] uppercase text-xs mb-4">THE ROSTER</p>
          <h1 className="text-7xl md:text-9xl athletic italic uppercase leading-none">MEET THE TEAM</h1>
          <p className="max-w-xl text-xl text-gray-400 mt-8 tech uppercase leading-relaxed">
            The veterans behind the bar. The specialists on the floor. The MVPs of Chino hospitality.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-charcoal border border-white/5 mb-6 group-hover:border-victory-red transition-colors duration-500">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-victory-red z-20 group-hover:w-12 group-hover:h-12 transition-all"></div>
                  
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-linear-to-t from-stadium-black to-transparent opacity-60 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                     {/* Using a placeholder div since I hit image limit, but using staff paths for when they exist */}
                     <div className="w-full h-full bg-stone-800 flex items-center justify-center text-stone-700 text-6xl font-display font-black">GT</div>
                  </div>
                </div>

                <div className="relative z-20">
                  <p className="tech text-victory-red text-[10px] tracking-widest uppercase mb-1">{person.role}</p>
                  <h3 className="text-3xl athletic italic uppercase group-hover:text-victory-red transition-colors mb-4">{person.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{person.bio}</p>
                  
                  <div className="bg-white/5 p-4 border-l-2 border-victory-red">
                    <p className="tech text-[8px] text-gray-500 uppercase mb-1 font-bold">FAVORITE CALL</p>
                    <p className="text-sm italic font-medium">{person.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-24 bg-victory-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl athletic italic mb-8 uppercase leading-tight">WANT TO JOIN THE HUDDLE?</h2>
          <p className="text-xl tech mb-12 max-w-2xl mx-auto uppercase">We&apos;re always looking for veterans and rising stars in the hospitality game.</p>
          <button className="bg-white text-victory-red px-12 py-4 tech font-black hover:bg-stadium-black hover:text-white transition-all uppercase italic">
            Apply for the roster
          </button>
        </div>
      </section>
    </main>
  );
}
