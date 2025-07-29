import React from 'react';
import { ArrowRight, Lightning, Star } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  onExploreProducts: () => void;
}

export function HeroSection({ onExploreProducts }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI0MCIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground w-fit">
                <Lightning className="w-3 h-3 mr-1" />
                Ropa Deportiva Premium
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Potencia tu{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Rendimiento
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Descubre nuestra colección de ropa deportiva de alta calidad. 
                Diseñada para atletas que buscan excelencia en cada entrenamiento.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  4.9/5 • +1,000 clientes satisfechos
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onExploreProducts}
                className="group"
              >
                Explorar Productos
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg">
                Ver Ofertas Especiales
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Entrega rápida</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Personalizable</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                alt="Atleta corriendo"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-card border shadow-lg rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">En stock</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card border shadow-lg rounded-lg p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">30%</div>
                  <div className="text-xs text-muted-foreground">Descuento</div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl scale-110 -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-20" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}