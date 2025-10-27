# RoomIQ Acoustics - Landing Page

Landing page profesional para RoomIQ Acoustics, empresa de ingeniería acústica en Medellín, Colombia.

## 🎯 Características

- **SPA estática** construida con React + Vite
- **Diseño responsive** optimizado para todos los dispositivos
- **Comparador interactivo** antes/después con slider arrastrable
- **Navegación suave** entre secciones
- **SEO optimizado** para búsquedas de tratamiento acústico
- **Accesibilidad completa** con navegación por teclado

## 📋 Secciones

1. **Header sticky** - Navegación persistente con logo y menú
2. **Hero** - Título principal con CTAs estratégicos
3. **Servicios** - 5 áreas de especialización
4. **Comparador Antes/Después** - Slider interactivo + glosario técnico
5. **Soluciones** - 3 productos acústicos
6. **Proceso** - 4 pasos de trabajo
7. **CTA oscuro** - Llamada a la acción intermedia
8. **Contacto** - Formulario con mailto y WhatsApp
9. **Footer** - Navegación y copyright

## 🖼️ Imágenes Requeridas

Coloca las siguientes imágenes en `/client/public/images/`:

### Logo y Hero
- `logo-roomiq.png` - Logo de RoomIQ Acoustics
- `hero-room.jpg` - Imagen de fondo del hero

### Comparador Antes/Después
- `antes-1.jpg` - Primera imagen "antes"
- `despues-1.jpg` - Primera imagen "después"
- `antes-2.jpg` - Segunda imagen "antes" (opcional)
- `despues-2.jpg` - Segunda imagen "después" (opcional)

### Productos
- `panel-absorbente.jpg` - Panel absorbente broadband
- `bass-trap.jpg` - Bass trap de esquina
- `difusor.jpg` - Difusor QRD/PRD

## ⚙️ Configuración

### WhatsApp
Reemplaza `WA_NUMBER` en los siguientes archivos con tu número de WhatsApp en formato internacional (ej: 573001234567):

- `client/src/components/CTASection.tsx` (línea 12)
- `client/src/components/Contact.tsx` (línea 9)

```typescript
// Antes:
const whatsappLink = "https://wa.me/WA_NUMBER";

// Después:
const whatsappLink = "https://wa.me/573001234567";
```

### Correo Electrónico
El correo `bitcow@gmail.com` ya está configurado con el asunto "Cotización RoomIQ". Si deseas cambiarlo, edita:

- `client/src/components/Contact.tsx` (líneas 6-7)

## 🚀 Desarrollo

```bash
# Instalar dependencias (si no se ha hecho)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5000`

## 📦 Build para Producción

```bash
# Generar build estático
npm run build

# Los archivos estáticos estarán en /dist
```

## 🎨 Personalización

### Colores
Los colores están definidos en `client/src/index.css` usando variables CSS:
- `--primary`: Color principal (azul)
- `--foreground`: Color de texto
- `--background`: Color de fondo

### Tipografía
Usa las fuentes configuradas:
- `font-sans`: Inter, IBM Plex Sans (cuerpo de texto)
- `font-display`: Space Grotesk (títulos)
- `font-mono`: Monospace (código técnico)

## 📱 Contacto

- **Email**: bitcow@gmail.com
- **WhatsApp**: [Configura tu número]
- **Ubicación**: Medellín, Colombia

## 📄 Licencia

© 2025 RoomIQ Acoustics. Ingeniería acústica para espacios reales.
