import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { useLightbox, ZoomableImage } from "@/components/Lightbox";
import forbes from "@/assets/media-forbes.jpeg";
import magazineCover from "@/assets/media-magazine-cover.jpeg";
import phoneForbes from "@/assets/media-phone-forbes.jpeg";
import trophy from "@/assets/portfolio-trophy.jpeg";

const pressImages = [forbes, magazineCover, phoneForbes, trophy];

export const Media = () => {
  const { t } = useLang();
  const { open } = useLightbox();
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

        {/* Featured Forbes quote */}
        <Reveal>
          <button
            type="button"
            onClick={() => open(forbes, "Hani Hebashy featured in Forbes International")}
            className="glass mb-12 relative overflow-hidden group block w-full text-left cursor-zoom-in p-8 md:p-12"
            aria-label="Open Forbes feature in lightbox"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Forbes International</div>
            <p className="font-display italic text-xl md:text-2xl text-foreground/95 max-w-4xl leading-snug">
              "Since the creation of OTI Holding Group, the investment Mr. Hebashy has attracted to Georgia amounts to hundreds of millions of dollars. He has massive ongoing projects that will come to fruition in the coming years. Mr. Hani Hebashy is an investor, a businessman and a successful CEO from Egypt."
            </p>
          </button>
        </Reveal>

        {/* Press grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.media.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="bg-background h-full flex flex-col min-h-[260px] hover:bg-surface-2 transition-colors duration-500 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ZoomableImage src={pressImages[i % pressImages.length]} alt={item.title} caption={`${item.source} — ${item.title}`} />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{item.source}</div>
                  <p className="text-sm text-foreground/85 leading-snug">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
