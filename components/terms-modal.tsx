"use client"

import { useEffect } from "react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  onAgree?: () => void
  showAgreeButton?: boolean
}

export function TermsModal({ isOpen, onClose, onAgree, showAgreeButton = false }: TermsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
      <div className="bg-background border-2 border-foreground w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-2xl hover:text-accent transition-colors z-10"
          aria-label="Close"
        >
          ×
        </button>

        <div className="sticky top-0 bg-background pb-4 pt-1 border-b-2 border-foreground/10 mb-6">
          <h3 className="font-serif text-2xl md:text-3xl italic">Terms & Conditions</h3>
        </div>
        
        <div className="font-mono text-xs leading-relaxed space-y-4 text-muted-foreground pr-2">
          <p className="font-bold text-foreground">ROCKETARM COMPETITION OFFICIAL RULES AND LIABILITY WAIVER</p>
          
          <p className="font-bold text-foreground">1. ELIGIBILITY & AGE RESTRICTIONS</p>
          <p>
            The RocketArm competition is open to individuals aged 18 and older. Participants aged 16-17 may participate 
            only with a signed waiver from a parent or legal guardian present at the event. Children under 16 are not 
            eligible to compete but may attend as spectators with guardian supervision. Verification of age may be 
            required at check-in.
          </p>

          <p className="font-bold text-foreground">2. ASSUMPTION OF RISK</p>
          <p>
            I understand that participation in the RocketArm vertical throw competition involves physical activity 
            and inherent risks, including but not limited to: physical exertion, muscle strain, ligament damage, 
            injury from thrown objects, slips, falls, and contact with equipment or other participants. I voluntarily 
            assume all risks, known and unknown, associated with participation.
          </p>

          <p className="font-bold text-foreground">3. WAIVER AND RELEASE OF LIABILITY</p>
          <p>
            In consideration for being allowed to participate, I hereby release, waive, discharge, and covenant 
            not to sue RocketArm, its organizers, sponsors, partners, venue owners, employees, agents, and 
            representatives ("Released Parties") from any and all liability, claims, demands, actions, or causes 
            of action arising out of or related to any loss, damage, or injury, including death, that may be 
            sustained during or arising from my participation, whether caused by the negligence of the Released 
            Parties or otherwise.
          </p>

          <p className="font-bold text-foreground">4. MEDICAL CERTIFICATION</p>
          <p>
            I certify that I am physically fit, have sufficiently prepared for participation, and have not been 
            advised to not participate by a qualified medical professional. I consent to receive medical treatment 
            which may be deemed advisable in the event of injury, accident, and/or illness during this event.
          </p>

          <p className="font-bold text-foreground">5. MEDIA AND PUBLICITY RELEASE</p>
          <p>
            I grant RocketArm and its designees the irrevocable right to use my name, likeness, image, voice, 
            appearance, and performance in current and future media formats for promotional, educational, 
            commercial, and marketing purposes without further compensation or permission.
          </p>

          <p className="font-bold text-foreground">6. PRIZE POOL & PAYOUTS</p>
          <p>
            Prizes are awarded to the top verified throws as measured by official RocketArm sensor technology. 
            Official results are final. Prize amounts are subject to change based on the final prize pool total. 
            Winners are responsible for all applicable taxes. Disqualification may result from unsportsmanlike 
            conduct or rule violations.
          </p>

          <p className="font-bold text-foreground">7. CODE OF CONDUCT</p>
          <p>
            Participants agree to treat all staff, volunteers, and other competitors with respect. Any form of 
            harassment, discrimination, or dangerous behavior will result in immediate ejection from the event 
            without refund.
          </p>

          <p className="font-bold text-foreground">8. GOVERNING LAW</p>
          <p>
            This agreement shall be governed by and construed in accordance with the laws of the State of 
            California. Any legal action arising out of this Agreement shall be litigated exclusively in the 
            courts of San Francisco, California.
          </p>

          <p className="font-bold text-foreground">9. PRIVACY POLICY</p>
          <p>
            We collect personal information (name, email) solely for registration, communication, and event 
            verification purposes. We do not sell your data to third parties. By participating, you consent to 
            our data collection practices as described.
          </p>

          <p className="text-[10px] mt-8 pt-4 border-t border-foreground/20">
            Last updated: December 31, 2024. By registering or entering the venue, you acknowledge that you 
            have read, understood, and agree to be bound by these terms.
          </p>
        </div>

        {showAgreeButton && onAgree && (
          <div className="mt-6 sticky bottom-0 bg-background pt-4 border-t-2 border-foreground/10">
            <button
              onClick={() => {
                onAgree()
                onClose()
              }}
              className="w-full bg-accent text-foreground font-mono text-sm uppercase tracking-widest py-4 border-2 border-foreground hover:bg-accent/90 transition-colors shadow-none hover:shadow-md"
            >
              I Agree to Terms & Waiver
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
