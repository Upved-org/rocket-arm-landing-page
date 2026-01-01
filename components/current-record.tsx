export function CurrentRecord() {
  return (
    <div className="mb-16 md:mb-24">
      {/* Record display - black background */}
      <div className="bg-foreground text-background p-8 md:p-12 mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-background/60 mb-6">
          Current World Record
        </p>
        <p className="font-serif text-6xl md:text-8xl lg:text-9xl italic leading-none">
          143.11m
        </p>
        <p className="font-mono text-sm text-background/60 mt-4">
          Set in NYC, 2024
        </p>
      </div>

      {/* Get your ticket button */}
      <a
        href="#tickets"
        className="inline-block bg-accent text-foreground font-mono text-sm md:text-base uppercase tracking-widest px-10 py-5 border-2 border-foreground hover:bg-accent/90 transition-colors"
      >
        Get Your Ticket →
      </a>
    </div>
  )
}
