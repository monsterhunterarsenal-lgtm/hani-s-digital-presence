import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { WorldMap } from "@/components/WorldMap";

export const Hero = () => {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="sectionHero" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial-gold opacity-60 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, hsl(var(--foreground)) 0%, transparent 70%), linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 80px 80px, 80px 80px",
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="container-x relative py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: 60% */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="eyebrow"
            >
              {t.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display h1-display"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a href="#sectionPlatforms" className="btn-gold group">
                {t.hero.ctaPrimary}
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
              <a
                href="#sectionAbout"
                className="text-xs uppercase text-primary hover:underline underline-offset-4 transition-all inline-flex items-center gap-2"
                style={{ letterSpacing: "0.18em" }}
              >
                {t.hero.ctaSecondary}
                <Arrow className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right: 40% — world map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <WorldMap compact label={t.hero.mapHubLabel} />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--hairline-strong))] mt-16 lg:mt-24 border-y hairline-strong"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label} className="bg-background py-6 px-5 text-center md:text-left rtl:md:text-right">
              <div className="font-display text-4xl md:text-5xl text-primary" style={{ fontWeight: 600 }}>{s.value}</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
