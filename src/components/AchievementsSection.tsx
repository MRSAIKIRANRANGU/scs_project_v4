import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants, useMotionValue, useSpring } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import logo from "@/assets/logo_transparent_fixed.png";

const achievements = [
  {
    icon: Trophy,
    category: "Academics",
    title: "Sri Chaitanya's World Record at NASA",
    description: "Once again No.1 - our students continue to break world records and create history.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13376.jpg",
  },
  {
    icon: Award,
    category: "Co-Curricular",
    title: "NASA Live in a Healthy Space Design",
    description: "Our students won the prestigious NASA Live in a Healthy Space Design Competition.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671947-13373.jpg",
  },
  {
    icon: Medal,
    category: "Sports",
    title: "National-Level Sports Achievements",
    description: "Multiple state and national level achievements across athletics, cricket, and more.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671708-13371.jpg",
  },
  {
    icon: Trophy,
    category: "Innovation",
    title: "STEM Challenge Champions",
    description: "Student teams secured top honors in national STEM innovation challenges.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671708-13372.jpg",
  },
  {
    icon: Award,
    category: "Leadership",
    title: "Young Leaders Summit",
    description: "Recognized for community leadership and impact-driven initiatives.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1615006588-21041.jpg",
  },
];

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = achievements.length;
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.05,
      },
    },
  };
  const headingChar: Variants = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const parallaxXSmooth = useSpring(parallaxX, { stiffness: 120, damping: 20 });
  const parallaxYSmooth = useSpring(parallaxY, { stiffness: 120, damping: 20 });
  const shapesX = useMotionValue(0);
  const shapesY = useMotionValue(0);
  const shapesXSmooth = useSpring(shapesX, { stiffness: 80, damping: 20 });
  const shapesYSmooth = useSpring(shapesY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4200);
    return () => window.clearInterval(id);
  }, [isPaused, total]);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const direction = event.deltaY > 0 ? 1 : -1;
    setActiveIndex((prev) => (prev + direction + total) % total);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, [total]);

  const current = achievements[activeIndex];
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    parallaxX.set(relX * 18);
    parallaxY.set(relY * 12);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    parallaxX.set(0);
    parallaxY.set(0);
  };

  const handleSectionMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    shapesX.set(relX * 30);
    shapesY.set(relY * 24);
  };

  const handleSectionLeave = () => {
    shapesX.set(0);
    shapesY.set(0);
  };

  const renderHeadingChars = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,#f8f7f3_0%,#ffffff_55%,#f6f7fb_100%)]"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ x: shapesXSmooth, y: shapesYSmooth }}
      >
        <svg
          aria-hidden="true"
          className="absolute left-6 top-16 h-20 w-20 text-[hsl(var(--primary)/0.16)] blur-[1px] float-medium rotate-[14deg]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 70a35 35 0 0 1 70 0" />
          <path d="M15 70h70" />
          <path d="M30 70v-6M40 70v-4M50 70v-7M60 70v-4M70 70v-6" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/2 top-20 h-12 w-12 -translate-x-[260px] text-[hsl(var(--accent)/0.12)] blur-[1px] float-fast hidden md:block rotate-[-12deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="24" y="28" width="72" height="56" rx="10" />
          <path d="M36 44h38M36 58h28" />
          <circle cx="78" cy="66" r="6" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-1/4 top-24 h-14 w-14 text-[hsl(var(--primary)/0.1)] blur-sm float-slow hidden md:block rotate-[28deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="24" />
          <path d="M60 36v48M36 60h48" />
          <path d="M44 46c10 6 22 6 32 0" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/4 top-44 h-12 w-12 text-[hsl(var(--primary)/0.12)] blur-[1px] float-fast rotate-[-22deg]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="42" cy="42" r="20" />
          <path d="M58 58l18 18" />
          <circle cx="42" cy="42" r="12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/3 top-1/2 h-16 w-16 -translate-y-24 text-[hsl(var(--primary)/0.1)] blur-sm float-medium hidden md:block rotate-[18deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M30 76l30-30 20 20-30 30H30z" />
          <path d="M60 36l8-8 12 12-8 8" />
          <path d="M26 80l4-12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-16 top-1/3 h-12 w-12 text-[hsl(var(--primary)/0.1)] blur-[1px] float-fast hidden md:block rotate-[-14deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="24" y="30" width="72" height="50" rx="10" />
          <path d="M38 48h44M38 62h30" />
          <circle cx="80" cy="66" r="6" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-10 bottom-28 h-14 w-14 text-[hsl(var(--accent)/0.1)] blur-sm float-slow hidden md:block rotate-[22deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="24" />
          <path d="M60 36v48M36 60h48" />
          <path d="M44 46c10 6 22 6 32 0" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-1/3 top-60 h-24 w-24 text-[hsl(var(--primary)/0.1)] blur-sm float-slow hidden sm:block rotate-[36deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 80l50-50 20 20-50 50z" />
          <path d="M70 30l12-12 20 20-12 12" />
          <path d="M45 95l-20 5 5-20" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-1/4 bottom-10 h-12 w-12 text-[hsl(var(--primary)/0.1)] blur-[1px] float-medium hidden lg:block rotate-[34deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 70l36-36 12 12-36 36H24z" />
          <path d="M60 34l8-8 12 12-8 8" />
          <path d="M20 74l4-12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-12 top-20 h-12 w-12 text-[hsl(var(--primary)/0.12)] blur-[1px] float-fast hidden md:block rotate-[22deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="20" y="28" width="80" height="56" rx="10" />
          <path d="M34 44h40M34 58h28" />
          <circle cx="78" cy="66" r="6" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-10 top-1/2 h-14 w-14 -translate-y-20 text-[hsl(var(--accent)/0.1)] blur-sm float-slow hidden md:block rotate-[-26deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="24" />
          <path d="M60 36v48M36 60h48" />
          <path d="M42 44c10 6 26 6 36 0" />
        </svg>
      </motion.div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.8),rgba(255,255,255,0.35),transparent_70%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-left mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            Proud Moments
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-foreground">
            <span className="sr-only">Our Achievements</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              {renderHeadingChars("Our ")}
              <span className="relative inline-flex font-tomboy">
                {renderHeadingChars("Achievements")}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
                  className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-primary/80 via-accent/40 to-transparent"
                />
              </span>
            </motion.span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
            Celebrating student success through academics, leadership, and innovation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] items-stretch">
          <div className="relative">
            <div
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="relative h-full min-h-[380px] md:min-h-[520px] overflow-hidden rounded-[36px] bg-[#0b1b2f] shadow-[0_28px_70px_rgba(8,15,24,0.35)] overscroll-contain"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <motion.img
                    src={current.image}
                    alt=""
                    className="h-full w-full object-cover object-top opacity-[0.95]"
                    style={{ x: parallaxXSmooth, y: parallaxYSmooth, scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
                <current.icon className="h-3.5 w-3.5 text-primary" />
                {current.category}
              </div>

              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-6 bottom-6 w-[120px] opacity-[0.12] sm:w-[150px] z-[1]"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
                <div className="max-w-[520px] rounded-2xl bg-white/60 px-5 py-4 md:px-7 md:py-5 shadow-[0_22px_55px_rgba(8,15,24,0.25)]">
                  <h3 className="mt-3 text-lg md:text-2xl font-serif font-semibold text-foreground">
                    {current.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground text-white/90 leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-full rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            {/* <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
              In This Issue
            </p> */}
            <h3 className="mt-3 text-2xl font-serif font-semibold text-foreground">
              Featured Achievements
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick a story to preview the highlight reel.
            </p>

            <div className="mt-6 space-y-3">
              {achievements.map((item, index) => (
                <button
                  key={`story-${item.title}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                  className={`w-full text-left flex items-start gap-3 rounded-2xl border px-4 py-3 transition ${
                    index === activeIndex
                      ? "border-primary/35 bg-primary/5 shadow-[0_10px_26px_rgba(13,59,102,0.12)]"
                      : "border-transparent hover:border-primary/15 hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.3em] ${
                      index === activeIndex ? "text-primary" : "text-foreground/50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        index === activeIndex ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
