
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ARTIST_INFO } from '../config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Mídia', id: 'media' },
    { label: 'Contato', id: 'contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-600/20 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           <div className="w-10 h-10 bg-red-600 flex items-center justify-center font-black text-sm rotate-45 shadow-[0_0_15px_rgba(225,29,72,0.4)]">
             <span className="-rotate-45">LR</span>
           </div>
           <span className="font-heading font-black text-2xl tracking-tighter uppercase">
             DJ LUCK <span className="text-red-600">REIS</span>
           </span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-red-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={`https://wa.me/${ARTIST_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-red-600 hover:text-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all clip-path-polygon-[10%_0,100%_0,90%_100%,0%_100%]"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
          >
            Contratar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
