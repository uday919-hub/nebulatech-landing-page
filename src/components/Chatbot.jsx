import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* 1. The Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-500 p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform text-black"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>

      {/* 2. The Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-zinc-900 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-cyan-500/10 p-4 border-b border-cyan-500/30">
              <h3 className="text-cyan-400 font-mono text-sm font-bold">NEBULA_AI v1.0</h3>
              <p className="text-[10px] text-cyan-500/70 italic">Online & Encrypted</p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 text-sm font-mono overflow-y-auto space-y-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20 text-cyan-100">
                Greetings, User. How can I assist with your digital evolution today?
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/50 flex gap-2">
              <input 
                type="text" 
                placeholder="Type command..." 
                className="bg-transparent border border-white/10 flex-1 px-3 py-2 rounded text-xs focus:border-cyan-500 outline-none font-mono"
              />
              <button className="text-cyan-500"><Send size={18}/></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;