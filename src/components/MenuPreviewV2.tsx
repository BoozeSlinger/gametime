'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

const menuItems = [
  {
    title: "The MVP Burger",
    price: "$16.50",
    desc: "Half-pound Wagyu blend, thick-cut bacon, aged cheddar, tobacco onions, and our signature Gametime sauce on brioche.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599"
  },
  {
    title: "All-Star Wings",
    price: "$13.99",
    desc: "Jumbo bone-in wings tossed in your choice of sauce. Served with celery, carrots, and house-made ranch.",
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1000"
  },
  {
    title: "Stadium Nachos",
    price: "$14.99",
    desc: "Triple-layered corn chips, craft beer cheese, house pico de gallo, pickled jalapeños, and hand-scooped guacamole.",
    img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1000"
  },
  {
    title: "Champs Pizza",
    price: "$18.00",
    desc: "14\" hand-tossed dough topped with pepperoni, Italian sausage, smoked ham, and mozzarella cheese.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000"
  }
];

export default function MenuPreviewV2() {
  return (
    <section className="py-24 bg-stadium-black relative text-white overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-victory-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-8xl font-athletic italic font-black text-white uppercase tracking-tighter mb-4"
           >
             Game Day <span className="text-victory-red text-stroke-white">Eats</span>
           </motion.h2>
           <p className="font-tech text-victory-red tracking-[0.3em] uppercase opacity-80">
              Fuel For The Win
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {menuItems.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -10 }}
               className="group relative bg-charcoal border border-white/5 rounded-none overflow-hidden hover:border-victory-red/50 transition-colors"
             >
                <div className="h-64 relative overflow-hidden">
                   <Image 
                     src={item.img} 
                     alt={item.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-4 right-4 bg-victory-red text-white font-athletic font-bold px-3 py-1 -skew-x-12 shadow-lg">
                      <span className="block skew-x-12">{item.price}</span>
                   </div>
                </div>
                
                <div className="p-6 relative">
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-victory-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <h3 className="text-2xl font-athletic italic font-bold uppercase mb-2 tracking-tight">{item.title}</h3>
                   <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.desc}
                   </p>
                   <button className="w-full py-3 border border-white/20 text-xs font-tech uppercase tracking-widest hover:bg-victory-red hover:border-victory-red hover:text-white transition-all">
                      Add to Order
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="text-center mt-16">
           <Link href="/v2/menu" className="inline-block px-12 py-4 bg-transparent border-2 border-victory-red text-victory-red font-athletic italic text-xl uppercase tracking-wider hover:bg-victory-red hover:text-white transition-all -skew-x-12 shadow-[0_0_15px_rgba(209,48,46,0.2)]">
              <span className="block skew-x-12">View Full Menu</span>
           </Link>
        </div>
      </div>
    </section>
  );
}
