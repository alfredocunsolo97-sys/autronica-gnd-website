/* Design Philosophy: Cyber-Tuning Dinamico - CTA fluttuanti con animazioni */
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra i pulsanti dopo aver scrollato 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Pulsante principale - sempre visibile */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 animate-glow group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <Phone className="h-6 w-6 group-hover:animate-pulse" />
        )}
      </Button>

      {/* Pulsanti espansi */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom duration-300">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a
              href="https://wa.me/390802146765"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </Button>
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="tel:+390802146765" aria-label="Chiama">
              <Phone className="h-6 w-6" />
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
