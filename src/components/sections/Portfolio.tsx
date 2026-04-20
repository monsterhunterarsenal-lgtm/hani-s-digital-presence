import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section id="portfolio" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.portfolio.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.portfolio.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.portfolio.intro}</p>
          </Reveal>
        </div>

        {/* Operating platforms */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {t.portfolio.platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="glass p-8 md:p-10 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-gold-soft opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
                    <div className="font-display text-3xl md:text-4xl">{p.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-primary border hairline px-3 py-1">
                      {p.tag}
                    </div>
                  </div>
                  <div className="gold-divider mb-6" />
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="mt-6 aspect-[16/8] glass-none bg-surface-3 grid place-items-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Project Image Placeholder</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Sectors */}
        <Reveal>
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">{t.portfolio.sectorsTitle}</div>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {t.portfolio.sectors.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <div className="bg-background p-6 text-center hover:bg-surface-2 transition-colors duration-500 h-full grid place-items-center">
                <span className="text-sm text-foreground/85">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
