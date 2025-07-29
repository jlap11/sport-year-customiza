import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { THEMES, type Theme } from '@/lib/types';
}


  cartItemCount: number;
    // Remove all theme cl
 

    }


  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    
    // Remove all theme classes
    document.body.classList.remove('theme-dark', 'theme-energy', 'theme-nature');
    
    // Add new theme class if not default
    if (theme !== 'default') {
      document.body.classList.add(`theme-${theme}`);
     
    

                <Palette
              </Button>
            <SheetContent side="right" className="w-8
                <h3 className="text-lg font-semibold mb-4">
     
         

          
                      onClick={() => handleThemeChange(theme.value)}
                      <div className="flex items-center justify-between">
                    
                        </div>
                      </div>
                  ))}
              </
          </She
          {/* Mobile Theme Selector */}
            <SelectTrigger className="w-16 sm:hidden">
            </Se
        </div>

              ))}
          </Select>
          {/* Cart Button */}
            varia
            className="relative"
          >
            {cartItemCount > 0 && (
                vari
              >
              </Badge>
          </Button>
              <div className="py-6">
  );
                <div className="space-y-4">
  switch (theme) {
      return 'bg-blue-50
      return 'bg-gray-800';
      return 'bg-orange-500';
      return 'bg-green-500';
      return 'bg-blue-500';
}


                    >

                        <div>





                    </div>

                </div>





          <Select value={currentTheme} onValueChange={handleThemeChange}>

              <Palette className="w-4 h-4" />











          <Button 



            onClick={onCartClick}

            <ShoppingCart className="w-4 h-4" />

              <Badge 

















    case 'dark':

    case 'energy':

    case 'nature':

    default:

  }
