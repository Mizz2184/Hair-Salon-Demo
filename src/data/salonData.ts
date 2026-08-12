import { ServiceItem, PortfolioItem, ProductItem, Stylist, Review } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'layers',
    name: 'LAYERS',
    category: 'cut',
    price: 110,
    durationMinutes: 75,
    description: 'Precision layered hair architecture customized to accentuate your face shape and natural hair movement. Includes custom wash, scalp massage, and signature blowout.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'volume',
    name: 'VOLUME',
    category: 'styling',
    price: 95,
    durationMinutes: 60,
    description: 'Ultra-body volumizing session utilizing lightweight texturizing serums, botanical root lifts, and custom round-brush styling for gravity-defying bounce.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'bangs',
    name: 'BANGS',
    category: 'cut',
    price: 45,
    durationMinutes: 30,
    description: 'Tailored fringe sculpting from classic curtain bangs to modern wispy cuts. Includes quick styling and maintenance advice for home upkeep.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'ombre',
    name: 'OMBRÉ',
    category: 'color',
    price: 240,
    durationMinutes: 180,
    description: 'Hand-painted seamless dark-to-light gradient transformation using bond-protecting olaplex treatments and customized tone glossing.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 row-span-1'
  },
  {
    id: 'hairdo',
    name: 'HAIRDO',
    category: 'styling',
    price: 130,
    durationMinutes: 90,
    description: 'Editorial updo, red-carpet glam waves, or intricate braided artistry designed for high-profile galas, weddings, and special occasions.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
    gridSpan: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Sunkissed Golden Balayage & Face-Framing Layers',
    category: 'balayage',
    stylist: 'Shai Greenberg',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    description: 'Hand-painted balayage with platinum blonde face-framing ribbons and soft, cascading layered texture. Completed with Strand Haven Silk Serum.',
    rating: 5.0,
    reviewCount: 42,
    tags: ['Balayage', 'Blonde', 'Signature Layering']
  },
  {
    id: 'port-2',
    title: 'Glossy Espresso Velvet Bob & Curtain Fringe',
    category: 'hairstyles',
    stylist: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000',
    description: 'Precision blunt perimeter with internal micro-weight removal and French curtain bangs. Rich espresso gloss treatment for liquid mirror shine.',
    rating: 4.9,
    reviewCount: 38,
    tags: ['Precision Cut', 'Brunette', 'Glass Hair']
  },
  {
    id: 'port-3',
    title: 'Dimensional Honey Copper Melt',
    category: 'color',
    stylist: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000',
    description: 'Warm auburn base transitioning into golden honey copper highlights. Double gloss glaze and deep conditioning mask.',
    rating: 5.0,
    reviewCount: 29,
    tags: ['Color Melt', 'Copper', 'Dimensional Tint']
  },
  {
    id: 'port-4',
    title: 'Vogue Editorial Glam Waves & Crown Polish',
    category: 'editorial',
    stylist: 'Shai Greenberg',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000',
    description: 'Created for London Fashion Week. Sculpted Hollywood red carpet waves with high-gloss thermal protection.',
    rating: 5.0,
    reviewCount: 56,
    tags: ['Editorial', 'Hollywood Waves', 'Red Carpet']
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'STRAND HAVEN Luxury Nectar Shampoo',
    brand: 'STRAND HAVEN',
    category: 'Shampoo & Cleansing',
    price: 48,
    rating: 4.9,
    reviewsCount: 128,
    description: 'Sulfate-free botanical cleanser infused with cold-pressed Moroccan Argan oil, French Cashmere Proteins, and Rosehip extract. Gently restores hair vitality while preserving color brilliance.',
    size: '250ml / 8.5 fl. oz.',
    benefits: ['Sulfate & Paraben Free', 'Color Protection', 'Deep Hydration', 'UV Shield'],
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'STRAND HAVEN Velour Repair Conditioner',
    brand: 'STRAND HAVEN',
    category: 'Conditioner',
    price: 52,
    rating: 4.8,
    reviewsCount: 94,
    description: 'Intense keratin-rebuilding conditioner designed for heat-styled and chemically treated strands. Seals the hair cuticle for immediate detangling and weightless silkiness.',
    size: '250ml / 8.5 fl. oz.',
    benefits: ['Cuticle Smoothing', 'Frizz Elimination', 'Instant Detangling'],
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'KÉRASTASE Elixir Ultime Hair Oil',
    brand: 'KÉRASTASE',
    category: 'Hair Oil & Treatment',
    price: 58,
    rating: 5.0,
    reviewsCount: 210,
    description: 'Iconic beautifying oil for all hair types. Infused with wild camellia and marula oil for unparalleled radiance, heat protection up to 230°C, and 96-hour frizz control.',
    size: '100ml / 3.4 fl. oz.',
    benefits: ['230°C Heat Protection', 'High-Gloss Finish', 'Anti-Humidity'],
    image: 'https://images.unsplash.com/photo-1608248597261-e4d0450cbf13?auto=format&fit=crop&q=80&w=800',
    secondaryImage: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
    inStock: true
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'stylist-1',
    name: 'Shai Greenberg',
    role: 'Founder & Master Creative Director',
    experienceYears: 18,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    specialties: ['Custom Precision Cuts', 'Vogue Editorial Styling', 'Transformative Balayage'],
    bio: 'Founder of Strand Haven. Renowned across London for effortlessly chic transformations and pioneering hair sculpting techniques.',
    rating: 5.0
  },
  {
    id: 'stylist-2',
    name: 'Elena Rostova',
    role: 'Senior Color Specialist',
    experienceYears: 12,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    specialties: ['French Balayage', 'Platinum Blonde Correction', 'Gloss Glazing'],
    bio: 'Specialized in Paris and London. Master of multi-dimensional color melting that preserves ultimate hair health.',
    rating: 4.9
  },
  {
    id: 'stylist-3',
    name: 'Marcus Vance',
    role: 'Master Stylist & Texture Expert',
    experienceYears: 10,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    specialties: ['Curtain Bangs', 'Volumizing Blowouts', 'Keratin Treatments'],
    bio: 'Passionate about structural cut architecture and creating low-maintenance, high-impact daily looks for modern clients.',
    rating: 4.9
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Victoria Sterling',
    rating: 5,
    date: '2 days ago',
    serviceName: 'LAYERS & BALAYAGE',
    comment: 'Strand Haven is the epitome of London luxury salons. Shai gave my hair movement and shine I didn’t know was possible. The attention to detail from the moment you step through the doors is world-class.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Charlotte Montgomery',
    rating: 5,
    date: '1 week ago',
    serviceName: 'OMBRÉ COLOR MELT',
    comment: 'Elena is an absolute genius with color correction. She spent nearly 3 hours customizing the gloss tones for my hair. Absolutely zero brassiness and unbelievable softness!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Gemma Holloway',
    rating: 5,
    date: '2 weeks ago',
    serviceName: 'BANGS & SIGNATURE BLOWOUT',
    comment: 'The atmosphere in Marylebone is so serene and serene. Marcus cut the most flattering curtain bangs for me. I get compliments every single day!',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];
