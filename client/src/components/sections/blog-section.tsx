import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Brain, Code, Smartphone } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
  color: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build modern web applications and enhancing user experiences.',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      date: '2024-03-15',
      icon: 'brain',
      color: 'from-primary to-secondary'
    },
    {
      id: '2',
      title: 'Building Scalable SaaS with Modern Tech Stack',
      excerpt: 'A comprehensive guide to architecting enterprise-grade SaaS applications using React, Node.js, and cloud technologies.',
      category: 'Full Stack Development',
      readTime: '8 min read',
      date: '2024-03-10',
      icon: 'code',
      color: 'from-secondary to-accent'
    },
    {
      id: '3',
      title: 'Flutter vs React Native: 2024 Comparison',
      excerpt: 'An in-depth analysis of cross-platform mobile development frameworks and which one to choose for your next project.',
      category: 'Mobile Development',
      readTime: '6 min read',
      date: '2024-03-05',
      icon: 'smartphone',
      color: 'from-accent to-primary'
    },
    {
      id: '4',
      title: 'Implementing Machine Learning in WordPress',
      excerpt: 'Learn how to integrate AI capabilities into WordPress websites for enhanced functionality and user engagement.',
      category: 'WordPress & CMS',
      readTime: '7 min read',
      date: '2024-02-28',
      icon: 'brain',
      color: 'from-primary to-accent'
    },
    {
      id: '5',
      title: 'Advanced PHP Patterns for Enterprise Applications',
      excerpt: 'Discover modern PHP development patterns and best practices for building robust, maintainable enterprise solutions.',
      category: 'Backend Development',
      readTime: '9 min read',
      date: '2024-02-20',
      icon: 'code',
      color: 'from-secondary to-primary'
    },
    {
      id: '6',
      title: 'AI Chatbots: From Concept to Production',
      excerpt: 'A complete guide to building and deploying intelligent chatbots using modern AI technologies and best practices.',
      category: 'AI & Chatbots',
      readTime: '10 min read',
      date: '2024-02-15',
      icon: 'brain',
      color: 'from-accent to-secondary'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-6 h-6" />;
      case 'code':
        return <Code className="w-6 h-6" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'bg-primary/20 text-primary',
      'Full Stack Development': 'bg-secondary/20 text-secondary',
      'Mobile Development': 'bg-accent/20 text-accent',
      'WordPress & CMS': 'bg-primary/20 text-primary',
      'Backend Development': 'bg-secondary/20 text-secondary',
      'AI & Chatbots': 'bg-accent/20 text-accent'
    };
    return colorMap[category] || 'bg-muted/20 text-muted-foreground';
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="blog-title"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="blog-subtitle"
          >
            Thoughts on technology, development, and innovation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:animate-pulse-glow"
              data-testid={`blog-post-${post.id}`}
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white">
                    {getIcon(post.icon)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors" data-testid={`blog-title-${post.id}`}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`blog-excerpt-${post.id}`}>
                  {post.excerpt}
                </p>

                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1" data-testid={`blog-date-${post.id}`}>
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1" data-testid={`blog-read-time-${post.id}`}>
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Read more button */}
                <button
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group/button"
                  data-testid={`blog-read-more-${post.id}`}
                >
                  <span className="font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card px-8 py-4 rounded-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-pulse-glow"
            data-testid="blog-view-all"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}