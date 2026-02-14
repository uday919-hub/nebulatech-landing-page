import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-10"
        >
          <h2 className="text-5xl font-bold text-white mb-4">READY TO <span className="text-cyan-400">INITIATE?</span></h2>
          <p className="text-gray-500">Enter your coordinates to begin the transmission.</p>
        </motion.div>

        <form className="grid gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="EMAIL_ADDRESS" 
            className="bg-zinc-900 border border-white/10 p-4 rounded-lg focus:border-cyan-500 outline-none text-white font-mono"
          />
          <textarea 
            placeholder="MESSAGE_ENCRYPTED" 
            rows="4"
            className="bg-zinc-900 border border-white/10 p-4 rounded-lg focus:border-cyan-500 outline-none text-white font-mono"
          ></textarea>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-lg transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            Send Transmission
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;