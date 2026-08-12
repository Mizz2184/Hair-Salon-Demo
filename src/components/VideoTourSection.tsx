import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X, Volume2, Sparkles } from 'lucide-react';

export const VideoTourSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Card Container */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[16/7] shadow-2xl border border-zinc-800 group">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600"
            alt="Strand Haven Salon Video Tour"
            className="w-full h-full object-cover editorial-img brightness-75 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
            
            {/* Pulsing Play Button matching reference image */}
            <button
              onClick={() => setIsPlaying(true)}
              className="relative group/btn p-5 sm:p-6 bg-white/90 hover:bg-white text-zinc-950 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer mb-4"
              aria-label="Play Salon Tour Video"
            >
              <div className="absolute -inset-3 rounded-full bg-white/30 animate-ping pointer-events-none"></div>
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              VIRTUAL SALON WALKTHROUGH
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-1">
              INSIDE THE MARYLEBONE SANCTUARY
            </h3>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center text-white space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center font-bold text-2xl animate-pulse">
                ★
              </div>
              <h4 className="font-display text-3xl font-bold uppercase">STRAND HAVEN ARCHITECTURAL TOUR</h4>
              <p className="text-zinc-400 text-sm max-w-md">
                Experience our custom lighting, ergonomic wash lounges, and private styling suites designed for ultimate relaxation.
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="mt-4 bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-full hover:bg-zinc-200"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
