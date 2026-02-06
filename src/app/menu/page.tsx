"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const foodMenu = {
  categories: [
    {
      name: "STARTERS",
      items: [
        { name: "Fourth Down Wings", price: "$14", description: "12 Jumbo wings, stadium-rubbed or buffalo style.", img: "/fourth_down_wings.png" },
        { name: "Stadium Nachos", price: "$18", description: "Loaded with queso, jalapeños, olives, and pulled pork.", img: "/stadium_nachos.png" },
        { name: "Draft Day Pretzels", price: "$12", description: "Warm salted pretzels with honey mustard and beer cheese." }
      ]
    },
    {
      name: "SIGNATURE BURGERS",
      items: [
        { name: "Hail Mary Burger", price: "$16", description: "Double patty, victory sauce, jalapeño kick, served with fries.", img: "/hail_mary_burger.png" },
        { name: "The Blitz Burger", price: "$17", description: "Bacon, onion rings, BBQ sauce, and sharp cheddar." },
        { name: "Field Goal Veggie", price: "$15", description: "Plant-based patty, avocado, sprouts, and lemon aioli." }
      ]
    },
    {
      name: "SIDES",
      items: [
        { name: "Overtime Fries", price: "$9", description: "Truffle oil, parmesan, overtime grit.", img: "/overtime_fries.png" },
        { name: "Stadium Slaw", price: "$5", description: "Crispy cabbage with a spicy kick." }
      ]
    }
  ]
};

const cocktailMenu = {
  name: "LIQUID VICTORY",
  items: [
    { name: "The Walk-Off", price: "$14", description: "Bourbon, maple syrup, orange bitters, smoked rosemary." },
    { name: "Penalty Box", price: "$13", description: "Spicy tequila, lime, agave, hibiscus rim." },
    { name: "Stadium Sour", price: "$12", description: "Gin, fresh lemon, simple syrup, egg white foam." },
    { name: "Overtime Old Fashioned", price: "$15", description: "Premium rye, walnut bitters, luxury cherry." }
  ]
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stadium-black text-referee-white pb-24">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 pb-20 border-b border-victory-red/20 bg-charcoal/30">
        <div className="container mx-auto px-4 text-center">
          <p className="tech text-victory-red tracking-[0.5em] uppercase text-xs mb-4">The Official Strategy</p>
          <h1 className="text-7xl md:text-9xl athletic italic uppercase leading-none">The Playbook</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Food Menu */}
          <div className="lg:col-span-8 space-y-20">
            {foodMenu.categories.map((category) => (
              <motion.section 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl athletic italic text-victory-red mb-12 border-b border-white/10 pb-4">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      {item.img && (
                        <div className="relative aspect-video mb-6 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
                           <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl athletic uppercase italic tracking-tighter group-hover:text-victory-red transition-colors">
                          {item.name}
                        </h3>
                        <span className="tech text-victory-red font-bold text-xl">{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Sidebar: Cocktails */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <p className="tech text-[10px] text-victory-red tracking-[0.4em] mb-4 uppercase">Spirits & Mixology</p>
              <h2 className="text-5xl athletic italic uppercase mb-12">{cocktailMenu.name}</h2>
              <div className="space-y-12">
                {cocktailMenu.items.map((item) => (
                  <div key={item.name} className="group border-b border-white/5 pb-8 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl athletic italic uppercase group-hover:text-victory-red transition-colors">{item.name}</h3>
                       <span className="tech text-victory-red font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm italic">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 bg-victory-red p-8 text-center">
                <h4 className="tech text-xs tracking-widest mb-4">JOIN THE HUDDLE</h4>
                <p className="text-xl athletic italic mb-6">RESERVE YOUR TABLE FOR THE NEXT BIG GAME</p>
                <button className="bg-white text-victory-red px-8 py-3 tech font-black hover:bg-stadium-black hover:text-white transition-colors">
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
