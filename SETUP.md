# Setup Guide: Configuring Different URLs for Each Personality

This application uses separate n8n webhook URLs for each of the Big Five personality traits. This allows you to customize the AI behavior independently for each personality dimension.

## Environment Variables Configuration

You need to configure **5 separate environment variables**, one for each personality trait:

### Required Environment Variables

1. **N8N_WEBHOOK_OPENNESS** - Webhook URL for Openness to Experience personality
2. **N8N_WEBHOOK_CONSCIENTIOUSNESS** - Webhook URL for Conscientiousness personality
3. **N8N_WEBHOOK_EXTRAVERSION** - Webhook URL for Extraversion personality
4. **N8N_WEBHOOK_AGREEABLENESS** - Webhook URL for Agreeableness personality
5. **N8N_WEBHOOK_NEUROTICISM** - Webhook URL for Neuroticism personality

## How to Add Environment Variables

### In v0 (Development)

1. Click on the **Vars** section in the left sidebar
2. Add each environment variable with its corresponding n8n webhook URL
3. Make sure all 5 variables are configured before testing

### In Vercel (Production)

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add all 5 environment variables with their webhook URLs
4. Redeploy your application

## Example Configuration

\`\`\`env
N8N_WEBHOOK_OPENNESS=https://your-n8n-instance.com/webhook/openness
N8N_WEBHOOK_CONSCIENTIOUSNESS=https://your-n8n-instance.com/webhook/conscientiousness
N8N_WEBHOOK_EXTRAVERSION=https://your-n8n-instance.com/webhook/extraversion
N8N_WEBHOOK_AGREEABLENESS=https://your-n8n-instance.com/webhook/agreeableness
N8N_WEBHOOK_NEUROTICISM=https://your-n8n-instance.com/webhook/neuroticism
\`\`\`

## How It Works

When a user selects a personality and sends a message:

1. The frontend sends the message to `/api/chat` with the selected personality ID
2. The API route looks up the corresponding environment variable for that personality
3. The message is forwarded to the specific n8n webhook URL
4. n8n processes the message with personality-specific prompts and logic
5. The response is sent back to the user

## Setting Up n8n Workflows

For each personality, create a separate n8n workflow with:

1. **Webhook Trigger** - Set up a webhook node to receive POST requests
2. **Personality Prompt** - Configure the AI prompt to match the personality trait
3. **AI Processing** - Use an AI node (OpenAI, Anthropic, etc.) to generate responses
4. **Response** - Return the AI response in JSON format: `{ "response": "message" }`

### Example n8n Workflow Structure

\`\`\`
Webhook (POST) 
  → Extract message and context
  → AI Chat Node (with personality-specific system prompt)
  → Format Response
  → Return JSON
\`\`\`

### Personality-Specific System Prompts

Each workflow should have a unique system prompt that embodies the personality trait:

- **Openness**: "You are creative, imaginative, and love exploring new ideas..."
- **Conscientiousness**: "You are organized, detail-oriented, and methodical..."
- **Extraversion**: "You are energetic, enthusiastic, and love engaging conversations..."
- **Agreeableness**: "You are warm, empathetic, and supportive..."
- **Neuroticism**: "You are thoughtful, cautious, and aware of potential concerns..."

## Testing

After configuration:

1. Visit the chat page
2. Select each personality one by one
3. Send test messages to verify each webhook is working correctly
4. Check that responses match the expected personality traits

## Troubleshooting

- **Error: "Webhook URL not configured"** - Make sure the environment variable is set
- **No response** - Check that your n8n workflow is active and the webhook URL is correct
- **Wrong personality responses** - Verify you've mapped the correct webhook URL to each personality
