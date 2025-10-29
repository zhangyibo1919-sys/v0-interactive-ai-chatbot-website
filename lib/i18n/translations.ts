export type Language = "en" | "ko"

export interface Translations {
  // Hero Section
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    tryButton: string
    learnButton: string
  }
  // Personality Showcase
  personalities: {
    title: string
    description: string
    highLabel: string
    lowLabel: string
  }
  // Chat Page
  chat: {
    backButton: string
    title: string
    description: string
    selectTitle: string
    selectDescription: string
    online: string
    startConversation: string
    thinking: string
    placeholder: string
    errorMessage: string
  }
  // Personality Names and Descriptions
  personalityData: {
    openness: {
      name: string
      description: string
      traits: string[]
      highScore: string
      lowScore: string
      example: string
    }
    conscientiousness: {
      name: string
      description: string
      traits: string[]
      highScore: string
      lowScore: string
      example: string
    }
    extraversion: {
      name: string
      description: string
      traits: string[]
      highScore: string
      lowScore: string
      example: string
    }
    agreeableness: {
      name: string
      description: string
      traits: string[]
      highScore: string
      lowScore: string
      example: string
    }
    neuroticism: {
      name: string
      description: string
      traits: string[]
      highScore: string
      lowScore: string
      example: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      badge: "AI Research Platform",
      title: "Experience AI with",
      titleHighlight: "Big Five Personalities",
      description:
        "Explore how the Big Five personality dimensions shape AI interactions. Experience chatbots representing Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism in real-time conversations.",
      tryButton: "Try the Chatbots",
      learnButton: "Learn More",
    },
    personalities: {
      title: "Big Five Personality Traits",
      description:
        "Experience AI chatbots representing each of the five major personality dimensions. Each personality connects to a dedicated n8n workflow for authentic trait-based responses.",
      highLabel: "High",
      lowLabel: "Low",
    },
    chat: {
      backButton: "Back to Home",
      title: "Chat with AI Personalities",
      description:
        "Select a personality below and start a conversation to experience different AI communication styles.",
      selectTitle: "Select a Personality Trait",
      selectDescription: "Choose which Big Five personality dimension you'd like to experience",
      online: "Online",
      startConversation: "Start a conversation with",
      thinking: "Thinking...",
      placeholder: "Type your message...",
      errorMessage: "Sorry, I encountered an error. Please try again.",
    },
    personalityData: {
      openness: {
        name: "Openness to Experience",
        description: "Creative, imaginative, curious, and open to new experiences and ideas.",
        traits: ["Imaginative", "Aesthetic", "Open-minded", "Curious"],
        highScore: "Imaginative, aesthetically sensitive, open-minded",
        lowScore: "Conservative, practical, lacking imagination",
        example: "I'm fascinated by new ideas! Let's explore creative solutions and think outside the box.",
      },
      conscientiousness: {
        name: "Conscientiousness",
        description: "Self-disciplined, responsible, organized, and goal-oriented with strong work ethic.",
        traits: ["Organized", "Reliable", "Achievement-focused", "Disciplined"],
        highScore: "Organized, reliable, achievement-oriented",
        lowScore: "Impulsive, disorganized, lacking planning",
        example: "Let me help you create a structured plan. I'll ensure we cover all details systematically.",
      },
      extraversion: {
        name: "Extraversion",
        description: "Sociable, energetic, and positive with enthusiasm for social interactions.",
        traits: ["Outgoing", "Talkative", "Optimistic", "Energetic"],
        highScore: "Outgoing, talkative, optimistic",
        lowScore: "Introverted, quiet, reserved",
        example: "Hey! I'm so excited to chat with you! Let's make this conversation amazing and fun!",
      },
      agreeableness: {
        name: "Agreeableness",
        description: "Friendly, empathetic, and cooperative with strong focus on harmony and helping others.",
        traits: ["Gentle", "Considerate", "Helpful", "Cooperative"],
        highScore: "Gentle, considerate, helpful",
        lowScore: "Cold, competitive, suspicious",
        example: "I'm here to support you. Let me know how I can help make things easier for you.",
      },
      neuroticism: {
        name: "Neuroticism",
        description: "Emotionally sensitive and responsive to stress with heightened awareness of challenges.",
        traits: ["Sensitive", "Aware", "Cautious", "Thoughtful"],
        highScore: "Anxious, sensitive, emotional",
        lowScore: "Calm, confident, emotionally stable",
        example: "I understand this might be concerning. Let me carefully consider all the potential issues here.",
      },
    },
  },
  ko: {
    hero: {
      badge: "AI 연구 플랫폼",
      title: "AI를 경험하세요",
      titleHighlight: "빅 파이브 성격 특성",
      description:
        "빅 파이브 성격 차원이 AI 상호작용을 어떻게 형성하는지 탐색하세요. 개방성, 성실성, 외향성, 친화성, 신경증을 나타내는 챗봇을 실시간 대화로 경험하세요.",
      tryButton: "챗봇 체험하기",
      learnButton: "더 알아보기",
    },
    personalities: {
      title: "빅 파이브 성격 특성",
      description:
        "다섯 가지 주요 성격 차원을 나타내는 AI 챗봇을 경험하세요. 각 성격은 진정한 특성 기반 응답을 위해 전용 n8n 워크플로우에 연결됩니다.",
      highLabel: "높음",
      lowLabel: "낮음",
    },
    chat: {
      backButton: "홈으로 돌아가기",
      title: "AI 성격과 대화하기",
      description: "아래에서 성격을 선택하고 대화를 시작하여 다양한 AI 커뮤니케이션 스타일을 경험하세요.",
      selectTitle: "성격 특성 선택",
      selectDescription: "경험하고 싶은 빅 파이브 성격 차원을 선택하세요",
      online: "온라인",
      startConversation: "대화 시작",
      thinking: "생각 중...",
      placeholder: "메시지를 입력하세요...",
      errorMessage: "죄송합니다. 오류가 발생했습니다. 다시 시도해 주세요.",
    },
    personalityData: {
      openness: {
        name: "경험에 대한 개방성",
        description: "창의적이고 상상력이 풍부하며 호기심이 많고 새로운 경험과 아이디어에 개방적입니다.",
        traits: ["상상력 풍부", "미적 감각", "개방적 사고", "호기심"],
        highScore: "상상력이 풍부하고, 미적으로 민감하며, 개방적인 사고를 가짐",
        lowScore: "보수적이고, 실용적이며, 상상력이 부족함",
        example: "새로운 아이디어에 매료되었어요! 창의적인 해결책을 탐색하고 틀 밖에서 생각해봅시다.",
      },
      conscientiousness: {
        name: "성실성",
        description: "자기 규율이 있고 책임감 있으며 조직적이고 목표 지향적이며 강한 직업 윤리를 가지고 있습니다.",
        traits: ["조직적", "신뢰할 수 있는", "성취 지향적", "규율적"],
        highScore: "조직적이고, 신뢰할 수 있으며, 성취 지향적임",
        lowScore: "충동적이고, 무질서하며, 계획성이 부족함",
        example: "체계적인 계획을 세우는 데 도움을 드리겠습니다. 모든 세부 사항을 체계적으로 다루겠습니다.",
      },
      extraversion: {
        name: "외향성",
        description: "사교적이고 활기차며 긍정적이며 사회적 상호작용에 대한 열정이 있습니다.",
        traits: ["외향적", "말이 많은", "낙관적", "활기찬"],
        highScore: "외향적이고, 말이 많으며, 낙관적임",
        lowScore: "내향적이고, 조용하며, 신중함",
        example: "안녕하세요! 당신과 대화하게 되어 정말 기뻐요! 이 대화를 놀랍고 재미있게 만들어봅시다!",
      },
      agreeableness: {
        name: "친화성",
        description: "친절하고 공감적이며 협력적이며 조화와 타인 돕기에 강한 초점을 둡니다.",
        traits: ["온화한", "배려하는", "도움이 되는", "협력적"],
        highScore: "온화하고, 배려심 있으며, 도움이 됨",
        lowScore: "냉담하고, 경쟁적이며, 의심스러움",
        example: "당신을 지원하기 위해 여기 있습니다. 어떻게 도와드릴 수 있는지 알려주세요.",
      },
      neuroticism: {
        name: "신경증",
        description: "감정적으로 민감하고 스트레스에 반응하며 도전에 대한 인식이 높습니다.",
        traits: ["민감한", "인식하는", "신중한", "사려 깊은"],
        highScore: "불안하고, 민감하며, 감정적임",
        lowScore: "침착하고, 자신감 있으며, 감정적으로 안정적임",
        example: "이것이 우려스러울 수 있다는 것을 이해합니다. 여기서 모든 잠재적 문제를 신중하게 고려하겠습니다.",
      },
    },
  },
}
