"use client"

import type React from "react"

import { useState } from "react"

export function FooterWaitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <footer className="border-t-2 border-foreground">
      {/* Full-width waitlist input */}
      <div className="p-6 md:p-12">
        <div className="mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            005 — Join The Movement
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4">GET ON THE LIST.</h2>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row border-2 border-foreground">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                required
                className="flex-1 bg-transparent px-6 py-6 font-mono text-sm uppercase tracking-widest placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="bg-foreground text-background font-mono text-sm uppercase tracking-widest px-12 py-6 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="border-2 border-accent p-6 text-center">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">You&apos;re in. Watch your inbox.</p>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-foreground p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © 2025 RocketArm.org — All Rights Reserved
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors">
            Instagram
          </a>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors">
            TikTok
          </a>
          <a href="#" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
