import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechVision Inc.',
      content: 'Arman delivered an exceptional AI-powered analytics platform that transformed our data insights. His expertise in machine learning and full-stack development is truly impressive.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateCorp',
      content: 'Working with Arman was fantastic. He built a complex Flutter app with AI features that exceeded our expectations. His attention to detail and technical skills are outstanding.',
      rating: 5,
      avatar: 'MC'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'CEO',
      company: 'DataFlow Solutions',
      content: 'Arman\'s expertise in AI and web development helped us build a cutting-edge SaaS platform. He\'s professional, responsive, and delivers high-quality work on time.',
      rating: 5,
      avatar: 'ER'
    },
    {
      id: '4',
      name: 'David Kim',
      position: 'Founder',
      company: 'StartupBoost',
      content: 'Amazing work on our enterprise WordPress solution with custom AI integrations. Arman understands both the technical and business aspects perfectly.',
      rating: 5,
      avatar: 'DK'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="testimonials-title"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="testimonials-subtitle"
          >
            What clients say about working with me
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden"
            data-testid="testimonial-card"
          >
            {/* 3D Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="flex gap-1" data-testid="testimonial-rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-center mb-8 leading-relaxed"
                data-testid="testimonial-content"
              >
                "{testimonials[currentIndex].content}"
              </motion.blockquote>

              <motion.div
                key={`${currentIndex}-author`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
                data-testid="testimonial-author"
              >
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mr-4 text-xl font-bold text-primary">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex gap-2" data-testid="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}