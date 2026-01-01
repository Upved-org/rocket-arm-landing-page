import { CurrentRecord } from "./current-record"

export function ChallengeSection() {
  return (
    <section id="challenge" className="py-24 md:py-32 px-6 md:px-12 border-t-2 border-foreground bg-background text-foreground">
      {/* Section header */}
      <div className="mb-16 md:mb-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          000 — The Challenge
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.9]">
          ONE THROW.<br />
          <span className="italic text-accent">ONE WORLD RECORD.</span>
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-3xl mb-16 md:mb-20">
        <p className="font-mono text-sm md:text-base leading-relaxed text-foreground/70">
          The ultimate test of human throwing power. We&apos;re searching for the person who can launch our sensor-equipped ball 
          higher than anyone in history. No machines. No tricks. Just you, 
          the ball, and gravity.
        </p>
      </div>

      {/* Current Record Display */}
      <CurrentRecord />

      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 mb-16">
        {[
          { num: "01", title: "SHOW UP", desc: "Arrive at your nearest event location. No equipment needed." },
          { num: "02", title: "THROW", desc: "Launch the RocketArm ball as high as you possibly can. One throw." },
          { num: "03", title: "GET TRACKED", desc: "Our sensors measure your exact altitude in real-time." },
        ].map((step) => (
          <div key={step.num} className="border-2 border-foreground p-6 md:p-8">
            <span className="font-mono text-accent text-xs tracking-widest">{step.num}</span>
            <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-3">{step.title}</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center px-4">
        <p className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
          Free entry • Ages 18+ (or with guardian) • Prizes subject to verification
          <br />
          <span className="opacity-60 text-[9px] mt-1 block">*See official rules for details. Terms and conditions apply.</span>
        </p>
      </div>
    </section>
  )
}
