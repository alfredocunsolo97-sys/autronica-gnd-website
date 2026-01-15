/* Design Philosophy: Cyber-Tuning Dinamico - Homepage con layout asimmetrico e animazioni fluide */
import { Button } from "@/components/ui/button";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { 
  Cpu, 
  Gauge, 
  MessageCircle, 
  Phone, 
  Settings, 
  Wrench, 
  Zap 
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Zap,
      title: "Tuning & Rimappature",
      description: "Rimappature ECU professionali per aumentare le prestazioni del tuo veicolo. Elaborazioni elettroniche certificate e reversibili.",
    },
    {
      icon: Cpu,
      title: "Elettronica Avanzata",
      description: "Diagnosi e riparazione centraline, sistemi elettronici e sensori. Tecnologia all'avanguardia per ogni problema elettronico.",
    },
    {
      icon: Settings,
      title: "Meccanica Generale",
      description: "Manutenzione ordinaria e straordinaria, tagliandi, revisioni. Interventi su freni, sospensioni, motore e trasmissione.",
    },
    {
      icon: Gauge,
      title: "Cambio Pneumatici",
      description: "Montaggio, equilibratura e convergenza. Ampia gamma di pneumatici per ogni esigenza e stagione.",
    },
    {
      icon: Wrench,
      title: "Riparazioni Specialistiche",
      description: "Interventi su qualsiasi tipo di vettura con attrezzature professionali. Officina autorizzata Bosch Car Service.",
    },
  ];

  const reviews = [
    {
      name: "Fabio Sterlacci",
      text: "Ho già portato tutte le auto di famiglia per tagliandi e per risolvere problemi alle centraline. Che dire: ragazzi in gamba, professionali, educati e molto, molto precisi.",
      rating: 5,
    },
    {
      name: "Michele Fasano",
      text: "Servizio al pari di una concessionaria! Autronica GND ad Adelfia si distingue per cortesia, professionalità e un livello di pulizia davvero raro in un'officina.",
      rating: 5,
    },
    {
      name: "Tommaso De Carlo",
      text: "Senza dubbio la migliore officina meccanica della provincia e oltre. Ho portato la mia BMW per sostituzione dischi e pastiglie. Lavoro eseguito con massima professionalità, precisione e prezzi ottimi.",
      rating: 5,
    },
    {
      name: "Giuseppe Cervellera",
      text: "Consegna veloce e puntuale, super professionali e onesti. Consigliatissimo!",
      rating: 5,
    },
    {
      name: "Francesco Mangione",
      text: "I migliori della provincia. Affidabilità e cortesia sono i nostri punti di forza.",
      rating: 5,
    },
    {
      name: "Paolo Maselli",
      text: "Professionalità e ottimo servizio, consiglio vivamente.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <FloatingCTA />

      {/* Hero Section - Asimmetrico con immagine di sfondo */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image con overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-workshop.jpg" 
            alt="Autronica GND Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-sm">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                ⚡ Garage Smart Tuning
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Il Futuro della
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                Meccatronica
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Specialisti in tuning, elettronica e meccanica avanzata. Tecnologia all'avanguardia 
              e professionalità al servizio delle tue performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="tel:+390802146765">
                  <Phone className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                  Chiama Ora
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://wa.me/390802146765" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Rating Google</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-accent">26+</div>
                <div className="text-sm text-muted-foreground">Recensioni</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Soddisfazione</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                I Nostri Servizi
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Competenza e <span className="text-primary">Tecnologia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dalla diagnosi elettronica al tuning avanzato, offriamo soluzioni complete per ogni esigenza automotive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                TESTIMONIANZE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Cosa Dicono i <span className="text-primary">Clienti</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore pubblicità. Leggi le loro esperienze.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.name}
                name={review.name}
                text={review.text}
                rating={review.rating}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                La Nostra Officina
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Tecnologia e <span className="text-primary">Precisione</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg">
              <img 
                src="/images/gallery-1.jpg" 
                alt="Diagnostica avanzata" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-foreground mb-2">Diagnostica Avanzata</h3>
                <p className="text-sm text-muted-foreground">Strumentazione professionale per diagnosi precise</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/images/gallery-2.jpg" 
                alt="Cambio pneumatici" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-foreground mb-2">Pneumatici</h3>
                <p className="text-sm text-muted-foreground">Montaggio e bilanciatura professionale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              Pronto a Potenziare
              <br />
              la Tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Auto</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contattaci oggi per una consulenza gratuita. Il nostro team è pronto a trasformare 
              le prestazioni del tuo veicolo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 group"
                asChild
              >
                <a href="tel:+390802146765">
                  <Phone className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                  +39 080 214 6765
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href="https://wa.me/390802146765" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Scrivici su WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
