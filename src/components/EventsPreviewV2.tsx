'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { Calendar } from "lucide-react";

export default function EventsPreviewV2() {
  const events = [
    { title: "UFC 300: Pereira vs Hill", date: "SAT APR 13", time: "7:00 PM", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000" },
    { title: "Super Bowl LIX", date: "SUN FEB 09", time: "3:30 PM", img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1000" },
    { title: "NBA Finals Game 1", date: "THU JUN 06", time: "5:30 PM", img: "https://images.unsplash.com/photo-1546519638-68e109498ee2?q=80&w=1000" },
  ];

  return (
    <section className="py-24 bg-charcoal text-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stadium-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stadium-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
         <div>
            <h2 className="text-5xl md:text-8xl font-athletic italic font-black text-white uppercase tracking-tighter mb-2">
              Upcoming <span className="text-stroke-red text-transparent">Action</span>
            </h2>
         </div>
         <Link href="/v2/events" className="hidden md:flex items-center gap-2 font-tech text-victory-red border-b border-victory-red pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
            View Full Schedule <Calendar className="w-4 h-4" />
         </Link>
      </div>

      <div className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x no-scrollbar">
         {events.map((event, i) => (
           <motion.div 
             key={i}
             className="min-w-[85vw] md:min-w-[600px] h-[400px] relative snap-center group cursor-pointer overflow-hidden border border-white/10"
             whileHover={{ scale: 1.02 }}
           >
              <Image 
                src={event.img} 
                alt={event.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] group-hover:blur-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stadium-black via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                 <div className="flex justify-between items-end">
                    <div>
                       <div className="flex gap-4 font-tech text-white/80 mb-4 uppercase tracking-[0.2em] text-xs">
                          <span className="bg-victory-red text-white px-3 py-1 skew-x-[-10deg] shadow-glow"><span className="skew-x-[10deg] block">{event.date}</span></span>
                          <span className="flex items-center">{event.time}</span>
                       </div>
                       <h3 className="text-4xl md:text-6xl font-athletic italic font-black uppercase leading-[0.8] mb-4 text-shadow-lg">{event.title}</h3>
                    </div>
                    
                    <button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-victory-red hover:border-victory-red transition-all rounded-full group-hover:rotate-45 duration-300">
                       <span className="text-2xl font-light">↗</span>
                    </button>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
}
