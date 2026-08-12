import React, { useState, useEffect } from 'react';
import { Sun, Moon, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Maquillaje', href: '#products' },
    { label: 'Reseñas', href: '#reviews' },
    { label: 'Contacto', href: '#hours' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-zinc-900 dark:text-white uppercase transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
            JK STUDIO
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wider uppercase font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-zinc-900 dark:after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            )}
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-xs tracking-widest font-bold uppercase py-2.5 px-6 rounded-full transition-all shadow-sm transform active:scale-95 cursor-pointer"
          >
            RESERVAR
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-900 dark:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-zinc-600 dark:text-zinc-400">
                Tema: {darkMode ? 'Modo Oscuro' : 'Modo Claro'}
              </span>
              <button
                onClick={() => setDarkMode(prev => !prev)}
                className="flex items-center gap-2 text-xs font-bold uppercase px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 cursor-pointer"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
                <span>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold uppercase tracking-widest text-sm py-3 rounded-full text-center cursor-pointer"
            >
              RESERVAR CITA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
