import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/salonData';
import { ProductItem } from '../types';
import { 
  ShoppingBag, Star, Sparkles, Tag, ArrowRight, ArrowLeft, 
  Pause, Play, FastForward, ExternalLink, MoveLeft, MoveRight
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  // Marquee controls
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  // Horizontal scroll container ref & progress
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Drag to scroll variables
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Handle scroll progress tracking
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Mouse Drag to Scroll event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Determine marquee animation class based on speed and play state
  const getMarqueeSpeedClass = () => {
    if (!isPlaying) return '';
    if (speed === 'slow') return 'animate-marquee-slow';
    if (speed === 'fast') return 'animate-marquee-fast';
    return 'animate-marquee';
  };

  return (
    <section id="products" className="py-20 bg-zinc-900 text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HORIZONTAL SCROLLING PROMO MARQUEE TICKER (Matching Image)  */}
      {/* ------------------------------------------------------------- */}
      <div className="relative group/ticker bg-amber-400 text-zinc-950 py-3.5 overflow-hidden font-mono text-xs sm:text-sm uppercase font-bold tracking-widest shadow-2xl border-y border-amber-300 select-none">
        
        {/* Speed & Pause Controls Bar on Hover */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-1.5 bg-zinc-950/90 text-white px-2.5 py-1 rounded-full text-[10px] shadow-lg border border-zinc-700">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
            title={isPlaying ? "Pause scroll" : "Resume scroll"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <span className="text-zinc-600">|</span>
          <button
            onClick={() => setSpeed('slow')}
            className={`px-1.5 py-0.5 rounded ${speed === 'slow' ? 'bg-amber-400 text-zinc-950 font-bold' : 'hover:text-amber-400'}`}
          >
            1x
          </button>
          <button
            onClick={() => setSpeed('normal')}
            className={`px-1.5 py-0.5 rounded ${speed === 'normal' ? 'bg-amber-400 text-zinc-950 font-bold' : 'hover:text-amber-400'}`}
          >
            1.5x
          </button>
          <button
            onClick={() => setSpeed('fast')}
            className={`px-1.5 py-0.5 rounded ${speed === 'fast' ? 'bg-amber-400 text-zinc-950 font-bold' : 'hover:text-amber-400'}`}
          >
            2x
          </button>
        </div>

        {/* Endless Seamless Marquee Strip */}
        <div className={`whitespace-nowrap flex items-center gap-8 ${getMarqueeSpeedClass()}`}>
          <div className="flex items-center gap-8 shrink-0">
            <span className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-current text-zinc-950" />
              ALTA PELUQUERÍA Y MAQUILLAJE PROFESIONAL
            </span>
            <span className="text-zinc-950">•</span>
            <span>ALIADOS DE KRYOLAN COSTA RICA</span>
            <span className="text-zinc-950">•</span>
            <span>100% RECOMENDADO</span>
            <span className="text-zinc-950">•</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-current text-zinc-950" />
              KERATINAS Y ALISADO PERMANENTE
            </span>
            <span className="text-zinc-950">•</span>
            <span>RESERVA TU CITA HOY</span>
            <span className="text-zinc-950">•</span>
          </div>

          {/* Duplicated strip for seamless looping */}
          <div className="flex items-center gap-8 shrink-0">
            <span className="flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-current text-zinc-950" />
              ALTA PELUQUERÍA Y MAQUILLAJE PROFESIONAL
            </span>
            <span className="text-zinc-950">•</span>
            <span>ALIADOS DE KRYOLAN COSTA RICA</span>
            <span className="text-zinc-950">•</span>
            <span>100% RECOMENDADO</span>
            <span className="text-zinc-950">•</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-current text-zinc-950" />
              KERATINAS Y ALISADO PERMANENTE
            </span>
            <span className="text-zinc-950">•</span>
            <span>RESERVA TU CITA HOY</span>
            <span className="text-zinc-950">•</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. SECTION HEADER & HORIZONTAL CAROUSEL CONTROLS               */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-800 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">CALIDAD PROFESIONAL</span>
              <span className="w-8 h-[1px] bg-zinc-800"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">NUESTRAS MARCAS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              TRABAJAMOS CON LAS MEJORES MARCAS
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm font-sans-body">
              Resultados que se notan empiezan con los productos correctos. En Jk Studio usamos únicamente líneas profesionales reconocidas mundialmente.
            </p>

            {/* Horizontal Scroll Navigation Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => scrollByAmount('left')}
                className="w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 hover:border-amber-400 hover:bg-zinc-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount('right')}
                className="w-11 h-11 rounded-full bg-zinc-800 border border-zinc-700 hover:border-amber-400 hover:bg-zinc-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="w-full bg-zinc-800 h-1 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-300 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. HORIZONTAL DRAGGABLE SCROLL CAROUSEL                       */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-2 cursor-grab active:cursor-grabbing select-none scroll-smooth"
        >
          {/* Feature Card 1: Kryolan Featured */}
          <div className="w-[300px] sm:w-[380px] shrink-0 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/80 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-amber-400/80 transition-all group">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
                  alt="Kryolan — Maquillaje Profesional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-amber-400 text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  MARCA DESTACADA
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">ALIADOS OFICIALES</span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">KRYOLAN — MAQUILLAJE PROFESIONAL</h3>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  Producto de alta definición para un acabado impecable en cualquier ocasión.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-amber-400">ALTA DEFINICIÓN</span>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-white hover:text-amber-300 transition-colors"
              >
                <span>Conocer más →</span>
              </a>
            </div>
          </div>

          {/* Product Items rendered horizontally */}
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="w-[280px] sm:w-[320px] shrink-0 bg-zinc-800/60 border border-zinc-700/60 hover:border-amber-400/80 rounded-2xl p-5 flex flex-col justify-between hover:bg-zinc-800/90 transition-all duration-300 cursor-pointer shadow-lg group"
            >
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-zinc-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{product.rating.toFixed(1)} ({product.reviewsCount})</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    {product.brand}
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase text-white group-hover:text-amber-300 transition-colors line-clamp-1 mt-0.5">
                    {product.name}
                  </h4>
                  <p className="text-zinc-400 text-xs line-clamp-2 mt-1 font-sans-body">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-700/50 flex items-center justify-between text-xs mt-4">
                <span className="text-zinc-400 font-mono text-[11px]">{product.size}</span>
                <span className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Conocer más →</span>
                </span>
              </div>
            </div>
          ))}

          {/* Feature Card 2: Jk Studio Facebook */}
          <div className="w-[300px] sm:w-[360px] shrink-0 bg-gradient-to-br from-amber-500/10 to-zinc-900 border border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-zinc-950 px-2.5 py-1 rounded-full">
                  PÁGINA VERIFICADA
                </span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white">
                JK STUDIO
              </h3>

              <p className="text-zinc-300 text-xs leading-relaxed font-sans-body">
                2.9K seguidores • 100% recomendado (277 reseñas). Visita nuestra página de Facebook o nuestro sitio web oficial.
              </p>

              <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-1 font-mono">
                <p>📍 Costa Rica</p>
                <p>📞 +506 8583 2424</p>
                <p>✉️ jkstudioatm@gmail.com</p>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
              <a
                href="https://jkstudiosalon.negocio.site"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold uppercase tracking-widest text-xs py-3 px-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>VER SITIO WEB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

