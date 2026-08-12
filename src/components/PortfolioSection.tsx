import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../data/salonData';
import { PortfolioItem } from '../types';
import { Eye, Star, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectPortfolioItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'transiciones', label: 'Transiciones' },
    { id: 'color', label: 'Color' },
    { id: 'diagnostico', label: 'Diagnóstico Capilar' },
    { id: 'talleres', label: 'Talleres' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header matching Reference Image 1 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Left top editorial photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Cuidado de rizos"
              className="w-full h-full object-cover editorial-img group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs font-semibold tracking-wider uppercase opacity-80">GALERÍA REAL</p>
              <p className="font-display text-lg uppercase font-bold">TRANSFORMACIONES DE RIZOS</p>
            </div>
          </motion.div>

          {/* Right Banner Header */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">NUESTRO TRABAJO</span>
              <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">TRANSICIONES & COLOR</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
              TRANSFORMACIONES
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl font-sans-body">
              Cada rizo cuenta una historia. Conoce algunas de las transiciones y transformaciones reales de nuestras clientas.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Dynamic Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectPortfolioItem(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-400 text-zinc-950 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Bottom Hover CTA */}
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-900 dark:text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                      BY {item.stylist}
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-2 line-clamp-2 font-sans-body">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800/60 px-2.5 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white underline underline-offset-4 group-hover:text-amber-500 transition-colors">
                      Ver transformación →
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
