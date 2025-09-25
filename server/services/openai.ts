import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const getChatResponse = async (message: string, conversationHistory: ChatMessage[] = []): Promise<string> => {
  try {
    const systemPrompt = `You are Arman Ahmed's AI assistant, helping visitors learn about his professional background and expertise. You should provide helpful, accurate information about:

- Arman's expertise in AI/ML, Full Stack Development, Mobile Development, Data Science
- His experience with technologies like Python, React, Flutter, .NET, PHP, TensorFlow
- His services including AI solutions, web/mobile development, SaaS platforms
- His availability for freelance projects and consulting
- General information about his projects and achievements

Keep responses conversational, professional, and helpful. If asked about specific project details or personal information not provided, politely redirect to contacting Arman directly via the contact form or WhatsApp.`;

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory,
      { role: 'user' as const, content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: messages,
      max_tokens: 300,
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get AI response');
  }
};

export const generateResumeContent = async (): Promise<string> => {
  try {
    const prompt = `Generate a comprehensive professional resume for Arman Ahmed based on his portfolio information:

Full Stack AI & Software Developer with 5+ years of experience specializing in:
- Artificial Intelligence & Machine Learning
- Full Stack Web Development (React, Next.js, Node.js)
- Mobile Development (Flutter)
- Data Science & Analytics
- Enterprise SaaS Solutions
- AI Chatbots & LLMs

Include sections for:
- Professional Summary
- Technical Skills
- Work Experience (Senior AI Engineer at TechCorp Solutions, Full Stack Developer at Innovation Labs, etc.)
- Education & Certifications
- Key Projects and Achievements

Format as professional resume content in markdown format.`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    return result.resume || 'Resume content could not be generated.';
  } catch (error) {
    console.error('Resume generation error:', error);
    throw new Error('Failed to generate resume');
  }
};
