import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Have a question or want to place a custom order? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {/* <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                Send us a Message
              </h2> */}
              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form> */}
            </div>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-in flex flex-col items-center md:items-start text-center md:text-left" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-8 w-full max-w-md mx-auto md:mx-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@mysticaura.com" className="text-muted-foreground hover:text-primary transition-colors">
                      mysticauradecor@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8329686504
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Studio</h3>
                    <p className="text-muted-foreground">
                      Nagpur<br />
                      Visakhapatnam
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
