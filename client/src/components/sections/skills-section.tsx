import { motion } from 'framer-motion';
import SkillsGlobe from '@/components/3d/skills-globe';
import { useEffect } from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'Artificial Intelligence & ML', level: 95, color: 'from-primary to-secondary' },
    { name: 'Full Stack Development', level: 90, color: 'from-secondary to-accent' },
    { name: 'Mobile Development', level: 85, color: 'from-accent to-primary' },
    { name: 'Data Science & Analytics', level: 88, color: 'from-primary to-secondary' },
    { name: 'WordPress & CMS Development', level: 92, color: 'from-secondary to-primary' },
    { name: '.NET & C# Development', level: 87, color: 'from-accent to-secondary' },
    { name: 'PHP & Backend Systems', level: 89, color: 'from-primary to-accent' },
    { name: 'Cloud & DevOps', level: 83, color: 'from-secondary to-primary' }
  ];

  useEffect(() => {
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      skillBars.forEach((bar, index) => {
        const level = skills[index].level;
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${level}%`;
        }, index * 200);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
        }
      });
    }, { threshold: 0.5 });

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      observer.observe(skillsContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="skills-title"
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="skills-subtitle"
          >
            Technologies that power my innovations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Globe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="skills-globe"
          >
            <SkillsGlobe />
          </motion.div>

          {/* Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
            id="skills-container"
            data-testid="skills-progress"
          >
            {skills.map((skill, index) => (
              <div key={index} className="glass-card p-6 rounded-xl" data-testid={`skill-${index}`}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-primary">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`skill-bar-fill bg-gradient-to-r ${skill.color} h-3 rounded-full animate-pulse-glow transition-all duration-1000 ease-out`}
                    style={{ width: '0%' }}
                    data-testid={`skill-bar-${index}`}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
