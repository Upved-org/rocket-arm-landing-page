export function GoalSection() {
  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          003 — The Mission
        </span>

        <blockquote className="mt-12 font-serif text-3xl md:text-5xl leading-tight text-balance">
          "We are chasing the <span className="italic text-accent">Guinness World Record</span> for the highest vertical
          human throw."
        </blockquote>

        <p className="mt-12 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground">
          No fluff. Just physics.
        </p>

        {/* Decorative element */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-foreground"></div>
          <div className="w-3 h-3 border-2 border-foreground rotate-45"></div>
          <div className="w-24 h-px bg-foreground"></div>
        </div>
      </div>
    </section>
  )
}
