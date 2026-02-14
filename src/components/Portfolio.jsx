import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cyber-Vault",
    category: "Security Dashboard",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Neon-Pulse",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Aether-OS",
    category: "Operating System",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  }
];

const Portfolio = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-cyan-400 font-mono mb-2">// SELECTED WORKS</h2>
            <h3 className="text-4xl font-bold text-white">FEATURED PROJECTS</h3>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors border-b border-gray-700">View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
              </div>
              <div className="p-6">
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <h4 className="text-xl font-bold text-white mt-2">{project.title}</h4>
                <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;