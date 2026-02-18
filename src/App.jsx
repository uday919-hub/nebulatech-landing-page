import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot"; 

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500/30">
        <nav className="p-6 flex justify-between items-center border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/50">
          <h1 className="text-2xl font-bold tracking-tighter text-cyan-400">
            NEBULA<span className="text-white">TECH</span>
          </h1>
          <div className="space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-widest">HOME</Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-widest">ABOUT</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <main className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black -z-10"></div>
                <h2 className="text-6xl md:text-8xl font-black text-center mb-6 tracking-tight">
                  NEBULA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TECH</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-10">
                  Engineering Tomorrow's Digital Realities. Experience the next generation of web agency.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-20">
                  EXPLORE PORTAL
                </button>
              </main>
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
              <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm font-mono">
                &copy; 2026 NEBULATECH // ALL RIGHTS RESERVED
              </footer>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;