export function TickerTape() {
  const stats = [
    "SPEED RECORD: 127.4 MPH",
    "HEIGHT RECORD: 143.11 M",
    "DUAL CHALLENGE — NYC SF MIAMI",
    "ROCKETARM.ORG",
    "MEASURE YOUR THROW",
    "BUY THE BALL",
    "SPEED RECORD: 127.4 MPH",
    "HEIGHT RECORD: 143.11 M",
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
