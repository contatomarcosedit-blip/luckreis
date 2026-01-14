
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Mail, ChevronRight } from 'lucide-react';
import { ARTIST_INFO, IMAGES } from '../config';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="relative min-h-screen bg-black flex items-center py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.05]">
         <h2 className="text-[30vw] font-heading font-black text-white tracking-tighter uppercase italic leading-none">2026</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-red-600 font-black text-xs tracking-widest uppercase italic">Booking Now</span>
                  <div className="h-[2px] w-12 bg-zinc-800"></div>
                  <span className="text-zinc-600 font-black text-xs tracking-widest uppercase">{ARTIST_INFO.agency}</span>
                </div>
                <h3 className="text-6xl md:text-9xl font-heading font-black mb-16 uppercase leading-[0.8] italic">
                  PRONTO PRO <br /><span className="text-red-600">SHOW?</span>
                </h3>
             </motion.div>
             
             <div className="space-y-4">
                <motion.a 
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  href={`https://wa.me/${ARTIST_INFO.whatsapp}`} 
                  className="flex items-center justify-between p-10 bg-zinc-900/30 border border-zinc-800 hover:border-red-600/50 group transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 block">WhatsApp Comercial</span>
                      <div className="text-3xl font-heading font-black italic">{ARTIST_INFO.whatsapp.replace('55', '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}</div>
                    </div>
                  </div>
                  <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-red-600" />
                </motion.a>

                <motion.a 
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  href={`https://www.instagram.com/${ARTIST_INFO.instagram}/`} 
                  className="flex items-center justify-between p-10 bg-zinc-900/30 border border-zinc-800 hover:border-red-600/50 group transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 block">Social Media</span>
                      <div className="text-3xl font-heading font-black italic">@{ARTIST_INFO.instagram.toUpperCase()}</div>
                    </div>
                  </div>
                  <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-red-600" />
                </motion.a>

                <motion.a 
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  href={`mailto:${ARTIST_INFO.email}`} 
                  className="flex items-center justify-between p-10 bg-zinc-900/30 border border-zinc-800 hover:border-red-600/50 group transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 block">Email Oficial</span>
                      <div className="text-xl md:text-2xl font-heading font-black italic">{ARTIST_INFO.email.toUpperCase()}</div>
                    </div>
                  </div>
                  <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-red-600" />
                </motion.a>
             </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative group"
             >
               <div className="absolute -inset-4 bg-red-600/20 blur-2xl group-hover:bg-red-600/40 transition-all duration-1000"></div>
               <div className="relative z-10 overflow-hidden border-t-8 border-red-600 shadow-2xl">
                 <img 
                   src={IMAGES.mainArtist} 
                   className="w-[350px] md:w-[450px] aspect-[3/4] object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                   alt={ARTIST_INFO.name}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
               </div>
               <div className="absolute -bottom-8 -left-8 z-20 bg-red-600 p-8 text-white font-heading font-black text-5xl italic transform -rotate-3 group-hover:rotate-0 transition-transform shadow-[10px_10px_30px_rgba(0,0,0,0.5)] border border-red-500">
                 AGENDA 2026
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
