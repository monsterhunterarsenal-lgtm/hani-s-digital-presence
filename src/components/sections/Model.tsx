import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Model = () => {
  const { t } = useLang();
  return (
    <section id="sectionModel" className="py-28 md:py-36 relative" style={{ background: "hsl(var(--card))" }}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.model.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.model.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.model.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 border hairline-strong">
          {t.model.layers.map((l, i) => (
            <Reveal key={l.num} delay={i * 0.1}>
              <article
                className="p-10 min-h-[280px] flex flex-col h-full"
                style={{
                  borderRight: i < 2 ? "1px solid hsl(var(--hairline-strong))" : undefined,
                }}
              >
                <div className="font-display text-primary mb-6" style={{ fontSize: "56px", fontWeight: 600, lineHeight: 1 }}>
                  {l.num}
                </div>
                <h3 className="font-display h3-display mb-4">{l.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
