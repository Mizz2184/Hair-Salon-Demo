import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink, Compass } from 'lucide-react';

export const MapSection: React.FC = () => {
  const santaAnaLoc = {
    name: 'True Salon Curls',
    address: 'Santa Ana, San José, Costa Rica',
    phone: 'Contacto directo vía WhatsApp & Facebook',
    hours: 'Próximamente (Opening Soon)',
  };

  return (
    <section className="py-16 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">UBICACIÓN ÚNICA</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-zinc-900 dark:text-white">
              VISÍTANOS EN SANTA ANA
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase text-zinc-800 dark:text-zinc-200">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>SANTA ANA, COSTA RICA</span>
          </div>
        </div>

        {/* Map Container matching screenshot styling */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl min-h-[420px] bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-between">
          
          {/* Stylized Map Canvas */}
          <div className="absolute inset-0 opacity-80 dark:opacity-60 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          {/* SVG Map Mockup with interactive location marker */}
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <svg className="w-full h-full text-zinc-300 dark:text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 0 350 Q 300 320 600 380 T 1200 420" stroke="#10b981" strokeWidth="18" fill="none" opacity="0.3" />
              <line x1="100" y1="0" x2="100" y2="600" />
              <line x1="300" y1="0" x2="300" y2="600" />
              <line x1="500" y1="0" x2="500" y2="600" />
              <line x1="700" y1="0" x2="700" y2="600" />
              <line x1="900" y1="0" x2="900" y2="600" />
              <line x1="0" y1="150" x2="1200" y2="150" />
              <line x1="0" y1="280" x2="1200" y2="280" />
              <line x1="0" y1="450" x2="1200" y2="450" />
            </svg>

            {/* Interactive Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 border border-amber-400">
                <MapPin className="w-4 h-4 text-amber-400 dark:text-amber-500 fill-current" />
                <span>{santaAnaLoc.name}</span>
              </div>
              <div className="w-3 h-3 bg-amber-400 rotate-45 -mt-1.5"></div>
            </div>
          </div>

          {/* Floating Location Info Box */}
          <div className="relative z-20 p-6 max-w-md m-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl space-y-3">
            <h3 className="font-display text-2xl font-bold uppercase text-zinc-900 dark:text-white">
              {santaAnaLoc.name}
            </h3>

            <div className="space-y-2 text-xs font-sans-body text-zinc-600 dark:text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{santaAnaLoc.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{santaAnaLoc.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{santaAnaLoc.hours}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(santaAnaLoc.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>CÓMO LLEGAR (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Controls top right */}
          <div className="relative z-20 self-end m-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 flex flex-col gap-1 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded cursor-pointer">+</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded cursor-pointer">-</button>
          </div>

        </div>

      </div>
    </section>
  );
};
