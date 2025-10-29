import { Brain, Target, Users, Heart, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type PersonalityType = "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism"

export interface Personality {
  id: PersonalityType
  icon: LucideIcon
  color: string
  bgColor: string
  webhookEnvKey: string
}

export const personalities: Personality[] = [
  {
    id: "openness",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    webhookEnvKey: "https://yibo456.app.n8n.cloud/webhook/47d41003-2ed6-4db8-95b5-d61668795d61",
  },
  {
    id: "conscientiousness",
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    webhookEnvKey: "N8N_WEBHOOK_CONSCIENTIOUSNESS",
  },
  {
    id: "extraversion",
    icon: Users,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    webhookEnvKey: "N8N_WEBHOOK_EXTRAVERSION",
  },
  {
    id: "agreeableness",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    webhookEnvKey: "N8N_WEBHOOK_AGREEABLENESS",
  },
  {
    id: "neuroticism",
    icon: Zap,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    webhookEnvKey: "N8N_WEBHOOK_NEUROTICISM",
  },
]

export function getPersonalityById(id: PersonalityType): Personality | undefined {
  return personalities.find((p) => p.id === id)
}
