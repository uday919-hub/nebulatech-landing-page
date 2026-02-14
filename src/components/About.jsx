import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-10 flex flex-col items-center justify-center">
      {/* Title with a glow effect */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        THE MISSION
      </motion.h2>

      <div className="max-w-4xl grid md:grid-cols-2 gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-cyan-500/30 p-8 rounded-2xl bg-cyan-900/10 backdrop-blur-md"
        >
          <h3 className="text-2xl text-cyan-400 mb-4 font-mono">01 // VISION</h3>
          <p className="text-gray-400 leading-relaxed">
            We are building the bridge between today's limitations and tomorrow's possibilities. 
            NebulaTech specializes in ultra-fast, high-performance digital architectures.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-purple-500/30 p-8 rounded-2xl bg-purple-900/10 backdrop-blur-md"
        >
          <h3 className="text-2xl text-purple-400 mb-4 font-mono">02 // TECH</h3>
          <p className="text-gray-400 leading-relaxed">
            Using AI-integrated workflows and neural-engine designs, we create websites 
            that don't just sit there—they breathe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;