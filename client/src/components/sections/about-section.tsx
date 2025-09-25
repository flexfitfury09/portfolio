import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function AboutSection() {
  useScrollAnimation();

  const timelineItems = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'AI & Software Engineering',
      period: '2020 - Present',
      description: 'Specialized in developing AI-powered applications and enterprise solutions',
      color: 'text-primary'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Full Stack Development',
      period: '2018 - 2020',
      description: 'Built scalable web applications using modern frameworks and technologies',
      color: 'text-secondary'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Science Journey',
      period: '2017 - 2018',
      description: 'Started with data analysis and machine learning fundamentals',
      color: 'text-accent'
    }
  ];

  const coreExpertise = [
    { icon: 'fas fa-brain', text: 'Machine Learning', color: 'text-primary' },
    { icon: 'fas fa-robot', text: 'Deep Learning', color: 'text-secondary' },
    { icon: 'fas fa-code', text: 'Full Stack Development', color: 'text-accent' },
    { icon: 'fas fa-mobile-alt', text: 'Mobile Apps', color: 'text-primary' }
  ];

  return (
    <section id="about" className="py-20 relative animate-on-scroll">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="about-title"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="about-subtitle"
          >
            My journey in technology and innovation
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-xl animate-float"
              data-testid="about-intro-card"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Full Stack AI Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about creating intelligent systems that bridge the gap between human needs and technological capabilities.
                With expertise spanning from machine learning algorithms to full-stack applications, I craft solutions that are both innovative and practical.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 rounded-xl animate-float"
              style={{ animationDelay: '0.4s' }}
              data-testid="about-expertise-card"
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreExpertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2" data-testid={`expertise-${index}`}>
                    <i className={`${item.icon} ${item.color}`}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            data-testid="career-timeline"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-center"
                  data-testid={`timeline-item-${index}`}
                >
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center animate-pulse-glow">
                    <i className={`${item.icon} ${item.color} text-xl`}></i>
                  </div>
                  <div className="ml-8 glass-card p-4 rounded-lg flex-1">
                    <h4 className={`font-semibold ${item.color}`}>{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
