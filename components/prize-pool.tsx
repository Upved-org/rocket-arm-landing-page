"use client"

import { useState, useEffect, useRef } from "react"

type Donor = {
  id: number
  name: string
  amount: number
  initial: string
}

// Donors with varied amounts that add up to a non-rounded figure
const donors: Donor[] = [
  { id: 1, name: "Alex M.", amount: 27.50, initial: "A" },
  { id: 2, name: "Sarah K.", amount: 53.00, initial: "S" },
  { id: 3, name: "Mike R.", amount: 12.75, initial: "M" },
  { id: 4, name: "Emma L.", amount: 108.25, initial: "E" },
  { id: 5, name: "Chris P.", amount: 24.00, initial: "C" },
  { id: 6, name: "Jordan T.", amount: 17.50, initial: "J" },
  { id: 7, name: "Taylor W.", amount: 45.75, initial: "T" },
  { id: 8, name: "Sam D.", amount: 33.25, initial: "S" },
  { id: 9, name: "Casey B.", amount: 76.00, initial: "C" },
  { id: 10, name: "Morgan F.", amount: 21.50, initial: "M" },
  { id: 11, name: "Riley H.", amount: 42.25, initial: "R" },
  { id: 12, name: "Drew N.", amount: 23.50, initial: "D" },
]

// Calculate total from donors
const totalFromDonors = donors.reduce((sum, d) => sum + d.amount, 0)

const donationAmounts = [10, 25, 50, 100]

export function PrizePool() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [donationAmount, setDonationAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 0.5
    let animationFrameId: number

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-12 bg-background text-foreground border-t-2 border-foreground">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-8 md:mb-12 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">003 — Prize Pool</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-4 italic">THE STAKES ARE RISING</h2>

            {/* Prize pool amount */}
            <div className="mt-8 md:mt-12 inline-block border-2 border-foreground p-6 md:p-8 bg-foreground text-background">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2 text-background/60">
                Current Prize Pool
              </p>
              <p className="font-serif text-5xl md:text-7xl lg:text-8xl italic">
                {formatCurrency(totalFromDonors)}
              </p>
              <p className="font-mono text-xs mt-3 text-accent uppercase tracking-widest">
                From {donors.length} Contributors
              </p>
            </div>

            {/* Donate button */}
            <div className="mt-8">
              <button
                onClick={() => setShowDonateModal(true)}
                className="bg-accent text-foreground font-mono text-sm md:text-base uppercase tracking-widest px-10 py-4 border-2 border-foreground hover:bg-accent/90 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Donate to Prize Pool →
              </button>
            </div>
          </div>

          {/* Recent donors scroll */}
          <div className="mt-8 md:mt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-center mb-6 text-muted-foreground">
              Recent Contributors
            </p>

            <div className="relative overflow-hidden">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling container */}
              <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-hidden whitespace-nowrap pb-4">
                {[...donors, ...donors].map((donor, index) => (
                  <div
                    key={`${donor.id}-${index}`}
                    className="inline-flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px]"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-foreground bg-accent text-accent-foreground flex items-center justify-center font-mono text-lg md:text-xl font-bold">
                      {donor.initial}
                    </div>
                    <div className="text-center">
                      <p className="font-mono text-xs md:text-sm text-foreground">{donor.name}</p>
                      <p className="font-mono text-[10px] md:text-xs text-accent">+{formatCurrency(donor.amount)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
          <div className="bg-background border-2 border-foreground w-full max-w-md p-6 md:p-8 relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowDonateModal(false)
                setSubmitted(false)
              }}
              className="absolute top-4 right-4 font-mono text-2xl hover:text-accent"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <h3 className="font-serif text-2xl md:text-3xl italic mb-2">Donate to Prize Pool</h3>
                <p className="font-mono text-xs text-muted-foreground mb-6">
                  100% of donations go directly to the winner&apos;s prize.
                </p>

                <form onSubmit={handleDonate} className="space-y-6">
                  {/* Amount selection */}
                  <div className="grid grid-cols-4 gap-2">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amount)
                          setCustomAmount("")
                        }}
                        className={`py-3 font-mono text-sm border-2 border-foreground transition-all ${
                          donationAmount === amount 
                            ? "bg-accent text-foreground" 
                            : "bg-background hover:bg-muted"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setDonationAmount(null)
                    }}
                    className="w-full border-2 border-foreground px-4 py-3 font-mono text-sm bg-transparent focus:outline-none focus:border-accent"
                    placeholder="Custom amount ($)"
                    min="1"
                  />

                  {/* Name */}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-2 border-foreground px-4 py-3 font-mono text-sm bg-transparent focus:outline-none focus:border-accent"
                    placeholder="Your name"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-2 border-foreground px-4 py-3 font-mono text-sm bg-transparent focus:outline-none focus:border-accent"
                    placeholder="Your email"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || (!donationAmount && !customAmount)}
                    className="w-full bg-accent text-foreground font-mono text-sm uppercase tracking-widest py-4 border-2 border-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : `Donate ${donationAmount ? `$${donationAmount}` : customAmount ? `$${customAmount}` : ""}`}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-serif text-2xl italic mb-2">Thank You!</h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Your donation has been added to the prize pool.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
