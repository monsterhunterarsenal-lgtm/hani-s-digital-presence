import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Sectors = () => {
  const { t } = useLang();
  return (
    <section id="sectors" className="py-28 md:py-36 relative bg-surface-2/40">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.sectors.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.sectors.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.sectors.intro}</p>
          </Reveal>
        </div>

        <div className="space-y-12">
          {t.sectors.groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-sm text-primary tracking-[0.3em] uppercase">0{gi + 1}</span>
                  <span className="font-display text-xl md:text-2xl">{group.label}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="bg-background p-6 hover:bg-surface-2 transition-colors duration-500 text-sm md:text-base text-foreground/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
