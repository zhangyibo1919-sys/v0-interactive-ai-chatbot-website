"use client"

import { ChatSelector } from "@/components/chat-selector"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export default function ChatPage() {
  const { language } = useLanguage()
  const t = translations[language].chat

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backButton}
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
          <p className="mt-2 text-muted-foreground">{t.description}</p>
        </div>

        <ChatSelector />
      </div>
    </main>
  )
}
