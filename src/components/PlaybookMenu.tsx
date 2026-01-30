"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  stats: {
    label: string;
    value: number;
  }[];
  size: "small" | "medium" | "large";
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Hail Mary Burger",
    category: "SIGNATURES",
    description: "Double patty, victory sauce, jalapeño kick.",
    price: "$16",
    stats: [
      { label: "HEAT", value: 85 },
      { label: "HEAVY", value: 95 },
      { label: "RANK", value: 98 },
    ],
    size: "large",
  },
  {
    id: "2",
    name: "Fourth Down Wings",
    category: "STARTERS",
    description: "12 Jumbo wings, stadium-rubbed.",
    price: "$14",
    stats: [
      { label: "CRISP", value: 90 },
      { label: "HEAT", value: 70 },
      { label: "TEAM", value: 60 },
    ],
    size: "medium",
  },
  {
    id: "3",
    name: "Stadium Nachos",
    category: "SHAREABLES",
    description: "Loaded to the brim. No prisoner left behind.",
    price: "$18",
    stats: [
      { label: "VOLUME", value: 100 },
      { label: "CHEESE", value: 95 },
    ],
    size: "medium",
  },
  {
    id: "4",
    name: "Overtime Fries",
    category: "SIDES",
    description: "Truffle oil, parmesan, overtime grit.",
    price: "$9",
    stats: [
      { label: "SPEED", value: 40 },
      { label: "POWER", value: 80 },
    ],
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
          <button className="tech text-gray-500 hover:text-victory-red transition-colors flex items-center gap-2">
            DOWNLOAD PDF MENU <span className="text-xs">↓</span>
          </button>
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
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10"></div>
              
              {/* Content */}
              <div className="z-20">
                <p className="tech text-[10px] text-victory-red mb-1">{item.category}</p>
                <h3 className="text-2xl athletic mb-1 group-hover:text-victory-red transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="tech font-bold text-lg">{item.price}</span>
                  <button className="bg-victory-red/10 text-victory-red p-2 hover:bg-victory-red hover:text-white transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Stats (Scouting Report Layer) */}
              <motion.div 
                className="absolute inset-0 bg-victory-red/95 z-30 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              >
                <div className="border border-white/20 p-4 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-white text-xl mb-6">PLAYER STATS</h4>
                    <div className="space-y-4">
                      {item.stats.map(stat => (
                        <div key={stat.label}>
                          <div className="flex justify-between tech text-[10px] mb-1">
                            <span>{stat.label}</span>
                            <span>{stat.value}/100</span>
                          </div>
                          <div className="w-full h-1 bg-black/20 overflow-hidden">
                            <motion.div 
                              className="h-full bg-white"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${stat.value}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="tech text-[8px] text-white/50 text-right">
                    VERIFIED @ THE STADIUM
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          {/* CTA Box */}
          <div className="md:col-span-2 bg-victory-red p-8 flex flex-col justify-center items-start">
            <h3 className="text-3xl athletic italic mb-4">WANT THE FULL <br /> HUDDLE EXPERIENCE?</h3>
            <button className="bg-white text-victory-red px-6 py-2 tech font-bold hover:bg-stadium-black hover:text-white transition-colors">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
