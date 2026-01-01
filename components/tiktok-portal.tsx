import Image from "next/image"

export function TikTokPortal() {
  const videos = [
    { id: 1, query: "person throwing ball upward urban street raw footage" },
    { id: 2, query: "ball in sky tracking view phone camera style" },
    { id: 3, query: "crowd watching vertical throw NYC street" },
    { id: 4, query: "sensor ball technology close up raw footage" },
    { id: 5, query: "person catching ball celebration street style" },
    { id: 6, query: "ball trajectory sky view phone recording" },
  ]

  return (
    <section className="py-32 px-6 md:px-12 border-t-2 border-foreground">
      {/* Section title */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            004 — Live Feed
          </span>
          <h2 className="font-serif text-6xl md:text-8xl mt-4 italic">@ROCKETARM</h2>
        </div>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:underline underline-offset-4"
        >
          Follow on TikTok →
        </a>
      </div>

      {/* Security camera / phone screen grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 bg-foreground">
        {videos.map((video) => (
          <div key={video.id} className="relative aspect-[9/16] bg-background">
            <Image
              src={`/.jpg?height=640&width=360&query=${video.query}`}
              alt={`TikTok video ${video.id}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* REC indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-mono text-[8px] uppercase tracking-widest text-background bg-foreground/80 px-1">
                REC
              </span>
            </div>

            {/* Timestamp */}
            <div className="absolute bottom-3 right-3">
              <span className="font-mono text-[8px] text-background bg-foreground/80 px-1">
                00:00:{String(video.id * 12).padStart(2, "0")}
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
