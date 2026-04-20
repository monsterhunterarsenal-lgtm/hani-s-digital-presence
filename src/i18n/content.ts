export type Lang = "en" | "ar";

export interface Content {
  nav: { about: string; expertise: string; portfolio: string; media: string; testimonials: string; contact: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    journey: { year: string; place: string; note: string }[];
    role: string;
    union: string;
  };
  expertise: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    platforms: { name: string; tag: string; description: string }[];
    sectors: string[];
    sectorsTitle: string;
  };
  media: {
    eyebrow: string;
    title: string;
    intro: string;
    placeholder: string;
    items: { source: string; title: string; placeholder: boolean }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    placeholder: { quote: string; author: string; role: string }[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    pillars: string[];
    quote: string;
    quoteAuthor: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    company: string;
    message: string;
    submit: string;
    whatsapp: string;
    emailLabel: string;
    sent: string;
  };
  footer: { tagline: string; rights: string };
  langToggle: string;
}

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: "About", expertise: "Expertise", portfolio: "Ventures", media: "Media", testimonials: "Voices", contact: "Contact" },
    hero: {
      eyebrow: "Hani Hebashy — Chairman & CEO, Hebashy Holding Group",
      titleLine1: "Building Cross-Border",
      titleLine2: "Businesses Driven by Values",
      subtitle:
        "From Egypt to seven countries — a platform builder transforming fragmented opportunities into scalable, asset-backed ecosystems enhanced by intelligence and integration.",
      ctaPrimary: "Partner With Hani",
      ctaSecondary: "Explore the Vision",
      stats: [
        { value: "2008", label: "Founded" },
        { value: "7", label: "Countries" },
        { value: "970+", label: "Professionals" },
        { value: "8", label: "Core Sectors" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A cross-border leader. A platform builder.",
      lead:
        "We are not building for the present moment. We are building platforms that anticipate the future — where capital, opportunity, and intelligence converge.",
      paragraphs: [
        "Hani Hebashy is the Chairman & CEO of Hebashy Holding Group (HHG) and President of the Georgian-Arab-African Business Union — a diversified international holding platform operating across seven countries and eight core industries.",
        "His journey began in Egypt with youth employment initiatives, expanded through Saudi Arabia in CSR and sustainability, took on global perspective in Qatar and Malaysia, and culminated in Georgia with the founding of Hebashy Holding Group — a next-generation institutional platform combining strategic geography, integrated operations, AI-driven intelligence and vision-led leadership.",
        "His approach: build with integrity, scale with discipline, and treat partnerships as long-term strategic assets.",
      ],
      journey: [
        { year: "2008", place: "Egypt", note: "Youth employment & enterprise" },
        { year: "2012", place: "Saudi Arabia", note: "CSR & sustainability" },
        { year: "2015", place: "Qatar & Malaysia", note: "Global exposure" },
        { year: "Today", place: "Georgia", note: "Founded Hebashy Holding Group" },
      ],
      role: "Chairman & CEO, Hebashy Holding Group",
      union: "President, Georgian-Arab-African Business Union",
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Six disciplines. One operating system.",
      intro:
        "An integrated capability stack designed to capture value across the full lifecycle — from origination to monetization.",
      items: [
        { title: "Platform Creation", description: "Strategic investments in real assets and structuring of scalable, high-potential opportunities." },
        { title: "Platform Activation", description: "Monetization through integrated operations, services, and diversified revenue models." },
        { title: "Cross-Border Investment", description: "Hub-and-network expansion across Georgia, the GCC, North Africa and Southeast Asia." },
        { title: "Capital Markets Readiness", description: "Institutional governance and disciplined capital allocation aligned to global standards." },
        { title: "AI & Intelligent Systems", description: "AI as a horizontal control layer — investment intelligence, predictive analytics, automation." },
        { title: "Economic Diplomacy", description: "Leveraging cross-border relationships to unlock opportunity and mitigate geopolitical risk." },
      ],
    },
    portfolio: {
      eyebrow: "Ventures",
      title: "Operating platforms shaping markets.",
      intro:
        "HHG executes through specialized subsidiaries — operationally autonomous, strategically centralized, and data-driven by design.",
      platforms: [
        { name: "ZMC", tag: "Construction & Engineering", description: "Construction and engineering execution across HHG’s real-asset portfolio." },
        { name: "CTC", tag: "Telecommunications", description: "Telecommunications and outsourcing solutions powering enterprise infrastructure." },
        { name: "OTI Real Estate", tag: "Real Estate", description: "Real estate services and development across strategic geographies." },
        { name: "Caucasus Paradise", tag: "Tourism & Hospitality", description: "A tourism and travel platform anchored in HHG’s Georgian hub." },
      ],
      sectorsTitle: "Eight core sectors",
      sectors: [
        "Investment & Asset Management",
        "Real Estate Development",
        "Construction & Engineering",
        "Hospitality & Tourism",
        "Telecommunications",
        "Media & Production",
        "Education & Development",
        "Sports Investment",
      ],
    },
    media: {
      eyebrow: "Media & Press",
      title: "Featured in conversation.",
      intro: "Speaking on cross-border investment, platform building, and the future of emerging-market capital.",
      placeholder: "Press logo",
      items: [
        { source: "Press Feature", title: "Add featured publication", placeholder: true },
        { source: "Press Feature", title: "Add featured publication", placeholder: true },
        { source: "Speaking", title: "Add speaking engagement or talk", placeholder: true },
        { source: "Interview", title: "Add interview or podcast", placeholder: true },
      ],
    },
    testimonials: {
      eyebrow: "Voices",
      title: "Trusted by partners across continents.",
      intro: "Add real testimonials from investors, partners, and institutional stakeholders.",
      placeholder: [
        { quote: "Add a testimonial quote from a partner, investor, or institutional stakeholder.", author: "Add Name", role: "Add Title, Organization" },
        { quote: "Add a second testimonial. Keep voice authentic — short, specific, attributable.", author: "Add Name", role: "Add Title, Organization" },
        { quote: "Add a third testimonial reflecting cross-border execution or long-term partnership.", author: "Add Name", role: "Add Title, Organization" },
      ],
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "Three principles. Held without compromise.",
      pillars: ["Values before profits.", "Sustainability before scale.", "Reputation before revenue."],
      quote:
        "We are not building for the present moment. We are building platforms that anticipate the future — where capital, opportunity, and intelligence converge to shape what comes next.",
      quoteAuthor: "Hani Hebashy",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a conversation.",
      intro: "For investment, partnership, speaking, or media inquiries.",
      name: "Full name",
      email: "Email address",
      company: "Company / Organization",
      message: "How can we help?",
      submit: "Send Message",
      whatsapp: "WhatsApp",
      emailLabel: "Email",
      sent: "Thank you. Your message has been received.",
    },
    footer: {
      tagline: "Building platforms that shape what comes next.",
      rights: "All rights reserved.",
    },
    langToggle: "العربية",
  },
  ar: {
    nav: { about: "نبذة", expertise: "الخبرات", portfolio: "المشاريع", media: "الإعلام", testimonials: "آراء", contact: "تواصل" },
    hero: {
      eyebrow: "هاني حبشي — رئيس مجلس الإدارة والرئيس التنفيذي لمجموعة حبشي القابضة",
      titleLine1: "نبني شركات عابرة للحدود",
      titleLine2: "تقودها القيم قبل الأرباح",
      subtitle:
        "من مصر إلى سبع دول — باني منصات يحوّل الفرص المتفرقة إلى منظومات قابلة للتوسع، مدعومة بالأصول، ومُعزَّزة بالذكاء والتكامل.",
      ctaPrimary: "ابدأ شراكة",
      ctaSecondary: "اكتشف الرؤية",
      stats: [
        { value: "٢٠٠٨", label: "سنة التأسيس" },
        { value: "٧", label: "دول" },
        { value: "+٩٧٠", label: "محترف" },
        { value: "٨", label: "قطاعات رئيسية" },
      ],
    },
    about: {
      eyebrow: "نبذة",
      title: "قائد عابر للحدود. باني منصات.",
      lead:
        "نحن لا نبني للحظة الراهنة. نبني منصات تستشرف المستقبل — حيث يلتقي رأس المال والفرصة والذكاء.",
      paragraphs: [
        "هاني حبشي هو رئيس مجلس الإدارة والرئيس التنفيذي لمجموعة حبشي القابضة (HHG)، ورئيس اتحاد الأعمال الجورجي العربي الإفريقي — منصة قابضة دولية متنوعة تعمل عبر سبع دول وثمانية قطاعات أساسية.",
        "بدأت رحلته في مصر بمبادرات تشغيل الشباب وريادة الأعمال، وامتدت في المملكة العربية السعودية عبر المسؤولية المجتمعية والاستدامة، واكتسبت بُعدًا عالميًا في قطر وماليزيا، ثم تُوّجت في جورجيا بتأسيس مجموعة حبشي القابضة — منصة مؤسسية من الجيل الجديد تجمع بين الموقع الجغرافي الاستراتيجي والعمليات المتكاملة والذكاء الاصطناعي والقيادة المُلهَمة.",
        "منهجه: نبني بالنزاهة، ونتوسع بالانضباط، ونتعامل مع الشراكات بوصفها أصولًا استراتيجية طويلة الأجل.",
      ],
      journey: [
        { year: "٢٠٠٨", place: "مصر", note: "تشغيل الشباب وريادة الأعمال" },
        { year: "٢٠١٢", place: "السعودية", note: "المسؤولية المجتمعية والاستدامة" },
        { year: "٢٠١٥", place: "قطر وماليزيا", note: "حضور دولي" },
        { year: "اليوم", place: "جورجيا", note: "تأسيس مجموعة حبشي القابضة" },
      ],
      role: "رئيس مجلس الإدارة والرئيس التنفيذي، مجموعة حبشي القابضة",
      union: "رئيس اتحاد الأعمال الجورجي العربي الإفريقي",
    },
    expertise: {
      eyebrow: "الخبرات",
      title: "ستة تخصصات. منظومة واحدة.",
      intro: "منظومة قدرات متكاملة مصممة لاحتجاز القيمة عبر دورة الحياة كاملة — من النشأة إلى التحقيق.",
      items: [
        { title: "إنشاء المنصات", description: "استثمارات استراتيجية في الأصول الحقيقية وهيكلة فرص قابلة للتوسع." },
        { title: "تفعيل المنصات", description: "تحقيق الإيرادات من خلال عمليات وخدمات متكاملة ونماذج دخل متنوعة." },
        { title: "الاستثمار العابر للحدود", description: "نموذج توسعي قائم على المحاور والشبكات بين جورجيا والخليج وشمال إفريقيا وجنوب شرق آسيا." },
        { title: "الجاهزية لأسواق المال", description: "حوكمة مؤسسية وتخصيص منضبط لرأس المال متوافق مع المعايير العالمية." },
        { title: "الذكاء الاصطناعي والأنظمة الذكية", description: "الذكاء الاصطناعي كطبقة تحكم أفقية — تحليلات وتنبؤات وأتمتة." },
        { title: "الدبلوماسية الاقتصادية", description: "الاستفادة من العلاقات العابرة للحدود لفتح فرص واحتواء المخاطر الجيوسياسية." },
      ],
    },
    portfolio: {
      eyebrow: "المشاريع",
      title: "منصات تشغيلية تصنع الأسواق.",
      intro: "تنفّذ المجموعة من خلال شركات متخصصة — مستقلة تشغيليًا، مركزية استراتيجيًا، ومدفوعة بالبيانات.",
      platforms: [
        { name: "ZMC", tag: "إنشاءات وهندسة", description: "تنفيذ أعمال الإنشاءات والهندسة عبر محفظة الأصول الحقيقية للمجموعة." },
        { name: "CTC", tag: "اتصالات", description: "حلول الاتصالات والإسناد التشغيلي لدعم البنية التحتية للشركات." },
        { name: "OTI Real Estate", tag: "عقارات", description: "خدمات وتطوير عقاري عبر مواقع جغرافية استراتيجية." },
        { name: "Caucasus Paradise", tag: "سياحة وضيافة", description: "منصة سياحة وسفر مرتكزة في محور المجموعة الجورجي." },
      ],
      sectorsTitle: "ثمانية قطاعات رئيسية",
      sectors: [
        "الاستثمار وإدارة الأصول",
        "التطوير العقاري",
        "الإنشاءات والهندسة",
        "الضيافة والسياحة",
        "الاتصالات",
        "الإعلام والإنتاج",
        "التعليم والتطوير",
        "الاستثمار الرياضي",
      ],
    },
    media: {
      eyebrow: "الإعلام والصحافة",
      title: "حضور إعلامي مؤثر.",
      intro: "حديث متواصل عن الاستثمار العابر للحدود وبناء المنصات ومستقبل رأس المال في الأسواق الناشئة.",
      placeholder: "شعار جهة إعلامية",
      items: [
        { source: "تغطية صحفية", title: "أضف اسم الجهة الإعلامية", placeholder: true },
        { source: "تغطية صحفية", title: "أضف اسم الجهة الإعلامية", placeholder: true },
        { source: "ندوات", title: "أضف فعالية أو حديث رئيسي", placeholder: true },
        { source: "مقابلات", title: "أضف مقابلة أو بودكاست", placeholder: true },
      ],
    },
    testimonials: {
      eyebrow: "آراء",
      title: "موضع ثقة شركاء حول العالم.",
      intro: "أضف شهادات حقيقية من المستثمرين والشركاء والجهات المؤسسية.",
      placeholder: [
        { quote: "أضف شهادة من شريك أو مستثمر أو جهة مؤسسية.", author: "الاسم", role: "المنصب، الجهة" },
        { quote: "أضف شهادة ثانية بصوت أصيل — قصيرة، محددة، وقابلة للنسب.", author: "الاسم", role: "المنصب، الجهة" },
        { quote: "أضف شهادة ثالثة تعكس التنفيذ العابر للحدود أو الشراكة طويلة الأجل.", author: "الاسم", role: "المنصب، الجهة" },
      ],
    },
    philosophy: {
      eyebrow: "الفلسفة",
      title: "ثلاثة مبادئ. لا تساوم.",
      pillars: ["القيم قبل الأرباح.", "الاستدامة قبل التوسع.", "السمعة قبل الإيرادات."],
      quote:
        "نحن لا نبني للحظة الراهنة. نبني منصات تستشرف المستقبل — حيث يلتقي رأس المال والفرصة والذكاء ليصنعوا ما هو آتٍ.",
      quoteAuthor: "هاني حبشي",
    },
    contact: {
      eyebrow: "تواصل",
      title: "لنبدأ حديثًا.",
      intro: "للاستفسارات الاستثمارية والشراكات وطلبات المشاركة الإعلامية.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      company: "الشركة / الجهة",
      message: "كيف يمكننا المساعدة؟",
      submit: "إرسال الرسالة",
      whatsapp: "واتساب",
      emailLabel: "البريد الإلكتروني",
      sent: "شكرًا لك. تم استلام رسالتك.",
    },
    footer: {
      tagline: "نبني منصات تصنع ما هو آتٍ.",
      rights: "جميع الحقوق محفوظة.",
    },
    langToggle: "English",
  },
};
