import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Product, ColombianSize, CartItem } from '@/lib/types';
import { formatPrice, getColorName } from '@/lib/data';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ColombianSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('Producto agotado');
      return;
    }

    const cartItem: CartItem = {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity
    };

    onAddToCart(cartItem);
    toast.success(`${product.name} agregado al carrito`);
    setIsDialogOpen(false);
  };

  const ColorSelector = ({ size = 'normal' }: { size?: 'small' | 'normal' }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium">Color: {getColorName(selectedColor)}</label>
      <div className={`flex flex-wrap gap-2 ${size === 'small' ? 'justify-center' : ''}`}>
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`${size === 'small' ? 'w-6 h-6' : 'w-8 h-8'} rounded-full border-2 transition-all ${
              selectedColor === color 
                ? 'border-primary scale-110' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color }}
            title={getColorName(color)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
              Destacado
            </Badge>
          )}
          
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Agotado
            </Badge>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
              <Badge variant="outline" className="text-xs">
                {product.id}
              </Badge>
            </div>

            <ColorSelector size="small" />

            <div className="flex gap-2">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="flex-1" 
                    disabled={!product.inStock}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Personalizar
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />

                    <div className="space-y-4">
                      <ColorSelector />

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Talla</label>
                        <Select value={selectedSize} onValueChange={(value: ColombianSize) => setSelectedSize(value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {product.sizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cantidad</label>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="w-12 text-center font-medium">{quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">{formatPrice(product.price * quantity)}</span>
                        </div>
                      </div>

                      <Button
                        onClick={handleAddToCart}
                        className="w-full"
                        size="lg"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Agregar al Carrito
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}