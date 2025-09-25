import { motion } from 'framer-motion';
import { Experience } from '@/types/portfolio';

export default function ExperienceSection() {
  const achievements = [
    { number: '50+', label: 'Projects Completed', delay: 0 },
    { number: '10K+', label: 'Hours Coded', delay: 0.2 },
    { number: '25+', label: 'Happy Clients', delay: 0.4 },
    { number: '5+', label: 'Years Experience', delay: 0.6 }
  ];

  const certificates = [
    {
      title: 'Machine Learning Specialist',
      issuer: 'Google Cloud Platform',
      color: 'text-primary'
    },
    {
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      color: 'text-secondary'
    },
    {
      title: 'TensorFlow Developer',
      issuer: 'TensorFlow Certificate Program',
      color: 'text-accent'
    }
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of AI-powered enterprise solutions, machine learning pipelines, and intelligent automation systems for Fortune 500 clients.',
      technologies: ['Machine Learning', 'Python', 'TensorFlow'],
      type: 'work'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      description: 'Developed scalable web applications and mobile solutions using modern frameworks, contributing to multiple successful product launches.',
      technologies: ['React', 'Node.js', 'Flutter'],
      type: 'work'
    },
    {
      id: '3',
      title: 'Software Engineering Intern',
      company: 'StartupTech Inc.',
      period: '2019 - 2020',
      description: 'Gained hands-on experience in software development, contributing to open-source projects and learning industry best practices.',
      technologies: ['JavaScript', 'PHP', 'MySQL'],
      type: 'work'
    }
  ];

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'work':
        return 'fas fa-briefcase';
      case 'education':
        return 'fas fa-graduation-cap';
      case 'certification':
        return 'fas fa-certificate';
      default:
        return 'fas fa-briefcase';
    }
  };

  const getExperienceColor = (index: number) => {
    const colors = ['text-primary', 'text-secondary', 'text-accent'];
    return colors[index % colors.length];
  };

  const getTechColor = (index: number) => {
    const colors = ['bg-primary/20 text-primary', 'bg-secondary/20 text-secondary', 'bg-accent/20 text-accent'];
    return colors[index % colors.length];
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
            data-testid="experience-title"
          >
            Experience & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="experience-subtitle"
          >
            My professional journey and milestones
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements Counter */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6" data-testid="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: achievement.delay }}
                  className="glass-card p-6 rounded-xl text-center animate-float"
                  style={{ animationDelay: `${achievement.delay}s` }}
                  data-testid={`achievement-${index}`}
                >
                  <div className={`text-4xl font-bold mb-2 ${getExperienceColor(index)}`}>
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Certificates Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-center mb-6" data-testid="certifications-title">
                Certifications
              </h3>
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-lg flex items-center transform transition-all duration-300 hover:scale-105"
                  data-testid={`certificate-${index}`}
                >
                  <div className={`w-12 h-12 rounded-full bg-${cert.color.split('-')[1]}/20 flex items-center justify-center mr-4`}>
                    <i className={`fas fa-certificate ${cert.color}`}></i>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${cert.color}`}>{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            data-testid="experience-timeline"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex"
                  data-testid={`experience-${exp.id}`}
                >
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center animate-pulse-glow">
                    <i className={`${getExperienceIcon(exp.type)} ${getExperienceColor(index)} text-xl`}></i>
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className={`text-xl font-semibold mb-2 ${getExperienceColor(index)}`} data-testid={`exp-title-${exp.id}`}>
                        {exp.title}
                      </h3>
                      <p className={`font-medium mb-2 ${getExperienceColor((index + 1) % 3)}`} data-testid={`exp-company-${exp.id}`}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`exp-period-${exp.id}`}>
                        {exp.period}
                      </p>
                      <p className="text-sm mb-4" data-testid={`exp-description-${exp.id}`}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2" data-testid={`exp-technologies-${exp.id}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 rounded-full text-xs ${getTechColor(techIndex)}`}
                            data-testid={`exp-tech-${exp.id}-${techIndex}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
