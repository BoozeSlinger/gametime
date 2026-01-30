import Link from "next/link";
import Navbar from "@/components/Navbar";

const posts = [
  {
    id: "chino-watch-party-guide",
    title: "The Ultimate Chino Watch Party Guide",
    excerpt: "Where to sit, what to order, and how to maximize your Game Day experience.",
    date: "Jan 25, 2026",
    category: "STRATEGY",
  },
  {
    id: "new-wings-lineup",
    title: "New Season, New Wings: The 2026 Lineup",
    excerpt: "Introducing three new flavors designed to test your limits.",
    date: "Jan 22, 2026",
    category: "PLAYBOOK",
  },
  {
    id: "community-draft-night",
    title: "Chino Community Draft Night Recap",
    excerpt: "A look back at our biggest neighborhood event of the season.",
    date: "Jan 18, 2026",
    category: "COMMUNITY",
  },
];

export default function HuddlePage() {
  return (
    <main className="min-h-screen bg-stadium-black pt-32 pb-24">
      <Navbar />
      
      <div className="container mx-auto px-4">
        <header className="mb-16">
          <p className="tech text-victory-red text-xs tracking-[0.4em] mb-4">THE COCH&apos;S OFFICE</p>
          <h1 className="text-6xl md:text-8xl athletic italic mb-8">THE HUDDLE</h1>
          <p className="tech text-gray-500 max-w-2xl leading-relaxed">
            Insider info, local Chino sports updates, and behind-the-scenes at GameTime. 
            Stay locked in for exclusive events and playbook updates.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/huddle/${post.id}`}
              className="group border border-white/5 bg-charcoal/30 p-8 flex flex-col justify-between hover:border-victory-red transition-all shadow-2xl skew-container"
            >
              <div className="skew-content">
                <div className="flex justify-between items-center mb-6">
                  <span className="tech text-[10px] text-victory-red border border-victory-red px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="tech text-[10px] text-gray-600">{post.date}</span>
                </div>
                <h2 className="text-3xl athletic italic mb-4 group-hover:text-victory-red transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="tech text-xs text-white group-hover:translate-x-2 transition-transform">
                  READ ARTICLE →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
