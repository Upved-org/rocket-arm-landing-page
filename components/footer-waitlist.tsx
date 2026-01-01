"use client"

import type React from "react"
import { useState } from "react"
import { TermsModal } from "@/components/terms-modal"

export function FooterWaitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

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
          <h2 className="font-serif text-4xl md:text-6xl mt-4">JOIN THE MOVEMENT</h2>
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

      {/* Legal Links Bar */}
      <div className="border-t border-foreground/10 px-6 py-4 md:px-12 flex justify-center md:justify-start gap-6 bg-foreground/5">
        <button 
          onClick={() => setShowTerms(true)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Terms & Conditions
        </button>
        <button 
          onClick={() => setShowTerms(true)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Liability Waiver
        </button>
        <button 
          onClick={() => setShowTerms(true)}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </button>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-foreground p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
            Contact: <a href="mailto:info@rocketarm.org" className="text-accent hover:underline">info@rocketarm.org</a>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2025 RocketArm.org — All Rights Reserved
          </p>
        </div>
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

      <TermsModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
        // No Agree action needed for footer reviews
      />
    </footer>
  )
}
