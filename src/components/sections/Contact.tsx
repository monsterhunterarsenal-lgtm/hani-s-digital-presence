import { FormEvent, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <section id="sectionContact" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-radial-gold opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.contact.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.contact.intro}</p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-4">
              <ContactCard icon={MapPin} label={t.contact.hqLabel} value={t.contact.hq} />
              <ContactCard icon={Phone} label={t.contact.phoneLabel} value={t.contact.phone} href={`tel:${t.contact.phone.replace(/\s/g, "")}`} />
              <ContactCard icon={Mail} label={t.contact.emailLabel} value={t.contact.email} href={`mailto:${t.contact.email}`} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="border hairline-strong p-10 space-y-7"
              style={{ background: "hsl(var(--primary) / 0.02)" }}
            >
              <Field label={t.contact.name} name="name" required />
              <Field label={t.contact.emailField} name="email" type="email" required />
              <Field label={t.contact.message} name="message" textarea required />
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full disabled:opacity-60"
              >
                {t.contact.submit}
              </button>
              {submitted && (
                <div className="text-center text-sm text-primary">{t.contact.sent}</div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon: Icon, label, value, href,
}: { icon: typeof MapPin; label: string; value: string; href?: string }) => {
  const inner = (
    <div className="border hairline-strong p-6 flex items-start gap-4 hover:border-primary transition-colors group">
      <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">{label}</div>
        <div className="text-base text-foreground group-hover:text-primary transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
};

const Field = ({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) => {
  const cls =
    "w-full bg-transparent border-0 border-b py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground block mb-2">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className={cls}
          style={{ borderBottomColor: "hsl(var(--primary-deep))" }}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "hsl(var(--primary))")}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = "hsl(var(--primary-deep))")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={cls}
          style={{ borderBottomColor: "hsl(var(--primary-deep))" }}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "hsl(var(--primary))")}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = "hsl(var(--primary-deep))")}
        />
      )}
    </label>
  );
};
