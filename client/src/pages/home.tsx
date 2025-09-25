import Navigation from '@/components/layout/navigation';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import DataScienceSection from '@/components/sections/data-science-section';
import ServicesSection from '@/components/sections/services-section';
import ExperienceSection from '@/components/sections/experience-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import ChatbotWidget from '@/components/ui/chatbot-widget';
import CursorFollower from '@/components/ui/cursor-follower';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useEffect } from 'react';

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <CursorFollower />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DataScienceSection />
        <ServicesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <footer className="py-16 border-t border-border/20 bg-gradient-to-br from-background via-muted/10 to-background" data-testid="footer">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-4 glow-text">
                <span className="text-primary">Arman</span>
                <span className="text-secondary">Ahmed</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full Stack AI & Software Developer specializing in creating intelligent systems with cutting-edge technology. 
                Building the future through innovation, one project at a time.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300" data-testid="footer-github">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/20 transition-all duration-300" data-testid="footer-linkedin">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-all duration-300" data-testid="footer-twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://wa.me/+923213809420" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300" data-testid="footer-whatsapp">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
                <a href="mailto:arman@example.com" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/20 transition-all duration-300" data-testid="footer-email">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">About Me</a></li>
                <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Skills</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Projects</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-muted-foreground">AI & ML Solutions</span></li>
                <li><span className="text-muted-foreground">Full Stack Development</span></li>
                <li><span className="text-muted-foreground">Mobile Apps (Flutter)</span></li>
                <li><span className="text-muted-foreground">WordPress Development</span></li>
                <li><span className="text-muted-foreground">SaaS & Enterprise</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">
                  © 2024 Arman Ahmed. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>•</span>
                  <span>Available for freelance projects worldwide</span>
                  <span>•</span>
                  <span>Response time: &lt; 24 hours</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">Built with</span>
                <div className="flex items-center gap-2">
                  <i className="fab fa-react text-secondary"></i>
                  <span className="text-secondary">React</span>
                  <span className="text-muted-foreground">+</span>
                  <i className="fas fa-brain text-primary"></i>
                  <span className="text-primary">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatbotWidget />
    </div>
  );
}
