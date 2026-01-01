"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function AnimatedBallMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<"idle" | "launching" | "peak" | "complete">("idle")
  const [currentSpeed, setCurrentSpeed] = useState(0)
  const [currentHeight, setCurrentHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Target values
  const maxSpeed = 127.4 // mph
  const maxHeight = 143.11 // meters

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startAnimation = () => {
    setAnimationPhase("launching")
    
    // Slower speed animation (0-3s)
    const speedInterval = setInterval(() => {
      setCurrentSpeed(prev => {
        const next = prev + 2.1 // Half the previous speed
        if (next >= maxSpeed) {
          clearInterval(speedInterval)
          return maxSpeed
        }
        return next
      })
    }, 50)

    // Slower height animation (1s-6s)
    setTimeout(() => {
      const heightInterval = setInterval(() => {
        setCurrentHeight(prev => {
          const next = prev + 1.43 // Half the previous speed
          if (next >= maxHeight) {
            clearInterval(heightInterval)
            setAnimationPhase("peak")
            return maxHeight
          }
          return next
        })
      }, 50)
    }, 1000)

    // Complete phase + auto-replay after 5 seconds (total ~11s cycle)
    setTimeout(() => {
      setAnimationPhase("complete")
      setTimeout(() => {
        if (containerRef.current) {
          setAnimationPhase("idle")
          setCurrentSpeed(0)
          setCurrentHeight(0)
          setTimeout(() => startAnimation(), 500)
        }
      }, 5000)
    }, 7000) // Extended to 7s for slower animation
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* Metrics display card with sky background */}
      <div className="relative border-2 border-foreground p-6 md:p-8 overflow-hidden">
        {/* Sky background */}
        <div className="absolute inset-0 bg-[#2E6FA8]">
          <Image
            src="/images/blue-background-clean.jpeg"
            alt="Sky background"
            fill
            className="object-cover opacity-90"
          />
        </div>

        {/* Gradient overlay for height visualization */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent transition-all duration-500"
          style={{ 
            height: `${(currentHeight / maxHeight) * 100}%`,
            bottom: 0,
            top: 'auto'
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                Live Metrics
              </p>
              <p className="font-serif text-xl italic mt-1 text-white drop-shadow-md">Throw Analysis</p>
            </div>
            <div className={`px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${
              animationPhase === "complete" 
                ? "bg-accent text-foreground" 
                : "bg-white/20 text-white backdrop-blur-sm"
            }`}>
              {animationPhase === "idle" && "Ready"}
              {animationPhase === "launching" && "Tracking..."}
              {animationPhase === "peak" && "Peak!"}
              {animationPhase === "complete" && "Record!"}
            </div>
          </div>

          {/* Ball animation track */}
          <div className="relative h-48 mb-6 border-l-2 border-dashed border-white/40">
            {/* Height markers */}
            <div className="absolute left-4 top-0 font-mono text-[10px] text-white/60 drop-shadow">150m</div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-white/60 drop-shadow">75m</div>
            <div className="absolute left-4 bottom-0 font-mono text-[10px] text-white/60 drop-shadow">0m</div>

            {/* Animated ball */}
            <div 
              className="absolute left-8 right-0 transition-all duration-100 ease-out"
              style={{ 
                bottom: `${Math.min((currentHeight / maxHeight) * 100, 100)}%`,
                transform: 'translateY(50%)'
              }}
            >
              <div className="relative">
                <Image
                  src="/images/ball-trans.png"
                  alt="RocketArm Ball"
                  width={48}
                  height={48}
                  className={`drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] ${
                    animationPhase === "launching" ? "animate-pulse" : ""
                  }`}
                />
                {/* Speed trail */}
                {animationPhase === "launching" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/40 rounded-full blur-xl animate-ping" />
                )}
              </div>
            </div>
          </div>

          {/* Metrics readout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Speed */}
            <div className="border-2 border-white/30 bg-white/10 backdrop-blur-sm p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">
                Speed
              </p>
              <p className="font-mono text-3xl md:text-4xl font-bold text-accent drop-shadow-md">
                {currentSpeed.toFixed(1)}
              </p>
              <p className="font-mono text-[10px] text-white/70">mph</p>
            </div>

            {/* Height */}
            <div className="border-2 border-white/30 bg-white/10 backdrop-blur-sm p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">
                Height
              </p>
              <p className="font-mono text-3xl md:text-4xl font-bold text-accent drop-shadow-md">
                {currentHeight.toFixed(2)}
              </p>
              <p className="font-mono text-[10px] text-white/70">meters</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA below */}
      <div className="mt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground mb-3">
          Get your own RocketArm ball to measure your throws
        </p>
        <a
          href="/shop"
          className="inline-block bg-accent text-foreground font-mono text-sm uppercase tracking-widest px-8 py-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Shop Now →
        </a>
      </div>
    </div>
  )
}
