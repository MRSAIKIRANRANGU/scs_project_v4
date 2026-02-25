import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const stats = [
  { value: "22", label: "States" },
  { value: "248", label: "Cities" },
  { value: "40+", label: "Years" },
  { value: "950", label: "Schools" },
  { value: "55K+", label: "Staff" },
  { value: "9.5L+", label: "Students" },
];

const statsBackgroundImage =
  "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1558672053-13377.jpg";

const parseStatValue = (value: string) => {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numeric: 0, suffix: value, decimals: 0 };
  }

  const numeric = Number(match[1]);
  const suffix = match[2] ?? "";
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

  return { numeric, suffix, decimals };
};

type StatCardProps = {
  value: string;
  label: string;
  delay: number;
  isInView: boolean;
};

const StatCard = ({ value, label, delay, isInView }: StatCardProps) => {
  const { numeric, suffix, decimals } = useMemo(() => parseStatValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return undefined;
    }

    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: "easeOut",
      delay,
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [delay, isInView, numeric]);

  const formattedValue =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center shadow-[0_20px_45px_rgba(8,26,46,0.35)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">
        {formattedValue}
        {suffix}
      </div>
      <div className="text-primary-foreground/70 text-xs uppercase tracking-[0.35em] font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const headingText = "Our Impact in Numbers";
  const headingContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.05,
      },
    },
  };
  const headingChar = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const underlineDelay =
    0.05 + Math.max(headingText.length - 1, 0) * 0.025 + 0.35;
  const renderHeadingChars = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0b2f52]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${statsBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,26,46,0.6),rgba(8,26,46,0.85))]" />
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.2)]">
            At a Glance
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-primary-foreground">
            <span className="sr-only">{headingText}</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              {renderHeadingChars("Our ")}
              <span className="relative inline-flex">
                <span className="font-tomboy">{renderHeadingChars("Impact")}</span>
                {renderHeadingChars(" in Numbers")}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                  className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/80 via-accent/40 to-transparent"
                />
              </span>
            </motion.span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-primary-foreground/70 max-w-2xl mx-auto">
            A snapshot of the scale, reach, and community that make our learning
            ecosystem thrive across regions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={i * 0.08}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
