import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section id="portfolio" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">
              <span className="text-primary mr-2 rtl:mr-0 rtl:ml-2">{t.portfolio.sectionNumber}</span>
              <span>— {t.portfolio.eyebrow}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              {t.portfolio.title}
              {t.portfolio.titleAccent && (
                <span className="italic text-gold">{t.portfolio.titleAccent}</span>
              )}
              {t.portfolio.titleTail}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.portfolio.intro}</p>
          </Reveal>
        </div>

        {/* Three structural principles */}
        <div className="grid md:grid-cols-3 gap-px bg-border mb-24">
          {t.portfolio.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="text-2xl text-primary mb-5 leading-none">◇</div>
                <div className="font-display text-xl md:text-2xl mb-3">{p.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-24">
          {t.portfolio.sectors.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <div className="bg-background p-6 text-center hover:bg-surface-2 transition-colors duration-500 h-full grid place-items-center">
                <span className="text-sm text-foreground/85">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Countries */}
        <Reveal>
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">{t.portfolio.countriesTitle}</div>
            <div className="gold-divider max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {t.portfolio.countries.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="bg-background p-5 text-center hover:bg-surface-2 transition-colors duration-500 h-full grid place-items-center">
                <span className="text-xs uppercase tracking-[0.18em] text-foreground/85">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
