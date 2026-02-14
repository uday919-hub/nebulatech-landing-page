import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: "Neural Web Design",
    desc: "Next-gen interfaces powered by AI-driven user experience patterns.",
    icon: <Cpu className="text-cyan-400 w-10 h-10" />,
    color: "border-cyan-500/50"
  },
  {
    title: "Quantum Coding",
    desc: "Hyper-optimized React architectures built for maximum speed and scale.",
    icon: <Code className="text-purple-400 w-10 h-10" />,
    color: "border-purple-500/50"
  },
  {
    title: "Global Mesh",
    desc: "Deployment across edge networks for 0.001ms latency worldwide.",
    icon: <Globe className="text-blue-400 w-10 h-10" />,
    color: "border-blue-500/50"
  },
  {
    title: "Flash Integration",
    desc: "Real-time data synchronization with instant API response times.",
    icon: <Zap className="text-yellow-400 w-10 h-10" />,
    color: "border-yellow-500/50"
  }
];

const Services = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-16 tracking-widest text-white">
          OUR <span className="text-cyan-400 uppercase">Capabilities</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className={`p-8 rounded-xl border ${item.color} bg-white/5 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;