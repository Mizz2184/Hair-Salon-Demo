import { ServiceItem, PortfolioItem, ProductItem, Stylist, Review } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'maquillaje-glam',
    name: 'MAQUILLAJE GLAM HD',
    category: 'glam',
    price: 0,
    priceFormat: 'Consulta',
    durationMinutes: 90,
    description: 'Maquillaje profesional de alta definición con Kryolan, para eventos, novias y sesiones.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'cortes',
    name: 'CORTES',
    category: 'cut',
    price: 0,
    priceFormat: 'Consulta',
    durationMinutes: 60,
    description: 'Para caballeros y damas, con técnica y precisión.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'keratinas',
    name: 'KERATINAS',
    category: 'treatment',
    price: 0,
    priceFormat: 'Consulta',
    durationMinutes: 120,
    description: 'Tratamientos que suavizan y devuelven brillo.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'alisado',
    name: 'ALISADO PERMANENTE',
    category: 'treatment',
    price: 0,
    priceFormat: 'Consulta',
    durationMinutes: 150,
    description: 'Cabello manejable y liso por más tiempo.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'color',
    name: 'COLOR Y TRATAMIENTOS',
    category: 'color',
    price: 0,
    priceFormat: 'Consulta',
    durationMinutes: 120,
    description: 'Con líneas Wella y Schwarzkopf.',
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Glam Perfecto para una Noche Inolvidable',
    category: 'glam',
    stylist: 'Jk Studio',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000',
    description: 'Rostro y brillo cuidados al detalle para un maquillaje de alta definición, listo para cualquier evento.',
    rating: 5.0,
    reviewCount: 94,
    tags: ['Maquillaje Glam', 'Kryolan', 'Alta Definición']
  },
  {
    id: 'port-2',
    title: 'Transformando Belleza en Alta Definición',
    category: 'peluqueria',
    stylist: 'Jk Studio',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    description: 'Técnica profesional y producto Kryolan para un acabado impecable que dura toda la noche.',
    rating: 5.0,
    reviewCount: 88,
    tags: ['Alta Definición', 'Peluquería', 'Acabado Impecable']
  },
  {
    id: 'port-3',
    title: 'Maquillaje y Peinado para Novias',
    category: 'novias',
    stylist: 'Jk Studio',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    description: 'El día más importante merece un look pensado en cada detalle, de la piel al peinado.',
    rating: 5.0,
    reviewCount: 65,
    tags: ['Novias', 'Eventos', 'Peinado & Maquillaje']
  },
  {
    id: 'port-4',
    title: 'Keratina y Alisamiento Permanente',
    category: 'tratamientos',
    stylist: 'Jk Studio',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    description: 'Tratamientos que devuelven brillo, suavidad y manejo a tu cabello.',
    rating: 5.0,
    reviewCount: 72,
    tags: ['Keratina', 'Alisamiento', 'Brillo & Suavidad']
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Kryolan — Maquillaje Profesional',
    brand: 'KRYOLAN COSTA RICA',
    category: 'Maquillaje Glam HD',
    price: 0,
    rating: 5.0,
    reviewsCount: 150,
    description: 'Producto de alta definición para un acabado impecable en cualquier ocasión.',
    size: 'Línea Oficial Kryolan',
    benefits: ['Alta Definición HD', 'Larga Duración', 'Acabado Impecable'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Wella Professional',
    brand: 'WELLA PROFESSIONAL',
    category: 'Coloración & Tratamientos',
    price: 0,
    rating: 5.0,
    reviewsCount: 120,
    description: 'Color, tratamientos y alisado de alta calidad.',
    size: 'Línea Profesional Wella',
    benefits: ['Coloración Premium', 'Brillo Intenso', 'Protección de la Hebra'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Schwarzkopf Professional',
    brand: 'SCHWARZKOPF PROFESSIONAL',
    category: 'Cuidado Capilar',
    price: 0,
    rating: 5.0,
    reviewsCount: 98,
    description: 'Cuidado y color profesional para tu cabello.',
    size: 'Línea Profesional Schwarzkopf',
    benefits: ['Cuidado Avanzado', 'Fórmula de Alta Calidad', 'Nutrición Capilar'],
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'Cursos y Capacitaciones',
    brand: 'JK STUDIO ACADEMY',
    category: 'Formación Profesional',
    price: 0,
    rating: 5.0,
    reviewsCount: 45,
    description: 'Formación continua en las últimas técnicas del sector.',
    size: 'Certificación Profesional',
    benefits: ['Últimas Tendencias', 'Técnicas Avanzadas', 'Capacitación Personalizada'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    inStock: true
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'stylist-1',
    name: 'Jk Studio Team',
    role: 'Estudio de Alta Peluquería y Maquillaje Profesional',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    specialties: ['Alta Peluquería', 'Maquillaje Glam HD', 'Keratinas & Alisado'],
    bio: 'Estudio especializado en alta peluquería y maquillaje profesional de alta definición en alianza con Kryolan Costa Rica.',
    rating: 5.0
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Clienta, Maquillaje Glam',
    rating: 5,
    date: 'Maquillaje Glam HD',
    serviceName: 'MAQUILLAJE GLAM HD',
    comment: 'El maquillaje me duró toda la fiesta y se veía impecable en cada foto.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Clienta, Keratina',
    rating: 5,
    date: 'Tratamiento Keratina',
    serviceName: 'KERATINA',
    comment: 'Mi cabello nunca se había visto tan sano después de la keratina. Súper recomendados.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Clienta, Corte y Color',
    rating: 5,
    date: 'Corte y Coloración',
    serviceName: 'CORTE Y COLOR',
    comment: 'Profesionales de verdad. Se nota la técnica y el cuidado en cada detalle.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];
