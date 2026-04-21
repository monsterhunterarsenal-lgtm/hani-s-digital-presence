export type Lang = "en" | "ar";

export interface Content {
  nav: { about: string; expertise: string; portfolio: string; model: string; esg: string; growth: string; media: string; testimonials: string; contact: string };
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
  businessModel: {
    eyebrow: string;
    title: string;
    intro: string;
    layers: { title: string; description: string; points: string[] }[];
    aiTitle: string;
    aiIntro: string;
    aiPoints: string[];
    aiQuote: string;
  };
  portfolio: {
    eyebrow: string;
    sectionNumber: string;
    title: string;
    titleAccent?: string;
    titleTail?: string;
    intro: string;
    principles: { title: string; description: string }[];
    sectors: string[];
    sectorsTitle: string;
    countriesTitle: string;
    countries: string[];
  };
  partnerships: {
    eyebrow: string;
    sectionNumber: string;
    title: string;
    titleAccent: string;
    titleTail: string;
    intro: string;
    cards: { title: string; description: string }[];
    closing: string;
  };
  esg: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: { title: string; sdg: string; description: string }[];
    frameworks: string;
    frameworkList: string[];
  };
  growth: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
    closing: string;
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
    nav: { about: "About", expertise: "Expertise", portfolio: "Ventures", model: "Model", esg: "ESG", growth: "Strategy", media: "Media", testimonials: "Voices", contact: "Contact" },
    hero: {
      eyebrow: "Hani Hebashy — Chairman & CEO, Hebashi Holding Group",
      titleLine1: "Building Platforms",
      titleLine2: "That Shape Markets",
      subtitle:
        "Hebashi Holding Group is a diversified international platform — transforming fragmented opportunities into scalable, asset-backed ecosystems enhanced by intelligence, integration, and disciplined execution.",
      ctaPrimary: "Partner With Hani",
      ctaSecondary: "Explore the Platform",
      stats: [
        { value: "2008", label: "FOUNDED" },
        { value: "6", label: "COUNTRIES" },
        { value: "970+", label: "TEAM MEMBERS" },
        { value: "8", label: "CORE SECTORS" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A platform builder. Not a market follower.",
      lead:
        "Hebashi Holding Group does not follow markets. It builds the platforms that shape them.",
      paragraphs: [
        "Hebashi Holding Group (HHG) is a diversified international holding platform that builds, scales, and operates integrated business ecosystems across high-growth sectors. Established in 2008, HHG today operates across 6 countries, employs 970+ professionals, and maintains exposure across 8 core industries.",
        "The Group operates through a centralized holding structure — ensuring disciplined capital allocation, strategic oversight, and scalable value creation across its subsidiaries and platforms. HHG captures value across the full lifecycle: originating, operating, and scaling assets within a unified, intelligence-driven structure.",
        "Led by Hani Hebashy — Chairman & CEO and President of the Georgian-Arab-African Business Union — the Group is supported by an international advisory council and governance frameworks aligned with global capital markets standards.",
      ],
      journey: [
        { year: "2008", place: "Egypt", note: "Founded — youth employment & enterprise" },
        { year: "2012", place: "Saudi Arabia", note: "CSR & sustainability" },
        { year: "2015", place: "Qatar & Malaysia", note: "Global exposure" },
        { year: "Today", place: "Georgia", note: "Strategic hub of Hebashi Holding Group" },
      ],
      role: "Chairman & CEO, Hebashi Holding Group",
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
    businessModel: {
      eyebrow: "Business Model",
      title: "A three-layered platform architecture.",
      intro:
        "HHG captures value across the full lifecycle — from origination to monetization — through a unified, intelligence-driven structure.",
      layers: [
        {
          title: "Platform Creation",
          description: "Originating value through real assets and structured opportunities.",
          points: ["Strategic investments in real assets", "Structuring scalable, high-potential opportunities"],
        },
        {
          title: "Platform Activation",
          description: "Monetizing assets through integrated operations and services.",
          points: ["Operations, services, and asset utilization", "Diversified, recurring revenue models"],
        },
        {
          title: "Platform Enablement",
          description: "Sustaining performance through enabling infrastructure.",
          points: ["Telecommunications, education, AI-driven systems", "Long-term capability development"],
        },
      ],
      aiTitle: "AI as a Strategic Control Layer",
      aiIntro:
        "Artificial Intelligence is embedded across all operations as a horizontal capability — a decision-support and control layer enhancing precision, scalability, and timing across markets.",
      aiPoints: [
        "Investment intelligence and risk analysis",
        "Operational optimization and cost efficiency",
        "Predictive demand and market analytics",
        "Process automation and performance monitoring",
      ],
      aiQuote:
        "AI functions as a decision-support and control layer — enhancing precision, scalability, and timing across markets.",
    },
    portfolio: {
      eyebrow: "Ventures",
      title: "Operating platforms shaping markets.",
      intro:
        "HHG executes through specialized subsidiaries — operationally autonomous, strategically centralized, and data-driven by design.",
      platforms: [
        { name: "ZMC", tag: "Construction & Engineering", description: "Construction and engineering execution across HHG's real-asset portfolio." },
        { name: "CTC", tag: "Telecommunications", description: "Telecommunications and outsourcing solutions powering enterprise infrastructure." },
        { name: "OTI Real Estate", tag: "Real Estate", description: "Real estate services and development across strategic geographies." },
        { name: "Caucasus Paradise", tag: "Tourism & Hospitality", description: "A tourism and travel platform anchored in HHG's Georgian hub." },
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
      countriesTitle: "Six countries · One hub-and-network model",
      countries: ["Georgia · Strategic Hub", "United Arab Emirates", "Egypt", "Turkey", "Oman", "Malaysia"],
    },
    esg: {
      eyebrow: "ESG & Impact",
      title: "Aligned with the UN Sustainable Development Goals.",
      intro:
        "HHG embeds ESG as a core operational value, aligning growth with measurable societal impact and progressing toward global disclosure frameworks.",
      pillars: [
        { title: "Economic Growth & Infrastructure", sdg: "SDG 8 · 9", description: "Scalable investments, job creation, and infrastructure development." },
        { title: "Governance & Transparency", sdg: "SDG 16", description: "Compliance, ethical operations, and institutional accountability." },
        { title: "Innovation & AI Enablement", sdg: "SDG 9", description: "Technology and intelligence applied for performance and growth." },
        { title: "Sustainability & Environment", sdg: "SDG 11 · 12 · 13", description: "Sustainable development and responsible resource use." },
        { title: "Global Partnerships", sdg: "SDG 17", description: "Cross-border alliances that expand reach and execution." },
        { title: "Human Capital & Inclusion", sdg: "SDG 4 · 5 · 10", description: "Empowering talent, diversity, and equal opportunity." },
      ],
      frameworks: "Progressing toward alignment with:",
      frameworkList: ["Global Reporting Initiative (GRI)", "IFC Performance Standards", "International ESG disclosure frameworks"],
    },
    growth: {
      eyebrow: "Growth Strategy",
      title: "Toward capital markets readiness.",
      intro:
        "HHG's forward strategy converges integrated platforms, AI infrastructure, and institutional governance — moving the Group toward capital market participation.",
      items: [
        "Scaling integrated platforms across sectors",
        "Expanding asset-backed investment structures",
        "Embedding AI across all operations",
        "Strengthening institutional partnerships",
        "Advancing toward IPO readiness",
      ],
      closing: "Institutional-grade · Investor-ready · ESG & SDG aligned · AI-positioned · IPO-direction ready.",
    },
    media: {
      eyebrow: "Platform Pillars",
      title: "Four pillars. One institutional platform.",
      intro: "Hebashi Holding Group converges asset-backed platforms, intelligence, cross-border execution, and disciplined growth — captured in a single visual language.",
      placeholder: "Pillar",
      items: [
        { source: "Platform Building", title: "Asset-backed ecosystems across high-growth sectors", placeholder: false },
        { source: "AI Control Layer", title: "Investment intelligence, predictive analytics, automation", placeholder: false },
        { source: "Cross-Border Network", title: "Hub-and-network model across six countries", placeholder: false },
        { source: "Capital Markets Path", title: "Institutional governance toward IPO readiness", placeholder: false },
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
      title: "Building platforms, not companies.",
      pillars: [
        "Building platforms, not companies.",
        "Thinking in decades, acting with precision.",
        "Leveraging complexity as advantage.",
        "Partnership-driven growth.",
      ],
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
      tagline: "HHG does not follow markets. It builds the platforms that shape them.",
      rights: "All rights reserved.",
    },
    langToggle: "العربية",
  },
  ar: {
    nav: { about: "نبذة", expertise: "الخبرات", portfolio: "المشاريع", model: "النموذج", esg: "الاستدامة", growth: "النمو", media: "الإعلام", testimonials: "آراء", contact: "تواصل" },
    hero: {
      eyebrow: "هاني حبشي — رئيس مجلس الإدارة والرئيس التنفيذي لمجموعة حبشي القابضة",
      titleLine1: "نبني منصات",
      titleLine2: "تصنع الأسواق",
      subtitle:
        "مجموعة حبشي القابضة منصة دولية متنوعة — تحوّل الفرص المتفرقة إلى منظومات قابلة للتوسع، مدعومة بالأصول، ومُعزَّزة بالذكاء والتكامل والتنفيذ المنضبط.",
      ctaPrimary: "ابدأ شراكة",
      ctaSecondary: "اكتشف المنصة",
      stats: [
        { value: "٢٠٠٨", label: "سنة التأسيس" },
        { value: "٦", label: "دول" },
        { value: "+٩٧٠", label: "أعضاء الفريق" },
        { value: "٨", label: "قطاعات أساسية" },
      ],
    },
    about: {
      eyebrow: "نبذة",
      title: "باني منصات. لا تابع للأسواق.",
      lead:
        "مجموعة حبشي القابضة لا تتبع الأسواق. بل تبني المنصات التي تصنعها.",
      paragraphs: [
        "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو. تأسست عام 2008، وتعمل اليوم في 6 دول، وتضم أكثر من 970 محترفًا، وتغطي 8 قطاعات أساسية.",
        "تعمل المجموعة من خلال هيكل قابض مركزي يضمن التخصيص المنضبط لرأس المال والإشراف الاستراتيجي وخلق قيمة قابلة للتوسع عبر شركاتها ومنصاتها. تحتجز المجموعة القيمة عبر دورة الحياة الكاملة: من النشأة إلى التشغيل والتوسع داخل بنية موحّدة مدفوعة بالذكاء.",
        "بقيادة هاني حبشي — رئيس مجلس الإدارة والرئيس التنفيذي ورئيس اتحاد الأعمال الجورجي العربي الإفريقي — تستند المجموعة إلى مجلس استشاري دولي وأطر حوكمة متوافقة مع معايير أسواق المال العالمية.",
      ],
      journey: [
        { year: "٢٠٠٨", place: "مصر", note: "التأسيس — تشغيل الشباب وريادة الأعمال" },
        { year: "٢٠١٢", place: "السعودية", note: "المسؤولية المجتمعية والاستدامة" },
        { year: "٢٠١٥", place: "قطر وماليزيا", note: "حضور دولي" },
        { year: "اليوم", place: "جورجيا", note: "المحور الاستراتيجي للمجموعة" },
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
    businessModel: {
      eyebrow: "نموذج الأعمال",
      title: "بنية منصة من ثلاث طبقات.",
      intro: "تحتجز المجموعة القيمة عبر دورة الحياة الكاملة — من النشأة إلى التحقيق — من خلال بنية موحّدة مدفوعة بالذكاء.",
      layers: [
        { title: "إنشاء المنصات", description: "توليد القيمة من الأصول الحقيقية والفرص المهيكلة.", points: ["استثمارات استراتيجية في الأصول الحقيقية", "هيكلة فرص قابلة للتوسع وعالية الإمكانات"] },
        { title: "تفعيل المنصات", description: "تحقيق الإيرادات من الأصول عبر عمليات وخدمات متكاملة.", points: ["العمليات والخدمات واستثمار الأصول", "نماذج دخل متنوعة ومتكررة"] },
        { title: "تمكين المنصات", description: "استدامة الأداء عبر بنية تحتية مُمكِّنة.", points: ["الاتصالات والتعليم والأنظمة الذكية", "تطوير القدرات على المدى الطويل"] },
      ],
      aiTitle: "الذكاء الاصطناعي كطبقة تحكم استراتيجية",
      aiIntro: "الذكاء الاصطناعي مدمج في كل العمليات كقدرة أفقية — طبقة دعم قرار وتحكم تعزّز الدقة والقابلية للتوسع وحُسن التوقيت.",
      aiPoints: [
        "ذكاء استثماري وتحليل مخاطر",
        "تحسين العمليات وكفاءة التكلفة",
        "تحليلات تنبؤية للطلب والأسواق",
        "أتمتة العمليات ومراقبة الأداء",
      ],
      aiQuote: "يعمل الذكاء الاصطناعي كطبقة دعم قرار وتحكم — تعزز الدقة والقابلية للتوسع وحُسن التوقيت في الأسواق.",
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
      countriesTitle: "ست دول · نموذج محاور وشبكات",
      countries: ["جورجيا · المحور الاستراتيجي", "الإمارات العربية المتحدة", "مصر", "تركيا", "عُمان", "ماليزيا"],
    },
    esg: {
      eyebrow: "الاستدامة والأثر",
      title: "متوافقون مع أهداف الأمم المتحدة للتنمية المستدامة.",
      intro: "تتبنى المجموعة معايير ESG كقيمة تشغيلية أساسية، وتربط النمو بأثر مجتمعي قابل للقياس، مع التقدم نحو أطر الإفصاح العالمية.",
      pillars: [
        { title: "النمو الاقتصادي والبنية التحتية", sdg: "SDG 8 · 9", description: "استثمارات قابلة للتوسع وخلق فرص عمل وتطوير بنية تحتية." },
        { title: "الحوكمة والشفافية", sdg: "SDG 16", description: "الالتزام والممارسات الأخلاقية والمساءلة المؤسسية." },
        { title: "الابتكار والذكاء الاصطناعي", sdg: "SDG 9", description: "توظيف التقنية والذكاء لتحقيق الأداء والنمو." },
        { title: "الاستدامة والبيئة", sdg: "SDG 11 · 12 · 13", description: "تنمية مستدامة واستخدام مسؤول للموارد." },
        { title: "الشراكات العالمية", sdg: "SDG 17", description: "تحالفات عابرة للحدود توسّع الوصول والتنفيذ." },
        { title: "رأس المال البشري والشمول", sdg: "SDG 4 · 5 · 10", description: "تمكين المواهب والتنوع وتكافؤ الفرص." },
      ],
      frameworks: "نتقدم نحو التوافق مع:",
      frameworkList: ["مبادرة الإبلاغ العالمية (GRI)", "معايير أداء IFC", "أطر الإفصاح الدولية للاستدامة"],
    },
    growth: {
      eyebrow: "استراتيجية النمو",
      title: "نحو الجاهزية لأسواق المال.",
      intro: "تجمع استراتيجية المجموعة بين المنصات المتكاملة والبنية التحتية الذكية والحوكمة المؤسسية — تمهيدًا للمشاركة في أسواق المال.",
      items: [
        "توسيع المنصات المتكاملة عبر القطاعات",
        "توسيع هياكل الاستثمار المدعومة بالأصول",
        "تضمين الذكاء الاصطناعي في جميع العمليات",
        "تعزيز الشراكات المؤسسية",
        "التقدم نحو الجاهزية للطرح العام",
      ],
      closing: "بمعايير مؤسسية · جاهز للمستثمرين · متوافق مع ESG وأهداف التنمية · مُمكَّن بالذكاء الاصطناعي · جاهز اتجاهيًا للطرح.",
    },
    media: {
      eyebrow: "ركائز المنصة",
      title: "أربع ركائز. منصة مؤسسية واحدة.",
      intro: "تجمع مجموعة حبشي القابضة منصات مدعومة بالأصول والذكاء والتنفيذ العابر للحدود والنمو المنضبط — ضمن لغة بصرية واحدة.",
      placeholder: "ركيزة",
      items: [
        { source: "بناء المنصات", title: "منظومات مدعومة بالأصول في قطاعات عالية النمو", placeholder: false },
        { source: "طبقة تحكم بالذكاء الاصطناعي", title: "ذكاء استثماري وتحليلات تنبؤية وأتمتة", placeholder: false },
        { source: "شبكة عابرة للحدود", title: "نموذج محاور وشبكات عبر ست دول", placeholder: false },
        { source: "مسار أسواق المال", title: "حوكمة مؤسسية نحو الجاهزية للطرح العام", placeholder: false },
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
      title: "نبني منصات، لا شركات.",
      pillars: [
        "نبني منصات، لا شركات.",
        "نفكر بعقود، ونتحرك بدقة.",
        "نحوّل التعقيد إلى ميزة.",
        "نمو مدفوع بالشراكات.",
      ],
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
      tagline: "المجموعة لا تتبع الأسواق. بل تبني المنصات التي تصنعها.",
      rights: "جميع الحقوق محفوظة.",
    },
    langToggle: "English",
  },
};
