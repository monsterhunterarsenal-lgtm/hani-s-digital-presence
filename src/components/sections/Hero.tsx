import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpeg";
import { useLightbox } from "@/components/Lightbox";

export const Hero = () => {
  const { t, dir } = useLang();
  const { open } = useLightbox();
  const portraitAlt = dir === "rtl" ? "هاني حبشي — رئيس مجلس الإدارة" : "Hani Hebashy — Chairman & CEO";
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-24">
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-radial-gold opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-radial-gold opacity-40 pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center py-20">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.5rem] sm:text-5xl lg:text-7xl leading-[1.05] font-medium"
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block text-gold italic">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-gold group">
              {t.hero.ctaPrimary}
              <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="#about" className="btn-ghost-gold">{t.hero.ctaSecondary}</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-6 border-t hairline"
          >
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-gold">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-gold opacity-25 blur-3xl" />
            <button
              type="button"
              onClick={() => open(heroPortrait, portraitAlt)}
              className="absolute inset-0 glass shadow-deep overflow-hidden cursor-zoom-in group"
              aria-label="Open portrait in lightbox"
            >
              <img
                src={heroPortrait}
                alt={portraitAlt}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
            </button>
            {/* Corner accents */}
            <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-primary" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-pulse-gold">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};
