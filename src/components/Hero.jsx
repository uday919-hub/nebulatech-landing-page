import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-[1000px] h-[500px] bg-neonBlue/20 rounded-full blur-[120px] -z-10" />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.8 }} 
        className="text-6xl md:text-8xl font-black text-center tracking-tighter"
      >
        NEBULA <span className="text-neonBlue">TECH</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-gray-400 text-lg md:text-xl text-center max-w-2xl px-6"
      >
        Engineering Tomorrow's Digital Realities. Experience the next generation of web agency.
</motion.p>
<motion.button
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}  
        className="mt-10 px-8 py-3 bg-transparent border-2 border-neonBlue text-neonBlue font-bold rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)] hover:bg-neonBlue hover:text-black transition-all"
      >
        EXPLORE PORTAL
      </motion.button>

    </section>
  );
};

export default Hero;