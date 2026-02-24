import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
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
  {
    icon: Medal,
    category: "Arts",
    title: "Creative Excellence Awards",
    description: "Honors in design, music, and performance at inter-school events.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23685.jpeg",
  },
];

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const total = achievements.length;
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
    shapesX.set(relX * 16);
    shapesY.set(relY * 12);
  };

  const handleSectionLeave = () => {
    shapesX.set(0);
    shapesY.set(0);
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,#f7f8fd_0%,#ffffff_45%,#f8f9fb_100%)]"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ x: shapesXSmooth, y: shapesYSmooth }}
      >
        <svg
          aria-hidden="true"
          className="absolute left-6 top-16 h-16 w-16 text-primary/30 float-medium"
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
          className="absolute right-28 top-44 h-14 w-14 text-primary/25 float-fast"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="18" y="30" width="64" height="40" rx="8" />
          <circle cx="40" cy="50" r="10" />
          <path d="M55 32l22 14M55 36l20 12" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/3 top-24 h-16 w-16 text-accent/30 float-medium hidden sm:block"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 15h70L15 85z" />
          <path d="M38 38h24L38 62z" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/4 top-44 h-14 w-14 text-primary/25 float-fast"
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
          className="absolute right-1/3 top-60 h-20 w-20 text-primary/20 float-slow hidden sm:block"
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
          className="absolute left-16 bottom-24 h-16 w-28 text-primary/25 float-medium hidden sm:block"
          viewBox="0 0 160 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="10" y="20" width="140" height="40" rx="8" />
          <path d="M30 20v-10M45 20v-8M60 20v-10M75 20v-8M90 20v-10M105 20v-8M120 20v-10" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-14 bottom-20 h-20 w-20 text-accent/25 float-fast hidden sm:block"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="38" cy="42" r="12" />
          <circle cx="78" cy="42" r="12" />
          <path d="M44 50l32 40M72 50L40 90" />
          <path d="M60 46l-6 8M60 46l6 8" />
        </svg>
      </motion.div>
      <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.16),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-3xl" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary shadow-[0_10px_30px_rgba(226,61,104,0.15)]">
            Proud Moments
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-serif font-semibold text-foreground">
            Our{" "}
            <span className="relative inline-flex">
              Achievements
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-primary/70 via-accent/40 to-transparent"
              />
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Celebrating student success through academics, leadership, and innovation.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="relative h-[340px] md:h-[440px] overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,hsl(var(--primary)/0.92),hsl(var(--primary)/0.7),hsl(var(--accent)/0.35))] shadow-[0_24px_70px_rgba(8,15,24,0.35)] overscroll-contain"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src={current.image}
                  alt=""
                  className="h-full w-full object-cover opacity-70"
                  style={{ x: parallaxXSmooth, y: parallaxYSmooth, scale: 1.06 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.4)] via-[hsl(var(--primary)/0.12)] to-[hsl(var(--accent)/0.02)]" />
              </motion.div>
            </AnimatePresence>
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] sm:w-[260px] z-[1]"
            />
            <div className="relative z-10 h-full flex items-end px-5 pb-5 md:px-10 md:pb-8">
              <div className="w-full rounded-2xl border border-white/80 bg-white/95 px-5 py-4 md:px-8 md:py-5 shadow-[0_20px_55px_rgba(8,15,24,0.25)]">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/70">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-primary">
                    <current.icon className="h-3.5 w-3.5" />
                    {current.category}
                  </span>
                </div>
                <h3 className="mt-3 text-lg md:text-2xl font-serif font-semibold text-foreground">
                  {current.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {current.description}
                </p>
              </div>
            </div>
            <div className="absolute right-5 top-1/2 z-20 -translate-y-1/2 flex flex-col gap-2">
              {achievements.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent shadow-[0_0_0_4px_rgba(226,61,104,0.2)]"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
