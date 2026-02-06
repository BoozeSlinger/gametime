"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  img: string;
  size: "small" | "medium" | "large";
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Hail Mary Burger",
    category: "SIGNATURES",
    description: "Double patty, victory sauce, jalapeño kick.",
    price: "$16",
    img: "/hail_mary_burger.png",
    size: "large",
  },
  {
    id: "2",
    name: "Fourth Down Wings",
    category: "STARTERS",
    description: "12 Jumbo wings, stadium-rubbed.",
    price: "$14",
    img: "/fourth_down_wings.png",
    size: "medium",
  },
  {
    id: "3",
    name: "Stadium Nachos",
    category: "SHAREABLES",
    description: "Loaded to the brim. No prisoner left behind.",
    price: "$18",
    img: "/stadium_nachos.png",
    size: "medium",
  },
  {
    id: "4",
    name: "Overtime Fries",
    category: "SIDES",
    description: "Truffle oil, parmesan, overtime grit.",
    price: "$9",
    img: "/overtime_fries.png",
    size: "small",
  },
];

export default function PlaybookMenu() {
  return (
    <section className="py-24 bg-stadium-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="tech text-victory-red text-xs tracking-[0.4em] mb-2">SCOUTING REPORT</p>
            <h2 className="text-5xl md:text-7xl athletic italic">THE PLAYBOOK</h2>
          </div>
          <Link href="/menu" className="tech text-gray-500 hover:text-victory-red transition-colors flex items-center gap-2">
            VIEW FULL DIGITAL MENU <span className="text-xs">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[250px]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative group overflow-hidden border border-gray-900 bg-charcoal/50 flex flex-col justify-end p-6
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-2" : ""}
                ${item.size === "small" ? "md:col-span-1" : ""}
              `}
            >
              {/* Overlay Background */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10 transition-opacity group-hover:opacity-30"></div>
              
              {/* Background Image (Revealed on hover) */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                />
              </div>

              {/* Content */}
              <div className="z-20 relative">
                <p className="tech text-[10px] text-victory-red mb-1 group-hover:text-white transition-colors">{item.category}</p>
                <h3 className="text-2xl athletic mb-1 group-hover:text-white drop-shadow-lg transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-white drop-shadow-lg">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="tech font-bold text-lg group-hover:text-white">{item.price}</span>
                  <button className="bg-victory-red text-white p-2 hover:bg-white hover:text-victory-red transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Reservation CTA box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-victory-red p-8 flex flex-col justify-center items-start text-white group"
          >
            <h3 className="text-3xl athletic italic mb-4 leading-tight group-hover:scale-105 transition-transform origin-left">
              READY FOR THE <br /> FULL HUDDLE?
            </h3>
            <Link 
               href="/reservations" 
               className="bg-white text-victory-red px-8 py-3 tech font-black hover:bg-stadium-black hover:text-white transition-all uppercase italic"
            >
              Book a table now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
