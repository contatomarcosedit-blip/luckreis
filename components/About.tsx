
import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO, IMAGES } from '../config';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center bg-[#050505] py-24 overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full text-right pointer-events-none opacity-[0.03]">
        <h2 className="text-[35vw] font-heading font-black leading-none text-white tracking-tighter uppercase">BIOGRAFIA</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-3/5">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="flex gap-3 mb-8"
             >
               <span className="bg-zinc-900 text-white text-[10px] font-black px-3 py-1 tracking-widest border border-zinc-800">EST. 2018</span>
               <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest italic">{ARTIST_INFO.agency}</span>
             </motion.div>
             <h3 className="text-6xl md:text-8xl font-heading font-black mb-10 leading-[0.9] uppercase italic">
               A ESSÊNCIA DO <br /><span className="text-red-600">ELETROFUNK</span>
             </h3>
             <div className="space-y-8 text-zinc-400 text-lg leading-relaxed max-w-2xl font-light">
               <p>
                 <span className="text-white font-black text-xl italic uppercase tracking-wider">{ARTIST_INFO.fullName}</span>, conhecido nos palcos como <span className="text-red-600 font-black">{ARTIST_INFO.name}</span>, transformou um sonho de infância em uma das carreiras mais sólidas da região.
               </p>
               <p className="border-l-4 border-red-600 pl-8 py-4 italic bg-white/5 text-zinc-200 shadow-2xl">
                 "A música não é apenas som; é a minha forma mais completa de expressão pessoal. Cada set carrega minha história, minha luta e minha evolução."
               </p>
               <p>
                 Desde os primeiros passos com um notebook em festas escolares até as apresentações memoráveis na <span className="text-white font-bold italic underline decoration-red-600">Noite Abelvolks</span> e residências em casas icônicas como a <span className="text-white font-bold">Nix Caldas</span>, Lucas construiu seu nome com dedicação, humildade e um amor visceral pela batida.
               </p>
               <div className="flex gap-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-white font-heading font-black text-3xl">LUCK</span>
                    <span className="text-red-600 text-[10px] font-black tracking-widest uppercase">Pela Sorte</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-heading font-black text-3xl">REIS</span>
                    <span className="text-red-600 text-[10px] font-black tracking-widest uppercase">Pelo Legado</span>
                  </div>
               </div>
             </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10"
             >
               <div className="relative group">
                 <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-900 opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                 <div className="aspect-[4/5] overflow-hidden rounded-sm transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-l-8 border-red-600 relative">
                    <img 
                      src={IMAGES.mainArtist} 
                      className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 hover:scale-105 transition-all duration-700" 
                      alt={ARTIST_INFO.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                 </div>
               </div>
               
               <motion.div 
                 initial={{ x: 20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -bottom-10 -left-10 bg-white p-10 max-w-[320px] shadow-[20px_20px_60px_rgba(0,0,0,0.9)] transform -rotate-2 border-b-8 border-red-600"
               >
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-600 animate-ping"></div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Artist Status: Online</span>
                 </div>
                 <h4 className="font-heading font-black text-5xl leading-none mb-3 text-black italic tracking-tighter">TOP ARTISTA</h4>
                 <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest border-t border-zinc-100 pt-2">Caldas Novas & Região Centro-Oeste</p>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
