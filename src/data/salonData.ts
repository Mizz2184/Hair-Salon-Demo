import { ServiceItem, PortfolioItem, ProductItem, Stylist, Review } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'transiciones',
    name: 'TRANSICIONES',
    category: 'cut',
    price: 0, // Price depending on consultation
    durationMinutes: 120,
    description: 'De liso a rizo en 6 meses. Proceso completo con acompañamiento personalizado, corte estructurado según patrón de rizo y guía de cuidado en casa.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'coloracion',
    name: 'COLORACIÓN',
    category: 'color',
    price: 0,
    durationMinutes: 150,
    description: 'Técnicas de coloración diseñadas exclusivamente para realzar el patrón natural de cada rizo, sin comprometer la elasticidad ni la salud capilar.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'diagnostico',
    name: 'DIAGNÓSTICO CAPILAR',
    category: 'care',
    price: 0,
    durationMinutes: 45,
    description: 'Evaluación personalizada 100% enfocada en conocer la porosidad, densidad y estado de la hebra antes de iniciar cualquier tratamiento o transición.',
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'detox',
    name: 'DETOX CAPILAR',
    category: 'care',
    price: 0,
    durationMinutes: 60,
    description: 'Limpieza e hidratación profunda para remover acumulación de productos, toxinas y sulfatos, devolviéndole la vitalidad y soltura a tus rizos.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'talleres',
    name: 'TALLERES',
    category: 'education',
    price: 0,
    durationMinutes: 240,
    description: 'Formación profesional y certificación para estilistas en textura, curvatura y el arte de trabajar el cabello rizado.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'De Liso a Rizo: Transición de Más de 1 Año',
    category: 'transiciones',
    stylist: 'Especialista True Salon',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    beforeImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000',
    description: 'Fin de una transición donde nuestra clienta empezó hace más de un año — hoy vemos los frutos de su compromiso y la salud de su cabello.',
    rating: 5.0,
    reviewCount: 42,
    tags: ['Transición', 'Rizos Naturales', 'Salud Capilar']
  },
  {
    id: 'port-2',
    title: 'Detox Capilar y Diagnóstico Completo',
    category: 'diagnostico',
    stylist: 'Especialista True Salon',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    description: 'Servicio de detox capilar acompañado de un diagnóstico personalizado para devolverle vida y soltura a cada rizo.',
    rating: 5.0,
    reviewCount: 38,
    tags: ['Detox', 'Diagnóstico Capilar', 'Definición']
  },
  {
    id: 'port-3',
    title: 'Color y Textura',
    category: 'color',
    stylist: 'Especialista True Salon',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    description: 'Coloración diseñada para realzar el patrón natural de cada rizo, sin sacrificar su salud ni la elasticidad de la hebra.',
    rating: 5.0,
    reviewCount: 29,
    tags: ['Coloración Rizos', 'Brillo Natural', 'Luminosidad']
  },
  {
    id: 'port-4',
    title: 'El Autoestima en Cada Rizo',
    category: 'talleres',
    stylist: 'Especialista True Salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    description: 'Porque tu identidad rizada también se refleja en cómo te sientes al mirarte al espejo. Acompañamiento integral de autoestima.',
    rating: 5.0,
    reviewCount: 56,
    tags: ['Identidad Rizada', 'Acompañamiento', 'Autoestima']
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Talleres de Textura y Curvatura',
    brand: 'TRUE SALON CERTIFIED',
    category: 'Formación y Cursos',
    price: 0,
    rating: 5.0,
    reviewsCount: 35,
    description: 'Formación especializada para estilistas que quieren entender a fondo el cabello rizado, diagnóstico y técnicas de corte según curvatura.',
    size: 'Certificación Profesional (3er año consecutivo)',
    benefits: ['Diagnóstico de Porosidad', 'Técnicas de Corte en Seco', 'Especialización en Textura'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Diagnóstico Capilar Completo',
    brand: 'TRUE SALON CURLS',
    category: 'Evaluación Personalizada',
    price: 0,
    rating: 5.0,
    reviewsCount: 120,
    description: 'Evaluación personalizada antes de iniciar cualquier proceso. Analizamos textura, densidad, porosidad y salud de la hebra.',
    size: 'Sesión Presencial de Diagnóstico',
    benefits: ['Evaluación Porosidad/Densidad', 'Plan de Cuidado Personalizado', 'Acompañamiento Directo'],
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Asesoría de Transición (Liso a Rizo)',
    brand: 'TRUE SALON CURLS',
    category: 'Acompañamiento Continuo',
    price: 0,
    rating: 5.0,
    reviewsCount: 88,
    description: 'Acompañamiento paso a paso de liso a rizo durante 6 meses con rutina personalizada y revisiones de progreso.',
    size: 'Programa de 6 Meses',
    benefits: ['Plan de Transición', 'Seguimiento Mensual', 'Definición Natural'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    inStock: true
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'stylist-1',
    name: 'Maestras Especialistas en Rizos',
    role: 'Especialistas en Rizos, Color & Transiciones',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    specialties: ['Transiciones Capilares', 'Coloración en Rizos', 'Diagnóstico Capilar'],
    bio: 'Pioneras en Santa Ana en diagnóstico capilar y educación sobre la aceptación y cuidado del cabello rizado.',
    rating: 5.0
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Clienta True Salon',
    rating: 5,
    date: 'Servicio de Transición',
    serviceName: 'TRANSICIÓN LISO A RIZO',
    comment: 'Después de años luchando con mi cabello, por fin entendí cómo cuidarlo. El proceso de transición valió cada paso.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Clienta True Salon',
    rating: 5,
    date: 'Diagnóstico Capilar',
    serviceName: 'DIAGNÓSTICO CAPILAR COMPLETO',
    comment: 'El diagnóstico capilar me abrió los ojos. Ahora mi cabello se ve y se siente completamente distinto.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Clienta True Salon',
    rating: 5,
    date: 'Servicio de Color',
    serviceName: 'COLORACIÓN RIZOS',
    comment: 'Un espacio donde de verdad te escuchan y entienden tu tipo de rizo.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];

