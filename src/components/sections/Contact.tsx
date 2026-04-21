import { FormEvent, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t.contact.sent);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-radial-gold opacity-50 pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <div className="eyebrow mb-4">{t.contact.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.contact.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              <a
                href="mailto:ir@hebashiholding.com"
                className="flex items-center gap-4 p-5 glass hover:border-primary transition-all group"
              >
                <div className="w-12 h-12 grid place-items-center bg-gradient-gold text-primary-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.contact.emailLabel}</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">ir@hebashiholding.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/995577187750"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 border hairline hover:border-primary transition-all group text-sm"
              >
                <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t.contact.whatsapp}</span>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">+995 577 18 77 50</span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="glass p-8 md:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t.contact.name} name="name" required />
              <Field label={t.contact.email} name="email" type="email" required />
            </div>
            <Field label={t.contact.company} name="company" />
            <Field label={t.contact.message} name="message" textarea required />
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {t.contact.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) => {
  const cls =
    "w-full bg-transparent border-b hairline py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground block mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
};
