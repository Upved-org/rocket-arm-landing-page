"use client"

import Link from "next/link"

export function NavHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-60 pointer-events-none">
      <div className="flex justify-end p-4 md:p-6">
        <Link
          href="/shop"
          className="pointer-events-auto bg-background text-foreground font-mono text-xs md:text-sm uppercase tracking-widest px-6 py-3 md:px-8 md:py-4 border-2 border-foreground hover:bg-accent hover:text-foreground hover:border-accent transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Shop
        </Link>
      </div>
    </nav>
  )
}
