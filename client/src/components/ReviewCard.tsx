/* Design Philosophy: Cyber-Tuning Dinamico - Card recensioni con effetti neon */
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
  delay?: number;
}

export default function ReviewCard({ name, text, rating, delay = 0 }: ReviewCardProps) {
  return (
    <Card 
      className="group bg-card/70 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 space-y-4 flex flex-col h-full">
        {/* Rating stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              } transition-all duration-300 group-hover:scale-110`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-sm text-foreground leading-relaxed flex-grow italic">
          "{text}"
        </p>

        {/* Reviewer name */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-primary">
            {name}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
