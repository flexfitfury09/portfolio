import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getChatResponse, generateResumeContent } from "./services/openai";
import { getGeminiChatResponse, generateGeminiResumeContent } from "./services/gemini";
import { processContactForm, type ContactFormData } from "./services/contact";
import { z } from "zod";

const chatRequestSchema = z.object({
  message: z.string().min(1),
  history: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string()
  })).optional().default([])
});

const contactRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(1),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Chatbot endpoint with fallback to Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = chatRequestSchema.parse(req.body);
      
      let response: string;
      
      // Try OpenAI first, fallback to Gemini if OpenAI fails
      try {
        response = await getChatResponse(message, history);
      } catch (openaiError) {
        console.log('OpenAI failed, trying Gemini as fallback:', openaiError);
        try {
          response = await getGeminiChatResponse(message, history);
        } catch (geminiError) {
          console.error('Both OpenAI and Gemini failed:', geminiError);
          throw new Error('All AI services unavailable');
        }
      }
      
      res.json({ message: response });
    } catch (error) {
      console.error('Chat API error:', error);
      res.status(500).json({ 
        error: 'Failed to process chat message',
        message: "I'm sorry, I'm experiencing technical difficulties right now. Please try again later or contact Arman directly."
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData: ContactFormData = contactRequestSchema.parse(req.body);
      
      const result = await processContactForm(contactData);
      
      if (result.success) {
        res.json({ message: result.message });
      } else {
        res.status(400).json({ error: result.message });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: 'Invalid form data', 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          error: 'Failed to process contact form' 
        });
      }
    }
  });

  // Resume generation endpoint
  app.post("/api/generate-resume", async (req, res) => {
    try {
      const resumeContent = await generateResumeContent();
      
      // In a real implementation, you would generate a PDF here
      // For now, we'll create a simple text response
      const resumeText = `
ARMAN AHMED
Full Stack AI & Software Developer

Professional Summary:
Experienced Full Stack AI & Software Developer with 5+ years of expertise in artificial intelligence, machine learning, and modern web technologies. Proven track record of delivering innovative solutions for enterprise clients using cutting-edge AI technologies and scalable architectures.

Technical Skills:
• AI/ML: Python, TensorFlow, PyTorch, Scikit-learn, OpenAI APIs
• Frontend: React, Next.js, TypeScript, TailwindCSS, Three.js
• Backend: Node.js, Express.js, .NET, PHP
• Mobile: Flutter, React Native
• Databases: PostgreSQL, MongoDB, Redis
• Cloud: AWS, Google Cloud Platform, Azure
• Tools: Docker, Git, CI/CD, Kubernetes

Professional Experience:

Senior AI Engineer | TechCorp Solutions | 2022 - Present
• Lead development of AI-powered enterprise solutions for Fortune 500 clients
• Implemented machine learning pipelines processing 1M+ data points daily
• Designed and deployed scalable ML models with 95%+ accuracy rates
• Mentored junior developers and conducted technical workshops

Full Stack Developer | Innovation Labs | 2020 - 2022
• Developed 15+ scalable web applications using modern frameworks
• Built cross-platform mobile applications with 100K+ downloads
• Optimized application performance resulting in 40% faster load times
• Collaborated with design teams to implement pixel-perfect UIs

Software Engineering Intern | StartupTech Inc. | 2019 - 2020
• Contributed to open-source projects with 1000+ GitHub stars
• Developed RESTful APIs serving 10K+ daily active users
• Implemented automated testing reducing bugs by 60%

Education & Certifications:
• Machine Learning Specialist - Google Cloud Platform
• AWS Solutions Architect Associate
• TensorFlow Developer Certificate

Key Projects:
• AI-Powered SaaS Platform: Enterprise analytics platform with ML-driven insights
• Smart Flutter App: Cross-platform mobile app with real-time AI features
• ML Analytics Dashboard: Advanced data visualization with predictive modeling

Contact:
Phone: +92 321 3809420
Email: arman@example.com
Portfolio: [Portfolio URL]
LinkedIn: [LinkedIn Profile]
GitHub: [GitHub Profile]
      `;

      // Create a simple text file download
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', 'attachment; filename="Arman_Ahmed_Resume.txt"');
      res.send(resumeText);
      
    } catch (error) {
      console.error('Resume generation error:', error);
      res.status(500).json({ 
        error: 'Failed to generate resume. Please try again later.' 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      services: {
        openai: !!process.env.OPENAI_API_KEY,
        portfolio: true
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
