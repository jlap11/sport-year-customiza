import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useKV } from '@github/spark/hooks';
import { ShoppingCart, Palette, List } from '@phosphor-icons/react';
import { THEMES, type Theme } from '@/lib/types';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [currentTheme, setCurrentTheme] = useKV<Theme>('sport-year-theme', 'default');

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    // Apply theme to document
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          <span className="font-bold text-xl">Sport Year</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Desktop Theme Selector */}
          <Select value={currentTheme} onValueChange={handleThemeChange}>
            <SelectTrigger className="w-48">
              <Palette className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Seleccionar tema" />
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  <div className="flex flex-col">
                    <span className="font-medium">{theme.label}</span>
                    <span className="text-xs text-muted-foreground">{theme.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Cart Button */}
          <Button 
            variant="outline" 
            size="sm"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Carrito
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Cart Button */}
          <Button 
            variant="outline" 
            size="sm"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>

          {/* Theme Selector Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Palette className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-4">Temas</h3>
                <div className="space-y-4">
                  {THEMES.map((theme) => (
                    <div
                      key={theme.value}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        currentTheme === theme.value 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleThemeChange(theme.value)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{theme.label}</span>
                        <span className="text-sm text-muted-foreground">{theme.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};