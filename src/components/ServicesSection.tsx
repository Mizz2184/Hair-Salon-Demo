import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Clock, Sparkles, Check, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-zinc-950 text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Centered Headline */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            ALTA PELUQUERÍA Y GLAM PROFESIONAL
          </span>
          <h2 className="font-display text-6xl sm:text-8xl font-bold uppercase tracking-tight text-white leading-none">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-sans-body">
            Servicios diseñados para cada ocasión. Selecciona cualquiera para ver detalles y reservar tu cita.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: MAQUILLAJE GLAM HD (Large featured card) */}
          {SERVICES.find(s => s.id === 'maquillaje-glam') && (() => {
            const service = SERVICES.find(s => s.id === 'maquillaje-glam')!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedServiceModal(service)}
                className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto group cursor-pointer border border-zinc-800 shadow-2xl min-h-[480px]"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:via-black/40 transition-colors"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between text-center items-center">
                  <div className="w-full text-right">
                    <span className="text-xs font-mono font-semibold bg-amber-400 text-zinc-950 px-3 py-1 rounded-full border border-amber-300">
                      DESTACADO
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                      {service.name}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm font-sans-body leading-relaxed max-w-xs">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-white transition-colors underline underline-offset-4 pt-2">
                      <span>VER DETALLES</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 2: CORTES */}
          {SERVICES.find(s => s.id === 'cortes') && (() => {
            const service = SERVICES.find(s => s.id === 'cortes')!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                onClick={() => setSelectedServiceModal(service)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-800 shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-center items-center">
                  <div className="w-full text-right">
                    <span className="text-xs font-mono font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                      PELUQUERÍA
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                      {service.name}
                    </h3>
                    <p className="text-zinc-300 text-xs font-sans-body line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 3: KERATINAS */}
          {SERVICES.find(s => s.id === 'keratinas') && (() => {
            const service = SERVICES.find(s => s.id === 'keratinas')!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedServiceModal(service)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-800 shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-center items-center">
                  <div className="w-full text-right">
                    <span className="text-xs font-mono font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                      TRATAMIENTO
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                      {service.name}
                    </h3>
                    <p className="text-zinc-300 text-xs font-sans-body line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 4: ALISADO PERMANENTE */}
          {SERVICES.find(s => s.id === 'alisado') && (() => {
            const service = SERVICES.find(s => s.id === 'alisado')!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onClick={() => setSelectedServiceModal(service)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-800 shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-center items-center">
                  <div className="w-full text-right">
                    <span className="text-xs font-mono font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                      TRATAMIENTO
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                      {service.name}
                    </h3>
                    <p className="text-zinc-300 text-xs font-sans-body line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 5: COLOR Y TRATAMIENTOS */}
          {SERVICES.find(s => s.id === 'color') && (() => {
            const service = SERVICES.find(s => s.id === 'color')!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={() => setSelectedServiceModal(service)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border border-zinc-800 shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-center items-center">
                  <div className="w-full text-right">
                    <span className="text-xs font-mono font-semibold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">
                      COLORACIÓN
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                      {service.name}
                    </h3>
                    <p className="text-zinc-300 text-xs font-sans-body line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })()}

        </div>

        {/* Center Bottom "RESERVAR CITA" Pill Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-100 text-zinc-950 font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full transition-all transform active:scale-95 shadow-2xl cursor-pointer"
          >
            <span>Reservar cita</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

      {/* Service Detail Inspection Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 relative text-white">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">ESPECIFICACIÓN DEL SERVICIO</span>
              <h3 className="font-display text-4xl font-bold uppercase text-white">{selectedServiceModal.name}</h3>
              
              <div className="flex items-center gap-4 text-sm font-semibold text-zinc-300 bg-zinc-800/80 p-3 rounded-xl border border-zinc-700/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{selectedServiceModal.durationMinutes} MINS</span>
                </div>
                <span>•</span>
                <div className="text-amber-300 font-bold">
                  {selectedServiceModal.priceFormat}
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed font-sans-body">
                {selectedServiceModal.description}
              </p>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    const id = selectedServiceModal.id;
                    setSelectedServiceModal(null);
                    onOpenBooking(id);
                  }}
                  className="flex-1 bg-white text-zinc-950 font-bold uppercase tracking-wider text-xs py-3.5 rounded-full hover:bg-zinc-100 text-center cursor-pointer"
                >
                  Reservar este servicio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
