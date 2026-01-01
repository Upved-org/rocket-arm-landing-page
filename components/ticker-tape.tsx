export function TickerTape() {
  const stats = [
    "CURRENT WORLD RECORD: 164.042 FT",
    "EST. 2025 — NYC SF MIAMI",
    "ROCKETARM.ORG",
    "HIGHEST THROW BY HUMAN",
    "CURRENT WORLD RECORD: 50 M",
    "EST. 2025 — NYC SF MIAMI",
    "ROCKETARM.ORG",
    "HIGHEST THROW BY HUMAN",
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background overflow-hidden border-b-2 border-accent">
      <div className="flex animate-scroll">
        {[...stats, ...stats].map((stat, i) => (
          <span key={i} className="font-mono text-[10px] uppercase tracking-[0.3em] whitespace-nowrap px-8 py-2">
            {stat}
            <span className="text-accent mx-4">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
