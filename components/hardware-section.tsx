import Image from "next/image"

export function HardwareSection() {
  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      {/* Section title - asymmetric placement */}
      <div className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">001 — Hardware</span>
        <h2 className="font-serif text-7xl md:text-9xl mt-4 italic">THE BALL.</h2>
      </div>

      {/* Ball with blueprint-style callouts */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center ball image */}
        <div className="relative aspect-square max-w-md mx-auto border-2 border-foreground">
          <Image src="/white-spherical-ball-sensor-technology-product-sho.jpg" alt="The RocketArm Ball" fill className="object-cover" />
        </div>

        {/* Pointer lines and callouts */}
        {/* Top left callout */}
        <div className="absolute top-0 left-0 md:-left-24 -translate-y-full md:translate-y-8">
          <div className="flex items-end gap-3">
            <div className="hidden md:block w-16 h-px bg-foreground"></div>
            <div className="text-right md:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">01</p>
              <p className="font-mono text-xs mt-1">Custom Sensor Array</p>
            </div>
          </div>
        </div>

        {/* Right callout */}
        <div className="absolute top-1/2 right-0 md:-right-32 translate-x-0 md:translate-x-0">
          <div className="flex items-center gap-3">
            <div className="hidden md:block w-24 h-px bg-foreground"></div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02</p>
              <p className="font-mono text-xs mt-1">Impact-Resistant Core</p>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-foreground"></div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03</p>
              <p className="font-mono text-xs mt-1">Real-time Altitude Tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical specs in mono - vague and cool */}
      <div className="mt-48 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground max-w-4xl mx-auto">
        {[
          { label: "Weight", value: "???g" },
          { label: "Diameter", value: "••• mm" },
          { label: "Max Alt", value: "∞" },
          { label: "Status", value: "ACTIVE" },
        ].map((spec) => (
          <div key={spec.label} className="bg-background p-6 font-mono text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</p>
            <p className="text-lg mt-2">{spec.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
