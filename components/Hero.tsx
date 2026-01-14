
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[22vw] font-heading font-black text-white leading-none tracking-tighter whitespace-nowrap"
        >
          LUCK REIS
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-white text-black text-[11px] font-black px-3 py-1 tracking-widest">2026</span>
            <span className="bg-red-600 text-white text-[11px] font-black px-3 py-1 uppercase tracking-widest">Mídia Kit Oficial</span>
          </div>
          
          <h2 className="text-6xl md:text-[9rem] font-heading font-black leading-[0.8] tracking-tighter mb-4 uppercase italic">
            DJ LUCK <span className="text-red-600">REIS</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-8"
          >
            <p className="text-lg md:text-2xl font-heading text-zinc-400 tracking-[0.3em] uppercase">
              Agência <span className="text-white border-b-2 border-red-600 pb-1">ORYON</span>
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <div className="loading-bar w-48 md:w-96 mb-2"></div>
            <p className="text-xs uppercase tracking-[0.5em] text-zinc-500 mb-8 font-bold">Lucas Monhamod / Especialista em Eletrofunk & Funk</p>
            
            <div className="flex gap-8 items-center">
              <motion.a whileHover={{ scale: 1.1 }} href="https://open.spotify.com/artist/77oppv8HYynIu7EEcnhKb0" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" alt="Spotify" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/djluckreis/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" alt="Instagram" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-3 z-20">
        <div className="w-16 h-[1px] bg-red-600"></div>
        <div className="w-8 h-[1px] bg-white/20"></div>
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-500 vertical-text">SCROLL DOWN</span>
      </div>

      {/* Subtle Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]"></div>
    </section>
  );
};

export default Hero;
