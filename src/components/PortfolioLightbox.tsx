import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { X, Star, Sparkles, User, Scissors, Calendar } from 'lucide-react';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({ item, onClose, onOpenBooking }) => {
  const [showBefore, setShowBefore] = useState(false);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2.5 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Image View Area */}
          <div className="md:col-span-7 relative bg-black aspect-[4/5] md:aspect-auto">
            <img
              src={showBefore && item.beforeImage ? item.beforeImage : item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {item.beforeImage && (
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-1 rounded-full border border-zinc-700 flex text-[10px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => setShowBefore(false)}
                  className={`px-3 py-1 rounded-full ${!showBefore ? 'bg-white text-zinc-950' : 'text-zinc-400'}`}
                >
                  AFTER LOOK
                </button>
                <button
                  onClick={() => setShowBefore(true)}
                  className={`px-3 py-1 rounded-full ${showBefore ? 'bg-white text-zinc-950' : 'text-zinc-400'}`}
                >
                  BEFORE
                </button>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                DETALLES DE TRANSFORMACIÓN
              </span>

              <h3 className="font-display text-3xl font-bold uppercase tracking-tight leading-none text-white">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-zinc-400 border-y border-zinc-800 py-3">
                <Scissors className="w-4 h-4 text-amber-400" />
                <span>ESTUDIO: <strong className="text-white">{item.stylist}</strong></span>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans-body">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold uppercase tracking-widest text-xs py-4 rounded-full transition-all cursor-pointer shadow-lg"
              >
                RESERVAR ESTE LOOK
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
