/* Design Philosophy: Cyber-Tuning Dinamico - Footer con layout a griglia e accenti neon */
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna 1: Logo e descrizione */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo-autronica.png" 
                alt="Autronica GND Logo" 
                className="h-16 w-16"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  AUTRONICA <span className="text-primary">GND</span>
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  Garage Smart Tuning
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Autofficina meccatronica specializzata in tuning, meccanica, elettronica e cambio pneumatici. 
              Professionalità e tecnologia al servizio della tua auto.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/autronicagnd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/autronica_gnd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Colonna 2: Contatti */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Contatti</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Via+Pozzoloizzi+90+Adelfia+BA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <MapPin size={20} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                <span>Via Pozzoloizzi, 90<br />70010 Adelfia (BA), Italia</span>
              </a>
              <a 
                href="tel:+390802146765" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone size={20} className="flex-shrink-0 group-hover:text-primary" />
                <span>+39 080 214 6765</span>
              </a>
              <a 
                href="mailto:autronicagnd@gmail.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail size={20} className="flex-shrink-0 group-hover:text-primary" />
                <span>autronicagnd@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Colonna 3: Orari */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Orari di Apertura</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lun - Ven</span>
                <span className="text-foreground font-medium">08:15 - 13:00, 15:00 - 18:15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sabato</span>
                <span className="text-destructive font-medium">Chiuso</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Domenica</span>
                <span className="text-destructive font-medium">Chiuso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Autronica GND SRLS. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
