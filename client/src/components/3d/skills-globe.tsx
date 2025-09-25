import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'AI/ML', color: 'text-primary' },
  { name: 'React', color: 'text-secondary' },
  { name: 'Python', color: 'text-accent' },
  { name: 'Flutter', color: 'text-primary' },
  { name: '.NET', color: 'text-secondary' },
  { name: 'PHP', color: 'text-accent' },
  { name: 'C#', color: 'text-primary' },
  { name: 'WordPress', color: 'text-secondary' },
  { name: 'Node.js', color: 'text-accent' },
  { name: 'TypeScript', color: 'text-primary' },
  { name: 'TensorFlow', color: 'text-secondary' },
  { name: 'MySQL', color: 'text-accent' },
];

export default function SkillsGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Simple rotation animation
    let rotation = 0;
    const animate = () => {
      rotation += 0.5;
      globe.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative h-96 flex items-center justify-center">
      <div ref={globeRef} className="relative w-80 h-80">
        {/* Orbital Rings */}
        <div className="skill-orbit w-full h-full animate-rotate-slow"></div>
        <div className="skill-orbit w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow" style={{ animationDelay: '-5s' }}></div>
        <div className="skill-orbit w-3/5 h-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow" style={{ animationDelay: '-10s' }}></div>
        
        {/* Floating Skill Tags */}
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`absolute glass-card px-3 py-1 rounded-full text-sm font-semibold ${skill.color} animate-float`}
            style={{
              top: `${20 + Math.sin(index * Math.PI / 3) * 30}%`,
              left: `${20 + Math.cos(index * Math.PI / 3) * 30}%`,
              animationDelay: `${index}s`
            }}
          >
            {skill.name}
          </div>
        ))}
        
        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex items-center justify-center animate-pulse-glow">
          <i className="fas fa-brain text-3xl text-primary"></i>
        </div>
      </div>
    </div>
  );
}
