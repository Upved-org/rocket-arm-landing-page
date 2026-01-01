import Image from "next/image"

interface EventLocation {
  city: string
  date: string
  day: string
  status: "upcoming" | "sold-out" | "few-left"
}

const events: EventLocation[] = [
  { city: "SAN FRANCISCO", date: "FEB 1", day: "SUNDAY", status: "upcoming" },
  { city: "NEW YORK CITY", date: "MAR 1", day: "SUNDAY", status: "upcoming" },
  { city: "MIAMI", date: "APR 5", day: "SUNDAY", status: "upcoming" },
]

export function CompetitionSection() {
  return (
    <section id="competition" className="py-24 md:py-32 px-6 md:px-12 border-t-2 border-foreground bg-foreground text-background">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60">
          000 — The Competition
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.9]">
          ONE THROW.<br />
          <span className="italic text-accent">ONE WORLD RECORD.</span>
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <p className="font-mono text-sm md:text-base leading-relaxed text-background/80">
          The ultimate test of human throwing power. We&apos;re searching for the person who can launch our sensor-equipped ball 
          higher than anyone in history. No machines. No tricks. Just you, 
          the ball, and gravity. The current Guinness World Record stands at 
          <span className="text-accent font-bold"> 164.042 feet (50 meters)</span>. 
          Think you can beat it?
        </p>
      </div>

      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 mb-20 md:mb-32">
        {[
          { num: "01", title: "SHOW UP", desc: "Arrive at your nearest event location. No equipment needed." },
          { num: "02", title: "THROW", desc: "Launch the RocketArm ball as high as you possibly can. One throw." },
          { num: "03", title: "GET TRACKED", desc: "Our sensors measure your exact altitude in real-time." },
        ].map((step) => (
          <div key={step.num} className="border border-background/20 p-6 md:p-8">
            <span className="font-mono text-accent text-xs tracking-widest">{step.num}</span>
            <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-3">{step.title}</h3>
            <p className="font-mono text-xs text-background/60 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Events grid */}
      <div className="mb-12">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-8">
          Upcoming Events — 2025
        </h3>
        <div className="grid md:grid-cols-3 gap-px bg-background/20">
          {events.map((event) => (
            <div 
              key={event.city} 
              className="bg-foreground p-6 md:p-8 group hover:bg-accent transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-background/40 group-hover:text-foreground/60">
                  {event.day}
                </span>
                <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-1 ${
                  event.status === "upcoming" 
                    ? "bg-accent text-foreground group-hover:bg-foreground group-hover:text-accent" 
                    : event.status === "few-left"
                    ? "bg-orange-500 text-white"
                    : "bg-background/20 text-background/40"
                }`}>
                  {event.status === "upcoming" ? "OPEN" : event.status === "few-left" ? "FEW LEFT" : "SOLD OUT"}
                </span>
              </div>
              <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-2 group-hover:text-foreground">{event.city}</h4>
              <p className="font-mono text-lg md:text-xl text-accent group-hover:text-foreground">{event.date}</p>
              <button className="mt-6 w-full border-2 border-background/40 group-hover:border-foreground py-3 font-mono text-xs uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors">
                Get Tickets →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="font-mono text-xs text-background/40 uppercase tracking-widest">
          Free entry • All ages • Prizes for top throws
        </p>
      </div>
    </section>
  )
}
