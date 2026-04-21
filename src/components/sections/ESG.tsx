import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const ESG = () => {
  const { t } = useLang();
  return (
    <section id="sectionESG" className="py-28 md:py-36 relative bg-background">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.esg.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.esg.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.esg.intro}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--hairline-strong))] border hairline-strong">
          {t.esg.pillars.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 0.06}>
              <div className="bg-background p-8 min-h-[120px] flex items-center gap-4">
                <span className="text-primary text-lg">◇</span>
                <span className="font-display text-lg">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10 text-sm text-muted-foreground italic">{t.esg.note}</div>
      </div>
    </section>
  );
};
