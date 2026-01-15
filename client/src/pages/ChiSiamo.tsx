/* Design Philosophy: Cyber-Tuning Dinamico - Pagina Chi Siamo con storytelling e valori */
import { Button } from "@/components/ui/button";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Award, Clock, Heart, Phone, Shield, Target } from "lucide-react";

export default function ChiSiamo() {
  const values = [
    {
      icon: Target,
      title: "Precisione",
      description: "Ogni intervento è eseguito con la massima attenzione ai dettagli e standard qualitativi elevati.",
    },
    {
      icon: Shield,
      title: "Affidabilità",
      description: "Partner ufficiale Bosch Car Service, garanzia di professionalità e competenza certificata.",
    },
    {
      icon: Heart,
      title: "Passione",
      description: "L'amore per le auto e la tecnologia guida ogni nostro progetto e intervento.",
    },
    {
      icon: Clock,
      title: "Puntualità",
      description: "Rispettiamo i tempi concordati e manteniamo sempre le promesse fatte ai clienti.",
    },
  ];

  const stats = [
    { value: "5.0", label: "Rating Google", suffix: "/5" },
    { value: "26", label: "Recensioni Positive", suffix: "+" },
    { value: "100", label: "Clienti Soddisfatti", suffix: "%" },
    { value: "10", label: "Anni di Esperienza", suffix: "+" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery-3.jpg" 
            alt="Autronica GND Esterno" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Chi Siamo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              La Nostra <span className="text-primary">Storia</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Autronica GND è un'officina meccatronica all'avanguardia, specializzata in tuning, 
              elettronica e meccanica avanzata. Situata ad Adelfia, in provincia di Bari, 
              rappresentiamo il punto di riferimento per chi cerca professionalità e innovazione.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  La Nostra Missione
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Innovazione e <span className="text-accent">Qualità</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La nostra missione è offrire servizi di meccatronica all'avanguardia, 
                  combinando tecnologia di ultima generazione con competenze tecniche certificate. 
                  Siamo specializzati in elaborazioni elettroniche, rimappature ECU, diagnosi avanzate 
                  e interventi meccanici su qualsiasi tipo di veicolo.
                </p>
                <p>
                  Come partner ufficiale <strong className="text-foreground">Bosch Car Service</strong>, 
                  garantiamo standard qualitativi elevati e utilizziamo esclusivamente strumentazione 
                  professionale per ogni intervento. La soddisfazione del cliente e la qualità del 
                  lavoro sono i nostri valori fondamentali.
                </p>
                <p>
                  Il nostro team di tecnici specializzati è costantemente aggiornato sulle ultime 
                  tecnologie automotive, garantendo interventi precisi, sicuri e all'avanguardia.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <img 
                src="/images/hero-workshop.jpg" 
                alt="Officina Autronica GND" 
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                I Nostri Valori
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Cosa Ci <span className="text-primary">Distingue</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <value.icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                <Award className="inline-block w-4 h-4 mr-2" />
                I Numeri
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Risultati che <span className="text-accent">Parlano</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-2 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-accent/50 transition-all duration-500 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              Entra a Far Parte della
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Famiglia Autronica
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri perché centinaia di clienti si affidano a noi per la cura e il potenziamento 
              dei loro veicoli. Contattaci oggi stesso!
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 group"
              asChild
            >
              <a href="tel:+390802146765">
                <Phone className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Chiamaci Ora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
