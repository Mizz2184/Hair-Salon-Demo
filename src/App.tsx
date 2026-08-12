import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkingHoursSection } from './components/WorkingHoursSection';
import { VideoTourSection } from './components/VideoTourSection';
import { MapSection } from './components/MapSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ProductDrawer } from './components/ProductDrawer';
import { PortfolioLightbox } from './components/PortfolioLightbox';
import { ProductItem, PortfolioItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Booking Modal state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingDate, setBookingDate] = useState<string | undefined>(undefined);

  // Product & Portfolio modal state
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  // Dark mode class handler
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectDateToBook = (dateStr: string) => {
    setBookingDate(dateStr);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans-body transition-colors duration-300 antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      
      {/* Sticky Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section matching reference image top */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Philosophy & About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Portfolio & Lookbook Section */}
        <PortfolioSection onSelectPortfolioItem={(item) => setSelectedPortfolioItem(item)} />

        {/* 4. Products Showcase & Apothecary */}
        <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 5. Services Bento Grid matching reference image */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 6. Working Hours & Interactive Calendar */}
        <WorkingHoursSection onSelectDateToBook={handleSelectDateToBook} />

        {/* 7. Virtual Salon Video Tour */}
        <VideoTourSection />

        {/* 8. London Map & Locations */}
        <MapSection />

        {/* 9. Client Reviews & Reception Feedback */}
        <ReviewsSection />
      </main>

      {/* 10. Footer & Booking Call to Action */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
        initialDate={bookingDate}
      />

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <PortfolioLightbox
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
