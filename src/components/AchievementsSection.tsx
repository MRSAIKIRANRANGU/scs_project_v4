import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    category: "Academics",
    title: "Sri Chaitanya's World Record at NASA",
    description: "Once again No.1 - our students continue to break world records and create history.",
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
  {
    icon: Trophy,
    category: "Innovation",
    title: "STEM Challenge Champions",
    description: "Student teams secured top honors in national STEM innovation challenges.",
  },
  {
    icon: Award,
    category: "Leadership",
    title: "Young Leaders Summit",
    description: "Recognized for community leadership and impact-driven initiatives.",
  },
  {
    icon: Medal,
    category: "Arts",
    title: "Creative Excellence Awards",
    description: "Honors in design, music, and performance at inter-school events.",
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
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="absolute -bottom-2 left-0 right-0 h-2 origin-left rounded-full bg-gradient-to-r from-accent/70 via-accent/40 to-transparent"
              />
            </span>
          </h2>
        </motion.div>

        <div className="achievement-marquee">
          <div className="achievement-marquee__track">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="achievement-card flex-shrink-0 w-[260px] md:w-[320px] min-h-[220px] relative bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
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
              </div>
            ))}
          </div>
          <div className="achievement-marquee__track" aria-hidden="true">
            {achievements.map((item) => (
              <div
                key={`${item.title}-clone`}
                className="achievement-card flex-shrink-0 w-[260px] md:w-[320px] min-h-[220px] relative bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
