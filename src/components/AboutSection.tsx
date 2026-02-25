import { motion, type Variants, useMotionValue, useSpring } from "framer-motion";
import { BookOpen, Users, Target } from "lucide-react";

const tabs = [
  {
    icon: BookOpen,
    title: "Who We Are",
    text: "At Sri Chaitanya, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical and personality development, resulting future leaders who are ready to take on the world.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558672053-13377.jpg",
    tone: "from-white/10 via-white/0 to-white/0",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "Our goal is to focus on the holistic development of each child, and to give them a competitive edge with the help of an extensive curriculum and dynamic teaching methodologies.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13374.jpg",
    tone: "from-white/10 via-white/0 to-white/0",
  },
  {
    icon: Users,
    title: "Management",
    text: "Our management's futuristic vision, determination and leadership has enabled them to set new benchmarks, ultimately resulting in a world-class education system with a community of global learners.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558671948-13375.jpg",
    tone: "from-white/10 via-white/0 to-white/0",
  },
];

const cardVariants: Variants = {
  hidden: (index: number) => {
    if (index === 0) {
      return { opacity: 0, x: -60 };
    }
    if (index === 1) {
      return { opacity: 1, y: 0, scale: 1 };
    }
    return { opacity: 0, x: 60 };
  },
  show: (index: number) => {
    if (index === 0) {
      return {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      };
    }
    if (index === 1) {
      return {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0 },
      };
    }
    return {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    };
  },
};

const AboutSection = () => {
  const headingText = "Excellence in Education";
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
  const shapesX = useMotionValue(0);
  const shapesY = useMotionValue(0);
  const shapesXSmooth = useSpring(shapesX, { stiffness: 80, damping: 20 });
  const shapesYSmooth = useSpring(shapesY, { stiffness: 80, damping: 20 });
  const underlineDelay =
    0.05 + Math.max(headingText.length - 1, 0) * 0.025 + 0.35;
  const renderHeadingChars = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const handleSectionMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    shapesX.set(relX * 28);
    shapesY.set(relY * 22);
  };

  const handleSectionLeave = () => {
    shapesX.set(0);
    shapesY.set(0);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-background"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ x: shapesXSmooth, y: shapesYSmooth }}
      >
        <svg
          aria-hidden="true"
          className="absolute left-16 top-16 h-20 w-20 text-primary/14 blur-[1px] float-medium rotate-[60deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="52" r="18" />
          <path d="M54 72h12" />
          <path d="M52 80h16" />
          <path d="M56 88h8" />
          <path d="M60 18v-8" />
          <path d="M40 28l-8-8" />
          <path d="M80 28l8-8" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/3 bottom-24 h-18 w-18 text-primary/10 blur-sm float-slow hidden sm:block rotate-[60deg]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 26h52v12a26 26 0 0 1-52 0V26z" />
          <path d="M24 34H12a12 12 0 0 0 12 12" />
          <path d="M76 34h12a12 12 0 0 1-12 12" />
          <path d="M44 70h12" />
          <path d="M40 78h20" />
          <path d="M50 52v18" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-24 bottom-24 h-20 w-20 text-accent/10 blur-sm float-medium hidden sm:block rotate-[60deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="6" />
          <ellipse cx="60" cy="60" rx="26" ry="12" />
          <ellipse cx="60" cy="60" rx="26" ry="12" transform="rotate(60 60 60)" />
          <ellipse cx="60" cy="60" rx="26" ry="12" transform="rotate(-60 60 60)" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-1/3 top-52 h-12 w-12 text-primary/12 blur-[1px] float-slow hidden md:block rotate-[60deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 40l42-16 42 16-42 16-42-16z" />
          <path d="M32 50v18c0 7 12 12 28 12s28-5 28-12V50" />
          <path d="M88 50v24" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute right-20 top-1/2 h-12 w-12 translate-y-12 text-accent/8 blur-sm float-medium hidden md:block rotate-[60deg]"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M44 20h32" />
          <path d="M52 20v22l-18 34a10 10 0 0 0 9 14h34a10 10 0 0 0 9-14L68 42V20" />
          <path d="M42 58h36" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute left-1/3 top-1/2 h-12 w-12 -translate-y-20 text-primary/14 float-medium hidden lg:block"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="26" y="24" width="68" height="76" rx="10" />
          <path d="M42 40h20M42 52h20" />
          <circle cx="46" cy="68" r="4" />
          <circle cx="60" cy="68" r="4" />
          <circle cx="74" cy="68" r="4" />
          <circle cx="46" cy="82" r="4" />
          <circle cx="60" cy="82" r="4" />
          <circle cx="74" cy="82" r="4" />
        </svg>
      </motion.div>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.16),transparent_70%)] blur-3xl" />
      <div className="container relative mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.12)]">
            Discover
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-foreground">
            <span className="sr-only">{headingText}</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              {renderHeadingChars("Excellence in ")}
              <span className="relative inline-flex font-tomboy">
                {renderHeadingChars("Education")}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                  className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/70 via-accent/30 to-transparent"
                />
              </span>
            </motion.span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A learning experience shaped by academic rigor, personal mentorship, and
            future-ready skills that grow with every student.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/70">
            <span className="rounded-full border border-border bg-card px-4 py-2 shadow-sm">
              Mentorship First
            </span>
            <span className="rounded-full border border-border bg-card px-4 py-2 shadow-sm">
              Rigor & Care
            </span>
            <span className="rounded-full border border-border bg-card px-4 py-2 shadow-sm">
              Outcome Focused
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tabs.map((tab, i) => {
            const isFeatured = i === 1;
            return (
            <motion.div
              key={tab.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                isFeatured
                  ? "border-accent/40 bg-white shadow-2xl shadow-accent/10"
                  : "border-border bg-card hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
              }`}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={tab.image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${tab.tone}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.03),rgba(15,23,42,0.12))]" />
                <div className="absolute -bottom-6 left-6 rounded-2xl bg-white/90 p-3 shadow-[0_12px_30px_rgba(13,59,102,0.2)] ring-1 ring-border">
                  <tab.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="px-6 pb-8 pt-10">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {tab.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{tab.text}</p>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
