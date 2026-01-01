import { AnimatedBallMetrics } from "./animated-ball-metrics"
import Link from "next/link"

export function ChallengeSection() {
  return (
    <section id="challenge" className="py-24 md:py-32 px-6 md:px-12 border-t-2 border-foreground bg-background text-foreground">
      {/* Section header */}
      <div className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          000 — The Challenge
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.9]">
          TWO RECORDS.<br />
          <span className="italic text-accent">INFINITE GLORY.</span>
        </h2>
      </div>

      {/* Dual challenge intro */}
      <div className="max-w-4xl mb-16 md:mb-20">
        <p className="font-mono text-sm md:text-base leading-relaxed text-foreground/70 mb-6">
          The ultimate test of throwing power. We&apos;re searching for the person who can throw our 
          sensor-equipped ball <span className="text-accent font-bold">faster</span> and{" "}
          <span className="text-accent font-bold">higher</span> than anyone in history.
        </p>
        <p className="font-mono text-sm text-muted-foreground">
          Our ball measures both speed (mph) and height (meters) with precision sensors. 
          Two world records. Two chances at glory. Which will you chase?
        </p>
      </div>

      {/* Two challenge cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-20">
        {/* Speed Challenge */}
        <div className="border-2 border-foreground p-6 md:p-8 bg-foreground text-background relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-accent text-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
            Speed Record
          </div>
          <div className="pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-2">Current Record</p>
            <p className="font-serif text-5xl md:text-6xl italic text-accent">127.4</p>
            <p className="font-mono text-sm text-background/60 mt-1">miles per hour</p>
            <p className="font-mono text-[10px] text-background/40 mt-4">Marcus T. • NYC • Mar 2024</p>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="font-mono text-xs text-background/70">
              🔥 How fast can you launch?
            </p>
          </div>
        </div>

        {/* Height Challenge */}
        <div className="border-2 border-foreground p-6 md:p-8 bg-foreground text-background relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-accent text-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
            Height Record
          </div>
          <div className="pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-2">Current Record</p>
            <p className="font-serif text-5xl md:text-6xl italic text-accent">143.11</p>
            <p className="font-mono text-sm text-background/60 mt-1">meters</p>
            <p className="font-mono text-[10px] text-background/40 mt-4">Marcus T. • NYC • Mar 2024</p>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="font-mono text-xs text-background/70">
              🚀 How high can you throw?
            </p>
          </div>
        </div>
      </div>

      {/* Animated metrics visualization */}
      <div className="mb-16 md:mb-20">
        <div className="text-center mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            See It In Action
          </p>
          <h3 className="font-serif text-3xl md:text-4xl italic mt-2">Real-Time Tracking</h3>
        </div>
        <AnimatedBallMetrics />
      </div>

      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 mb-16">
        {[
          { num: "01", title: "GET THE BALL", desc: "Purchase a RocketArm ball with built-in sensors to measure your throws." },
          { num: "02", title: "THROW", desc: "Launch the ball as fast and high as you can. Our sensors capture everything." },
          { num: "03", title: "COMPETE", desc: "Join live events or compete from anywhere. Your stats sync in real-time." },
        ].map((step) => (
          <div key={step.num} className="border-2 border-foreground p-6 md:p-8">
            <span className="font-mono text-accent text-xs tracking-widest">{step.num}</span>
            <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-3">{step.title}</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/shop"
          className="bg-accent text-foreground font-mono text-sm uppercase tracking-widest px-10 py-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Buy a Ball →
        </Link>
        <a
          href="#register"
          className="bg-foreground text-background font-mono text-sm uppercase tracking-widest px-10 py-4 border-2 border-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          Join an Event
        </a>
      </div>

      {/* Disclaimer */}
      <div className="text-center mt-8 px-4">
        <p className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
          Ages 18+ (or with guardian) • Prizes subject to verification
          <br />
          <span className="opacity-60 text-[9px] mt-1 block">*See official rules for details. Terms and conditions apply.</span>
        </p>
      </div>
    </section>
  )
}
