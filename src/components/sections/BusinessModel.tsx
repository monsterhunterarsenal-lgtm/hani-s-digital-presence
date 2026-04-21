import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const BusinessModel = () => {
  const { t } = useLang();
  return (
    <section id="model" className="py-28 md:py-36 relative bg-surface-2/40">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.model.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.model.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.model.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border mb-12">
          {t.model.layers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.08}>
              <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="font-display text-sm text-primary tracking-[0.3em] uppercase mb-4">0{i + 1}</div>
                <div className="font-display text-3xl mb-3 text-gold italic">{layer.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{layer.description}</p>
                <ul className="space-y-2 border-t hairline pt-5">
                  {layer.points.map((p) => (
                    <li key={p} className="text-sm text-foreground/85 flex gap-3">
                      <span className="text-primary">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="font-display italic text-center text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {t.model.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
