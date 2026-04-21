import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const ESG = () => {
  const { t } = useLang();
  return (
    <section id="esg" className="py-28 md:py-36 bg-surface-2/40 relative">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.esg.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.esg.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.esg.intro}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-16">
          {t.esg.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="bg-background h-full p-7 md:p-8 group hover:bg-surface-2 transition-colors duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{p.sdg}</div>
                <div className="font-display text-xl mb-3">{p.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t hairline pt-10">
            <div className="text-sm text-muted-foreground mb-4">{t.esg.frameworks}</div>
            <div className="flex flex-wrap gap-3">
              {t.esg.frameworkList.map((f) => (
                <span key={f} className="text-xs uppercase tracking-[0.2em] border hairline px-4 py-2 text-foreground/85 hover:border-primary hover:text-primary transition-colors">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
