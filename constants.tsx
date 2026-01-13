
import { Product } from './types';

export const COLORS = {
  primary: '#0A2622', // Forest Green
  secondary: '#D4AF37', // Gold
  accent: '#E6B38C', // Sand
  background: '#FDFBF7', // Cream
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vestido Midi Floral',
    size: 'G',
    condition: 'Impecável',
    fabric: 'Viscose',
    price: 45.00,
    imageUrl: 'https://picsum.photos/seed/dress1/600/800',
    category: 'vestido',
  },
  {
    id: '2',
    name: 'Blusa de Linho Off-White',
    size: 'M',
    condition: 'Como Nova',
    fabric: 'Linho',
    price: 35.00,
    imageUrl: 'https://picsum.photos/seed/shirt2/600/800',
    category: 'blusa',
  },
];