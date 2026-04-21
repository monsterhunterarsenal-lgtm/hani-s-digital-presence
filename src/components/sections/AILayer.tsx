import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { LineChart, Activity, Cpu, ShieldCheck } from "lucide-react";

const ICONS = [LineChart, Activity, Cpu, ShieldCheck];

export const AILayer = () => {
  const { t } = useLang();
  return (
    <section id="sectionAI" className="py-28 md:py-36 relative" style={{ background: "hsl(var(--card))" }}>
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <Reveal>
              <div className="eyebrow mb-4">{t.ai.eyebrow}</div>
              <h2 className="font-display h2-display mb-6">{t.ai.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg">{t.ai.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px bg-[hsl(var(--hairline-strong))] border hairline-strong">
              {t.ai.apps.map((app, i) => {
                const Icon = ICONS[i] ?? Cpu;
                return (
                  <div key={app} className="bg-[hsl(var(--card))] p-8 min-h-[160px] flex flex-col justify-between">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.25} />
                    <div className="font-display text-lg mt-6 leading-snug">{app}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
