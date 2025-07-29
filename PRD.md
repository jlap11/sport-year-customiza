# Sport Year - Sportswear E-commerce Landing Page

Una tienda en línea elegante y moderna de ropa deportiva con personalización completa de productos y integración directa con WhatsApp para pedidos automatizados.

**Experience Qualities**:
1. **Deportivo pero Elegante** - Combina la energía del deporte con sofisticación visual y navegación fluida
2. **Intuitivo** - Filtros claros, personalización visual en tiempo real, y proceso de compra simplificado
3. **Personalizable** - Control total sobre colores, tallas y tema visual de la tienda

**Complexity Level**: Light Application (multiple features with basic state)
- Manejo de catálogo de productos, carrito de compras, filtros, personalización, y integración con WhatsApp

## Essential Features

**Catálogo de Productos**
- Functionality: Mostrar ropa deportiva organizada por categorías con imágenes, precios y opciones
- Purpose: Permitir exploración fácil del inventario completo
- Trigger: Al cargar la página principal
- Progression: Landing → Explorar categorías → Ver producto → Personalizar → Agregar al carrito
- Success criteria: Productos se muestran correctamente con todas las opciones de personalización

**Sistema de Filtros**
- Functionality: Filtrar por tipo de prenda, precio, y disponibilidad
- Purpose: Ayudar a encontrar productos específicos rápidamente
- Trigger: Seleccionar filtros en la barra lateral
- Progression: Seleccionar filtro → Aplicar → Ver resultados filtrados → Refinar búsqueda
- Success criteria: Filtros funcionan en tiempo real y muestran conteo de productos

**Personalización de Productos**
- Functionality: Seleccionar color, talla colombiana, y cantidad para cada producto
- Purpose: Adaptar productos a preferencias específicas del cliente
- Trigger: Hacer clic en un producto
- Progression: Seleccionar producto → Elegir color → Seleccionar talla → Ajustar cantidad → Confirmar
- Success criteria: Cambios se reflejan visualmente y afectan precio total

**Carrito de Compras**
- Functionality: Agregar, modificar y remover productos con persistencia
- Purpose: Gestionar pedido antes de finalizar compra
- Trigger: Agregar producto al carrito
- Progression: Agregar producto → Ver carrito → Modificar cantidades → Proceder a compra
- Success criteria: Carrito persiste entre sesiones y calcula totales correctamente

**Integración WhatsApp**
- Functionality: Generar mensaje automático con detalles del pedido y link del producto
- Purpose: Facilitar comunicación directa con bot de IA para procesar pedidos
- Trigger: Hacer clic en "Comprar" en el carrito
- Progression: Revisar carrito → Clic en comprar → Abrir WhatsApp → Enviar mensaje pre-formateado
- Success criteria: Mensaje incluye todos los detalles necesarios para el bot de IA

**Selector de Tema**
- Functionality: Cambiar entre diferentes esquemas de colores para la tienda
- Purpose: Personalizar experiencia visual según preferencias del usuario
- Trigger: Usar selector de tema en header
- Progression: Abrir selector → Elegir tema → Aplicar cambios → Guardar preferencia
- Success criteria: Tema se aplica inmediatamente y persiste entre visitas

## Edge Case Handling

- **Producto sin stock**: Mostrar badge "Agotado" y deshabilitar personalización
- **Carrito vacío**: Mostrar mensaje motivacional con productos sugeridos
- **Error de WhatsApp**: Mostrar mensaje alternativo con número de contacto
- **Filtros sin resultados**: Mostrar mensaje "Sin productos" con botón para limpiar filtros
- **Carga lenta de imágenes**: Mostrar skeleton loaders elegantes

## Design Direction

El diseño debe evocar energía deportiva profesional con toques de lujo deportivo - piensa en Nike premium o Adidas Originals. Interfaz rica con gradientes sutiles, sombras suaves, y animaciones fluidas que transmitan movimiento y dinamismo sin sacrificar elegancia.

## Color Selection

Triadic (tres colores igualmente espaciados) - Usando azul deportivo, naranja energético, y verde balance para crear vibrancia deportiva con sofisticación.

- **Primary Color**: Azul Deportivo (oklch(0.55 0.15 240)) - Confianza, profesionalismo deportivo
- **Secondary Colors**: Naranja Energético (oklch(0.7 0.2 50)) para CTAs y acentos dinámicos, Verde Balance (oklch(0.6 0.12 140)) para confirmaciones y estados positivos
- **Accent Color**: Naranja Vibrante (oklch(0.75 0.25 45)) para botones de acción y elementos importantes
- **Foreground/Background Pairings**: 
  - Background (Blanco Deportivo oklch(0.98 0.02 240)): Texto Principal (oklch(0.15 0.05 240)) - Ratio 16.8:1 ✓
  - Primary (Azul Deportivo oklch(0.55 0.15 240)): Texto Blanco (oklch(0.98 0.02 240)) - Ratio 7.2:1 ✓
  - Accent (Naranja Vibrante oklch(0.75 0.25 45)): Texto Blanco (oklch(0.98 0.02 240)) - Ratio 4.9:1 ✓
  - Card (Gris Claro oklch(0.96 0.01 240)): Texto Principal (oklch(0.15 0.05 240)) - Ratio 14.2:1 ✓

## Font Selection

Tipografías que transmitan modernidad deportiva y legibilidad profesional, combinando sans-serif geométricas para headlines con humanistas para cuerpo de texto.

- **Typographic Hierarchy**: 
  - H1 (Sport Year Logo): Inter Bold/32px/tight letter spacing
  - H2 (Títulos de Sección): Inter SemiBold/24px/normal spacing  
  - H3 (Nombres de Producto): Inter Medium/18px/normal spacing
  - Body (Descripciones): Inter Regular/16px/relaxed line height
  - Small (Precios/Códigos): Inter Medium/14px/tight spacing

## Animations

Animaciones que reflejen movimiento deportivo - transiciones rápidas y fluidas con micro-interacciones que simulen elasticidad y energía, creando momentos de deleite sin ralentizar la experiencia.

- **Purposeful Meaning**: Hover effects que simulen "activación" deportiva, transiciones de filtros que fluyan como movimento atlético
- **Hierarchy of Movement**: Productos principales con animaciones más prominentes, filtros con feedback inmediato, carrito con animaciones de confirmación satisfactorias

## Component Selection

- **Components**: Card para productos con hover states dinámicos, Dialog para vista detallada de productos, Badge para tallas/estados, Button con variantes para diferentes acciones, Select para filtros y opciones, Tabs para categorías, Sheet para carrito lateral
- **Customizations**: ProductCard con imagen hover zoom, ColorPicker personalizado, SizeSelector con tallas colombianas, ThemeSelector con preview visual, WhatsAppButton con icono personalizado
- **States**: Productos con states para disponible/agotado/seleccionado, botones con loading states, inputs con validation feedback, carrito con estados vacío/lleno/procesando
- **Icon Selection**: ShoppingCart, Heart para favoritos, Filter, ChevronDown para selects, WhatsApp logo, Palette para selector de tema, Plus/Minus para cantidades
- **Spacing**: Sistema base de 4px, padding consistente de 16px en cards, 24px en secciones principales, 8px en elementos pequeños
- **Mobile**: Layout en columna única, filtros en bottom sheet, carrito como overlay completo, navegación por categorías en horizontal scroll, imágenes de productos optimizadas para touch