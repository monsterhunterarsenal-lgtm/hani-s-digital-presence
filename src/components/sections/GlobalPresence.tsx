import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { WorldMap } from "@/components/WorldMap";

export const GlobalPresence = () => {
  const { t } = useLang();
  return (
    <section id="sectionPresence" className="py-28 md:py-36 relative bg-background">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <Reveal>
            <div className="eyebrow mb-4">{t.presence.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.presence.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.presence.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border hairline-strong p-4 md:p-8 mb-10 bg-[hsl(var(--card))]">
            <WorldMap />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[hsl(var(--hairline-strong))] border hairline-strong">
          {t.presence.countries.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.05}>
              <div className="bg-background p-6 text-center h-full">
                <div className="font-display text-lg leading-tight mb-2">{c.name}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-primary">
                  {c.hub ? t.presence.hubLabel : t.presence.marketLabel}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
