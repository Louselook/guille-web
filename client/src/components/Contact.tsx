import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT_CONFIG, getWhatsAppLink, getMailtoLink } from "@/config/contact";

export default function Contact() {
  const mailtoLink = getMailtoLink();
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Incluye diagnóstico, comparador antes/después y opciones de inversión
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Información de contacto
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Correo electrónico
                  </p>
                  <a
                    href={mailtoLink}
                    className="text-base font-mono text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    data-testid="link-email"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="text-sm text-foreground/80">
                    Respuesta rápida y directa
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div className="pt-6 border-t border-border">
                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Configuración:</strong> Para cambiar el número de WhatsApp, edita el archivo <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">client/src/config/contact.ts</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">
                Qué incluye tu cotización
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Diagnóstico acústico inicial
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Comparador antes/después (simulación)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Opciones de inversión ajustadas a tu presupuesto
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Asesoría técnica personalizada
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-display font-bold">
                Inicia tu proyecto
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Selecciona tu medio de contacto preferido y cuéntanos sobre tu espacio. Responderemos en menos de 24 horas.
              </p>

              {/* Email Button */}
              <Button
                onClick={() => window.location.href = mailtoLink}
                size="lg"
                className="w-full rounded-lg bg-white text-slate-900 hover:bg-slate-100 shadow-lg"
                data-testid="button-enviar-correo"
              >
                <Mail className="mr-2" size={20} />
                Enviar correo
              </Button>

              {/* WhatsApp Button */}
              <Button
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg border-0"
                data-testid="button-whatsapp-contact"
              >
                <MessageCircle className="mr-2" size={20} />
                Escríbenos por WhatsApp
              </Button>

              {/* Divider */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-slate-400 text-center">
                  Horario de atención: {CONTACT_CONFIG.businessHours}
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">ISO</div>
                <div className="text-xs text-muted-foreground">3382/60268</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">CATT</div>
                <div className="text-xs text-muted-foreground">Modelación</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-xs text-muted-foreground">Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
