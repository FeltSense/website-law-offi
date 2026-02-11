import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold mb-4">Law Office Of Justice B Adjei</h3>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              Experienced, dedicated legal representation serving Port Arthur with personalized attention to your unique legal needs.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+14099631955"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary-300" />
                </div>
                <span className="font-light">+1 409-963-1955</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-300" />
                </div>
                <span className="font-light leading-relaxed pt-2">
                  Medical Triangle Dr, Port Arthur, TX 77642, USA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="#services"
                className="block text-white/70 hover:text-white transition-colors font-light"
              >
                Services
              </Link>
              <Link 
                href="#about"
                className="block text-white/70 hover:text-white transition-colors font-light"
              >
                About
              </Link>
              <Link 
                href="#contact"
                className="block text-white/70 hover:text-white transition-colors font-light"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">Practice Areas</h4>
            <nav className="space-y-3">
              <div className="text-white/70 font-light">Family Law</div>
              <div className="text-white/70 font-light">Criminal Defense</div>
              <div className="text-white/70 font-light">Personal Injury</div>
              <div className="text-white/70 font-light">Estate Planning</div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-light">
              © {currentYear} Law Office Of Justice B Adjei. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/privacy"
                className="text-white/60 hover:text-white/90 text-sm font-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-white/60 hover:text-white/90 text-sm font-light transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}