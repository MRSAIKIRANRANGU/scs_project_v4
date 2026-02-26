import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slider/1.jpeg";
import heroSlide2 from "@/assets/hero-slider/2.jpeg";
import heroSlide3 from "@/assets/hero-slider/3.jpeg";

const slides = [
  {
    image: heroSlide2,
    tag: "Future-Ready Curriculum",
    title: "Building",
    highlight: "Bright Futures",
    text: "Hands-on learning, digital skills, and strong mentorship empower students to excel.",
    cta: "Explore Programs",
  },
  {
    image: heroSlide1,
    tag: "Personalized Learning Pathways",
    title: "Unlocking",
    highlight: "Student Potential",
    text: "Expert faculty, modern infrastructure, and a supportive culture help every learner thrive.",
    cta: "Apply for Admission",
  },
  {
    image: heroSlide3,
    tag: "Community First",
    title: "A school",
    highlight: "that feels like home",
    text: "Wellbeing, safety, and a vibrant community make every day a confident step forward.",
    cta: "Talk to Admissions",
  },
];

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen bg-[#0c1a2d] pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              key={`image-${current}`}
              src={slide.image}
              alt="Sri Chaitanya School"
              className="h-full w-full object-cover object-top"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1.07 }}
              transition={{ duration: 6.5, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.05)_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 min-h-screen flex items-end pb-24">
        <div className="container mx-auto px-6 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-center"
            >
              <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                <motion.span
                  className="block font-sans tracking-[-0.01em]"
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  aria-label={slide.title}
                >
                  {slide.title.split("").map((char, index) => (
                    <motion.span
                      key={`title-${char}-${index}`}
                      variants={textItem}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span
                  className="block font-tomboy font-bold tracking-[-0.01em] text-[hsl(var(--accent))]"
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  aria-label={slide.highlight}
                >
                  {slide.highlight.split("").map((char, index) => (
                    <motion.span
                      key={`highlight-${char}-${index}`}
                      variants={textItem}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                {slide.text}
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  size="lg"
                  className="group rounded-none bg-[hsl(var(--accent))] text-white font-semibold text-base px-7 py-6 shadow-[0_18px_40px_rgba(226,61,104,0.35)] transition-[clip-path,box-shadow,transform] duration-700 ease-in-out [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] hover:[clip-path:polygon(0_0,86%_0,100%_50%,86%_100%,0_100%)] hover:shadow-[0_24px_55px_rgba(226,61,104,0.45)]"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={prev}
          className="h-11 w-11 rounded-full border border-white/40 bg-white/10 text-white shadow-md transition hover:bg-white/25"
        >
          <ChevronLeft className="mx-auto h-5 w-5" />
        </button>
      </div>
      <div className="absolute right-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={next}
          className="h-11 w-11 rounded-full border border-white/40 bg-white/10 text-white shadow-md transition hover:bg-white/25"
        >
          <ChevronRight className="mx-auto h-5 w-5" />
        </button>
      </div>

      <div className="absolute left-0 right-0 -bottom-20 z-30">
        <div className="container mx-auto px-6">
          <div className="rounded-[28px] bg-white shadow-[0_30px_80px_rgba(13,59,102,0.2),_0_18px_0_-6px_rgba(0,0,0,0.18)] border border-slate-100 p-6 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
              <label className="text-sm font-semibold text-[hsl(var(--primary))]">
                Select Board
                <select className="mt-2 w-full rounded-full border border-[hsl(var(--primary)/0.25)] bg-white/95 px-4 py-2.5 text-sm text-[hsl(var(--primary))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.35)] focus:border-[hsl(var(--primary)/0.45)]">
                  <option>Select Board</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-[hsl(var(--primary))]">
                Select State
                <select className="mt-2 w-full rounded-full border border-[hsl(var(--primary)/0.25)] bg-white/95 px-4 py-2.5 text-sm text-[hsl(var(--primary))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.35)] focus:border-[hsl(var(--primary)/0.45)]">
                  <option>Select State</option>
                  <option>Telangana</option>
                  <option>Andhra Pradesh</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-[hsl(var(--primary))]">
                Select City
                <select className="mt-2 w-full rounded-full border border-[hsl(var(--primary)/0.25)] bg-white/95 px-4 py-2.5 text-sm text-[hsl(var(--primary))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.35)] focus:border-[hsl(var(--primary)/0.45)]">
                  <option>Select City</option>
                  <option>Hyderabad</option>
                  <option>Bengaluru</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-[hsl(var(--primary))]">
                Select Branch
                <select className="mt-2 w-full rounded-full border border-[hsl(var(--primary)/0.25)] bg-white/95 px-4 py-2.5 text-sm text-[hsl(var(--primary))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.35)] focus:border-[hsl(var(--primary)/0.45)]">
                  <option>Select Branch</option>
                  <option>Jubilee Hills</option>
                  <option>Madhapur</option>
                  <option>Hitech City</option>
                </select>
              </label>

              <div className="flex items-end">
                <button className="w-full rounded-full bg-[hsl(var(--primary))] text-white font-semibold px-6 py-3 shadow-[0_16px_35px_rgba(13,59,102,0.25)] flex items-center justify-center gap-2">
                  <Search className="h-4 w-4" />
                  Find School
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-[hsl(var(--primary))] font-semibold">Popular Locations:</span>
              {["Hyderabad", "Bengaluru", "Chennai", "Mumbai", "Delhi"].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[hsl(var(--primary))]"
                >
                  <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
