import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Microbank System",
  description: "A community-driven microbanking platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'