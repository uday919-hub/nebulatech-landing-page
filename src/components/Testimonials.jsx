import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Sarah Chen",
    role: "CEO of TechFlow",
    text: "NebulaTech didn't just build a site; they built a digital experience. Our conversion rate increased by 40% after the relaunch.",
    glow: "shadow-cyan-500/20"
  },
  {
    name: "Marcus Thorne",
    role: "Director @ CyberNode",
    text: "The speed of their 'Quantum Coding' is no joke. Our platform feels like it's running in the future.",
    glow: "shadow-purple-500/20"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-widest">
          SYSTEM <span className="text-purple-500">FEEDBACK</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl ${rev.glow}`}
            >
              <p className="text-gray-300 italic mb-6">"{rev.text}"</p>
              <div>
                <h4 className="text-white font-bold">{rev.name}</h4>
                <p className="text-cyan-400 text-sm font-mono">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;