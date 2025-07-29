export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  colors: string[];
  sizes: ColombianSize[];
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export type ProductCategory = 
  | 'camisetas'
  | 'pantalones'
  | 'shorts'
  | 'sudaderas'
  | 'chaquetas'
  | 'zapatillas'
  | 'accesorios';

export type ColombianSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

export interface CartItem {
  product: Product;
  color: string;
  size: ColombianSize;
  quantity: number;
}

export interface Filter {
  categories: ProductCategory[];
  priceRange: [number, number];
  inStockOnly: boolean;
}

export type Theme = 'default' | 'dark' | 'energy' | 'nature';

export const PRODUCT_CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: 'camisetas', label: 'Camisetas' },
  { value: 'pantalones', label: 'Pantalones' },
  { value: 'shorts', label: 'Shorts' },
  { value: 'sudaderas', label: 'Sudaderas' },
  { value: 'chaquetas', label: 'Chaquetas' },
  { value: 'zapatillas', label: 'Zapatillas' },
  { value: 'accesorios', label: 'Accesorios' },
];

export const COLOMBIAN_SIZES: ColombianSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

export const AVAILABLE_COLORS = [
  '#000000', // Negro
  '#FFFFFF', // Blanco
  '#FF0000', // Rojo
  '#0000FF', // Azul
  '#008000', // Verde
  '#FFA500', // Naranja
  '#800080', // Morado
  '#FFFF00', // Amarillo
  '#FFC0CB', // Rosa
  '#808080', // Gris
  '#000080', // Azul Marino
  '#800000', // Vinotinto
];

export const THEMES: { value: Theme; label: string; description: string }[] = [
  { value: 'default', label: 'Clásico', description: 'Azul deportivo profesional' },
  { value: 'dark', label: 'Oscuro', description: 'Elegante y moderno' },
  { value: 'energy', label: 'Energía', description: 'Naranja vibrante' },
  { value: 'nature', label: 'Natural', description: 'Verde equilibrado' },
];