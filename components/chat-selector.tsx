"use client"

import { useState } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { personalities } from "@/lib/personalities"
import type { PersonalityType } from "@/lib/personalities"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function ChatSelector() {
  const [selectedPersonality, setSelectedPersonality] = useState<PersonalityType>("openness")
  const { language } = useLanguage()
  const t = translations[language].chat
  const personalityData = translations[language].personalityData

  const currentPersonality = personalities.find((p) => p.id === selectedPersonality)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t.selectTitle}</CardTitle>
          <CardDescription>{t.selectDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedPersonality} onValueChange={(value) => setSelectedPersonality(value as PersonalityType)}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              {personalities.map((personality) => {
                const Icon = personality.icon
                const name = personalityData[personality.id].name

                return (
                  <TabsTrigger key={personality.id} value={personality.id} className="gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{name.split(" ")[0]}</span>
                    <span className="sm:hidden">{personality.id.slice(0, 4)}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {currentPersonality && (
        <ChatInterface
          personality={currentPersonality.id}
          personalityName={personalityData[currentPersonality.id].name}
          personalityColor={currentPersonality.bgColor}
        />
      )}
    </div>
  )
}
