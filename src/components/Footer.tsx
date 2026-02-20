import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo_transparent_fixed.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f3b63] text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src={logo}
                  alt="Sri Chaitanya logo"
                  className="w-25 h-25 object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold block">Sri Chaitanya</span>
                <span className="text-primary-foreground/70 text-sm">Madhapur, Hyderabad</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Shaping future leaders with world-class education for over 40 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#achievements" className="hover:text-accent transition-colors">Achievements</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Student Life</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Boards */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Boards Offered</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>CBSE</li>
              <li>ICSE</li>
              <li>IGCSE</li>
              <li>State Board</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Plot No: 80, Sri Sai Plaza, Ayyappa Society, Madhapur, Hyderabad, Telangana - 500081
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                1800-123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                info@srichaitanyaschool.net
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="font-serif font-bold text-lg mb-4">Find Us</h4>
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 bg-white/5">
            <iframe
              title="Sri Chaitanya Techno School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74941.26307236507!2d78.38932912343273!3d17.433833063097143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9169d65d473f%3A0x7eef9356821e063e!2sSri%20Chaitanya%20Techno%20School!5e1!3m2!1sen!2sin!4v1771563535342!5m2!1sen!2sin"
              className="w-full h-64 md:h-72"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          (c) 2026 Sri Chaitanya Schools. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
