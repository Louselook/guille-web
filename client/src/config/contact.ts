/**
 * Configuración de contacto para RoomIQ Acoustics
 * 
 * IMPORTANTE: Reemplaza WHATSAPP_NUMBER con tu número real de WhatsApp
 * en formato internacional (sin espacios, sin signos + al inicio)
 * 
 * Ejemplo: "573001234567" para Colombia
 * - 57: Código de país (Colombia)
 * - 300: Código de operador
 * - 1234567: Número
 */

export const CONTACT_CONFIG = {
  // Email de contacto
  email: "bitcow@gmail.com",
  emailSubject: "Cotización RoomIQ",
  
  // WhatsApp - REEMPLAZA ESTO CON TU NÚMERO REAL
  // Formato: código de país + número (sin espacios, sin +)
  // Ejemplo para Colombia: "573001234567"
  whatsappNumber: "573001234567", // 👈 CAMBIAR ESTE NÚMERO
  
  // Horario de atención
  businessHours: "Lunes a Viernes, 8:00 - 18:00",
  
  // Ubicación
  location: "Medellín, Colombia"
} as const;

// Genera el enlace de WhatsApp
export const getWhatsAppLink = () => {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}`;
};

// Genera el enlace de mailto
export const getMailtoLink = () => {
  return `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(CONTACT_CONFIG.emailSubject)}`;
};
