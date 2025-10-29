"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalities } from "@/lib/personalities"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"

export function PersonalityShowcase() {
  const { language } = useLanguage()
  const t = translations[language].personalities
  const personalityData = translations[language].personalityData

  return (
    <section id="personalities" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t.title}</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {personalities.map((personality) => {
          const Icon = personality.icon
          const data = personalityData[personality.id]

          return (
            <Card key={personality.id} className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${personality.bgColor}`}
                >
                  <Icon className={`h-6 w-6 ${personality.color}`} />
                </div>
                <CardTitle className="text-lg">{data.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{data.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {data.traits.map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
                <div className="mb-3 space-y-2 text-xs">
                  <div>
                    <span className="font-medium text-green-600 dark:text-green-400">{t.highLabel}: </span>
                    <span className="text-muted-foreground">{data.highScore}</span>
                  </div>
                  <div>
                    <span className="font-medium text-orange-600 dark:text-orange-400">{t.lowLabel}: </span>
                    <span className="text-muted-foreground">{data.lowScore}</span>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-muted/50 p-3">
                  <p className="text-sm italic text-muted-foreground">&ldquo;{data.example}&rdquo;</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
