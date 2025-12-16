import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, Heart, Leaf, Award } from "lucide-react";

const milestones = [
  { year: "2018", title: "The Beginning", description: "Started crafting candles in a small home studio with a passion for natural fragrances." },
  { year: "2019", title: "First Collection", description: "Launched our signature collection with 12 unique scents inspired by nature." },
  { year: "2021", title: "Community Growth", description: "Reached over 10,000 happy customers and expanded to local boutiques." },
  { year: "2023", title: "Artisan Studio", description: "Opened our dedicated studio space, hosting workshops and creating custom orders." },
];

const values = [
  { icon: Flame, title: "Passion", description: "Every candle is created with dedication and love for the craft." },
  { icon: Heart, title: "Quality", description: "We use only premium, sustainable materials for the finest burn." },
  { icon: Leaf, title: "Natural", description: "100% natural soy wax and essential oil blends, no synthetic additives." },
  { icon: Award, title: "Artistry", description: "Hand-poured perfection in every single candle we create." },
];

export default function Journey() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            A Journey of Light
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            What started as a simple love for therapy has blossomed into a mission to bring 
            warmth and tranquility into every home. Discover the passion behind Mystic Aura.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYPXPo0j6Rm5BoNbniKMEyhWlIhAnsFqbBg&s"
                alt="Candle making process"
                className="rounded-2xl shadow-warm w-full"
              />
            </div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Where It All Began
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mystic Aura is a creative wax candle brand specializing in realistic food-inspired candles and a wide variety of uniquely crafted designs. Each candle is thoughtfully handmade to capture the beauty, detail, and charm of everyday favorites, blending artistry with soothing fragrances.
                </p>
                <p>
                  At Mystic Aura, we believe candles are more than just décor—they are an experience. Our collections are designed to create a warm, calming atmosphere, making every space feel cozy, aesthetic, and full of character. Whether for gifting, home décor, or self-indulgence, Mystic Aura candles add a touch of magic and elegance to every moment.
                </p>
                <p>
                  Today, every Mystic Aura candle carries that same intention: to create moments 
                  of peace and beauty in your everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-background shadow-warm opacity-0 animate-fade-in hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-16">
            Our Milestones
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 opacity-0 animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className="text-primary font-serif text-2xl font-semibold">{milestone.year}</span>
                  <h3 className="font-serif text-xl font-medium text-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 -translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
