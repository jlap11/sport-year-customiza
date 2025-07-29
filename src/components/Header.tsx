import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } f
import { ShoppingCart, Palette } from '@phosphor-icons/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Palette } from '@phosphor-icons/react';
import { useKV } from '@github/spark/hooks';
import { THEMES, type Theme } from '@/lib/types';

interface HeaderProps {
export function Header({
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [currentTheme, setCurrentTheme] = useKV<Theme>('sport-year-theme', 'default');


    switch (theme) {
    
        return 'bg-orange-500';
        return 'bg-green-500';
    
  };
  return (
      <div className="container mx-auto px-4 py-4 fl
    }
  };

  const getThemeColorClass = (theme: Theme) => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800';
      case 'energy':
        return 'bg-orange-500';
      case 'nature':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">Sport Year</span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop Theme Selector */}
          <Sheet>
            <SheetTrigger asChild className="hidden sm:inline-flex">
              <Button variant="outline" size="icon">
                <Palette className="w-4 h-4" />
                  ))}
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
          <Button 
                    >
            onClick={onCartClick}
                        <div>
                          <h4 className="font-medium">{theme.label}</h4>
                          <p className="text-sm text-muted-foreground">{theme.description}</p>
                variant="destr
                        <div className={`w-6 h-6 rounded-full ${getThemeColorClass(theme.value)}`} />
                {cartItemCou
                    </div>
          </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>


          <Select value={currentTheme} onValueChange={handleThemeChange}>

              <Palette className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  {theme.name}
                </SelectItem>

            </SelectContent>



          <Button 
            variant="outline" 
            size="icon"
            onClick={onCartClick}


            <ShoppingCart className="w-4 h-4" />

              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"

                {cartItemCount}

            )}

        </div>
      </div>
    </header>

