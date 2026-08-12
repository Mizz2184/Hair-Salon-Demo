import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="pt-24 lg:pt-20 pb-12 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[82vh]">
          
          {/* Left Column: Giant Editorial Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-6 lg:py-12 pr-0 lg:pr-6"
          >
            <div className="space-y-6">
              
              {/* Top Tagline / Location */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                ESPECIALISTAS EN RIZOS · SANTA ANA, COSTA RICA
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase leading-[0.92] sm:leading-[0.90]">
                TU RIZO,<br />
                TU IDENTIDAD,<br />
                TU MEJOR VERSIÓN.
              </h1>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed pt-2 font-sans-body">
                Salón especializado en rizos, coloración y transiciones capilares. Vive una experiencia única, diseñada para devolverte la salud y la forma natural de tu cabello — de liso a rizo en 6 meses, con diagnóstico capilar completo desde el primer día.
              </p>
            </div>

            {/* CTA Button & Quick Stats */}
            <div className="pt-8 sm:pt-12 space-y-8">
              <div>
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl transform active:scale-95 cursor-pointer"
                >
                  <span>Reservar cita</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">+7,000</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">Seguidores en Comunidad</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">100%</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">Diagnóstico Personalizado</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Certificados</div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">Talleres de Textura</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Full Height Editorial Portrait with Overlay Headline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[640px] shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200"
              alt="Woman with beautiful long hair smiling"
              className="w-full h-full object-cover object-center editorial-img group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient Overlay for Readable Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

            {/* Overlaid Bottom Typography: "TU CABELLO, TU CONFIANZA" */}
            <div className="absolute bottom-6 right-6 left-6 text-right z-10">
              <span className="inline-block text-xs uppercase tracking-widest text-amber-200 font-semibold mb-1">
                SANTA ANA, COSTA RICA
              </span>
              <h2 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-white leading-none drop-shadow-md">
                TU CABELLO,<br />TU CONFIANZA
              </h2>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
