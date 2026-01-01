"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#2E6FA8]">
        <Image
          src="/images/blue-background-clean.jpeg"
          alt="Blue sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Ball - Center on small/md, slightly left on large screens */}
      <div
        className={`absolute bottom-0 left-1/2 lg:left-1/3 w-[300px] h-[300px] md:w-[400px] md:h-[400px] ${
          animationStarted ? "animate-ball-rise-center lg:animate-ball-rise-left" : "-translate-x-1/2"
        }`}
        style={{
          zIndex: 5,
        }}
      >
        <Image
          src="/images/ball-trans.png"
          alt="White marble ball"
          fill
          className={`object-contain ${animationStarted ? "animate-ball-rotate" : ""}`}
          priority
        />
      </div>

      {/* Hero text */}
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="font-serif text-[11vw] md:text-[9vw] leading-[0.85] tracking-tight text-white text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          SHOW US
          <br />
          <span className="italic">YOUR THROW!</span>
        </h1>
      </div>

      <a 
        href="#challenge"
        className="absolute bottom-12 right-12 md:bottom-20 md:right-20 bg-accent text-accent-foreground font-mono text-sm md:text-base uppercase tracking-widest px-8 py-4 md:px-10 md:py-5 border-2 border-foreground rotate-[-8deg] hover:rotate-0 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
      >
        Enter
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>

      {/* Small floating tag */}
      <div className="absolute top-12 left-8 font-semibold font-mono text-md uppercase tracking-[0.3em] text-white z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
        ROCKETARM
      </div>
    </section>
  )
}
