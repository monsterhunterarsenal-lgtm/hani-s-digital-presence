import { createContext, useCallback, useContext, useEffect, useState, ReactNode, MouseEvent } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import { cn } from "@/lib/utils";

type LightboxContextValue = {
  open: (src: string, alt?: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState<string>("");
  const [zoom, setZoom] = useState(1);

  const open = useCallback((s: string, a = "") => {
    setSrc(s);
    setAlt(a);
    setZoom(1);
  }, []);

  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 4));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
      if (e.key === "0") setZoom(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src]);

  const toggleZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => (z >= 2.5 ? 1 : z + 0.75));
  };

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <Dialog open={!!src} onOpenChange={(o) => !o && close()}>
        <DialogContent
          className="max-w-[95vw] w-[95vw] h-[92vh] p-0 border-0 bg-background/95 backdrop-blur-xl shadow-deep flex items-center justify-center overflow-hidden sm:rounded-none [&>button]:hidden"
        >
          {src && (
            <>
              <div
                className="absolute inset-0 overflow-auto flex items-center justify-center cursor-zoom-in"
                onClick={toggleZoom}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{ transform: `scale(${zoom})` }}
                  className="max-w-full max-h-[92vh] object-contain transition-transform duration-300 ease-out select-none"
                  draggable={false}
                />
              </div>

              {/* Controls */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.5, 1)); }}
                  className="w-10 h-10 grid place-items-center bg-background/80 hover:bg-background border hairline text-foreground transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.5, 4)); }}
                  className="w-10 h-10 grid place-items-center bg-background/80 hover:bg-background border hairline text-foreground transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={close}
                  className="w-10 h-10 grid place-items-center bg-primary/90 hover:bg-primary text-primary-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {alt && (
                <div className="absolute bottom-0 inset-x-0 p-4 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground bg-gradient-to-t from-background/90 to-transparent pointer-events-none">
                  {alt}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used inside LightboxProvider");
  return ctx;
};

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  caption?: string;
};

export const ZoomableImage = ({ src, alt, className, loading = "lazy", caption }: ZoomableImageProps) => {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      onClick={() => open(src, caption ?? alt)}
      className="absolute inset-0 w-full h-full block cursor-zoom-in group/zoom"
      aria-label={`Open ${alt} in lightbox`}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("w-full h-full object-cover transition-transform duration-700 group-hover/zoom:scale-105", className)}
      />
      <span className="absolute top-3 right-3 w-9 h-9 grid place-items-center bg-background/70 backdrop-blur-sm border hairline text-primary opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-4 h-4" />
      </span>
    </button>
  );
};
