import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { TrendingUp, Building2, HardHat, Hotel, Radio, Film, GraduationCap, Trophy } from "lucide-react";

const ICONS = [TrendingUp, Building2, HardHat, Hotel, Radio, Film, GraduationCap, Trophy];

export const Sectors = () => {
  const { t } = useLang();
  return (
    <section id="sectionSectors" className="py-28 md:py-36 relative" style={{ background: "hsl(var(--card))" }}>
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.sectors.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.sectors.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sectors.intro}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--hairline-strong))] border hairline-strong">
          {t.sectors.items.map((item, i) => {
            const Icon = ICONS[i] ?? TrendingUp;
            return (
              <Reveal key={item} delay={(i % 4) * 0.06}>
                <div className="bg-[hsl(var(--card))] p-8 min-h-[160px] flex flex-col justify-between">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.25} />
                  <div className="font-display text-lg leading-snug mt-6">{item}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
