import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-zinc-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Block: Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 lg:pr-6"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                NUESTRA HISTORIA
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                SOMOS JK STUDIO
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans-body">
              En Jk Studio combinamos la técnica de la alta peluquería con el arte del maquillaje profesional. Ofrecemos cortes para caballeros y damas, keratinas, alisamiento permanente y color con líneas premium como Wella y Schwarzkopf — junto a maquillaje glam de alta definición en alianza con Kryolan Costa Rica. Creemos que cuando la técnica correcta se encuentra con el producto adecuado, la piel y el cabello no se esconden: se transforman.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Alta Peluquería: Cortes, Color y Tratamientos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Maquillaje Glam HD con Kryolan</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-300 sm:col-span-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Recomendado por Nuestras Clientas</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 font-bold uppercase tracking-widest text-xs py-3.5 px-8 rounded-full transition-all transform active:scale-95 cursor-pointer shadow-md"
              >
                <span>Reservar cita</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Block: 3-Image Salon Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Main Salon Interior Image */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000"
                alt="Jk Studio Espacio"
                className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-amber-400">INSTALACIONES</p>
                <p className="text-sm font-bold text-white uppercase">NUESTRO ESTUDIO</p>
              </div>
            </div>

            {/* Stacked 2 Images on Right */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] shadow-md group">
                <img
                  src="/makeup_zone_studio.png"
                  alt="Zona de Maquillaje Profesional"
                  className="w-full h-full object-cover object-center editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white uppercase bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  ZONA DE MAQUILLAJE PROFESIONAL
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[16/10] shadow-md group">
                <img
                  src="/hair_salon_studio_interior.png"
                  alt="NUESTRO ESTUDIO"
                  className="w-full h-full object-cover object-center editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-white uppercase bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  NUESTRO ESTUDIO
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
