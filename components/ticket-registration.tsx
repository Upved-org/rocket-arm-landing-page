"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TermsModal } from "@/components/terms-modal"

// Event IDs must match those in tour-section.tsx
const events = [
  {
    city: "SAN FRANCISCO",
    date: "FEB 1",
    day: "SUNDAY",
    year: "2025",
    status: "REGISTRATION OPEN",
    id: "sf",
  },
  {
    city: "NEW YORK CITY",
    date: "MAR 1",
    day: "SUNDAY",
    year: "2025",
    status: "REGISTRATION OPEN",
    id: "nyc",
  },
  {
    city: "MIAMI",
    date: "APR 5",
    day: "SUNDAY",
    year: "2025",
    status: "REGISTRATION OPEN",
    id: "miami",
  },
]

const donationAmounts = [10, 25, 100]

export function TicketRegistration() {
  const [selectedEvent, setSelectedEvent] = useState<string>("sf")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [donationAmount, setDonationAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Listen for event selection from tour section
  useEffect(() => {
    const handleSelectEvent = (e: CustomEvent<string>) => {
      setSelectedEvent(e.detail)
    }
    window.addEventListener("selectEvent", handleSelectEvent as EventListener)
    return () => window.removeEventListener("selectEvent", handleSelectEvent as EventListener)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions to continue.")
      return
    }
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="register" className="py-16 md:py-32 px-4 md:px-12 bg-background border-t-2 border-foreground">
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="text-6xl mb-6">🎟️</div>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-4">You&apos;re In!</h2>
          <p className="font-mono text-sm text-muted-foreground mb-2">
            Your ticket for <span className="text-accent font-bold">{events.find(e => e.id === selectedEvent)?.city}</span> has been reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Check your email for confirmation and event details.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="register" className="py-16 md:py-32 px-4 md:px-12 bg-background border-t-2 border-foreground">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              001 — Get Your Ticket
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl mt-4 italic leading-tight">
              RESERVE YOUR<br />
              SPOT NOW.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Ticket selection */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Choose your event and secure your ticket. Registration is free, but donations help grow the prize pool.
              </p>

              {/* Event tickets */}
              <div className="space-y-3 md:space-y-4">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    disabled={event.status === "COMING SOON"}
                    className={`w-full text-left border-2 border-foreground p-4 md:p-6 transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed ${
                      selectedEvent === event.id ? "bg-foreground text-background" : "bg-background hover:bg-muted"
                    }`}
                  >
                    {/* Ticket perforation on the right */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 border-l-2 border-dashed border-foreground/30 flex flex-col justify-around py-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-foreground/20 mx-auto"></div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between pr-12 gap-2">
                      <div className="flex-1">
                        <p className="font-serif text-xl md:text-2xl lg:text-3xl italic">{event.city}</p>
                        <p
                          className={`font-mono text-xs mt-2 ${selectedEvent === event.id ? "text-background/70" : "text-muted-foreground"}`}
                        >
                          {event.day} — {event.date}, {event.year}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <span
                          className={`font-mono text-[9px] md:text-[10px] uppercase tracking-widest px-2 py-1 inline-block ${
                            event.status === "REGISTRATION OPEN"
                              ? "bg-accent text-accent-foreground"
                              : selectedEvent === event.id
                                ? "bg-background/20 text-background"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                    </div>

                    {/* Barcode decoration */}
                    <div className="mt-4 flex gap-px h-6 md:h-8 items-end opacity-30">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 ${selectedEvent === event.id ? "bg-background" : "bg-foreground"}`}
                          style={{ height: `${30 + Math.random() * 70}%` }}
                        ></div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Registration form */}
            <div className="border-2 border-foreground p-6 md:p-8 bg-background">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-xs uppercase tracking-widest">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-2 border-foreground font-mono text-sm h-12 focus-visible:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-2 border-foreground font-mono text-sm h-12 focus-visible:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Donation section */}
                <div className="pt-6 border-t-2 border-foreground/20">
                  <Label className="font-mono text-xs uppercase tracking-widest mb-4 block">
                    Add to Prize Pool <span className="text-muted-foreground">(Optional)</span>
                  </Label>

                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amount)
                          setCustomAmount("")
                        }}
                        className={`border-2 border-foreground py-3 md:py-4 font-mono text-sm transition-all ${
                          donationAmount === amount ? "bg-accent text-accent-foreground" : "bg-background hover:bg-muted"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <Input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setDonationAmount(null)
                    }}
                    className="border-2 border-foreground font-mono text-sm h-12 focus-visible:ring-accent"
                    placeholder="Custom amount ($)"
                    min="1"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="pt-6 border-t-2 border-foreground/20">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 border-2 border-foreground accent-accent shrink-0"
                      required
                    />
                    <span className="font-mono text-xs text-muted-foreground leading-relaxed">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className="text-accent underline underline-offset-2 hover:text-accent/80"
                      >
                        Terms & Conditions
                      </button>
                      ,{" "}
                      <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className="text-accent underline underline-offset-2 hover:text-accent/80"
                      >
                         Liability Waiver
                      </button>
                      , and{" "}
                      <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className="text-accent underline underline-offset-2 hover:text-accent/80"
                      >
                         Official Rules
                      </button>
                      . I confirm I am 18+ or have guardian approval.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !agreedToTerms}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-foreground font-mono text-sm uppercase tracking-widest py-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "REGISTERING..." : "GET MY TICKET →"}
                </Button>

                <p className="text-center font-mono text-xs text-muted-foreground">
                  Free registration. You&apos;ll receive your ticket via email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TermsModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
        onAgree={() => setAgreedToTerms(true)}
        showAgreeButton={true}
      />
    </>
  )
}
