import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Personality Research | Interactive Chatbot Showcase",
  description: "Experience AI chatbots with different personalities based on the Big Five personality model.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
