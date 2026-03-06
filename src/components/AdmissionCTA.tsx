import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDownToLine, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdmissionCTA = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    window.setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      window.setTimeout(() => setIsDownloaded(false), 1200);
    }, 1200);
  };

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
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of successful students who have transformed their dreams into reality with Sri Chaitanya's
            proven educational approach
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="cta-button cursor-pointer group px-10 py-6 text-base font-semibold">
              Apply Admission <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer px-10 py-6 text-base font-semibold border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] transition-all"
              onClick={handleDownloadClick}
            >
              <span className="inline-flex items-center gap-2">
                Download Brochure
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                  {isDownloading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isDownloaded ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <ArrowDownToLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  )}
                </span>
              </span>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
