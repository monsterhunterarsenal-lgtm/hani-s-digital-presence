import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Globe2, Layers, Cpu } from "lucide-react";

const ICONS = [Globe2, Layers, Cpu];

export const CompetitiveAdvantage = () => {
  const { t } = useLang();
  return (
    <section id="advantage" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.advantage.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.advantage.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.advantage.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {t.advantage.pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                  <div className="w-12 h-12 grid place-items-center border hairline mb-6 group-hover:border-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.4} />
                  </div>
                  <div className="font-display text-2xl md:text-3xl mb-3 italic text-gold">{p.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
