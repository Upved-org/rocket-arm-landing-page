"use client"

import { useState } from "react"

type LeaderboardEntry = {
  rank: number
  name: string
  height: number
  date: string
  location: string
}

const mockLeaderboardData: Record<string, LeaderboardEntry[]> = {
  all: [
    { rank: 1, name: "Marcus T.", height: 143.11, date: "Mar 15, 2024", location: "NYC" },
    { rank: 2, name: "Elena R.", height: 138.74, date: "Feb 28, 2024", location: "SF" },
    { rank: 3, name: "David K.", height: 135.22, date: "Apr 2, 2024", location: "Miami" },
    { rank: 4, name: "Sophia L.", height: 132.89, date: "Mar 8, 2024", location: "SF" },
    { rank: 5, name: "James W.", height: 129.45, date: "Mar 20, 2024", location: "NYC" },
    { rank: 6, name: "Aria M.", height: 127.33, date: "Apr 10, 2024", location: "Miami" },
    { rank: 7, name: "Noah P.", height: 124.67, date: "Feb 14, 2024", location: "SF" },
    { rank: 8, name: "Isabella C.", height: 121.90, date: "Mar 22, 2024", location: "NYC" },
    { rank: 9, name: "Ethan B.", height: 118.55, date: "Apr 5, 2024", location: "Miami" },
    { rank: 10, name: "Mia G.", height: 115.23, date: "Mar 1, 2024", location: "SF" },
  ],
  sf: [
    { rank: 1, name: "Elena R.", height: 138.74, date: "Feb 28, 2024", location: "SF" },
    { rank: 2, name: "Sophia L.", height: 132.89, date: "Mar 8, 2024", location: "SF" },
    { rank: 3, name: "Noah P.", height: 124.67, date: "Feb 14, 2024", location: "SF" },
    { rank: 4, name: "Mia G.", height: 115.23, date: "Mar 1, 2024", location: "SF" },
    { rank: 5, name: "Lucas H.", height: 112.45, date: "Feb 20, 2024", location: "SF" },
  ],
  nyc: [
    { rank: 1, name: "Marcus T.", height: 143.11, date: "Mar 15, 2024", location: "NYC" },
    { rank: 2, name: "James W.", height: 129.45, date: "Mar 20, 2024", location: "NYC" },
    { rank: 3, name: "Isabella C.", height: 121.90, date: "Mar 22, 2024", location: "NYC" },
    { rank: 4, name: "Oliver S.", height: 109.78, date: "Mar 18, 2024", location: "NYC" },
    { rank: 5, name: "Emma D.", height: 105.33, date: "Mar 25, 2024", location: "NYC" },
  ],
  miami: [
    { rank: 1, name: "David K.", height: 135.22, date: "Apr 2, 2024", location: "Miami" },
    { rank: 2, name: "Aria M.", height: 127.33, date: "Apr 10, 2024", location: "Miami" },
    { rank: 3, name: "Ethan B.", height: 118.55, date: "Apr 5, 2024", location: "Miami" },
    { rank: 4, name: "Ava T.", height: 108.92, date: "Apr 8, 2024", location: "Miami" },
    { rank: 5, name: "Liam J.", height: 102.17, date: "Apr 12, 2024", location: "Miami" },
  ],
}

const locations = [
  { id: "all", name: "ALL CITIES" },
  { id: "sf", name: "SAN FRANCISCO" },
  { id: "nyc", name: "NEW YORK CITY" },
  { id: "miami", name: "MIAMI" },
]

export function LeaderboardSection() {
  const [showModal, setShowModal] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("all")

  const currentData = mockLeaderboardData[selectedLocation] || []
  const topThree = currentData.slice(0, 3)

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-12 bg-foreground text-background border-t-2 border-background">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-8 md:mb-12 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/70">
              004 — The Rankings
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-4 italic">
              WHO&apos;S ON TOP?
            </h2>
            <p className="font-mono text-sm text-background/60 mt-4 max-w-md mx-auto">
              The current leaderboard of the highest throws. Think you can beat them?
            </p>
          </div>

          {/* Top 3 Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {topThree.map((entry, index) => (
              <div
                key={entry.rank}
                className={`border-2 border-background p-6 text-center relative ${
                  index === 0 ? "md:-mt-4 bg-accent text-foreground border-accent" : ""
                }`}
              >
                {/* Rank badge */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 font-mono text-xs uppercase tracking-widest ${
                  index === 0 
                    ? "bg-foreground text-accent" 
                    : "bg-background text-foreground"
                }`}>
                  #{entry.rank}
                </div>
                
                <div className="pt-4">
                  <p className="font-serif text-2xl md:text-3xl italic mb-2">{entry.name}</p>
                  <p className={`font-mono text-4xl md:text-5xl font-bold ${index === 0 ? "text-foreground" : "text-accent"}`}>
                    {entry.height}m
                  </p>
                  <p className={`font-mono text-[10px] uppercase tracking-widest mt-3 ${
                    index === 0 ? "text-foreground/70" : "text-background/50"
                  }`}>
                    {entry.location} • {entry.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Leaderboard Button */}
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-background text-foreground font-mono text-sm md:text-base uppercase tracking-widest px-10 py-4 border-2 border-background hover:bg-accent hover:text-foreground hover:border-accent transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              View Full Leaderboard →
            </button>
          </div>
        </div>
      </section>

      {/* Leaderboard Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm">
          <div className="bg-background border-2 border-foreground w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b-2 border-foreground flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Full Rankings
                </span>
                <h3 className="font-serif text-3xl md:text-4xl italic mt-1">LEADERBOARD</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="font-mono text-3xl hover:text-accent transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Location Tabs */}
            <div className="px-6 md:px-8 py-4 border-b-2 border-foreground/10 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 border-2 transition-all whitespace-nowrap ${
                      selectedLocation === loc.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-foreground/30 hover:border-foreground"
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="space-y-3">
                {currentData.map((entry, index) => (
                  <div
                    key={`${entry.name}-${entry.rank}`}
                    className={`flex items-center gap-4 p-4 border-2 transition-all ${
                      index === 0
                        ? "border-accent bg-accent/10"
                        : index === 1
                        ? "border-foreground/40 bg-foreground/5"
                        : index === 2
                        ? "border-foreground/30 bg-foreground/[0.02]"
                        : "border-foreground/20"
                    }`}
                  >
                    {/* Rank */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-mono text-lg md:text-xl font-bold shrink-0 ${
                      index === 0
                        ? "bg-accent text-foreground"
                        : index === 1
                        ? "bg-foreground text-background"
                        : index === 2
                        ? "bg-foreground/80 text-background"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {entry.rank}
                    </div>

                    {/* Name & Location */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg md:text-xl italic truncate">{entry.name}</p>
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        {entry.location} • {entry.date}
                      </p>
                    </div>

                    {/* Height */}
                    <div className="text-right shrink-0">
                      <p className={`font-mono text-xl md:text-2xl font-bold ${
                        index === 0 ? "text-accent" : "text-foreground"
                      }`}>
                        {entry.height}m
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t-2 border-foreground/10 bg-muted/30">
              <p className="font-mono text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                Rankings updated after each event • Join the competition to get on the board
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
