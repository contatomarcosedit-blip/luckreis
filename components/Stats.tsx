
import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden border-y border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
           <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">DATA 2026</span>
           <div className="h-[1px] flex-grow bg-zinc-900"></div>
           <span className="text-zinc-600 font-heading text-xs tracking-widest uppercase">Análise de Performance</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500 font-heading text-sm uppercase tracking-[0.4em] font-bold italic">Presença Digital</span>
            <div className="flex items-baseline gap-4 mt-4">
              <h4 className="text-8xl md:text-[10rem] font-heading font-black text-white leading-none">+100</h4>
              <span className="text-4xl md:text-6xl font-heading font-black text-red-600 uppercase italic">MIL</span>
            </div>
            <p className="text-zinc-500 uppercase text-[11px] tracking-[0.3em] font-black mt-6 border-l-2 border-red-600 pl-4">Streams orgânicos nas plataformas de áudio em 2026</p>
            <div className="flex gap-6 mt-10 opacity-30">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" className="h-5 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_Logo_with_white_text.svg" className="h-5" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <span className="text-zinc-500 font-heading text-sm uppercase tracking-[0.4em] font-bold italic">Comunidade Fiel</span>
            <div className="flex items-baseline gap-4 mt-4">
              <h4 className="text-8xl md:text-[10rem] font-heading font-black text-white leading-none">55</h4>
              <span className="text-4xl md:text-6xl font-heading font-black text-red-600 uppercase italic">MIL</span>
            </div>
            <p className="text-zinc-500 uppercase text-[11px] tracking-[0.3em] font-black mt-6 border-l-2 border-red-600 pl-4">Engajamento real e audiência segmentada no Instagram</p>
            <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="w-48 h-48" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
