import { useEffect, useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric IDs as used by world-atlas
const HUB_ID = "268"; // Georgia
const ACTIVE_IDS = new Set(["268", "682", "784", "818", "792", "512", "458"]);

type CountryMarker = {
  code: string;
  name: string;
  coords: [number, number];
  hub?: boolean;
};

const MARKERS: CountryMarker[] = [
  { code: "GE", name: "Georgia", coords: [43.3569, 42.3154], hub: true },
  { code: "SA", name: "Saudi Arabia", coords: [45.0792, 23.8859] },
  { code: "AE", name: "UAE", coords: [54.3773, 24.4539] },
  { code: "EG", name: "Egypt", coords: [31.2357, 30.0444] },
  { code: "TR", name: "Turkey", coords: [35.2433, 38.9637] },
  { code: "OM", name: "Oman", coords: [58.5577, 23.5859] },
  { code: "MY", name: "Malaysia", coords: [101.9758, 4.2105] },
];

const WIDTH = 980;
const HEIGHT = 460;

export const GlobalPresence = () => {
  const { t } = useLang();
  const [countries, setCountries] = useState<Feature<Geometry, { id: string }>[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topo: any) => {
        if (cancelled) return;
        const fc = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry, { id: string }>;
        setCountries(fc.features);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const { pathFn, projection } = useMemo(() => {
    const proj = geoEqualEarth()
      .scale(175)
      .translate([WIDTH / 2, HEIGHT / 2]);
    return { pathFn: geoPath(proj), projection: proj };
  }, []);

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

        <Reveal delay={0.1}>
          <div className="relative border hairline bg-card p-4 md:p-8 mb-10">
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="w-full h-auto"
              role="img"
              aria-label="HHG global presence map"
            >
              <g>
                {countries.map((geo, i) => {
                  const id = String((geo as { id?: string | number }).id ?? "");
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
                  const d = pathFn(geo) ?? "";
                  return <path key={i} d={d} fill={fill} stroke={stroke} strokeWidth={0.4} />;
                })}
              </g>

              {MARKERS.map((m) => {
                const p = projection(m.coords);
                if (!p) return null;
                const [x, y] = p;
                const r = m.hub ? 4.5 : 3.5;
                const haloR = m.hub ? 11 : 8;
                return (
                  <g key={m.code} transform={`translate(${x},${y})`}>
                    <circle r={haloR} fill="hsl(var(--primary))" opacity={0.2}>
                      <animate attributeName="r" values={`${haloR};${haloR + 7};${haloR}`} dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle r={r} fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth={1} />
                    <text
                      x={m.hub ? 8 : 6}
                      y={3}
                      fill="hsl(var(--foreground))"
                      fontSize={9}
                      style={{ letterSpacing: "0.05em", paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                    >
                      {m.name}
                    </text>
                  </g>
                );
              })}
            </svg>

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
