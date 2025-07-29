import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useKV } from '@github/spark/hooks';
import { ShoppingCart, Palette } from '@phosphor-icons/react';
interface HeaderProps {
import { THEMES, type Theme } from '@/lib/types';

    setCurrentTheme(the
    document.body.classN
      document.body.classL
 

      case 'dark':
      case 'energy':

      default:
    setCurrentTheme(theme);
    // Apply theme to document
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
     
    

          {/* Desktop Theme Selector */}
            <SheetTr
                <P
            </SheetTrigger>
              <div c
                <div className=
                    
                      classNam
              
                      }`}
     
    

          
                    </div>
                </div>
            </SheetC

          <Select value={currentTheme} onValueChange={handleThemeChange}>
              <Palette className="w-4 h-4 mr-2" />
            </Se
              {THEMES.map((theme) => (
              

          </Select>
          {/* Cart Button */}
            variant="outline" 
            onCli
          >
            {cartItemCount > 0 && (
                variant="destructive" 
              >
              </Badge>
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



















































