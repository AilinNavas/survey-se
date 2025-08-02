import type React from "react"
import type { Metadata } from "next"
import { Zen_Maru_Gothic } from "next/font/google"
import "./globals.css"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Patient Survey - Southside Endodontics",
  description: "Share your experience with Southside Endodontics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={zenMaruGothic.className}>
        <div className="min-h-screen bg-background">{children}</div>
      </body>
    </html>
  )
}
