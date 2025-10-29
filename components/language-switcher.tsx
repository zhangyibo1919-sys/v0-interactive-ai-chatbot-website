"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-border bg-background/95 p-1 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Languages className="ml-2 h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-3 text-xs"
      >
        English
      </Button>
      <Button
        variant={language === "ko" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("ko")}
        className="h-8 px-3 text-xs"
      >
        한국어
      </Button>
    </div>
  )
}
