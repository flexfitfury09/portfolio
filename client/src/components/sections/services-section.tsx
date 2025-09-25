import { motion } from 'framer-motion';
import { Service } from '@/types/portfolio';

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: '1',
      title: 'AI & ML Solutions',
      description: 'Custom machine learning models, neural networks, and AI-powered automation systems tailored to your business needs.',
      icon: 'fas fa-robot',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      color: 'primary'
    },
    {
      id: '2',
      title: 'Full Stack Development',
      description: 'End-to-end web and mobile application development with modern frameworks and scalable architectures.',
      icon: 'fas fa-code',
      features: ['React/Next.js Applications', 'API Development', 'Database Design'],
      color: 'secondary'
    },
    {
      id: '3',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using Flutter with native performance and modern UI/UX design.',
      icon: 'fas fa-mobile-alt',
      features: ['Flutter Applications', 'UI/UX Design', 'App Store Deployment'],
      color: 'accent'
    },
    {
      id: '4',
      title: 'SaaS & Enterprise',
      description: 'Scalable Software-as-a-Service platforms and enterprise-grade applications with advanced features and security.',
      icon: 'fas fa-cloud',
      features: ['Multi-tenant Architecture', 'Payment Integration', 'Analytics Dashboard'],
      color: 'primary'
    },
    {
      id: '5',
      title: 'AI Chatbots & LLMs',
      description: 'Intelligent conversational AI systems powered by large language models for customer service and automation.',
      icon: 'fas fa-comments',
      features: ['Custom Training', 'Multi-platform Integration', 'Analytics & Insights'],
      color: 'secondary'
    },
    {
      id: '6',
      title: 'Data Science & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, visualization, and predictive modeling.',
      icon: 'fas fa-chart-bar',
      features: ['Data Visualization', 'Statistical Analysis', 'Predictive Modeling'],
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        text: 'text-primary',
        bg: 'bg-primary/20',
        hover: 'hover:bg-primary hover:text-primary-foreground',
        groupHover: 'group-hover:bg-primary/20'
      },
      secondary: {
        text: 'text-secondary',
        bg: 'bg-secondary/20',
        hover: 'hover:bg-secondary hover:text-secondary-foreground',
        groupHover: 'group-hover:bg-secondary/20'
      },
      accent: {
        text: 'text-accent',
        bg: 'bg-accent/20',
        hover: 'hover:bg-accent hover:text-accent-foreground',
        groupHover: 'group-hover:bg-accent/20'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="services-title"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="services-subtitle"
          >
            Comprehensive solutions for your digital needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:animate-pulse-glow"
                data-testid={`service-card-${service.id}`}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full glass-card flex items-center justify-center ${colors.groupHover} transition-all duration-300`}>
                    <i className={`${service.icon} text-3xl ${colors.text}`}></i>
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-4 ${colors.text}`} data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                  
                  <ul className="text-sm text-left space-y-2 mb-6" data-testid={`service-features-${service.id}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${service.id}-${featureIndex}`}>
                        <i className={`fas fa-check ${colors.text} mr-2`}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full glass-card py-3 rounded-lg font-semibold ${colors.text} ${colors.hover} transition-all duration-300`}
                    data-testid={`service-button-${service.id}`}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
