import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Cpu } from "lucide-react";

export const AILayer = () => {
  const { t } = useLang();
  return (
    <section id="ai" className="py-28 md:py-36 relative bg-surface-2/40">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <Reveal>
          <div className="glass p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold-soft opacity-30 pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 grid place-items-center border hairline mb-6 border-primary">
                  <Cpu className="w-5 h-5 text-primary" strokeWidth={1.4} />
                </div>
                <div className="eyebrow mb-3">{t.ai.eyebrow}</div>
                <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5">{t.ai.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.ai.intro}</p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                  {t.ai.points.map((p) => (
                    <li key={p} className="border hairline p-5 text-sm text-foreground/90 hover:border-primary transition-colors">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="font-display italic text-lg text-foreground/90 border-l-2 border-primary pl-5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-5">
                  "{t.ai.quote}"
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
