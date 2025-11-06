import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { CONTACTS, getMailtoLink, getWhatsAppLink } from "@/config/contact";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
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
          <div className="space-y-8">
            {CONTACTS.map((person) => (
              <div
                key={person.email}
                className="bg-card border border-card-border rounded-xl p-8 space-y-6"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{person.role}</p>

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
                      href={getMailtoLink(person.email, person.emailSubject)}
                      className="text-base font-mono text-foreground hover:text-primary transition-colors"
                    >
                      {person.email}
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
                    <a
                      href={getWhatsAppLink(person.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono text-foreground hover:text-emerald-600 transition-colors"
                    >
                      +{person.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                  <p><strong>Horario:</strong> {person.businessHours}</p>
                  <p><strong>Ubicación:</strong> {person.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side (acciones y badges) */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-display font-bold">Inicia tu proyecto</h3>
              <p className="text-slate-300 leading-relaxed">
                Selecciona tu medio de contacto preferido y cuéntanos sobre tu espacio. 
                Responderemos en menos de 24 horas.
              </p>

              {CONTACTS.map((person) => (
                <div key={person.email} className="space-y-3">
                  <p className="font-semibold">{person.name}</p>

                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-lg bg-white text-slate-900 hover:bg-slate-100 shadow-lg"
                  >
                    <a href={getMailtoLink(person.email, person.emailSubject)}>
                      <Mail className="mr-2" size={20} />
                      Enviar correo a {person.name.split(" ")[0]}
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg border-0"
                  >
                    <a
                      href={getWhatsAppLink(person.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      WhatsApp {person.name.split(" ")[0]}
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Trust badges iguales */}
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
