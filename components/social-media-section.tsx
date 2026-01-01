import Image from "next/image"

type MediaType = "image" | "video"

interface MediaItem {
  id: number
  type: MediaType
  src: string
  alt: string
  link?: string
}

interface SocialLink {
  platform: "tiktok" | "instagram" | "x"
  url: string
  label: string
}

// Customizable social links
const socialLinks: SocialLink[] = [
  { platform: "tiktok", url: "https://tiktok.com/@rocketarm", label: "TikTok" },
  { platform: "instagram", url: "https://instagram.com/rocketarm", label: "Instagram" },
  { platform: "x", url: "https://x.com/rocketarm", label: "X" },
]

// Customizable media items - replace with your own images/videos
// To add your own: place images in /public/images/ and update src paths below
const mediaItems: MediaItem[] = [
  { 
    id: 1, 
    type: "image", 
    src: "/images/ball-trans.png",
    alt: "Person throwing ball upward",
    link: "https://tiktok.com/@rocketarm"
  },
  { 
    id: 2, 
    type: "image", 
    src: "/images/blue-background-clean.jpeg",
    alt: "Ball trajectory in sky",
    link: "https://tiktok.com/@rocketarm"
  },
  { 
    id: 3, 
    type: "image", 
    src: "/images/ball-trans.png",
    alt: "Crowd watching throw",
    link: "https://instagram.com/rocketarm"
  },
  { 
    id: 4, 
    type: "image", 
    src: "/images/blue-background-clean.jpeg",
    alt: "Sensor ball close-up",
    link: "https://instagram.com/rocketarm"
  },
  { 
    id: 5, 
    type: "image", 
    src: "/images/ball-trans.png",
    alt: "Celebration moment",
    link: "https://tiktok.com/@rocketarm"
  },
  { 
    id: 6, 
    type: "image", 
    src: "/images/blue-background-clean.jpeg",
    alt: "Ball tracking view",
    link: "https://x.com/rocketarm"
  },
]

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  switch (platform) {
    case "tiktok":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case "x":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
  }
}

export function SocialMediaSection() {
  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      {/* Section header with social links */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            004 — Live Feed
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 italic">@ROCKETARM</h2>
        </div>
        
        {/* Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              <SocialIcon platform={social.platform} />
              <span className="hidden sm:inline">{social.label}</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Media grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-foreground">
        {mediaItems.map((item) => (
          <a
            key={item.id}
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[9/16] bg-background group overflow-hidden"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            )}

            {/* REC indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-mono text-[8px] uppercase tracking-widest text-background bg-foreground/80 px-1">
                {item.type === "video" ? "VIDEO" : "PHOTO"}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View →
              </span>
            </div>

            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)] pointer-events-none"></div>
          </a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Tag us in your throws with #ROCKETARM
        </p>
      </div>
    </section>
  )
}
