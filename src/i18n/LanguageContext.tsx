import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { content, Lang, Content } from "./content";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Content;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("hh_lang") as Lang) || "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("hh_lang", lang);
  }, [lang, dir]);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    dir,
    t: content[lang],
    setLang,
    toggle: () => setLang((p) => (p === "en" ? "ar" : "en")),
  }), [lang, dir]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
