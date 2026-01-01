"use client"

// Event IDs must match those in ticket-registration.tsx
const tourDates = [
  { city: "SAN FRANCISCO", date: "FEB 1", day: "SUNDAY", location: "TBA", eventId: "sf" },
  { city: "NEW YORK CITY", date: "MAR 1", day: "SUNDAY", location: "TBA", eventId: "nyc" },
  { city: "MIAMI", date: "APR 5", day: "SUNDAY", location: "TBA", eventId: "miami" },
]

export function TourSection() {
  const handleEventClick = (eventId: string) => {
    // Scroll to registration section
    const registerSection = document.getElementById("register")
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" })
      // Dispatch custom event to select the correct tab
      window.dispatchEvent(new CustomEvent("selectEvent", { detail: eventId }))
    }
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-12 border-t-2 border-foreground">
      {/* Section title */}
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            002 — The Drop Schedule
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4">THE TOUR.</h2>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
          Limited capacity. First come, first throw.
        </p>
      </div>

      {/* Ticket-style tour dates */}
      <div className="space-y-3 md:space-y-4 max-w-4xl">
        {tourDates.map((item, index) => (
          <button
            key={item.city}
            onClick={() => handleEventClick(item.eventId)}
            className="w-full text-left group border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 lg:p-8 gap-4">
              {/* City */}
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl italic">{item.city}</h3>
              </div>

              {/* Date & Location - ticket stub style */}
              <div className="flex items-center gap-6 md:gap-12 lg:gap-16">
                <div className="border-l-2 border-dashed border-foreground group-hover:border-background pl-4 md:pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    Date
                  </p>
                  <p className="font-mono text-sm mt-1">{item.date}, 2025</p>
                </div>
                <div className="border-l-2 border-dashed border-foreground group-hover:border-background pl-4 md:pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    Action
                  </p>
                  <p className="font-mono text-sm mt-1 text-accent group-hover:text-accent">GET TICKETS →</p>
                </div>
              </div>
            </div>

            {/* Perforated edge effect */}
            <div className="h-2 border-t-2 border-dashed border-foreground group-hover:border-background"></div>
          </button>
        ))}
      </div>
    </section>
  )
}
