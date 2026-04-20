import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 space-y-8">
          <Reveal>
            <div className="eyebrow mb-4">{t.about.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{t.about.title}</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="aspect-[4/5] max-w-sm glass shadow-deep relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Photo Placeholder</span>
              </div>
              <div className="absolute -top-px -left-px w-6 h-6 border-t border-l border-primary" />
              <div className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="space-y-2 pt-2">
              <div className="text-sm text-foreground">{t.about.role}</div>
              <div className="text-sm text-muted-foreground">{t.about.union}</div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-10">
          <Reveal delay={0.1}>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-foreground/90 border-l-2 border-primary pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
              {t.about.lead}
            </p>
          </Reveal>

          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="pt-8 border-t hairline">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.about.journey.map((j) => (
                  <div key={j.year} className="space-y-2 group">
                    <div className="font-display text-2xl text-gold">{j.year}</div>
                    <div className="text-sm font-medium text-foreground">{j.place}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{j.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
