import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Sparkles } from "lucide-react";

const rankers = [
  {
    name: "Aarav Reddy",
    roll: "SC-24-1107",
    score: "98.1%",
    badge: "School Topper",
    stream: "CBSE XII Science",
    credential: "Merit Certificate",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/12926479/pexels-photo-12926479.jpeg?cs=srgb&dl=pexels-nandhukumar-12926479.jpg&fm=jpg",
  },
  {
    name: "Ananya Sharma",
    roll: "SC-24-2049",
    score: "97.4%",
    badge: "State Rank",
    stream: "CBSE XII Biology",
    credential: "Excellence Award",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/30768834/pexels-photo-30768834.jpeg?cs=srgb&dl=pexels-artosuraj-30768834.jpg&fm=jpg",
  },
  {
    name: "Vivek Iyer",
    roll: "SC-24-3092",
    score: "96.2%",
    badge: "District Topper",
    stream: "CBSE XII Maths",
    credential: "Merit Certificate",
    year: "2023-24",
    image:
      "https://images.pexels.com/photos/17053878/pexels-photo-17053878.jpeg?cs=srgb&dl=pexels-deepshikha-sinha-580932792-17053878.jpg&fm=jpg",
  },
];

const TopRankersSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const headingText = "Celebrating our highest achievers";
  const headingContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };
  const headingChar: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const underlineDelay =
    0.05 + Math.max(headingText.length - 1, 0) * 0.03 + 0.35;
  const renderHeadingChars = (text: string): JSX.Element[] =>
    text.split("").map((char, index) => (
      <motion.span key={`${text}-${index}`} variants={headingChar} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-[radial-gradient(circle_at_top,#f3f6ff_0%,#ffffff_55%,#f7f8fb_100%)]"
    >
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="top-rankers-outline" aria-hidden="true" />
      <div className={`rankers-celebration ${isInView ? "is-active" : ""}`} aria-hidden="true">
        {[
          { x: "22%", y: "12%", d: "0ms", s: "0.9" },
          { x: "32%", y: "6%", d: "120ms", s: "0.7" },
          { x: "44%", y: "10%", d: "220ms", s: "1" },
          { x: "56%", y: "7%", d: "320ms", s: "0.8" },
          { x: "68%", y: "12%", d: "160ms", s: "0.75" },
          { x: "78%", y: "8%", d: "260ms", s: "0.85" },
          { x: "40%", y: "16%", d: "420ms", s: "0.7" },
          { x: "60%", y: "16%", d: "520ms", s: "0.75" },
        ].map((item, index) => (
          <span
            key={`spark-${index}`}
            className="rankers-celebration__spark"
            style={
              {
                "--x": item.x,
                "--y": item.y,
                "--d": item.d,
                "--s": item.s,
              } as React.CSSProperties
            }
          />
        ))}
        {[
          { x: "26%", y: "20%", d: "80ms", s: "1", r: "-12deg", t: "✨" },
          { x: "38%", y: "14%", d: "180ms", s: "1.1", r: "8deg", t: "🎉" },
          { x: "52%", y: "18%", d: "260ms", s: "0.95", r: "-6deg", t: "⭐" },
          { x: "66%", y: "14%", d: "320ms", s: "1.05", r: "10deg", t: "✨" },
          { x: "74%", y: "20%", d: "420ms", s: "0.9", r: "-8deg", t: "🎊" },
        ].map((item, index) => (
          <span
            key={`emoji-${index}`}
            className="rankers-celebration__emoji"
            style={
              {
                "--x": item.x,
                "--y": item.y,
                "--d": item.d,
                "--s": item.s,
                "--r": item.r,
              } as React.CSSProperties
            }
          >
            {item.t}
          </span>
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.12)]">
            <Sparkles className="h-3.5 w-3.5" />
            Top Rankers
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-sans font-semibold text-foreground">
            <span className="sr-only">{headingText}</span>
            <motion.span
              aria-hidden="true"
              className="inline-flex flex-wrap justify-center"
              variants={headingContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="relative inline-flex">
                {renderHeadingChars("Celebrating our ")}
                <span className="relative inline-flex font-tomboy">
                  {renderHeadingChars("highest achievers")}
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: underlineDelay }}
                    className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/70 via-accent/30 to-transparent"
                  />
                </span>
              </span>
            </motion.span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Spotlighting the students who set the benchmark with outstanding scores and dedication.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rankers.map((ranker, index) => {
            const accents = [
              "from-rose-500 via-orange-500 to-amber-400",
              "from-sky-500 via-indigo-500 to-purple-500",
              "from-emerald-500 via-teal-500 to-cyan-500",
            ];
            const cardShift = [
              "xl:translate-y-6",
              "xl:-translate-y-2",
              "xl:translate-y-10",
            ];
            const accent = accents[index % accents.length];
            const shift = cardShift[index % cardShift.length];

            return (
              <motion.article
                key={ranker.roll}
                className={`group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)] ${shift}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r opacity-90" />
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${accent}`} />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-600">
                      Rank {index + 1}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{ranker.year}</span>
                  </div>

                  <div className="mt-6 flex items-center gap-5">
                    <div className="relative h-28 w-28 overflow-hidden rounded-3xl shadow-[0_18px_36px_rgba(15,23,42,0.2)]">
                      <img
                        src={ranker.image}
                        alt={ranker.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.4)_100%)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                        {ranker.stream}
                      </p>
                      <h3 className="mt-2 text-2xl font-serif font-bold text-foreground">
                        {ranker.name}
                      </h3>
                      <p className="text-sm text-slate-500">Roll No: {ranker.roll}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${accent}`}
                    >
                      {ranker.score}
                    </span>
                    <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
                      {ranker.badge}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-slate-400" />
                      <span>{ranker.credential}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {ranker.badge}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopRankersSection;
