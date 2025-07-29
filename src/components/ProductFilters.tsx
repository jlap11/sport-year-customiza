import React from 'react';
import { Filter as FilterIcon, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PRODUCT_CATEGORIES, type Filter, type ProductCategory } from '@/lib/types';
import { formatPrice } from '@/lib/data';

interface ProductFiltersProps {
  filters: Filter;
  onFiltersChange: (filters: Filter) => void;
  activeFiltersCount: number;
}

export function ProductFilters({ filters, onFiltersChange, activeFiltersCount }: ProductFiltersProps) {
  const handleCategoryToggle = (category: ProductCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({
      ...filters,
      categories: newCategories
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      priceRange: [value[0], value[1]]
    });
  };

  const handleStockToggle = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      inStockOnly: checked
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 500000],
      inStockOnly: false
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} activo{activeFiltersCount > 1 ? 's' : ''}
          </span>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="w-4 h-4 mr-1" />
            Limpiar
          </Button>
        </div>
      )}

      {/* Categories */}
      <div>
        <h3 className="font-medium mb-3">Categorías</h3>
        <div className="space-y-3">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.value} className="flex items-center space-x-2">
              <Checkbox
                id={category.value}
                checked={filters.categories.includes(category.value)}
                onCheckedChange={() => handleCategoryToggle(category.value)}
              />
              <label
                htmlFor={category.value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Rango de Precio</h3>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={500000}
            min={0}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="flex items-center justify-between">
        <label htmlFor="in-stock" className="text-sm font-medium">
          Solo productos en stock
        </label>
        <Switch
          id="in-stock"
          checked={filters.inStockOnly}
          onCheckedChange={handleStockToggle}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 p-6 border-r bg-card">
        <div className="flex items-center mb-6">
          <FilterIcon className="w-5 h-5 mr-2" />
          <h2 className="font-semibold">Filtros</h2>
        </div>
        <FilterContent />
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="relative">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filtros
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <FilterIcon className="w-5 h-5 mr-2" />
                Filtros
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}