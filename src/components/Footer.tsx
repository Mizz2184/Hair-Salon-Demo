import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Nav Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#home" className="hover:text-white transition-colors">INICIO</a>
          <a href="#services" className="hover:text-white transition-colors">SERVICIOS</a>
          <a href="#about" className="hover:text-white transition-colors">NOSOTROS</a>
          <a href="#portfolio" className="hover:text-white transition-colors">PORTAFOLIO</a>
          <a href="#reviews" className="hover:text-white transition-colors">RESEÑAS</a>
          <a href="#hours" className="hover:text-white transition-colors">CONTACTO</a>
        </div>

        {/* Main Footer Headline */}
        <div className="space-y-4">
          <h2 className="font-display text-5xl sm:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white leading-none">
            RESERVA CON NOSOTROS
          </h2>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold uppercase tracking-widest text-xs py-4 px-10 rounded-full transition-all transform active:scale-95 shadow-2xl cursor-pointer"
            >
              <span>Reservar cita</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Stacked Photography Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
              alt="Jk Studio Glam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
              alt="Jk Studio Peluquería"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
              alt="Jk Studio Tratamientos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Social Link */}
        <div className="pt-8">
          <a
            href="https://jkstudiosalon.negocio.site"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-white transition-colors"
          >
            <Facebook className="w-4 h-4" />
            <span>SÍGUENOS EN FACEBOOK @JKSTUDIO</span>
          </a>
        </div>

        {/* Bottom Credits & Social */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono tracking-wider gap-4">
          <p>© JK STUDIO. TODOS LOS DERECHOS RESERVADOS. · COSTA RICA · +506 8583 2424 · JKSTUDIOATM@GMAIL.COM</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">NOSOTROS</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICIOS</a>
            <a href="#hours" className="hover:text-white transition-colors">CONTACTO</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
