export enum SectionId {
  HERO = 'home',
  TRUST = 'trust',
  CATALOG = 'products',
  CONSULTANT = 'consultant',
  CONTACT = 'contact',
}

export interface CoffeeProduct {
  id: string;
  name: string;
  origin: string;
  roastLevel: string;
  notes: string[];
  pricePerKg: string;
  image: string;
}

export interface ProductItem {
  name: string;
  description?: string;
  specs?: string; // e.g., "70% PLAAA / 30% Chicory"
  tags?: string[];
}

export interface ProductCategory {
  title: string;
  subtitle: string;
  items: ProductItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}