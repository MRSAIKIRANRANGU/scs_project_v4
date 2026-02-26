import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_transparent_fixed.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

const Logo = ({
  compact = false,
  hideText = false,
  isScrolled = false,
}: {
  compact?: boolean;
  hideText?: boolean;
  isScrolled?: boolean;
}) => {
  const shouldHideText = hideText || compact;
  return (
  <a
    href="#"
    className={`group relative flex flex-col items-center justify-center transition-transform duration-300 ${
      compact ? "translate-y-0" : "translate-y-3"
    }`}
  >
    <div
      className={`relative z-10 rounded-full bg-white shadow-[0_18px_30px_rgba(13,59,102,0.2)] flex items-center justify-center transition-transform duration-300  ${
        compact ? "w-[58px] h-[58px]" : "w-14 h-14"
      } ${isScrolled ? (compact ? "scale-105" : "scale-[1.2]") : "scale-100"}`}
    >
      <img
        src={logo}
        alt="Sri Chaitanya logo"
        className={`${compact ? "w-[58px] h-[58px]" : "w-18 h-18"} object-contain`}
      />
    </div>
    <div
      className={`pointer-events-none absolute left-1/2 z-0 ${
        compact ? "top-[54px] h-24 w-36" : "top-[35px] h-24 w-[420px]"
      } -translate-x-1/2 rounded-b-[55%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.18)_45%,rgba(255,255,255,0)_75%)] blur-2xl mix-blend-screen transition-opacity duration-300 ${
        shouldHideText ? "opacity-0" : "opacity-90"
      }`}
    />
    <div
      className={`pointer-events-none absolute left-1/2 z-0 ${
        compact ? "top-[58px] h-10 w-10" : "top-[68px] h-12 w-12"
      } -translate-x-1/2 rounded-full bg-white/30 blur-lg transition-opacity duration-300 ${
        shouldHideText ? "opacity-0" : "opacity-80"
      }`}
    />
    <div
      className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
        shouldHideText
          ? "opacity-0 translate-y-2 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <span
        className={`mt-2 font-['Cinzel_Decorative'] font-bold text-[hsl(var(--primary))] ${
          compact ? "text-lg" : "text-3xl"
        }`}
      >
        Sri Chaitanya
      </span>
      <span
        className={`font-sans font-semibold tracking-[0.45em] text-[hsl(var(--accent))] ${
          compact ? "text-[10px]" : "text-sm"
        }`}
      >
        SCHOOLS
      </span>
    </div>
  </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--primary))] text-white shadow-[0_18px_35px_rgba(13,59,102,0.25)]">
      <div className="h-1 w-full bg-[linear-gradient(90deg,_hsl(var(--accent)),_hsl(var(--primary)))]" />
      <div className="container mx-auto px-6 h-[80px]">
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center py-3">
          <div className="flex items-center gap-6 -translate-y-2">
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Logo hideText={isScrolled} isScrolled={isScrolled} />

          <div className="flex items-center gap-6 justify-end -translate-y-2">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex lg:hidden h-full items-center">
          <button className="w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-0">
            <Logo compact hideText={isScrolled} isScrolled={isScrolled} />
          </div>
          <div className="ml-auto w-10 h-10" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white text-[hsl(var(--primary))]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
