import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "RocketArm — The Highest Throw | Guinness World Record Attempt",
  description: "Chasing the Guinness World Record for the highest vertical human throw. Join the movement to witness history. No fluff. Just physics.",
  keywords: ["RocketArm", "Guinness World Record", "highest throw", "vertical throw", "world record attempt", "physics", "sports"],
  authors: [{ name: "RocketArm Team" }],
  creator: "RocketArm",
  publisher: "RocketArm",
  metadataBase: new URL("https://rocketarm.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rocketarm.org",
    siteName: "RocketArm",
    title: "RocketArm — The Highest Throw",
    description: "Chasing the Guinness World Record for the highest vertical human throw. Join the movement.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RocketArm - The Highest Throw World Record Attempt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RocketArm — The Highest Throw",
    description: "Chasing the Guinness World Record for the highest vertical human throw.",
    images: ["/images/og-image.jpg"],
    creator: "@rocketarm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
