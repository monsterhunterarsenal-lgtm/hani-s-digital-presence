import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Cpu } from "lucide-react";

export const BusinessModel = () => {
  const { t } = useLang();
  return (
    <section id="model" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.businessModel.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.businessModel.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.businessModel.intro}</p>
          </Reveal>
        </div>

        {/* Three layers */}
        <div className="grid md:grid-cols-3 gap-px bg-border mb-20">
          {t.businessModel.layers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.08}>
              <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="font-display text-sm text-primary tracking-[0.3em] uppercase mb-4">0{i + 1}</div>
                <div className="font-display text-2xl mb-3">{layer.title}</div>
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

        {/* AI Strategic Control Layer */}
        <Reveal>
          <div className="glass p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold-soft opacity-30 pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 grid place-items-center border hairline mb-6 border-primary">
                  <Cpu className="w-5 h-5 text-primary" strokeWidth={1.4} />
                </div>
                <div className="eyebrow mb-3">AI Layer</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5">{t.businessModel.aiTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.businessModel.aiIntro}</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                  {t.businessModel.aiPoints.map((p) => (
                    <li key={p} className="border hairline p-5 text-sm text-foreground/90 hover:border-primary transition-colors">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="font-display italic text-lg text-foreground/90 border-l-2 border-primary pl-5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-5">
                  "{t.businessModel.aiQuote}"
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
