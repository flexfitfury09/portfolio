import { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createNeuralNode = () => {
      const node = document.createElement('div');
      node.className = 'neural-node animate-neural';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 3 + 's';
      
      container.appendChild(node);
    };

    // Create neural nodes
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createNeuralNode(), i * 300);
    }
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
