import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdmissionCTA = () => {
  return (
    <section className="admission-cta py-24 bg-[#0c1a2d] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden aurora-sky">
        <div className="aurora-stars" />
        <div className="meteor-shower">
          <span />
          <span />
          <span />
        </div>
        <div className="aurora-band aurora-band-one" />
        <div className="aurora-band aurora-band-two" />
        <div className="aurora-horizon" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Admissions Open<br />
            <span className="text-gradient-red">2026-2027</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-md mx-auto mb-10">
            Give your child the best start. Join a legacy of 40+ years of academic excellence across 950 schools.
          </p>
          <Button size="lg" className="cta-button cursor-pointer group px-10 py-6 text-base font-semibold">
            Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
