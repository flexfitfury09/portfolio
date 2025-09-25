# Arman Ahmed Portfolio - 3D Cinematic Personal Portfolio Website

## Overview

This is a modern, AI-powered 3D cinematic personal portfolio website for Arman Ahmed, a Full Stack AI & Software Developer. The project features advanced animations, smooth transitions, particle effects, and an integrated AI chatbot assistant. Built with React, TypeScript, and modern web technologies, it showcases Arman's expertise in AI/ML, full-stack development, mobile development, and data science through an immersive, interactive experience.

The portfolio includes sections for hero/landing, about, skills, projects, services, experience, testimonials, blog, and contact, all enhanced with 3D effects, neural network animations, and glassmorphism design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system featuring dark theme, glassmorphism effects, and CSS variables for theming
- **UI Components**: Shadcn/ui component library providing consistent, accessible UI elements
- **Animations**: Framer Motion for advanced animations and transitions, GSAP for scroll-triggered animations and particle effects
- **3D Effects**: Custom components for particle backgrounds, neural network effects, and skills globe visualization
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js server providing RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Build System**: Vite for fast development and optimized production builds, ESBuild for server-side bundling
- **Development**: Custom Vite setup with middleware mode for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud database
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **In-Memory Storage**: Custom memory storage implementation for development and caching

### Authentication and Authorization
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage
- **User Schema**: Simple user model with username/password authentication
- **Security**: Built-in validation and sanitization using Zod schemas

### External Service Integrations
- **AI Services**: 
  - OpenAI GPT-5 API for intelligent chatbot responses with fallback support
  - Google Gemini 2.5-flash as backup AI service for enhanced reliability
- **Communication**: WhatsApp integration for direct contact (phone: +923213809420)
- **Resume Generation**: AI-powered resume generation using both OpenAI and Gemini APIs
- **Contact Forms**: Server-side contact form processing with validation

### Key Design Patterns
- **Component-Based Architecture**: Modular React components with clear separation of concerns
- **Custom Hooks**: Reusable logic for cursor tracking, scroll animations, mobile detection, and toast notifications
- **Type Safety**: Comprehensive TypeScript coverage with Zod schemas for runtime validation
- **Error Handling**: Graceful error handling with user-friendly fallbacks and toast notifications
- **Responsive Design**: Mobile-first approach with adaptive layouts and touch-friendly interactions
- **Performance Optimization**: Code splitting, lazy loading, and optimized bundle sizes
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Development and Deployment
- **Development Server**: Vite dev server with HMR and custom middleware integration
- **Build Process**: Multi-stage build with client-side bundling via Vite and server-side bundling via ESBuild
- **Environment Configuration**: Environment-based configuration for development and production
- **Asset Management**: Optimized asset loading with proper caching strategies