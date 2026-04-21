export type Lang = "en" | "ar";

export interface Content {
  nav: {
    about: string;
    model: string;
    platforms: string;
    sectors: string;
    presence: string;
    ai: string;
    esg: string;
    investors: string;
    leadership: string;
    contact: string;
  };
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
    paragraphs: string[];
    principlesTitle: string;
    principles: { title: string; description: string }[];
  };
  model: {
    eyebrow: string;
    title: string;
    intro: string;
    layers: { title: string; description: string; points: string[] }[];
    closing: string;
  };
  platforms: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { name: string; tag: string; description: string }[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { label: string; items: string[] }[];
  };
  presence: {
    eyebrow: string;
    title: string;
    intro: string;
    hubLabel: string;
    countries: { code: string; name: string; hub?: boolean }[];
    legendActive: string;
    legendOther: string;
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    quote: string;
  };
  advantage: {
    eyebrow: string;
    title: string;
    intro: string;
    pillars: { title: string; description: string }[];
  };
  partnerships: {
    eyebrow: string;
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
  investors: {
    eyebrow: string;
    title: string;
    intro: string;
    quote: string;
    ctaDeck: string;
    ctaMeeting: string;
  };
  leadership: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    union: string;
    bio: string;
    council: string;
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
  footer: {
    tagline: string;
    address: string;
    phone: string;
    rights: string;
    resources: string;
    contactCol: string;
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
      presence: "Global Presence",
      ai: "AI",
      esg: "ESG",
      investors: "Investors",
      leadership: "Leadership",
      contact: "Contact",
    },
    hero: {
      eyebrow: "● Innovative · Diversified · Leading — Since 2008",
      titleLine1: "Building Scalable Business Platforms",
      titleLine2: "Across Emerging Markets",
      subtitle:
        "Hebashi Holding Group (HHG) is a diversified international holding platform — building, scaling, and operating integrated business ecosystems across high-growth sectors, powered by assets, intelligence, and disciplined execution.",
      ctaPrimary: "Explore Our Platforms",
      ctaSecondary: "For Investors",
      stats: [
        { value: "937", label: "UNITS BUILT" },
        { value: "463", label: "UNITS UNDER CONSTRUCTION" },
        { value: "12", label: "TURN-KEY PROJECTS" },
        { value: "54,000", label: "SQM OWNED PROPERTY" },
      ],
    },
    about: {
      eyebrow: "About HHG",
      title: "A diversified international holding platform.",
      paragraphs: [
        "Hebashi Holding Group (HHG) is a diversified international holding platform that builds, scales, and operates integrated business ecosystems across high-growth sectors. Established in 2008, HHG has evolved into a multi-sector investment platform operating across 6 countries, employing 970+ professionals, and spanning 8 core industries.",
        "The Group operates through a centralized holding structure — ensuring disciplined capital allocation, strategic oversight, and scalable value creation. HHG is positioned as a Platform Builder, transforming fragmented opportunities into scalable, asset-backed ecosystems where capital, infrastructure, and intelligence converge.",
      ],
      principlesTitle: "Core Principles",
      principles: [
        { title: "Building Platforms, Not Companies", description: "We architect ecosystems, not standalone businesses — designed to scale across sectors and geographies." },
        { title: "Thinking in Decades, Acting with Precision", description: "Long-horizon capital deployed with institutional discipline and operational rigor." },
        { title: "Leveraging Complexity as Advantage", description: "Cross-sector and cross-border integration as a structural moat — not an obstacle." },
      ],
    },
    model: {
      eyebrow: "Operating Model",
      title: "How we create value.",
      intro: "HHG operates through a three-layered model — capturing value across the full lifecycle, from origination to monetization.",
      layers: [
        {
          title: "Create",
          description: "Identifying and structuring high-potential opportunities across real assets and growth sectors.",
          points: ["Strategic investments in real assets", "Structuring scalable opportunities"],
        },
        {
          title: "Activate",
          description: "Driving monetization through operations, services, and market execution.",
          points: ["Integrated operations and services", "Diversified revenue streams"],
        },
        {
          title: "Enable",
          description: "Supporting platforms through technology, infrastructure, and intelligent systems.",
          points: ["Telecommunications, education, AI infrastructure", "Long-term capability development"],
        },
      ],
      closing: "A lifecycle-driven model designed for scalability, resilience, and performance.",
    },
    platforms: {
      eyebrow: "Operating Platforms",
      title: "Our specialized platforms.",
      intro: "A portfolio of specialized subsidiaries delivering execution across sectors — operationally autonomous, strategically aligned.",
      cards: [
        { name: "OTI ESTATE", tag: "Real Estate · Development", description: "Flagship real estate development platform delivering integrated residential and mixed-use projects across Georgia and Saudi Arabia." },
        { name: "OBC — OTI Business Centre", tag: "Commercial · Workspace", description: "Premium commercial and business centre operations anchoring HHG's enterprise services footprint." },
        { name: "Natural Pearl", tag: "Hospitality · Lifestyle", description: "Hospitality and lifestyle platform extending HHG's experience economy across regional destinations." },
        { name: "GIA", tag: "Media · Outreach", description: "Media and institutional outreach arm supporting HHG's brand, partnerships, and stakeholder engagement." },
      ],
    },
    sectors: {
      eyebrow: "Sector Exposure",
      title: "Diversified across eight high-growth industries.",
      intro: "Organized into three platform families — enabling integration, cross-sector value, and resilient diversification.",
      groups: [
        {
          label: "Asset-Based Platforms",
          items: ["Real Estate Development", "Construction & Engineering", "Hospitality & Tourism"],
        },
        {
          label: "Service & Infrastructure Platforms",
          items: ["Telecommunications & Outsourcing", "Media & Production"],
        },
        {
          label: "Capability & Investment Platforms",
          items: ["Investment & Asset Management", "Education & Development", "Sports Investment"],
        },
      ],
    },
    presence: {
      eyebrow: "Global Footprint",
      title: "A hub-and-network model.",
      intro: "HHG operates through a hub-and-network model with Georgia serving as a strategic gateway connecting regional markets — enabling coordinated expansion and efficient capital deployment.",
      hubLabel: "Strategic Hub",
      countries: [
        { code: "GE", name: "Georgia", hub: true },
        { code: "SA", name: "Saudi Arabia" },
        { code: "AE", name: "United Arab Emirates" },
        { code: "EG", name: "Egypt" },
        { code: "TR", name: "Turkey" },
        { code: "OM", name: "Oman" },
        { code: "MY", name: "Malaysia" },
      ],
      legendActive: "HHG Presence",
      legendOther: "Global Network",
    },
    ai: {
      eyebrow: "AI Layer",
      title: "Intelligence as a strategic control layer.",
      intro: "Artificial Intelligence is embedded across all HHG operations as a horizontal capability — enhancing decision-making, optimizing performance, and enabling scalable growth.",
      points: [
        "Investment intelligence and risk analysis",
        "Predictive demand and market analytics",
        "Process automation",
        "Performance monitoring",
      ],
      quote: "AI functions as a decision-support and control layer — enhancing precision, scalability, and timing across markets.",
    },
    advantage: {
      eyebrow: "Competitive Advantage",
      title: "Three pillars of defensibility.",
      intro: "HHG's differentiation is built on integrated capabilities that compound over time.",
      pillars: [
        { title: "Access", description: "Strategic geography and cross-border partnerships unlocking opportunities unavailable to standalone operators." },
        { title: "Execution", description: "Integrated operating platforms across sectors with proven delivery capability and operational depth." },
        { title: "Intelligence", description: "AI-driven systems and data infrastructure powering decision-making across the Group." },
      ],
    },
    partnerships: {
      eyebrow: "Strategic Partnerships",
      title: "Partnerships as long-term",
      titleAccent: " strategic ",
      titleTail: "assets.",
      intro: "HHG collaborates with regional and international stakeholders — treating partnerships as long-term institutional assets that compound access, capability, and credibility.",
      cards: [
        { title: "Expanded Market Access", description: "Collaborations that unlock regional and cross-border opportunities unavailable to standalone operators." },
        { title: "Strengthened Execution", description: "Operational partnerships that reinforce delivery capacity, technical depth, and sector specialisation." },
        { title: "Enhanced Institutional Positioning", description: "Alliances with governments, multilaterals, and capital market participants that elevate institutional standing." },
      ],
      closing: "Partnerships at HHG are not transactional — they are architectural.",
    },
    esg: {
      eyebrow: "ESG & SDG Alignment",
      title: "Sustainable and responsible growth.",
      intro: "HHG aligns its operations with global ESG frameworks and the UN Sustainable Development Goals (SDGs) — integrating sustainability, governance, and social impact into the business model.",
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
      intro: "HHG's forward strategy converges integrated platforms, AI infrastructure, and institutional governance — moving the Group toward capital market participation.",
      items: [
        "Scaling integrated platforms across sectors",
        "Expanding asset-backed investment structures",
        "Embedding AI across all operations",
        "Strengthening institutional partnerships",
        "Advancing toward IPO readiness",
      ],
      closing: "Institutional-Grade · Investor-Ready · ESG & SDG Aligned · AI-Positioned · IPO-Direction Ready.",
    },
    investors: {
      eyebrow: "For Investors",
      title: "A scalable, asset-driven holding platform.",
      intro: "HHG represents a next-generation institutional platform where capital, infrastructure, and intelligence converge to create and shape high-growth markets. For institutional engagement, partnership inquiries, and capital markets discussions.",
      quote: "HHG does not follow markets. It builds the platforms that shape them.",
      ctaDeck: "Request Investor Deck",
      ctaMeeting: "Schedule a Meeting",
    },
    leadership: {
      eyebrow: "Leadership & Governance",
      title: "Institutional governance.",
      name: "Hani Hebashy",
      role: "Chairman & CEO, Hebashi Holding Group",
      union: "President, Georgian-Arab-African Business Union",
      bio: "Leading HHG with a vision focused on building scalable, future-ready platforms across global markets — leveraging economic diplomacy to facilitate cross-border investment and unlock strategic opportunities.",
      council: "Supported by an international advisory council and institutional governance frameworks aligned with global capital markets standards.",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Engage with Hebashi Holding Group.",
      intro: "For general inquiries, partnerships, or institutional engagement.",
      name: "Full name",
      email: "Email address",
      company: "Company / Organization",
      message: "Nature of inquiry",
      submit: "Send Message",
      whatsapp: "Direct Line",
      emailLabel: "Email",
      sent: "Thank you. Your message has been received.",
    },
    footer: {
      tagline: "Innovative, Diversified & Leading — Building integrated platforms for long-term value.",
      address: "12th Merab Aleksidze, Tbilisi, Georgia, GE 0193",
      phone: "+995 555 659 000",
      rights: "All rights reserved.",
      resources: "Resources",
      contactCol: "Contact",
    },
    langToggle: "العربية",
  },
  ar: {
    nav: {
      about: "نبذة",
      model: "النموذج",
      platforms: "المنصات",
      sectors: "القطاعات",
      presence: "الحضور العالمي",
      ai: "الذكاء الاصطناعي",
      esg: "الاستدامة",
      investors: "المستثمرون",
      leadership: "القيادة",
      contact: "تواصل",
    },
    hero: {
      eyebrow: "● مبتكرة · متنوعة · رائدة — منذ ٢٠٠٨",
      titleLine1: "نبني منصات أعمال قابلة للتوسع",
      titleLine2: "في الأسواق الناشئة",
      subtitle:
        "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة — تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو، مدعومة بالأصول والذكاء والتنفيذ المنضبط.",
      ctaPrimary: "استكشف منصاتنا",
      ctaSecondary: "للمستثمرين",
      stats: [
        { value: "٩٣٧", label: "وحدة منجزة" },
        { value: "٤٦٣", label: "وحدة قيد الإنشاء" },
        { value: "١٢", label: "مشروع تسليم مفتاح" },
        { value: "٥٤٬٠٠٠", label: "م٢ عقارات مملوكة" },
      ],
    },
    about: {
      eyebrow: "عن المجموعة",
      title: "منصة قابضة دولية متنوعة.",
      paragraphs: [
        "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو. تأسست عام 2008، وتطوّرت لتصبح منصة استثمارية متعددة القطاعات تعمل في 6 دول، وتضم أكثر من 970 محترفًا، وتغطي 8 قطاعات أساسية.",
        "تعمل المجموعة من خلال هيكل قابض مركزي يضمن تخصيصًا منضبطًا لرأس المال وإشرافًا استراتيجيًا وخلق قيمة قابلة للتوسع. تتموضع المجموعة كباني منصات — تحوّل الفرص المتفرقة إلى منظومات قابلة للتوسع مدعومة بالأصول، حيث يلتقي رأس المال والبنية التحتية والذكاء.",
      ],
      principlesTitle: "المبادئ الأساسية",
      principles: [
        { title: "نبني منصات لا شركات", description: "نصمم منظومات لا أعمالاً منفردة — قابلة للتوسع عبر القطاعات والجغرافيات." },
        { title: "نفكر بعقود ونتحرك بدقة", description: "رأس مال طويل الأجل يُنشر بانضباط مؤسسي ودقة تشغيلية." },
        { title: "التعقيد ميزة لا عائق", description: "التكامل بين القطاعات والحدود كميزة بنيوية." },
      ],
    },
    model: {
      eyebrow: "نموذج التشغيل",
      title: "كيف نخلق القيمة.",
      intro: "تعمل المجموعة عبر نموذج من ثلاث طبقات — يحتجز القيمة عبر دورة الحياة الكاملة من النشأة إلى التحقيق.",
      layers: [
        { title: "الإنشاء", description: "تحديد وهيكلة فرص عالية الإمكانات في الأصول الحقيقية والقطاعات النامية.", points: ["استثمارات استراتيجية في الأصول الحقيقية", "هيكلة فرص قابلة للتوسع"] },
        { title: "التفعيل", description: "تحقيق الإيرادات عبر العمليات والخدمات والتنفيذ في الأسواق.", points: ["عمليات وخدمات متكاملة", "تدفقات دخل متنوعة"] },
        { title: "التمكين", description: "دعم المنصات عبر التقنية والبنية التحتية والأنظمة الذكية.", points: ["اتصالات وتعليم وبنية ذكاء اصطناعي", "تطوير قدرات طويل الأجل"] },
      ],
      closing: "نموذج مدفوع بدورة الحياة، مصمم للتوسع والمرونة والأداء.",
    },
    platforms: {
      eyebrow: "المنصات التشغيلية",
      title: "منصاتنا المتخصصة.",
      intro: "محفظة من الشركات التابعة المتخصصة تقدّم تنفيذًا عبر القطاعات — مستقلة تشغيليًا ومتسقة استراتيجيًا.",
      cards: [
        { name: "OTI ESTATE", tag: "عقارات · تطوير", description: "منصة التطوير العقاري الرئيسية تقدّم مشاريع سكنية ومتعددة الاستخدامات متكاملة في جورجيا والمملكة العربية السعودية." },
        { name: "OBC — مركز أعمال OTI", tag: "تجاري · مكاتب", description: "تشغيل مراكز تجارية وأعمال متميزة ترسّخ بصمة المجموعة في خدمات المؤسسات." },
        { name: "Natural Pearl", tag: "ضيافة · أسلوب حياة", description: "منصة ضيافة وأسلوب حياة توسّع حضور المجموعة في اقتصاد التجربة عبر الوجهات الإقليمية." },
        { name: "GIA", tag: "إعلام · تواصل", description: "ذراع الإعلام والتواصل المؤسسي يدعم العلامة والشراكات وعلاقات أصحاب المصلحة." },
      ],
    },
    sectors: {
      eyebrow: "القطاعات",
      title: "تنوّع عبر ثمانية قطاعات عالية النمو.",
      intro: "منظَّمة في ثلاث عائلات منصات — تتيح التكامل والقيمة العابرة للقطاعات والتنوّع المرن.",
      groups: [
        { label: "منصات قائمة على الأصول", items: ["التطوير العقاري", "الإنشاءات والهندسة", "الضيافة والسياحة"] },
        { label: "منصات الخدمات والبنية التحتية", items: ["الاتصالات والإسناد", "الإعلام والإنتاج"] },
        { label: "منصات القدرات والاستثمار", items: ["الاستثمار وإدارة الأصول", "التعليم والتطوير", "الاستثمار الرياضي"] },
      ],
    },
    presence: {
      eyebrow: "الانتشار العالمي",
      title: "نموذج محاور وشبكات.",
      intro: "تعمل المجموعة بنموذج محاور وشبكات تكون فيه جورجيا بوابة استراتيجية تربط الأسواق الإقليمية — ما يتيح التوسع المنسّق والنشر الفعّال لرأس المال.",
      hubLabel: "محور استراتيجي",
      countries: [
        { code: "GE", name: "جورجيا", hub: true },
        { code: "SA", name: "السعودية" },
        { code: "AE", name: "الإمارات" },
        { code: "EG", name: "مصر" },
        { code: "TR", name: "تركيا" },
        { code: "OM", name: "عُمان" },
        { code: "MY", name: "ماليزيا" },
      ],
      legendActive: "حضور HHG",
      legendOther: "الشبكة العالمية",
    },
    ai: {
      eyebrow: "طبقة الذكاء الاصطناعي",
      title: "الذكاء كطبقة تحكم استراتيجية.",
      intro: "الذكاء الاصطناعي مدمج عبر جميع عمليات المجموعة كقدرة أفقية — يعزّز اتخاذ القرار ويحسّن الأداء ويُمكّن النمو القابل للتوسع.",
      points: [
        "ذكاء استثماري وتحليل مخاطر",
        "تحليلات تنبؤية للطلب والأسواق",
        "أتمتة العمليات",
        "مراقبة الأداء",
      ],
      quote: "يعمل الذكاء الاصطناعي كطبقة دعم قرار وتحكم — يعزز الدقة والقابلية للتوسع وحُسن التوقيت.",
    },
    advantage: {
      eyebrow: "الميزة التنافسية",
      title: "ثلاث ركائز للدفاعية.",
      intro: "تتميز المجموعة بقدرات متكاملة تتراكم مع الزمن.",
      pillars: [
        { title: "الوصول", description: "جغرافيا استراتيجية وشراكات عابرة للحدود تفتح فرصًا غير متاحة للجهات المنفردة." },
        { title: "التنفيذ", description: "منصات تشغيلية متكاملة عبر القطاعات بقدرة تسليم مثبتة وعمق تشغيلي." },
        { title: "الذكاء", description: "أنظمة مدفوعة بالذكاء الاصطناعي وبنية بيانات تدعم القرار في كل المجموعة." },
      ],
    },
    partnerships: {
      eyebrow: "الشراكات الاستراتيجية",
      title: "الشراكات بوصفها أصولًا",
      titleAccent: " استراتيجية ",
      titleTail: "طويلة الأجل.",
      intro: "تتعاون المجموعة مع شركاء إقليميين ودوليين — تعامل الشراكات كأصول مؤسسية طويلة الأجل تُراكم الوصول والقدرة والمصداقية.",
      cards: [
        { title: "توسيع الوصول إلى الأسواق", description: "تعاونات تفتح فرصًا إقليمية وعابرة للحدود لا تتاح للجهات المنفردة." },
        { title: "تعزيز التنفيذ", description: "شراكات تشغيلية تعزّز سعة التسليم والعمق التقني والتخصص القطاعي." },
        { title: "تقوية الموقع المؤسسي", description: "تحالفات مع حكومات وجهات متعددة الأطراف ومشاركين في أسواق المال ترفع المكانة المؤسسية." },
      ],
      closing: "الشراكات في المجموعة ليست معاملاتية — بل بنيوية.",
    },
    esg: {
      eyebrow: "الاستدامة وأهداف التنمية",
      title: "نمو مستدام ومسؤول.",
      intro: "تتوافق المجموعة مع أطر ESG العالمية وأهداف الأمم المتحدة للتنمية المستدامة — بدمج الاستدامة والحوكمة والأثر الاجتماعي في نموذج الأعمال.",
      pillars: [
        { title: "النمو الاقتصادي والبنية التحتية", sdg: "SDG 8 · 9", description: "استثمارات قابلة للتوسع وخلق فرص عمل وتطوير بنية تحتية." },
        { title: "الحوكمة والشفافية", sdg: "SDG 16", description: "الالتزام والممارسات الأخلاقية والمساءلة المؤسسية." },
        { title: "الابتكار والذكاء الاصطناعي", sdg: "SDG 9", description: "توظيف التقنية والذكاء لتحقيق الأداء والنمو." },
        { title: "الاستدامة والبيئة", sdg: "SDG 11 · 12 · 13", description: "تنمية مستدامة واستخدام مسؤول للموارد." },
        { title: "الشراكات العالمية", sdg: "SDG 17", description: "تحالفات عابرة للحدود توسّع الوصول والتنفيذ." },
        { title: "رأس المال البشري والشمول", sdg: "SDG 4 · 5 · 10", description: "تمكين المواهب والتنوع وتكافؤ الفرص." },
      ],
      frameworks: "نتقدم نحو التوافق مع:",
      frameworkList: ["مبادرة الإبلاغ العالمية (GRI)", "معايير أداء IFC", "أطر الإفصاح الدولية"],
    },
    growth: {
      eyebrow: "استراتيجية النمو",
      title: "نحو الجاهزية لأسواق المال.",
      intro: "تجمع استراتيجية المجموعة بين المنصات المتكاملة وبنية الذكاء الاصطناعي والحوكمة المؤسسية — تمهيدًا للمشاركة في أسواق المال.",
      items: [
        "توسيع المنصات المتكاملة عبر القطاعات",
        "توسيع هياكل الاستثمار المدعومة بالأصول",
        "تضمين الذكاء الاصطناعي في جميع العمليات",
        "تعزيز الشراكات المؤسسية",
        "التقدم نحو الجاهزية للطرح العام",
      ],
      closing: "بمعايير مؤسسية · جاهز للمستثمرين · متوافق مع ESG وأهداف التنمية · مُمكَّن بالذكاء الاصطناعي · جاهز اتجاهيًا للطرح.",
    },
    investors: {
      eyebrow: "للمستثمرين",
      title: "منصة قابضة قابلة للتوسع ومدعومة بالأصول.",
      intro: "تمثّل المجموعة منصة مؤسسية من الجيل التالي يلتقي فيها رأس المال والبنية التحتية والذكاء لصياغة الأسواق عالية النمو. للتواصل المؤسسي والاستفسارات حول الشراكة وأسواق المال.",
      quote: "المجموعة لا تتبع الأسواق. بل تبني المنصات التي تصنعها.",
      ctaDeck: "اطلب عرض المستثمرين",
      ctaMeeting: "حدّد موعدًا للقاء",
    },
    leadership: {
      eyebrow: "القيادة والحوكمة",
      title: "حوكمة مؤسسية.",
      name: "هاني حبشي",
      role: "رئيس مجلس الإدارة والرئيس التنفيذي، مجموعة حبشي القابضة",
      union: "رئيس اتحاد الأعمال الجورجي العربي الإفريقي",
      bio: "يقود المجموعة برؤية تركّز على بناء منصات قابلة للتوسع وجاهزة للمستقبل عبر الأسواق العالمية — مع توظيف الدبلوماسية الاقتصادية لتسهيل الاستثمار العابر للحدود وفتح فرص استراتيجية.",
      council: "تستند المجموعة إلى مجلس استشاري دولي وأطر حوكمة مؤسسية متوافقة مع معايير أسواق المال العالمية.",
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصل مع مجموعة حبشي القابضة.",
      intro: "للاستفسارات العامة والشراكات والتواصل المؤسسي.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      company: "الشركة / الجهة",
      message: "طبيعة الاستفسار",
      submit: "إرسال الرسالة",
      whatsapp: "خط مباشر",
      emailLabel: "البريد الإلكتروني",
      sent: "شكرًا لك. تم استلام رسالتك.",
    },
    footer: {
      tagline: "مبتكرة، متنوعة، ورائدة — نبني منصات متكاملة لقيمة طويلة الأجل.",
      address: "12 ميراب ألكسيدزه، تبليسي، جورجيا، GE 0193",
      phone: "+995 555 659 000",
      rights: "جميع الحقوق محفوظة.",
      resources: "روابط",
      contactCol: "تواصل",
    },
    langToggle: "English",
  },
};
