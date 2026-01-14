
import React from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO, IMAGES } from '../config';

const Gallery: React.FC = () => {
  return (
    <section className="bg-black py-32 border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-red-600 font-black text-[10px] uppercase tracking-widest italic mb-2 block">Lifestyle & Shows</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase italic mb-2 leading-none">GALERIA DE <span className="text-white/40">PALCO</span></h2>
          </div>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-black max-w-xs text-right border-r-2 border-red-600 pr-4 italic">
            Registros de uma carreira consolidada sob a visão da {ARTIST_INFO.agency}.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {IMAGES.gallery.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group overflow-hidden bg-zinc-900"
            >
              <img 
                src={src} 
                alt={`${ARTIST_INFO.name} - Performance ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
                  <div className="w-2 h-2 bg-red-600 animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href={`https://www.instagram.com/${ARTIST_INFO.instagram}/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-zinc-900 hover:bg-white hover:text-black px-10 py-5 transition-all uppercase tracking-[0.4em] font-black text-[10px] italic border border-zinc-800"
          >
            Acompanhe no Instagram
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
