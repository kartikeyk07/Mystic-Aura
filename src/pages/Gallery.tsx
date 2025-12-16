import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1602607415263-dc9c2a46d8b8?w=600&h=600&fit=crop", alt: "Artisan candle collection", category: "Collection" },
  { id: 2, src: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=800&fit=crop", alt: "Candle making process", category: "Process" },
  { id: 3, src: "https://images.unsplash.com/photo-1608181831718-c9ffd8685c4b?w=600&h=600&fit=crop", alt: "Luxury candle display", category: "Collection" },
  { id: 4, src: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?w=600&h=800&fit=crop", alt: "Hand pouring wax", category: "Process" },
  { id: 5, src: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=600&h=600&fit=crop", alt: "Candle with dried flowers", category: "Collection" },
  { id: 6, src: "https://images.unsplash.com/photo-1599446220320-e5a1579a58bc?w=600&h=800&fit=crop", alt: "Scented candle", category: "Collection" },
  { id: 7, src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop", alt: "Studio setup", category: "Studio" },
  { id: 8, src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=800&fit=crop", alt: "Candle gift set", category: "Collection" },
];

const categories = ["All", "Collection", "Process", "Studio"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Our Work
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            A visual journey through our handcrafted creations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-warm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-cream text-sm font-medium">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}
