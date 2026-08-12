import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface WorkingHoursSectionProps {
  onSelectDateToBook: (dateStr: string) => void;
}

export const WorkingHoursSection: React.FC<WorkingHoursSectionProps> = ({ onSelectDateToBook }) => {
  const [selectedDay, setSelectedDay] = useState<number>(3); // Default highlighted 3rd as shown in screenshot

  // Month Calendar data corresponding to NOVEMBER 2023 as shown in image
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  // Pad offset for Monday start: Oct 30, 31
  const prevMonthPadding = [30, 31];
  const nextMonthPadding = [1, 2, 3];

  const handleDateClick = (dayNum: number) => {
    setSelectedDay(dayNum);
    const formattedDate = `2023-11-${dayNum < 10 ? '0' + dayNum : dayNum}`;
    onSelectDateToBook(formattedDate);
  };

  return (
    <section id="hours" className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Hours & Policies */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-semibold">
                SANTA ANA, COSTA RICA
              </span>
              <h2 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                HORARIO Y CITAS
              </h2>
            </div>

            {/* Schedule Table */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-white">LUNES A SÁBADO</span>
                <span className="font-mono text-sm font-semibold text-amber-600 dark:text-amber-400">PRÓXIMAMENTE (OPENING SOON)</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-white">DOMINGO</span>
                <span className="font-mono text-sm font-semibold text-zinc-500 uppercase">POR CONFIRMAR</span>
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-zinc-700 dark:text-zinc-300 font-sans-body">
              <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">ℹ️ Nota de Apertura:</p>
              <p>Nuestra página oficial de Facebook indica "Próximamente". Puedes seleccionar una fecha previa en el calendario o solicitar tu cita por mensaje para coordinar tu evaluación.</p>
            </div>

            {/* Footnote Disclosures */}
            <div className="space-y-2 pt-2 text-[11px] text-zinc-500 dark:text-zinc-400 uppercase leading-relaxed font-sans-body">
              <p>* PARA SERVICIOS DE COLORACIÓN SE REQUIERE PRUEBA DE PARCHE DE PIEL 48 HORAS ANTES</p>
              <p>* SE SOLICITA UN DEPÓSITO PARA CONFIRMAR Y ASEGURAR TU CITA</p>
              <p>* CANCELACIONES CON UN MÍNIMO DE 24 HORAS DE ANTICIPACIÓN</p>
            </div>
          </motion.div>

          {/* Right Column: Calendar Widget matching exact screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            
            {/* Calendar Header */}
            <div className="bg-zinc-950 text-white text-center py-4 rounded-xl mb-6 shadow-md">
              <h3 className="font-display text-2xl font-bold uppercase tracking-widest">
                NOVEMBER 2023
              </h3>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 text-center text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400 mb-3">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-sm">
              
              {/* Previous month padding days */}
              {prevMonthPadding.map((d) => (
                <div key={`prev-${d}`} className="py-2.5 text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">
                  {d}
                </div>
              ))}

              {/* November days */}
              {daysInMonth.map((dayNum) => {
                const isSelected = selectedDay === dayNum;
                // Sunday closed logic (Nov 5, 12, 19, 26)
                const isSunday = dayNum % 7 === 5; 

                return (
                  <button
                    key={dayNum}
                    disabled={isSunday}
                    onClick={() => handleDateClick(dayNum)}
                    className={`py-2.5 rounded-lg font-semibold transition-all cursor-pointer ${
                      isSunday
                        ? 'text-zinc-300 dark:text-zinc-700 opacity-40 cursor-not-allowed'
                        : isSelected
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-md scale-105'
                          : 'hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}

              {/* Next month padding */}
              {nextMonthPadding.map((d) => (
                <div key={`next-${d}`} className="py-2.5 text-zinc-300 dark:text-zinc-700 pointer-events-none select-none">
                  {d}
                </div>
              ))}

            </div>

            {/* Calendar Footer hint */}
            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-400">
              Haz clic en una fecha disponible para iniciar la reserva de tu cita.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
