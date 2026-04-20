import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Layers, Zap, Globe2, LineChart, Cpu, Handshake } from "lucide-react";

const ICONS = [Layers, Zap, Globe2, LineChart, Cpu, Handshake];

export const Expertise = () => {
  const { t } = useLang();
  return (
    <section id="expertise" className="py-28 md:py-36 relative bg-surface-2/40">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.expertise.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.expertise.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.expertise.intro}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {t.expertise.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                  <div className="w-12 h-12 grid place-items-center border hairline mb-6 group-hover:border-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.4} />
                  </div>
                  <div className="font-display text-2xl mb-3">{item.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
