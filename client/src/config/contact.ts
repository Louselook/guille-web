export const CONTACTS = [
  {
    name: "Guillermo David Cantillo",
    role: "Ingeniero Acústico",
    email: "bitcow@gmail.com",
    emailSubject: "Cotización RoomIQ - Gd Cantillo",
    whatsappNumber: "573024165377",
    businessHours: "Lunes a Viernes, 8:00 - 18:00",
    location: "Cartagena & Medellín, Colombia"
  },
  {
    name: "Juan David Mena",
    role: "Ingeniero Acústico",
    email: "Djkoalander07@gmail.com",
    emailSubject: "Cotización RoomIQ - Jd Mena",
    whatsappNumber: "573106166435",
    businessHours: "Lunes a Viernes, 9:00 - 17:00",
    location: "Cali & Medellín, Colombia"
  }
] as const;

// Funciones auxiliares
export const getWhatsAppLink = (number: string) => `https://wa.me/${number}`;
export const getMailtoLink = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
