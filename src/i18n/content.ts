export type Lang = "en" | "ar";

export interface Content {
  nav: {
    about: string;
    model: string;
    platforms: string;
    sectors: string;
    presence: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mapHubLabel: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  model: {
    eyebrow: string;
    title: string;
    intro: string;
    layers: { num: string; title: string; description: string }[];
  };
  platforms: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { name: string; description: string }[];
    learnMore: string;
  };
  sectors: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  presence: {
    eyebrow: string;
    title: string;
    intro: string;
    hubLabel: string;
    marketLabel: string;
    countries: { code: string; name: string; hub?: boolean }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string;
    apps: string[];
  };
  esg: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: string[];
    note: string;
  };
  leadership: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    bio: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    hqLabel: string;
    hq: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    name: string;
    emailField: string;
    message: string;
    submit: string;
    sent: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    location: string;
    rights: string;
  };
  langToggle: string;
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: "About",
      model: "Model",
      platforms: "Platforms",
      sectors: "Sectors",
      presence: "Presence",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      eyebrow: "Institutional Holding Platform · EST. 2008",
      title: "Building Scalable Business Platforms Across Emerging Markets",
      subtitle:
        "Integrated ecosystems powered by assets, intelligence, and strategic execution.",
      ctaPrimary: "Explore Our Platforms",
      ctaSecondary: "Corporate Profile",
      mapHubLabel: "Georgia · Strategic Hub",
      stats: [
        { value: "2008", label: "Established" },
        { value: "7", label: "Countries" },
        { value: "8", label: "Sectors" },
        { value: "970+", label: "Professionals" },
      ],
    },
    about: {
      eyebrow: "Who We Are",
      title: "An Institutional Platform Builder",
      paragraphs: [
        "Hebashi Holding Group (HHG) is a diversified international holding platform that builds, operates, and scales integrated business ecosystems across high-growth sectors.",
        "Established in 2008, HHG operates across multiple markets through a centralised structure designed for strategic control, capital efficiency, and long-term value creation.",
      ],
    },
    model: {
      eyebrow: "Operating Model",
      title: "How We Create Value",
      intro: "A lifecycle-driven model designed for scalability, resilience, and performance.",
      layers: [
        { num: "01", title: "Create", description: "Identifying and structuring high-potential opportunities across real assets and growth sectors." },
        { num: "02", title: "Activate", description: "Driving monetisation through operations, services, and market execution." },
        { num: "03", title: "Enable", description: "Supporting platforms through technology, infrastructure, and intelligent systems." },
      ],
    },
    platforms: {
      eyebrow: "Our Platforms",
      title: "Specialised Operating Subsidiaries",
      intro: "A portfolio of specialised platforms delivering execution across sectors and geographies.",
      cards: [
        { name: "ZMC", description: "Construction and engineering execution platform." },
        { name: "CTC", description: "Telecommunications and outsourcing solutions." },
        { name: "OTI Real Estate", description: "Real estate development and services." },
        { name: "Caucasus Paradise", description: "Tourism and hospitality platform." },
        { name: "OTI Estate", description: "Integrated residential and mixed-use developments across Georgia and Saudi Arabia." },
        { name: "OBC", description: "OTI Business Centre — premium commercial workspace operations." },
        { name: "Natural Pearl", description: "Hospitality and lifestyle platform across regional destinations." },
        { name: "GIA", description: "Media and institutional outreach supporting brand and partnerships." },
      ],
      learnMore: "Learn more about our platforms",
    },
    sectors: {
      eyebrow: "Sector Exposure",
      title: "Diversified Across Eight Industries",
      intro: "Diversified across high-growth industries to enable integration and cross-sector value.",
      items: [
        "Investment & Asset Management",
        "Real Estate Development",
        "Construction & Engineering",
        "Hospitality & Tourism",
        "Telecommunications",
        "Media & Production",
        "Education & Learning",
        "Sports Investment",
      ],
    },
    presence: {
      eyebrow: "Global Footprint",
      title: "A Hub-and-Network Model",
      intro: "HHG operates through a hub-and-network model, with Georgia serving as a strategic gateway connecting regional markets.",
      hubLabel: "Strategic Hub",
      marketLabel: "Market",
      countries: [
        { code: "GE", name: "Georgia", hub: true },
        { code: "AE", name: "United Arab Emirates" },
        { code: "EG", name: "Egypt" },
        { code: "TR", name: "Turkey" },
        { code: "OM", name: "Oman" },
        { code: "MY", name: "Malaysia" },
      ],
    },
    ai: {
      eyebrow: "AI & Innovation",
      title: "Intelligence as a Core Layer",
      intro:
        "Artificial Intelligence and data systems are embedded across HHG operations to enhance decision-making, optimise performance, and enable scalable growth.",
      apps: ["Investment Intelligence", "Predictive Analytics", "Process Automation", "Performance Monitoring"],
    },
    esg: {
      eyebrow: "ESG Commitment",
      title: "Sustainable and Responsible Growth",
      intro:
        "HHG aligns its operations with global ESG frameworks — integrating sustainability, governance, and social impact into its business model.",
      pillars: [
        "Economic Growth",
        "Governance & Integrity",
        "Innovation",
        "Environmental Responsibility",
        "Partnerships",
        "Human Capital",
      ],
      note: "Aligned with UN SDGs · Progressing toward GRI and IFC Performance Standards.",
    },
    leadership: {
      eyebrow: "Leadership",
      title: "Visionary Leadership",
      name: "Hani Hebashy",
      role: "Chairman & CEO",
      bio: "Leading HHG with a vision focused on building scalable, future-ready platforms across global markets.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      intro: "For general inquiries, partnerships, or institutional engagement, please reach out.",
      hqLabel: "Headquarters",
      hq: "129 Merab Aleksidze, Tbilisi, Georgia, GE 0162",
      phoneLabel: "Phone",
      phone: "+995 555 604 000",
      emailLabel: "Email",
      email: "info@hebashigroup.com",
      name: "Name",
      emailField: "Email",
      message: "Message",
      submit: "Send Message",
      sent: "Message sent successfully.",
    },
    footer: {
      tagline: "Building integrated platforms for long-term value.",
      quickLinks: "Quick Links",
      location: "Tbilisi · Established 2008",
      rights: "All rights reserved.",
    },
    langToggle: "العربية",
  },
  ar: {
    nav: {
      about: "نبذة",
      model: "النموذج",
      platforms: "المنصات",
      sectors: "القطاعات",
      presence: "الحضور",
      contact: "تواصل",
      cta: "تواصل معنا",
    },
    hero: {
      eyebrow: "منصة قابضة مؤسسية · تأسست 2008",
      title: "بناء منصات أعمال قابلة للتوسع في الأسواق الناشئة",
      subtitle: "منظومات متكاملة مدعومة بالأصول والذكاء والتنفيذ الاستراتيجي.",
      ctaPrimary: "استكشف منصاتنا",
      ctaSecondary: "الملف المؤسسي",
      mapHubLabel: "جورجيا · المحور الاستراتيجي",
      stats: [
        { value: "2008", label: "تأسست" },
        { value: "7", label: "دول" },
        { value: "8", label: "قطاعات" },
        { value: "+970", label: "محترف" },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "باني منصات مؤسسية",
      paragraphs: [
        "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو.",
        "تأسست عام 2008، وتعمل المجموعة عبر أسواق متعددة من خلال هيكل مركزي مصمّم للسيطرة الاستراتيجية وكفاءة رأس المال وخلق قيمة طويلة الأجل.",
      ],
    },
    model: {
      eyebrow: "نموذج التشغيل",
      title: "كيف نخلق القيمة",
      intro: "نموذج مدفوع بدورة الحياة، مصمّم للتوسع والمرونة والأداء.",
      layers: [
        { num: "01", title: "الإنشاء", description: "تحديد وهيكلة فرص عالية الإمكانات في الأصول الحقيقية وقطاعات النمو." },
        { num: "02", title: "التفعيل", description: "تحقيق الإيرادات عبر العمليات والخدمات والتنفيذ في الأسواق." },
        { num: "03", title: "التمكين", description: "دعم المنصات عبر التقنية والبنية التحتية والأنظمة الذكية." },
      ],
    },
    platforms: {
      eyebrow: "منصاتنا",
      title: "شركات تشغيلية متخصصة",
      intro: "محفظة من المنصات المتخصصة تقدّم تنفيذًا عبر القطاعات والجغرافيات.",
      cards: [
        { name: "ZMC", description: "منصة تنفيذ في الإنشاءات والهندسة." },
        { name: "CTC", description: "حلول الاتصالات والإسناد." },
        { name: "OTI Real Estate", description: "تطوير عقاري وخدمات." },
        { name: "Caucasus Paradise", description: "منصة سياحة وضيافة." },
        { name: "OTI Estate", description: "تطويرات سكنية ومتعددة الاستخدامات في جورجيا والسعودية." },
        { name: "OBC", description: "مركز أعمال OTI — تشغيل مساحات عمل تجارية متميزة." },
        { name: "Natural Pearl", description: "منصة ضيافة وأسلوب حياة عبر الوجهات الإقليمية." },
        { name: "GIA", description: "إعلام وتواصل مؤسسي يدعم العلامة والشراكات." },
      ],
      learnMore: "تعرّف على منصاتنا",
    },
    sectors: {
      eyebrow: "القطاعات",
      title: "تنوّع عبر ثمانية قطاعات",
      intro: "تنوّع عبر قطاعات عالية النمو لتمكين التكامل والقيمة العابرة للقطاعات.",
      items: [
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
    presence: {
      eyebrow: "الحضور العالمي",
      title: "نموذج محاور وشبكات",
      intro: "تعمل المجموعة بنموذج محاور وشبكات تكون فيه جورجيا بوابة استراتيجية تربط الأسواق الإقليمية.",
      hubLabel: "محور استراتيجي",
      marketLabel: "سوق",
      countries: [
        { code: "GE", name: "جورجيا", hub: true },
        { code: "AE", name: "الإمارات العربية المتحدة" },
        { code: "EG", name: "مصر" },
        { code: "TR", name: "تركيا" },
        { code: "OM", name: "عُمان" },
        { code: "MY", name: "ماليزيا" },
      ],
    },
    ai: {
      eyebrow: "الذكاء الاصطناعي والابتكار",
      title: "الذكاء كطبقة جوهرية",
      intro: "الذكاء الاصطناعي وأنظمة البيانات مدمجة عبر عمليات المجموعة لتعزيز اتخاذ القرار وتحسين الأداء وتمكين النمو القابل للتوسع.",
      apps: ["الذكاء الاستثماري", "التحليلات التنبؤية", "أتمتة العمليات", "مراقبة الأداء"],
    },
    esg: {
      eyebrow: "الالتزام بـ ESG",
      title: "نمو مستدام ومسؤول",
      intro: "تتوافق المجموعة مع أطر ESG العالمية — بدمج الاستدامة والحوكمة والأثر الاجتماعي في نموذج الأعمال.",
      pillars: [
        "النمو الاقتصادي",
        "الحوكمة والنزاهة",
        "الابتكار",
        "المسؤولية البيئية",
        "الشراكات",
        "رأس المال البشري",
      ],
      note: "متوافق مع أهداف الأمم المتحدة للتنمية المستدامة · نتقدم نحو معايير GRI وIFC.",
    },
    leadership: {
      eyebrow: "القيادة",
      title: "قيادة ذات رؤية",
      name: "هاني حبشي",
      role: "رئيس مجلس الإدارة والرئيس التنفيذي",
      bio: "يقود المجموعة برؤية تركّز على بناء منصات قابلة للتوسع وجاهزة للمستقبل عبر الأسواق العالمية.",
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصل معنا",
      intro: "للاستفسارات العامة والشراكات والتواصل المؤسسي، يرجى التواصل معنا.",
      hqLabel: "المقر الرئيسي",
      hq: "129 ميراب ألكسيدزه، تبليسي، جورجيا، GE 0162",
      phoneLabel: "هاتف",
      phone: "+995 555 604 000",
      emailLabel: "البريد الإلكتروني",
      email: "info@hebashigroup.com",
      name: "الاسم",
      emailField: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الرسالة",
      sent: "تم إرسال الرسالة بنجاح.",
    },
    footer: {
      tagline: "نبني منصات متكاملة لقيمة طويلة الأجل.",
      quickLinks: "روابط سريعة",
      location: "تبليسي · تأسست 2008",
      rights: "جميع الحقوق محفوظة.",
    },
    langToggle: "English",
  },
};
