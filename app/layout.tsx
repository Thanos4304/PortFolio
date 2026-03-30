import React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Sairavi Ganesh Viswanathan — Portfolio",
  description:
    "Full-stack developer and ML enthusiast. Computer Engineering graduate student at Illinois Institute of Technology.",
  metadataBase: new URL("https://thanos4304.github.io/Portfolio"),
  openGraph: {
    title: "Sairavi Ganesh Viswanathan — Portfolio",
    description:
      "Full-stack developer and ML enthusiast. Computer Engineering graduate student at Illinois Institute of Technology.",
    url: "https://thanos4304.github.io/Portfolio",
    siteName: "Sairavi Ganesh — Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Sairavi Ganesh Viswanathan — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sairavi Ganesh Viswanathan — Portfolio",
    description:
      "Full-stack developer and ML enthusiast. Computer Engineering graduate student at Illinois Institute of Technology.",
    images: ["/images/profile.png"],
  },
  keywords: [
    "Sairavi Ganesh",
    "Full Stack Developer",
    "ML Engineer",
    "Illinois Institute of Technology",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
}

export const viewport = {
  themeColor: "#0e0e11",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
