export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'ai' | 'frontend' | 'backend' | 'mobile' | 'data';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'certification';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: 'primary' | 'secondary' | 'accent';
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}
