import React, { useState, useMemo, useRef } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { useKV } from '@github/spark/hooks';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductFilters } from './components/ProductFilters';
import { ProductCard } from './components/ProductCard';
import { ShoppingCartComponent } from './components/ShoppingCart';
import { MOCK_PRODUCTS } from './lib/data';
import { CartItem, Filter, Product } from './lib/types';

function App() {
  const [cartItems, setCartItems] = useKV<CartItem[]>('sport-year-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState<Filter>({
    categories: [],
    priceRange: [0, 500000],
    inStockOnly: false
  });

  const productsRef = useRef<HTMLDivElement>(null);

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product: Product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Stock filter
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length > 0) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 500000) count++;
    if (filters.inStockOnly) count++;
    return count;
  }, [filters]);

  // Cart item count
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((currentItems) => {
      const existingIndex = currentItems.findIndex(
        item => 
          item.product.id === newItem.product.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...currentItems];
        updatedItems[existingIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...currentItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCartItems((currentItems) => {
      const updatedItems = [...currentItems];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((currentItems) => currentItems.filter((_, i) => i !== index));
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onExploreProducts={scrollToProducts} />

        {/* Products Section */}
        <section ref={productsRef} className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Nuestros Productos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explora nuestra amplia colección de ropa deportiva premium. 
                Personaliza cada prenda según tus gustos y necesidades.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters */}
              <div className="lg:flex-shrink-0">
                <ProductFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-semibold">
                      {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
                    </h3>
                    <div className="lg:hidden">
                      <ProductFilters
                        filters={filters}
                        onFiltersChange={setFilters}
                        activeFiltersCount={activeFiltersCount}
                      />
                    </div>
                  </div>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                    <p className="text-muted-foreground mb-6">
                      Intenta ajustar tus filtros para ver más resultados
                    </p>
                    <button
                      onClick={() => setFilters({
                        categories: [],
                        priceRange: [0, 500000],
                        inStockOnly: false
                      })}
                      className="text-primary hover:underline"
                    >
                      Limpiar todos los filtros
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shopping Cart */}
      <ShoppingCartComponent
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">SY</span>
            </div>
            <span className="font-semibold">Sport Year</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Sport Year. Todos los derechos reservados. Ropa deportiva premium para atletas exigentes.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;