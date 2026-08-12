import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Nav Links Row matching screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-white transition-colors">PRICING</a>
          <a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a>
          <a href="#portfolio" className="hover:text-white transition-colors">BLOG</a>
          <a href="#hours" className="hover:text-white transition-colors">BOOK</a>
        </div>

        {/* Main Footer Headline */}
        <div className="space-y-4">
          <h2 className="font-display text-5xl sm:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white leading-none">
            BOOK WITH US
          </h2>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold uppercase tracking-widest text-xs py-4 px-10 rounded-full transition-all transform active:scale-95 shadow-2xl cursor-pointer"
            >
              <span>BOOK NOW</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Stacked Photography Cards matching screenshot bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
              alt="Hair wash"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=600"
              alt="Haircare products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600"
              alt="Styling session"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Instagram handle */}
        <div className="pt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM @STRANDHAVEN</span>
          </a>
        </div>

        {/* Bottom Credits & Social */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 font-mono tracking-wider gap-4">
          <p>ALL RIGHTS RESERVED — STRAND HAVEN | SITE DESIGN BY RACCOON</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">MARYLEBONE & MAYFAIR</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
