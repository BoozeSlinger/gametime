export default function TickerV2() {
  const games = [
    { team1: "LAKERS", score1: "112", team2: "CELTICS", score2: "108", status: "FINAL" },
    { team1: "DODGERS", score1: "5", team2: "GIANTS", score2: "3", status: "7th INN" },
    { team1: "CHIEFS", score1: "24", team2: "RAIDERS", score2: "17", status: "Q4 3:45" },
    { team1: "WARRIORS", score1: "99", team2: "KINGS", score2: "94", status: "HALFTIME" },
    { team1: "LAFC", score1: "2", team2: "GALAXY", score2: "2", status: "FT" },
  ];

  return (
    <div className="fixed top-20 left-0 w-full h-10 bg-stadium-black z-40 border-b border-victory-red/20 overflow-hidden flex items-center">
      <div className="flex animate-marquee gap-12 whitespace-nowrap min-w-full">
         {[...games, ...games].map((game, i) => (
            <div key={i} className="flex items-center gap-4 text-white/80 font-athletic italic text-sm tracking-wider">
               <span className="text-victory-red font-black px-2 py-1 bg-white/5 skew-x-[-10deg]">{game.status}</span>
               <span className="font-bold">{game.team1} <span className="text-white/40 mx-1">{game.score1}</span></span>
               <span className="text-white/20">VS</span>
               <span className="font-bold">{game.team2} <span className="text-white/40 mx-1">{game.score2}</span></span>
            </div>
         ))}
      </div>
      
      {/* CSS Animation defined inline for simplicity or add to global css */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
