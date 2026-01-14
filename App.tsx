
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Media from './components/Media';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black text-white selection:bg-red-600 selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-1 bg-red-600 mb-4"
            />
            <span className="font-heading text-2xl tracking-[0.5em] animate-pulse">ORYON AGÊNCIA</span>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <>
          <Navbar />
          
          <main className="space-y-0">
            <Hero />
            <About />
            <Stats />
            <Media />
            <Gallery />
            <Contact />
          </main>

          <footer className="py-12 text-center bg-[#050505] border-t border-zinc-900">
            <div className="flex flex-col items-center gap-4 mb-6">
              <span className="text-zinc-500 font-heading text-sm tracking-[0.2em] uppercase">
                ARTISTA DA <span className="text-white">AGÊNCIA ORYON</span>
              </span>
              <div className="w-12 h-[1px] bg-red-600/50"></div>
            </div>
            <p className="text-zinc-800 text-[10px] uppercase tracking-[0.4em] font-bold">
              &copy; 2026 DJ LUCK REIS - TODOS OS DIREITOS RESERVADOS
            </p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
