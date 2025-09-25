import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DataScienceSection() {
  const [metrics, setMetrics] = useState({
    modelAccuracy: 0,
    responseTime: 0,
    processingProgress: 0
  });

  useEffect(() => {
    // Animate metrics when section comes into view
    const animateMetrics = () => {
      const targetMetrics = {
        modelAccuracy: 94.7,
        responseTime: 2.1,
        processingProgress: 85
      };

      let progress = 0;
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 FPS
      const increment = 1 / steps;

      const timer = setInterval(() => {
        progress += increment;
        if (progress >= 1) {
          progress = 1;
          clearInterval(timer);
        }

        setMetrics({
          modelAccuracy: targetMetrics.modelAccuracy * progress,
          responseTime: targetMetrics.responseTime * progress,
          processingProgress: targetMetrics.processingProgress * progress
        });
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateMetrics();
        }
      });
    }, { threshold: 0.5 });

    const section = document.getElementById('data-science-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const aiCapabilities = [
    { icon: 'fas fa-comments', title: 'NLP & LLMs', color: 'bg-primary/10 text-primary' },
    { icon: 'fas fa-eye', title: 'Computer Vision', color: 'bg-secondary/10 text-secondary' },
    { icon: 'fas fa-chart-line', title: 'Predictive Analytics', color: 'bg-accent/10 text-accent' },
    { icon: 'fas fa-cogs', title: 'AutoML', color: 'bg-primary/10 text-primary' }
  ];

  const mlPipeline = [
    { text: 'Data Collection & Preprocessing', color: 'bg-primary', delay: 0 },
    { text: 'Feature Engineering & Selection', color: 'bg-secondary', delay: 0.5 },
    { text: 'Model Training & Optimization', color: 'bg-accent', delay: 1 },
    { text: 'Deployment & Monitoring', color: 'bg-primary', delay: 1.5 }
  ];

  return (
    <section id="data-science" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6" id="data-science-section">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            data-testid="data-science-title"
          >
            Data Science & AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
            data-testid="data-science-subtitle"
          >
            Transforming data into intelligent insights
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Workflow Visualization */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-xl animate-float"
              data-testid="ml-pipeline-card"
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-3xl text-primary mr-4"></i>
                <h3 className="text-2xl font-semibold text-primary">Machine Learning Pipeline</h3>
              </div>
              <div className="space-y-4">
                {mlPipeline.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: step.delay }}
                    className="flex items-center"
                    data-testid={`ml-step-${index}`}
                  >
                    <div className={`w-4 h-4 rounded-full ${step.color} mr-3 animate-pulse`}></div>
                    <span>{step.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-8 rounded-xl animate-float"
              style={{ animationDelay: '0.5s' }}
              data-testid="ai-capabilities-card"
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-robot text-3xl text-secondary mr-4"></i>
                <h3 className="text-2xl font-semibold text-secondary">AI Capabilities</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`text-center p-4 ${capability.color} rounded-lg`}
                    data-testid={`ai-capability-${index}`}
                  >
                    <i className={`${capability.icon} text-2xl mb-2`}></i>
                    <p className="text-sm">{capability.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-xl"
            data-testid="ai-dashboard"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Live AI Dashboard</h3>
            <div className="space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/20 p-4 rounded-lg text-center" data-testid="metric-accuracy">
                  <div className="text-2xl font-bold text-primary">{metrics.modelAccuracy.toFixed(1)}%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg text-center" data-testid="metric-response-time">
                  <div className="text-2xl font-bold text-secondary">{metrics.responseTime.toFixed(1)}ms</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>

              {/* Simulated Chart */}
              <div className="bg-muted/20 p-4 rounded-lg" data-testid="performance-chart">
                <div className="flex items-end justify-between h-32 mb-2">
                  {[60, 80, 45, 95, 70, 85].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`w-8 rounded-t ${
                        index % 3 === 0 ? 'bg-primary' : 
                        index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                      }`}
                      data-testid={`chart-bar-${index}`}
                    ></motion.div>
                  ))}
                </div>
                <div className="text-center text-sm text-muted-foreground">Model Performance Trends</div>
              </div>

              {/* Processing Status */}
              <div className="space-y-2" data-testid="processing-status">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Data Processing</span>
                  <span className="text-primary text-sm">{Math.round(metrics.processingProgress)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${metrics.processingProgress}%` }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full animate-pulse"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
