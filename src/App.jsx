import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function Home() {
  return (
    <>

      <main className="relative flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black -z-10"></div>

        <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6">
          NEBULA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            TECH
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          Engineering Tomorrow's Digital Realities. Experience the next
          generation of web innovation.
        </p>

        <a
          href="#services"
          className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg"
        >
          EXPLORE PORTAL
        </a>
      </main>

      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
      <section className="py-24 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <Portfolio />
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </section>


      <section className="py-24 px-6 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <Contact />
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-sm font-mono">
        © 2026 NEBULATECH — Built with React & Tailwind
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500/30">
      
        <nav className="p-6 flex justify-between items-center border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-black/70">
          <h1 className="text-2xl font-bold tracking-tight text-cyan-400">
            NEBULA<span className="text-white">TECH</span>
          </h1>

          <div className="space-x-8 text-sm font-mono tracking-widest">
            <Link to="/" className="hover:text-cyan-400 transition">
              HOME
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition">
              ABOUT
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
