"use client"

import { useState } from "react"
import Image from "next/image"

type MediaItem = {
  id: number
  type: "image" | "video"
  src: string
  thumbnail?: string
  alt: string
}

const socialLinks = [
  {
    name: "TikTok",
    href: "https://tiktok.com/@rocketarm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rocketarm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/rocketarm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

// Default media items - can be customized
const defaultMedia: MediaItem[] = [
  { id: 1, type: "image", src: "/person-throwing-ball-upward-urban-street-raw-foota.jpg", alt: "Street throw" },
  { id: 2, type: "image", src: "/ball-in-sky-tracking-view-phone-camera-style.jpg", alt: "Ball tracking" },
  { id: 3, type: "image", src: "/crowd-watching-vertical-throw-nyc-street.jpg", alt: "Crowd watching" },
  { id: 4, type: "image", src: "/sensor-ball-technology-close-up-raw-footage.jpg", alt: "Sensor closeup" },
  { id: 5, type: "image", src: "/person-catching-ball-celebration-street-style.jpg", alt: "Catch celebration" },
  { id: 6, type: "image", src: "/ball-trajectory-sky-view-phone-recording.jpg", alt: "Sky trajectory" },
]

interface SocialFeedProps {
  media?: MediaItem[]
}

export function SocialFeed({ media = defaultMedia }: SocialFeedProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "image" | "video">("all")

  const filteredMedia = activeFilter === "all" ? media : media.filter((item) => item.type === activeFilter)

  return (
    <section className="py-16 md:py-32 px-4 md:px-12 border-t-2 border-foreground">
      {/* Section header with social links */}
      <div className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              004 — Live Feed
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl mt-4 italic">@ROCKETARM</h2>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 md:w-12 md:h-12 border-2 border-foreground flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors">
                  {link.icon}
                </span>
                <span className="hidden lg:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-3 md:gap-4 mt-8">
          {(["all", "image", "video"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-[10px] uppercase tracking-widest px-3 md:px-4 py-2 border-2 transition-colors ${
                activeFilter === filter
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/30 hover:border-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 md:gap-1 bg-foreground">
        {filteredMedia.map((item) => (
          <div key={item.id} className="relative aspect-[9/16] bg-background group cursor-pointer">
            {item.type === "video" ? (
              <>
                <Image
                  src={item.thumbnail || item.src}
                  alt={item.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-background/80 rounded-full flex items-center justify-center bg-foreground/40 group-hover:bg-accent group-hover:border-accent transition-colors">
                    <svg className="w-4 h-4 text-background ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            )}

            {/* REC indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-mono text-[8px] uppercase tracking-widest text-background bg-foreground/80 px-1">
                {item.type === "video" ? "VID" : "IMG"}
              </span>
            </div>

            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)] pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
