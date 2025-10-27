# RoomIQ Acoustics Landing Page

## Descripción del Proyecto
Landing page estática (SPA) en React para RoomIQ Acoustics, empresa de ingeniería acústica profesional en Medellín, Colombia. El sitio presenta servicios de tratamiento acústico, modelación predictiva CATT-Acoustic y mediciones ISO 3382.

## Objetivo
Generar leads cualificados mostrando credibilidad técnica a través de:
- Comparador interactivo antes/después (slider arrastrable)
- Especificaciones técnicas (RT60, C50/C80, STI)
- Proceso de trabajo profesional
- Conversión a través de mailto y WhatsApp

## Stack Técnico
- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Estilos**: Tailwind CSS + shadcn/ui
- **Routing**: Wouter (SPA routing)
- **Deployment**: Sitio estático (sin backend)

## Estructura del Sitio

### Secciones (orden de aparición)
1. **Header** - Sticky con navegación a secciones
2. **Hero** - Claim principal + 2 CTAs
3. **Servicios** - 5 especialidades técnicas
4. **Comparador** - Antes/Después interactivo + glosario RT/C50/STI
5. **Soluciones** - 3 productos (paneles, bass traps, difusores)
6. **Proceso** - 4 pasos: Diagnóstico → Modelación → Implementación → Verificación
7. **CTA Oscuro** - Segunda oportunidad de conversión
8. **Contacto** - mailto + WhatsApp
9. **Footer** - Navegación + copyright

## Archivos Principales

### Frontend
- `client/src/pages/Home.tsx` - Página principal que orquesta todos los componentes
- `client/src/components/Header.tsx` - Navegación sticky
- `client/src/components/Hero.tsx` - Sección hero con CTAs
- `client/src/components/Services.tsx` - Grid de 5 servicios
- `client/src/components/Comparator.tsx` - Comparador interactivo con slider
- `client/src/components/Solutions.tsx` - 3 productos acústicos
- `client/src/components/Process.tsx` - Timeline de 4 pasos
- `client/src/components/CTASection.tsx` - CTA oscuro intermedio
- `client/src/components/Contact.tsx` - Formulario de contacto
- `client/src/components/Footer.tsx` - Footer con navegación

### Configuración
- `client/index.html` - SEO meta-tags (español, Open Graph)
- `client/src/index.css` - Variables de diseño y tema
- `tailwind.config.ts` - Configuración de Tailwind
- `design_guidelines.md` - Guía de diseño profesional

## Configuración Requerida

### Imágenes
Colocar en `/client/public/images/`:
- Logo: `logo-roomiq.png`
- Hero: `hero-room.jpg`
- Comparador: `antes-1.jpg`, `despues-1.jpg`, `antes-2.jpg`, `despues-2.jpg`
- Productos: `panel-absorbente.jpg`, `bass-trap.jpg`, `difusor.jpg`

### Contacto
Toda la configuración está en: `client/src/config/contact.ts`

```typescript
export const CONTACT_CONFIG = {
  email: "bitcow@gmail.com",
  whatsappNumber: "573001234567", // 👈 Cambiar aquí
  businessHours: "Lunes a Viernes, 8:00 - 18:00",
  location: "Medellín, Colombia"
};
```

Formato WhatsApp: código país + número (sin +, sin espacios)
Ejemplo: 573001234567

## Funcionalidades Especiales

### Comparador Interactivo
- Slider arrastrable con mouse y touch
- Clip-path dinámico para revelar antes/después
- Handle circular con efecto grab
- Mejoras mostradas: RT60↓, C50/C80↑, STI↑
- Mini glosario expandible (Accordion)

### Navegación Suave
- Scroll suave a secciones con offset para header sticky
- Funciona en todos los CTAs y enlaces del menú
- Compatible mobile y desktop

### SEO
- Lang="es" en HTML
- Meta description optimizada con keywords: "tratamiento acústico", "modelación CATT", "mediciones ISO 3382", "Medellín Colombia"
- Open Graph tags para compartir en redes

### Accesibilidad
- data-testid en todos los elementos interactivos
- Alt-text descriptivo en imágenes
- Navegación por teclado (focus visible)
- Contraste WCAG AA

## Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build producción
npm run build
```

## Notas de Implementación
- Sin backend: Todo estático
- Contacto solo via mailto y WhatsApp
- Comparador usa state local (useState)
- Imágenes usan placeholders hasta que el usuario las suba
- Responsive: mobile-first approach

## Estado Actual
✅ Frontend completo con todos los componentes
✅ Navegación suave y sticky header
✅ Comparador interactivo funcional
✅ SEO y meta-tags optimizados
✅ Diseño responsive
✅ Configuración de contacto centralizada
✅ WhatsApp configurado con número de ejemplo (Colombia: 573001234567)
⏳ Pendiente: Usuario debe agregar imágenes reales
⏳ Pendiente: Usuario debe actualizar número de WhatsApp en `config/contact.ts`

## Próximos Pasos (Usuario)
1. **Configurar contacto**: Editar `client/src/config/contact.ts` con tu número real de WhatsApp
2. **Subir imágenes**: Colocar imágenes en `/client/public/images/` según README
3. (Opcional) Ajustar colores en `index.css` si es necesario
4. Probar en distintos dispositivos
5. Publicar sitio estático
