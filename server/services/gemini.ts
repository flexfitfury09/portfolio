import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or gemini-2.5-pro"
//   - do not change this unless explicitly requested by the user

// This API key is from Gemini Developer API Key, not vertex AI API Key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const getGeminiChatResponse = async (message: string, conversationHistory: ChatMessage[] = []): Promise<string> => {
  try {
    const systemPrompt = `You are Arman Ahmed's AI assistant, helping visitors learn about his professional background and expertise. You should provide helpful, accurate information about:

- Arman's expertise in AI/ML, Full Stack Development, Mobile Development, Data Science
- His experience with technologies like Python, React, Flutter, .NET, PHP, C#, WordPress, TensorFlow
- His services including AI solutions, web/mobile development, SaaS platforms, WordPress development
- His availability for freelance projects and consulting
- General information about his projects and achievements

Keep responses conversational, professional, and helpful. If asked about specific project details or personal information not provided, politely redirect to contacting Arman directly via the contact form or WhatsApp.`;

    const contextualPrompt = `${systemPrompt}

Previous conversation:
${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

User: ${message}
Assistant:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contextualPrompt,
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to get AI response from Gemini');
  }
};

export const generateGeminiResumeContent = async (): Promise<string> => {
  try {
    const prompt = `Generate a comprehensive professional resume for Arman Ahmed based on his portfolio information:

Full Stack AI & Software Developer with 5+ years of experience specializing in:
- Artificial Intelligence & Machine Learning
- Full Stack Web Development (React, Next.js, Node.js, TypeScript)
- Mobile Development (Flutter)
- Data Science & Analytics
- Enterprise SaaS Solutions
- WordPress & CMS Development
- .NET & C# Development
- PHP & Backend Systems
- AI Chatbots & LLMs

Include sections for:
- Professional Summary
- Technical Skills
- Work Experience (Senior AI Engineer at TechCorp Solutions, Full Stack Developer at Innovation Labs, etc.)
- Education & Certifications
- Key Projects and Achievements

Format as professional resume content.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    });

    return response.text || 'Resume content could not be generated.';
  } catch (error) {
    console.error('Gemini resume generation error:', error);
    throw new Error('Failed to generate resume with Gemini');
  }
};