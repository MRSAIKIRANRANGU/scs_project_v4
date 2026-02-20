import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    category: "Academics",
    title: "Sri Chaitanya's World Record at NASA",
    description: "Once again No.1 — our students continue to break world records and create history.",
  },
  {
    icon: Award,
    category: "Co-Curricular",
    title: "NASA Live in a Healthy Space Design",
    description: "Our students won the prestigious NASA Live in a Healthy Space Design Competition.",
  },
  {
    icon: Medal,
    category: "Sports",
    title: "National-Level Sports Achievements",
    description: "Multiple state and national level achievements across athletics, cricket, and more.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent shadow-[0_10px_30px_rgba(13,59,102,0.12)]">
            Proud Moments
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-serif font-semibold text-foreground">
            Our{" "}
            <span className="relative inline-flex">
              Achievements
              <span className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-gradient-to-r from-accent/70 via-accent/40 to-transparent" />
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="h-2 bg-red-gradient" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
