import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-candles.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Handcrafted artisan candles with warm golden glow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest/70 to-forest/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p
            className="text-primary text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Handcrafted with Love
          </p>

          {/* Main Headline */}
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Illuminate Your 
            <span className="block text-gradient">Moments</span>
          </h1>

          {/* Description */}
          <p
            className="text-cream-muted text-lg md:text-xl leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Discover our collection of artisan candles, each one carefully crafted to bring 
            warmth and elegance to your space.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/gallery">Explore Collection</Link>
            </Button>
            <Button asChild variant="elegant" size="xl">
              <Link to="/journey">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
