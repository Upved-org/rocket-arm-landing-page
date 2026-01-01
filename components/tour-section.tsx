export function TourSection() {
  const dates = [
    { city: "NEW YORK", date: "MAR 15", location: "SECRET" },
    { city: "SAN FRANCISCO", date: "APR 02", location: "TBA" },
    { city: "MIAMI", date: "APR 20", location: "THE STREETS" },
  ]

  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      {/* Section title */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            002 — The Drop Schedule
          </span>
          <h2 className="font-serif text-6xl md:text-8xl mt-4">THE TOUR.</h2>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
          Limited capacity. First come, first throw.
        </p>
      </div>

      {/* Ticket-style tour dates */}
      <div className="space-y-4 max-w-4xl">
        {dates.map((item, index) => (
          <div
            key={item.city}
            className="group border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 gap-4">
              {/* City */}
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl italic">{item.city}</h3>
              </div>

              {/* Date & Location - ticket stub style */}
              <div className="flex items-center gap-8 md:gap-16">
                <div className="border-l-2 border-dashed border-foreground group-hover:border-background pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    Date
                  </p>
                  <p className="font-mono text-sm mt-1">{item.date}</p>
                </div>
                <div className="border-l-2 border-dashed border-foreground group-hover:border-background pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    Location
                  </p>
                  <p className="font-mono text-sm mt-1 text-accent group-hover:text-accent">{item.location}</p>
                </div>
              </div>
            </div>

            {/* Perforated edge effect */}
            <div className="h-2 border-t-2 border-dashed border-foreground group-hover:border-background"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
