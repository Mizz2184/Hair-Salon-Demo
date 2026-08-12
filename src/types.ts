export interface ServiceItem {
  id: string;
  name: string;
  category: 'cut' | 'color' | 'styling' | 'treatment';
  price: number;
  durationMinutes: number;
  description: string;
  image: string;
  gridSpan?: string; // CSS grid class for bento layout
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'hairstyles' | 'color' | 'balayage' | 'editorial';
  stylist: string;
  image: string;
  beforeImage?: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  size: string;
  benefits: string[];
  image: string;
  secondaryImage: string;
  inStock: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  avatar: string;
  specialties: string[];
  bio: string;
  rating: number;
}

export interface BookingDetails {
  serviceId: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  depositPaid: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  serviceName: string;
  comment: string;
  avatar: string;
  verified: boolean;
}
