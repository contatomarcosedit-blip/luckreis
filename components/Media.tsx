
import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO, IMAGES } from '../config';

const Media: React.FC = () => {
  return (
    <section id="media" className="py-32 bg-[#050505] border-b border-zinc-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[12rem] font-heading font-black tracking-tighter text-outline-red opacity-20 mb-[-60px] uppercase italic">STREAMINGS</h2>
            <h3 className="text-5xl md:text-8xl font-heading font-black relative z-10 uppercase italic">OUÇA <span className="text-red-600">AGORA</span></h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-24">
          {IMAGES.singles.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 border border-zinc-800 p-3 group relative overflow-hidden"
            >
              <div className="aspect-square overflow-hidden mb-6 relative">
                <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={s.name} />
                <div className="absolute top-3 left-3 bg-red-600 text-[10px] font-black px-3 py-1 uppercase tracking-widest italic">{ARTIST_INFO.name}</div>
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-heading font-black text-xl leading-none mb-2 group-hover:text-red-600 transition-colors uppercase italic">{s.name}</h4>
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-4 bg-red-600"></div>
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{s.streams} PLAYS</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-black rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative bg-black p-2 rounded-2xl border border-zinc-800 overflow-hidden">
                <iframe 
                  data-testid="embed-iframe" 
                  style={{ borderRadius: '12px', minHeight: '380px' }} 
                  src={`${ARTIST_INFO.spotifyUrl.replace('/artist/', '/embed/artist/')}?utm_source=generator`} 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
             </div>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <span className="text-zinc-600 font-heading text-[10px] tracking-[0.4em] uppercase mb-4">Artista Verificado Spotify</span>
            <div className="w-1 h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;
