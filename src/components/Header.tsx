import React from 'react';
import { ShoppingCart, Palette } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { THEMES, type Theme } from '@/lib/types';
import { useKV } from '@github/spark/hooks';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [currentTheme, setCurrentTheme] = useKV<Theme>('sport-year-theme', 'default');

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    
    // Remove all theme classes
    document.body.classList.remove('theme-dark', 'theme-energy', 'theme-nature');
    
    // Add new theme class if not default
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
    }
  };

  // Apply theme on load
  React.useEffect(() => {
    if (currentTheme && currentTheme !== 'default') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Sport Year</h1>
            <p className="text-xs text-muted-foreground">Ropa Deportiva Premium</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Selector */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Palette className="w-4 h-4 mr-2" />
                Tema
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-4">Personalizar Tema</h3>
                <div className="space-y-4">
                  {THEMES.map((theme) => (
                    <div
                      key={theme.value}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        currentTheme === theme.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => handleThemeChange(theme.value)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{theme.label}</h4>
                          <p className="text-sm text-muted-foreground">{theme.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full ${getThemePreviewColor(theme.value)}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Theme Selector */}
          <Select value={currentTheme} onValueChange={handleThemeChange}>
            <SelectTrigger className="w-16 sm:hidden">
              <Palette className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  {theme.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Cart Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-4 h-4" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

function getThemePreviewColor(theme: Theme): string {
  switch (theme) {
    case 'default':
      return 'bg-blue-500';
    case 'dark':
      return 'bg-gray-800';
    case 'energy':
      return 'bg-orange-500';
    case 'nature':
      return 'bg-green-500';
    default:
      return 'bg-blue-500';
  }
}