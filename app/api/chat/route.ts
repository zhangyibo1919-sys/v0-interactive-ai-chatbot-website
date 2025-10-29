import { type NextRequest, NextResponse } from "next/server"
import { getPersonalityById } from "@/lib/personalities"

export async function POST(request: NextRequest) {
  try {
    const { message, personality } = await request.json()

    if (!message || !personality) {
      return NextResponse.json({ error: "Message and personality are required" }, { status: 400 })
    }

    const personalityConfig = getPersonalityById(personality)

    if (!personalityConfig) {
      return NextResponse.json({ error: "Invalid personality type" }, { status: 400 })
    }

    const n8nWebhookUrl = process.env[personalityConfig.webhookEnvKey]

    if (!n8nWebhookUrl) {
      console.error(`[v0] ${personalityConfig.webhookEnvKey} environment variable is not set`)
      return NextResponse.json(
        {
          error: `n8n webhook URL for ${personalityConfig.nameZh} is not configured. Please add ${personalityConfig.webhookEnvKey} to your environment variables.`,
        },
        { status: 500 },
      )
    }

    // Call the n8n webhook with the message and personality
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        personality,
        personalityName: personalityConfig.name,
        personalityNameZh: personalityConfig.nameZh,
      }),
    })

    if (!n8nResponse.ok) {
      throw new Error(`n8n webhook returned status ${n8nResponse.status}`)
    }

    const data = await n8nResponse.json()

    // Return the response from n8n
    return NextResponse.json({
      response: data.response || data.message || "I received your message!",
    })
  } catch (error) {
    console.error("[v0] Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}
