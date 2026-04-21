import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// World atlas (countries-110m) hosted via CDN
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// HHG-presence ISO numeric codes (matching world-atlas country IDs)
// GE=268, AE=784, EG=818, TR=792, OM=512, MY=458
const ACTIVE_IDS = new Set(["268", "784", "818", "792", "512", "458"]);
const HUB_ID = "268"; // Georgia

type CountryMarker = {
  code: string;
  name: string;
  coords: [number, number]; // [lng, lat]
  hub?: boolean;
};

const MARKERS: CountryMarker[] = [
  { code: "GE", name: "Georgia", coords: [43.3569, 42.3154], hub: true },
  { code: "AE", name: "UAE", coords: [54.3773, 24.4539] },
  { code: "EG", name: "Egypt", coords: [31.2357, 30.0444] },
  { code: "TR", name: "Turkey", coords: [35.2433, 38.9637] },
  { code: "OM", name: "Oman", coords: [58.5577, 23.5859] },
  { code: "MY", name: "Malaysia", coords: [101.9758, 4.2105] },
];

export const GlobalPresence = () => {
  const { t } = useLang();

  return (
    <section id="presence" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <div className="eyebrow mb-4">{t.presence.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.presence.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.presence.intro}</p>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.1}>
          <div className="relative border hairline bg-card p-4 md:p-8 mb-10">
            <div className="w-full" aria-label="HHG global presence map" role="img">
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 175 }}
                width={980}
                height={460}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const id = String(geo.id);
                      const isHub = id === HUB_ID;
                      const isActive = ACTIVE_IDS.has(id);
                      const fill = isHub
                        ? "hsl(var(--primary) / 0.85)"
                        : isActive
                        ? "hsl(var(--primary) / 0.45)"
                        : "hsl(var(--foreground) / 0.07)";
                      const stroke = isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--foreground) / 0.15)";
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fill}
                          stroke={stroke}
                          strokeWidth={0.4}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill },
                            pressed: { outline: "none", fill },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {MARKERS.map((m) => (
                  <Marker key={m.code} coordinates={m.coords}>
                    <circle
                      r={m.hub ? 11 : 8}
                      fill="hsl(var(--primary))"
                      opacity={0.2}
                    >
                      <animate
                        attributeName="r"
                        values={`${m.hub ? 11 : 8};${m.hub ? 18 : 14};${m.hub ? 11 : 8}`}
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.2;0;0.2"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      r={m.hub ? 4.5 : 3.5}
                      fill="hsl(var(--primary))"
                      stroke="hsl(var(--background))"
                      strokeWidth={1}
                    />
                    <text
                      x={m.hub ? 8 : 6}
                      y={3}
                      fill="hsl(var(--foreground))"
                      fontSize={9}
                      style={{ letterSpacing: "0.05em", paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                    >
                      {m.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t hairline">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/85">{t.presence.hubLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--primary) / 0.55)" }} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/85">{t.presence.legendActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--foreground) / 0.18)" }} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t.presence.legendOther}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Country chips */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {t.presence.countries.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.05}>
              <div className={`bg-background p-5 text-center h-full grid place-items-center ${c.hub ? "border-t-2" : ""}`} style={c.hub ? { borderTopColor: "hsl(var(--primary))" } : undefined}>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-foreground/85 mb-1">{c.name}</div>
                  {c.hub && (
                    <div className="text-[9px] uppercase tracking-[0.3em] text-primary">{t.presence.hubLabel}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
