import Image from "next/image"

interface BallVersion {
  version: string
  name: string
  status: "current" | "coming-soon"
  image: string
  features: { label: string; value: string }[]
  description: string
}

const ballVersions: BallVersion[] = [
  {
    version: "V1",
    name: "THE TRACKER",
    status: "current",
    image: "/white-spherical-ball-sensor-technology-product-sho.jpg",
    description: "Our first-generation sensor ball. Battle-tested and ready to track your throws in real-time.",
    features: [
      { label: "Weight", value: "???g" },
      { label: "Diameter", value: "••• mm" },
      { label: "Max Alt", value: "∞" },
      { label: "Status", value: "ACTIVE" },
    ],
  },
  {
    version: "V2",
    name: "THE PHOENIX",
    status: "coming-soon",
    image: "/white-spherical-ball-sensor-technology-product-sho.jpg",
    description: "Next-gen precision. Enhanced sensors, lighter build, and real-time video streaming.",
    features: [
      { label: "Weight", value: "—" },
      { label: "Diameter", value: "—" },
      { label: "Max Alt", value: "HIGHER" },
      { label: "Status", value: "DEV" },
    ],
  },
]

export function HardwareSection() {
  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      {/* Section title */}
      <div className="mb-16 md:mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          001 — Hardware
        </span>
        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl mt-4 italic">THE BALL.</h2>
      </div>

      {/* Ball versions grid */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {ballVersions.map((ball) => (
          <div 
            key={ball.version} 
            className={`relative border-2 ${
              ball.status === "current" 
                ? "border-foreground" 
                : "border-foreground/30"
            }`}
          >
            {/* Version badge */}
            <div className="absolute top-0 left-0 z-10">
              <div className={`font-mono text-xs uppercase tracking-widest px-4 py-2 ${
                ball.status === "current"
                  ? "bg-accent text-foreground"
                  : "bg-foreground/10 text-foreground/50"
              }`}>
                {ball.status === "current" ? "CURRENT" : "COMING SOON"}
              </div>
            </div>

            {/* Ball image */}
            <div className={`relative aspect-square ${ball.status === "coming-soon" ? "opacity-50" : ""}`}>
              <Image 
                src={ball.image} 
                alt={`RocketArm Ball ${ball.version}`} 
                fill 
                className="object-cover"
              />
              {ball.status === "coming-soon" && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                  <span className="font-serif text-4xl md:text-6xl italic text-foreground/30">2025</span>
                </div>
              )}
            </div>

            {/* Ball info */}
            <div className="p-6 md:p-8 border-t-2 border-inherit">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-accent text-sm tracking-widest">{ball.version}</span>
                <h3 className="font-serif text-2xl md:text-3xl">{ball.name}</h3>
              </div>
              <p className={`font-mono text-xs leading-relaxed mb-6 ${
                ball.status === "coming-soon" ? "text-muted-foreground" : "text-foreground/70"
              }`}>
                {ball.description}
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/20">
                {ball.features.map((spec) => (
                  <div 
                    key={spec.label} 
                    className={`bg-background p-4 font-mono text-center ${
                      ball.status === "coming-soon" ? "opacity-50" : ""
                    }`}
                  >
                    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {spec.label}
                    </p>
                    <p className="text-sm mt-1">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout lines for current version */}
            {ball.status === "current" && (
              <>
                {/* Top left callout */}
                <div className="hidden lg:block absolute top-16 -left-4 -translate-x-full">
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">01</p>
                      <p className="font-mono text-xs mt-1">Custom Sensor Array</p>
                    </div>
                    <div className="w-12 h-px bg-foreground"></div>
                  </div>
                </div>

                {/* Middle right callout */}
                <div className="hidden lg:block absolute top-1/3 -right-4 translate-x-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-foreground"></div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02</p>
                      <p className="font-mono text-xs mt-1">Impact-Resistant Core</p>
                    </div>
                  </div>
                </div>

                {/* Bottom right callout */}
                <div className="hidden lg:block absolute top-2/3 -right-4 translate-x-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-foreground"></div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03</p>
                      <p className="font-mono text-xs mt-1">Real-time Altitude Tracking</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
