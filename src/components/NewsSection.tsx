import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "Aug 31, 2026",
    title: "CBSE Class X State-wise Top Results",
    category: "Academics",
  },
  {
    date: "Aug 31, 2026",
    title: "NEET 2025 All India Top 100 Ranks",
    category: "Academics",
  },
  {
    date: "Jul 15, 2026",
    title: "Annual Sports Day 2026 Highlights",
    category: "Events",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
                <span className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-gradient-to-r from-accent/70 via-accent/40 to-transparent" />
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
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                  <span className="ml-auto px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
