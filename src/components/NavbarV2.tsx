import { ChevronRight } from "lucide-react";
import Link from 'next/link';

export default function NavbarV2() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/v2" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-victory-red get-skewed flex items-center justify-center transform group-hover:rotate-12 transition-transform">
             <span className="font-tech font-bold text-white text-xl">GT</span>
          </div>
          <span className="font-athletic text-2xl tracking-tighter italic font-black text-white">
            GAMETIME <span className="text-victory-red">CHINO</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
           {['About', 'Menu', 'Events', 'Contact'].map((item) => (
             <Link key={item} href={`/v2/${item.toLowerCase()}`} className="font-tech text-sm uppercase tracking-widest text-white/70 hover:text-victory-red transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-victory-red group-hover:w-full transition-all duration-300"/>
             </Link>
           ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
           <Link href="/v2/huddle" className="hidden md:flex items-center gap-2 px-6 py-2 bg-transparent border border-victory-red text-victory-red font-tech text-xs uppercase tracking-widest hover:bg-victory-red hover:text-white transition-all skew-x-[-12deg]">
              <span className="skew-x-[12deg]">Join Huddle</span>
           </Link>
           <Link href="/v2/reservations" className="flex items-center gap-2 px-6 py-2 bg-victory-red text-white font-tech text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-glow skew-x-[-12deg]">
               <span className="skew-x-[12deg] flex items-center gap-2">
                 Book Table <ChevronRight className="w-3 h-3"/>
               </span>
           </Link>
        </div>
      </div>
    </nav>
  );
}
