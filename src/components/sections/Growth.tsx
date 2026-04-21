import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { TrendingUp } from "lucide-react";

export const Growth = () => {
  const { t } = useLang();
  return (
    <section id="growth" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-4">{t.growth.eyebrow}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.growth.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.growth.intro}</p>
              <div className="w-12 h-12 grid place-items-center border hairline border-primary">
                <TrendingUp className="w-5 h-5 text-primary" strokeWidth={1.4} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-px bg-border">
              {t.growth.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="bg-background p-6 md:p-7 flex items-center gap-6 group hover:bg-surface-2 transition-colors duration-500">
                    <span className="font-display text-2xl text-gold w-12 flex-shrink-0">0{i + 1}</span>
                    <span className="text-base md:text-lg text-foreground/90">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.4}>
              <p className="mt-10 text-sm uppercase tracking-[0.25em] text-primary leading-relaxed">
                {t.growth.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
