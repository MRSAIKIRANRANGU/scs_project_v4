import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "Aug 31, 2026",
    title: "CBSE Class X State-wise Top Results",
    category: "Academics",
    summary:
      "State toppers, merit lists, and standout performances across the region.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23689.jpeg",
  },
  {
    date: "Aug 31, 2026",
    title: "NEET 2025 All India Top 100 Ranks",
    category: "Academics",
    summary:
      "Celebrating our toppers and the focused mentorship that made it possible.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23688.jpg",
  },
  {
    date: "Jul 15, 2026",
    title: "Annual Sports Day 2026 Highlights",
    category: "Events",
    summary:
      "A day of energy, teamwork, and record-breaking performances on the field.",
    image:
      "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/uploads/gallery-inter-school-1753419158-23690.jpeg",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="relative overflow-hidden py-24 bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.18),transparent_70%)] blur-[90px]" />
        <div className="absolute top-20 left-16 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.28),transparent_65%)] blur-[70px]" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(13,59,102,0.16),transparent_70%)] blur-[100px]" />
        <div className="absolute -bottom-28 left-1/4 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(226,61,104,0.18),transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-8 right-16 h-16 w-40 rotate-12 rounded-full bg-[linear-gradient(120deg,rgba(13,59,102,0.2),rgba(226,61,104,0.16),transparent)] blur-[70px]" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.12)]">
              Stay Updated
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-serif font-semibold text-foreground">
              News &{" "}
              <span className="relative inline-flex">
                Announcements
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/70 via-accent/40 to-transparent"
                />
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="text-accent font-semibold uppercase tracking-[0.25em] text-xs flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flip-card relative h-[280px] md:h-[300px] transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flip-card__inner">
                  <div className="flip-card__face flip-card__face--front rounded-2xl overflow-hidden border border-border/80 bg-white shadow-[0_18px_40px_rgba(13,59,102,0.08)]">
                    <div className="relative h-40 overflow-hidden">
                      <img src={item.image} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/70 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-foreground/60">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="mt-3 text-lg md:text-xl font-serif font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs uppercase tracking-[0.35em] text-foreground/50">
                        Hover to read
                      </p>
                    </div>
                  </div>
                  <div className="flip-card__face flip-card__face--back rounded-2xl overflow-hidden border border-[#0b2f52]/40 bg-[linear-gradient(135deg,#0b2f52,#0d3b66)] text-white shadow-[0_22px_50px_rgba(11,47,82,0.3)]">
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/60">
                        <Calendar className="h-4 w-4 text-white/70" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="mt-4 text-lg md:text-xl font-serif font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/75 leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
