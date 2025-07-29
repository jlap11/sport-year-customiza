import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  // Camisetas
  {
    id: 'CAM001',
    name: 'Camiseta Running Pro',
    category: 'camisetas',
    price: 89900,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#FF0000', '#0000FF'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Camiseta técnica de alto rendimiento con tecnología Dri-FIT',
    inStock: true,
    featured: true
  },
  {
    id: 'CAM002',
    name: 'Camiseta CrossFit Elite',
    category: 'camisetas',
    price: 79900,
    image: 'https://images.unsplash.com/photo-1503341338985-95f658fcab60?w=400&h=400&fit=crop',
    colors: ['#000000', '#808080', '#008000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Diseñada para entrenamientos intensos con máxima transpirabilidad',
    inStock: true
  },
  {
    id: 'CAM003',
    name: 'Camiseta Yoga Flow',
    category: 'camisetas',
    price: 69900,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d7d?w=400&h=400&fit=crop',
    colors: ['#FFC0CB', '#800080', '#FFFFFF'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Suave y flexible para movimientos fluidos',
    inStock: true
  },
  
  // Pantalones
  {
    id: 'PAN001',
    name: 'Pantalón Training Flex',
    category: 'pantalones',
    price: 149900,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    colors: ['#000000', '#808080', '#000080'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Pantalón con tecnología de 4 vías para máxima movilidad',
    inStock: true,
    featured: true
  },
  {
    id: 'PAN002',
    name: 'Jogger Sport Comfort',
    category: 'pantalones',
    price: 119900,
    image: 'https://images.unsplash.com/photo-1552902019-ebda73d9279c?w=400&h=400&fit=crop',
    colors: ['#000000', '#808080', '#800000'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comodidad casual para el día a día activo',
    inStock: true
  },
  
  // Shorts
  {
    id: 'SHO001',
    name: 'Short Running Velocity',
    category: 'shorts',
    price: 69900,
    image: 'https://images.unsplash.com/photo-1616428075343-25066b07c6e4?w=400&h=400&fit=crop',
    colors: ['#000000', '#0000FF', '#FF0000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ligero y resistente al viento para corredores serios',
    inStock: true
  },
  {
    id: 'SHO002',
    name: 'Short Basketball Elite',
    category: 'shorts',
    price: 89900,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#FFA500'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Diseño holgado para máxima libertad de movimiento',
    inStock: false
  },
  
  // Sudaderas
  {
    id: 'SUD001',
    name: 'Sudadera Training Pro',
    category: 'sudaderas',
    price: 179900,
    image: 'https://images.unsplash.com/photo-1566479179817-2bf0eca7e89e?w=400&h=400&fit=crop',
    colors: ['#000000', '#808080', '#000080'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Calidez y estilo para entrenamientos en clima frío',
    inStock: true,
    featured: true
  },
  {
    id: 'SUD002',
    name: 'Hoodie Lifestyle',
    category: 'sudaderas',
    price: 159900,
    image: 'https://images.unsplash.com/photo-1542327897-d73f4005b533?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#008000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Comodidad urbana con toque deportivo',
    inStock: true
  },
  
  // Chaquetas
  {
    id: 'CHA001',
    name: 'Chaqueta Wind Runner',
    category: 'chaquetas',
    price: 249900,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    colors: ['#000000', '#0000FF', '#FF0000'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Protección contra viento y lluvia ligera',
    inStock: true
  },
  {
    id: 'CHA002',
    name: 'Bomber Retro Sport',
    category: 'chaquetas',
    price: 199900,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d7d?w=400&h=400&fit=crop',
    colors: ['#000000', '#800000', '#000080'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Estilo clásico con funcionalidad moderna',
    inStock: true
  },
  
  // Zapatillas
  {
    id: 'ZAP001',
    name: 'Zapatillas Running Max',
    category: 'zapatillas',
    price: 349900,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#FF0000'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Máxima amortiguación para largas distancias',
    inStock: true,
    featured: true
  },
  {
    id: 'ZAP002',
    name: 'Zapatillas Training Cross',
    category: 'zapatillas',
    price: 299900,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#FFA500'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Versatilidad para todo tipo de entrenamientos',
    inStock: true
  },
  
  // Accesorios
  {
    id: 'ACC001',
    name: 'Gorra Deportiva Pro',
    category: 'accesorios',
    price: 49900,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#0000FF'],
    sizes: ['S', 'M', 'L'],
    description: 'Protección solar con estilo deportivo',
    inStock: true
  },
  {
    id: 'ACC002',
    name: 'Mochila Training',
    category: 'accesorios',
    price: 129900,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    colors: ['#000000', '#808080'],
    sizes: ['M', 'L'],
    description: 'Organización perfecta para tu equipamiento deportivo',
    inStock: true
  },
  {
    id: 'ACC003',
    name: 'Calcetines Running Elite',
    category: 'accesorios',
    price: 29900,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop',
    colors: ['#000000', '#FFFFFF', '#0000FF'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Comodidad y transpirabilidad para corredores',
    inStock: false
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
};

export const getColorName = (hex: string): string => {
  const colorNames: Record<string, string> = {
    '#000000': 'Negro',
    '#FFFFFF': 'Blanco',
    '#FF0000': 'Rojo',
    '#0000FF': 'Azul',
    '#008000': 'Verde',
    '#FFA500': 'Naranja',
    '#800080': 'Morado',
    '#FFFF00': 'Amarillo',
    '#FFC0CB': 'Rosa',
    '#808080': 'Gris',
    '#000080': 'Azul Marino',
    '#800000': 'Vinotinto',
  };
  return colorNames[hex] || hex;
};