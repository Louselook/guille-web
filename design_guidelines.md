# RoomIQ Acoustics Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Professional Services Focus

Drawing inspiration from Linear's clean professionalism, Stripe's technical clarity, and modern architecture portfolio sites. The design must balance technical credibility with approachability, making acoustic engineering accessible while maintaining expertise authority.

**Core Principles:**
- Technical precision meets visual clarity
- Interactive demonstrations over explanations
- Trust-building through professional polish
- Accessibility for non-technical decision-makers

---

## Typography System

**Font Families:**
- Primary: Inter or IBM Plex Sans (Google Fonts) - clean, technical, excellent readability
- Accent: Space Grotesk (for hero headlines) - modern, geometric, impactful

**Hierarchy:**
- Hero Headline: 3.5rem (desktop) / 2.5rem (mobile), font-weight 700, tracking tight
- Section Headlines: 2.5rem (desktop) / 2rem (mobile), font-weight 600
- Subheadings: 1.25rem, font-weight 500
- Body: 1rem, font-weight 400, line-height 1.6
- Technical Badges: 0.875rem, font-weight 500, uppercase, tracking wide
- Microcopy/CTAs: 0.875rem - 1rem, font-weight 500

---

## Layout & Spacing System

**Tailwind Spacing Primitives:** 4, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Max-width: `max-w-7xl` for main content sections
- Hero: Full-width with inner `max-w-6xl`
- Text-heavy sections: `max-w-4xl` for optimal readability
- Technical content: `max-w-5xl`

**Section Padding:**
- Desktop: `py-24` to `py-32` for major sections
- Mobile: `py-12` to `py-16`
- Consistent horizontal padding: `px-4` (mobile), `px-8` (tablet), `px-12` (desktop)

**Grid Systems:**
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, base:grid-cols-1)
- Products/Solutions: 3-column grid with consistent spacing
- Process steps: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)

---

## Component Library

### Header (Sticky)
- Height: 80px desktop, 64px mobile
- Logo: 48px height, positioned left
- Navigation: Horizontal menu, gap-8 between items
- Background: Semi-transparent with backdrop blur on scroll
- Z-index: 50

### Hero Section
- Height: 85vh minimum
- Two-column layout (desktop): 60/40 split text/image
- Image: High-quality room/studio photograph with subtle overlay
- CTA buttons: Primary + Secondary side-by-side, gap-4
- Technical badges row: Horizontal flex layout, gap-3, positioned below hero text

### Service Cards
- Padding: p-8
- Border-radius: rounded-xl
- Border: 1px solid with subtle shadow
- Icon/Number: 48px circle at top
- Title: 1.25rem, font-weight 600, mb-3
- Description: 0.875rem, line-height 1.6
- Hover: Transform scale(1.02) with shadow increase

### Interactive Comparator (Antes/Después)
- Full-width container with max-w-6xl
- Image height: 500px desktop, 350px mobile
- Draggable slider: Vertical divider, 4px wide with circular handle (48px diameter)
- Handle: Center-positioned, visible grab cursor, smooth drag interaction
- Labels: "ANTES" / "DESPUÉS" positioned in top corners, uppercase, font-weight 600
- Technical improvements bar: Below images, 3-column grid showing RT60↓, C50/C80↑, STI↑
- Mini glossary: Accordion or expandable cards below comparator

### Product/Solution Cards
- Aspect ratio: 4:3 for product images
- Card structure: Image top, content padding p-6
- Title: 1.5rem, font-weight 600, mb-2
- Description: 2-3 lines, mb-4
- CTA button: Full-width within card
- Grid gap: gap-8 between cards

### Process Timeline
- Horizontal timeline connector on desktop (vertical on mobile)
- Step cards: Equal width, numbered circles (64px) at top
- Step number: 2rem inside circle
- Step title: 1.25rem, font-weight 600, mt-4
- Description: 0.875rem, mt-2

### CTA Section (Dark)
- Full-width section with padding py-20
- Centered content, max-w-3xl
- Headline: 2.5rem, centered, mb-6
- Buttons: Large format (px-8 py-4), side-by-side with gap-4

### Contact Section
- Two-column layout: Contact info (left) + CTA buttons (right)
- Information box: Bordered container with p-8
- Email display: Monospace font, clickable
- Button stack: Vertical arrangement with gap-4
- WhatsApp button: Icon + text, distinctive styling

### Footer
- Three-column layout: Brand/claim, Navigation links, Legal/Copyright
- Padding: py-12
- Max-width: max-w-7xl
- Links: gap-6, hover underline effect

---

## Interactive Elements

**Buttons:**
- Primary: px-8 py-3, rounded-full, font-weight 500
- Secondary: px-8 py-3, rounded-full, border-2, font-weight 500
- Glass/Blur effect for buttons over hero images: backdrop-blur-md with semi-transparent background
- Icon + text buttons: gap-2, icon 20px

**Smooth Scroll Navigation:**
- Offset for sticky header height
- Easing: ease-in-out, duration 800ms

**Hover States:**
- Cards: Lift effect (translateY -4px) + shadow increase
- Buttons: Slight scale (1.02) or brightness shift
- Links: Underline slide-in effect

---

## Images

**Required Image Placements:**

1. **Hero Background** (hero-room.jpg): 
   - Full-width, high-quality studio/acoustic room
   - Subtle gradient overlay for text readability
   - Aspect ratio: 16:9, position: center

2. **Logo** (logo-roomiq.png):
   - Header: 48px height
   - Footer: 40px height

3. **Comparator Images** (antes-1.jpg, despues-1.jpg, antes-2.jpg, despues-2.jpg):
   - Exact same dimensions and framing for before/after pairs
   - Minimum 1200px width for quality
   - Position: object-fit cover

4. **Product Images** (panel-absorbente.jpg, bass-trap.jpg, difusor.jpg):
   - Consistent 4:3 aspect ratio
   - Professional product photography on neutral background
   - Minimum 800px width

---

## Accessibility & Performance

- All images: Descriptive alt-text in Spanish
- Keyboard navigation: Tab order follows visual hierarchy
- Focus states: Visible 2px outline with offset
- Contrast ratios: Minimum 4.5:1 for text
- Lazy loading: All images below fold
- Responsive images: Use srcset for different viewport sizes

---

## Spanish Language Considerations

- Longer words: Increase letter-spacing slightly (0.01em) for readability
- Accent marks: Ensure font supports complete Spanish character set
- Text expansion: Allow 30% more horizontal space vs English
- Buttons: Slightly wider padding to accommodate longer text

---

## Unique Differentiators

- **Technical Credibility Display:** Subtle badge ribbons showing ISO certifications and technical parameters
- **Interactive Science:** Comparator as centerpiece demonstrates value visually
- **Professional Polish:** Clean geometry, consistent spacing, refined typography creates engineering precision feel
- **Conversion-Optimized Flow:** Multiple strategic CTAs guide users from awareness → interest → action