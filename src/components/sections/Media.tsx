import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { PlayCircle } from "lucide-react";

export const Media = () => {
  const { t } = useLang();
  return (
    <section id="media" className="py-28 md:py-36 bg-surface-2/40 relative">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.media.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.media.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.media.intro}</p>
          </Reveal>
        </div>

        {/* Featured video placeholder */}
        <Reveal>
          <div className="aspect-video glass mb-12 grid place-items-center group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial-gold opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative text-center">
              <PlayCircle className="w-20 h-20 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Featured Talk Placeholder</div>
            </div>
          </div>
        </Reveal>

        {/* Press grid (placeholder) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.media.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-background p-8 h-full flex flex-col justify-between min-h-[180px] hover:bg-surface-2 transition-colors duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{item.source}</div>
                <div className="space-y-2">
                  <div className="h-8 border hairline grid place-items-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t.media.placeholder}
                  </div>
                  <p className="text-sm text-foreground/80 leading-snug">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
