import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/effects/particle-background';
import NeuralNetwork from '@/components/effects/neural-network';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Arman Ahmed';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleHireMe = () => {
    window.open('https://wa.me/+923213809420', '_blank');
  };

  const handleContact = () => {
    window.open('https://wa.me/+923213809420', '_blank');
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/generate-resume', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Arman_Ahmed_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Unable to download resume at the moment. Please try again later.');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <NeuralNetwork />

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-float"
        >
          <div className="w-48 h-48 mx-auto mb-8 relative" data-testid="hero-avatar">
            <div className="w-full h-full rounded-full glass-card neon-border animate-pulse-glow flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
              <div className="text-center">
                <i className="fas fa-user-tie text-6xl text-primary mb-2"></i>
                <div className="text-sm font-semibold text-muted-foreground">Arman Ahmed</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          data-testid="hero-title"
        >
          <span className="block mb-2 text-muted-foreground">Hi, I'm</span>
          <span className="glow-text inline-block">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-secondary"
          data-testid="hero-subtitle"
        >
          Full Stack AI & Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl lg:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto"
          data-testid="hero-description"
        >
          Building Intelligent Systems with AI, Deep Learning, and Full-Stack Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          data-testid="hero-cta-buttons"
        >
          <button
            onClick={handleHireMe}
            className="glass-card px-8 py-4 rounded-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-pulse-glow"
            data-testid="button-hire-me"
          >
            <i className="fas fa-briefcase mr-2"></i>Hire Me
          </button>

          <button
            onClick={handleDownloadResume}
            className="glass-card px-8 py-4 rounded-lg font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            data-testid="button-download-resume"
          >
            <i className="fas fa-download mr-2"></i>Download Resume
          </button>

          <button
            onClick={handleContact}
            className="glass-card px-8 py-4 rounded-lg font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            data-testid="button-contact"
          >
            <i className="fas fa-envelope mr-2"></i>Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
