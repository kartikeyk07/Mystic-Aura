import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Mystic Aura
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted candles that illuminate your moments with warmth and elegance. 
              Each candle tells a story of artistry and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Journey", path: "/journey" },
                { label: "Gallery", path: "/gallery" },
                // { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-4">
              Connect
            </h4>
            <h5 className="font-serif text-lg font-medium text-foreground mb-4">
              Have a question or want to place a custom order? We'd love to hear from you.
            </h5>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@mysticaura.com"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <Mail size={16} />
                mysticauradecor@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
              >
                <Phone size={16} />
                +91 8329686504
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/mysticauradecor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/people/Mystic-Aura/61561925900843/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mystic Aura. Crafted with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
