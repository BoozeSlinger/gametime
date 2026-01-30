import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlaybookMenu from "@/components/PlaybookMenu";
import RouteSection from "@/components/RouteSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-stadium-black text-referee-white selection:bg-victory-red selection:text-white">
      <Navbar />
      
      <Hero />

      <PlaybookMenu />

      <RouteSection 
        title="THE HUDDLE" 
        subtitle="COMMUNITY & NEWS"
        align="left"
      >
        <div className="flex flex-col gap-6">
          <p className="text-xl">
            This isn&apos;t just a bar; it&apos;s the neighborhood coach&apos;s office. 
            Stay updated with local Chino sports, upcoming draft nights, and exclusive community events.
          </p>
          <button className="bg-victory-red text-white px-6 py-3 tech font-bold self-start hover:shadow-glow transition-all">
            ENTER THE HUDDLE
          </button>
        </div>
      </RouteSection>

      <RouteSection 
        title="DASHBOARD" 
        subtitle="UPCOMING LINEUP"
        align="right"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="border border-white/10 p-4">
            <h4 className="tech text-victory-red mb-2">SATURDAY</h4>
            <p className="athletic">UFC 310: Pantoja vs. Asakura</p>
            <p className="text-gray-500 text-sm mt-2">7:00 PM - MAIN CARD</p>
          </div>
          <div className="border border-white/10 p-4">
            <h4 className="tech text-victory-red mb-2">SUNDAY</h4>
            <p className="athletic">NFL SUNDAY TICKET</p>
            <p className="text-gray-500 text-sm mt-2">ALL DAY COVERAGE</p>
          </div>
        </div>
      </RouteSection>

      <section className="py-24 bg-charcoal/30">
        <div className="container mx-auto px-4 text-center">
          <p className="tech text-xs tracking-[0.5em] text-victory-red mb-4">SYSTEMS READY</p>
          <h2 className="text-4xl italic mb-12">Next Phase: The Playbook Bento Menu</h2>
        </div>
      </section>

      {/* Game Clock Scoreboard Footer */}
      <footer className="fixed bottom-0 w-full bg-stadium-black border-t border-victory-red/50 py-2 z-40 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee tech text-sm text-victory-red">
          <ScoreboardItem label="LIVE NOW" value="NFL SUNDAY TICKET - ALL GAMES" />
          <ScoreboardDivider />
          <ScoreboardItem label="SPECIAL" value="$5 DRAFT BEERS UNTIL 7PM" />
          <ScoreboardDivider />
          <ScoreboardItem label="UPCOMING" value="TRIVIA NIGHT - TUESDAY @ 8PM" />
          <ScoreboardDivider />
          <ScoreboardItem label="LIVE NOW" value="LAKERS VS CLIPPERS - TIP-OFF @ 7:30" />
          <ScoreboardDivider />
          {/* Duplicate for seamless loop */}
          <ScoreboardItem label="LIVE NOW" value="NFL SUNDAY TICKET - ALL GAMES" />
          <ScoreboardDivider />
          <ScoreboardItem label="SPECIAL" value="$5 DRAFT BEERS UNTIL 7PM" />
        </div>
      </footer>

      {/* Adding Marquee Animation Styles (Local for now, move to global later if needed) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </main>
  );
}

function ScoreboardItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 px-8">
      <span className="bg-victory-red text-white px-2 py-0.5 text-[10px] font-black">{label}</span>
      <span className="font-mono tracking-widest">{value}</span>
    </div>
  );
}

function ScoreboardDivider() {
  return <span className="text-gray-700">|</span>;
}
