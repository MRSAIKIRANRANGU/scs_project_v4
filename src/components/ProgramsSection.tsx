import type { MouseEvent } from "react";
import { ArrowRight, GraduationCap, Medal, Target } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const programs = [
  {
    title: "IIT (Main & Advanced)",
    description: "Strong foundations and problem-solving depth.",
    icon: Target,
    accent: "from-[#0d3b66] to-[#1b2c57]",
  },
  {
    title: "NEET UG",
    description: "Concept clarity with exam-focused strategy.",
    icon: GraduationCap,
    accent: "from-[#e23d68] to-[#f05f7e]",
  },
  {
    title: "UPSC Services",
    description: "Mentorship, rigor, and holistic preparation.",
    icon: Medal,
    accent: "from-[#1b2c57] to-[#0d3b66]",
  },
];

const ProgramsSection = () => {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleSpotlightMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--spot-x", `${x}px`);
    event.currentTarget.style.setProperty("--spot-y", `${y}px`);
  };

  const handleSpotlightLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--spot-x", "50%");
    event.currentTarget.style.setProperty("--spot-y", "50%");
  };

  return (
    <section id="programs" className="relative overflow-hidden pt-28 pb-20 bg-[#0b2f52]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(240,74,120,0.32),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.12),transparent_70%)] blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="relative pl-8 space-y-6">
            <div className="absolute left-0 top-2 h-20 w-2 rounded-full bg-gradient-to-b from-[hsl(var(--accent))] via-[hsl(var(--primary))] to-[hsl(var(--primary))] shadow-[0_8px_20px_rgba(13,59,102,0.25)]" />
            <p className="text-xs uppercase tracking-[0.45em] text-[hsl(var(--accent))]">Programs</p>
            <div className="h-px w-16 bg-gradient-to-r from-[hsl(var(--accent))] to-transparent" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white">
              Explore Courses
            </h2>
            <p className="text-white/70 leading-relaxed max-w-md">
              Innovative learning pathways designed to help students excel in exams,
              careers, and life with expert mentors and modern resources.
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors">
              View all programs <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 lg:mt-16 grid gap-4 sm:grid-cols-2 justify-items-end ml-auto max-w-[640px]"
          >
            {programs.map((program, index) => {
              const isLight = index === 2;
              return (
                <motion.div
                  key={program.title}
                  variants={item}
                  className={`group relative w-full ${index === 2 ? "sm:col-span-2" : ""}`}
                >
                  <div
                    data-variant={isLight ? "light" : "dark"}
                    onMouseMove={handleSpotlightMove}
                    onMouseLeave={handleSpotlightLeave}
                    className={`program-card relative min-h-[150px] rounded-3xl p-5 overflow-hidden shadow-[0_12px_32px_rgba(13,59,102,0.2)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(13,59,102,0.25)] ${
                      isLight
                        ? "bg-white text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.08)]"
                        : `bg-gradient-to-br ${program.accent} text-white`
                    }`}
                  >
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(13,59,102,0.18)] transition-transform duration-700 ease-out group-hover:rotate-[360deg] ${
                            isLight
                              ? `bg-gradient-to-br ${program.accent} text-white`
                              : "bg-white/15 text-white"
                          }`}
                        >
                          <program.icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className={`mt-3 text-base font-semibold ${isLight ? "text-[hsl(var(--primary))]" : "text-white"}`}>
                        {program.title}
                      </h3>
                      <p className={`mt-2 text-sm ${isLight ? "text-[hsl(var(--primary)/0.7)]" : "text-white/80"}`}>
                        {program.description}
                      </p>
                      <button
                        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                          isLight
                            ? "text-[hsl(var(--accent))] hover:text-[hsl(var(--primary))]"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
