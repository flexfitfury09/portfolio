import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Project } from '@/types/portfolio';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered SaaS Platform',
      description: 'Enterprise-grade platform with machine learning analytics and automated decision-making capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tags: ['AI/ML', 'React', 'Python'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Smart Flutter App',
      description: 'Cross-platform mobile application with AI-driven features and real-time data synchronization.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tags: ['Flutter', 'AI', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: '3',
      title: 'ML Analytics Dashboard',
      description: 'Advanced data visualization platform with predictive analytics and machine learning insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      tags: ['ML', 'D3.js', 'Python'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getTagColor = (tag: string) => {
    const colorMap: { [key: string]: string } = {
      'AI/ML': 'bg-primary/20 text-primary',
      'AI': 'bg-primary/20 text-primary',
      'React': 'bg-secondary/20 text-secondary',
      'Python': 'bg-accent/20 text-accent',
      'Flutter': 'bg-secondary/20 text-secondary',
      'Firebase': 'bg-accent/20 text-accent',
      'ML': 'bg-accent/20 text-accent',
      'D3.js': 'bg-primary/20 text-primary'
    };
    return colorMap[tag] || 'bg-muted/20 text-muted-foreground';
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="projects-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="projects-subtitle"
          >
            Innovative solutions I've crafted
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card glass-card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => openProjectModal(project)}
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-tags-${project.id}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs ${getTagColor(tag)}`}
                      data-testid={`project-tag-${project.id}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4" data-testid={`project-links-${project.id}`}>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="text-primary hover:text-primary/80 transition-colors" data-testid={`project-demo-${project.id}`}>
                      <i className="fas fa-external-link-alt mr-1"></i>Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-secondary hover:text-secondary/80 transition-colors" data-testid={`project-github-${project.id}`}>
                      <i className="fab fa-github mr-1"></i>Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
          <DialogContent className="glass-card border-border max-w-2xl" data-testid="project-modal">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary" data-testid="modal-project-title">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                    data-testid="modal-project-image"
                  />
                  <p className="text-muted-foreground" data-testid="modal-project-description">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2" data-testid="modal-project-tags">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}
                        data-testid={`modal-tag-${index}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4" data-testid="modal-project-links">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        className="glass-card px-6 py-3 rounded-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        data-testid="modal-demo-link"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>View Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        className="glass-card px-6 py-3 rounded-lg font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                        data-testid="modal-github-link"
                      >
                        <i className="fab fa-github mr-2"></i>View Code
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
