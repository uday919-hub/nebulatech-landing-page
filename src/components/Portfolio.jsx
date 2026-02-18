import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cyber-Vault",
    category: "Security Dashboard",
    image: "https://images.unsplash.com/photo-1581091870622-55b4f3f50c42?auto=format&fit=crop&w=800&q=80", // single large image
  }
];

const Portfolio = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-cyan-400 font-mono mb-2">// SELECTED WORKS</h2>
          <h3 className="text-4xl font-bold text-white">FEATURED PROJECT</h3>
        </div>

        {/* Project Card */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10"
          >
            {/* Full-cover Image */}
            <div className="overflow-hidden rounded-2xl h-96"> {/* adjust height if needed */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <h4 className="text-3xl font-bold mt-1">{project.title}</h4>
            </div>
          </motion.div>
        ))}

        {/* Button Below Card */}
        <div className="mt-8 text-center">
          <button className="text-sm text-gray-400 hover:text-white transition-colors border-b border-gray-700 px-4 py-2">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
