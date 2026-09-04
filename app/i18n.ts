export type Lang = "en" | "de" | "cn";

type Card = { title: string; description: string };
type Product = Card & { scope: string; interfaces: string; cta: string };
export type SiteCopy = {
  metadata: { title: string; description: string };
  stage: string;
  navigationLabel: string;
  languageLabel: string;
  homeLabel: string;
  openMenu: string;
  closeMenu: string;
  skip: string;
  nav: { vision: string; system: string; standards: string; company: string };
  investors: string;
  learnSystem: string;
  exploreArchitecture: string;
  titleText: string;
  heroDescription: string;
  focusKicker: string;
  focusAreas: string[];
  scope: { title: string; items: { label: string; value: string }[] };
  vision: { kicker: string; title: string; description: string; cards: Card[] };
  architecture: {
    kicker: string;
    title: string;
    description: string;
    operators: string[];
    operatorRole: string;
    payload: string;
    connection: string;
    ground: string;
    groundDescription: string;
    standards: string;
    note: string;
    legend: string[];
  };
  products: {
    kicker: string;
    title: string;
    description: string;
    scopeLabel: string;
    interfacesLabel: string;
    cards: Product[];
  };
  standards: {
    kicker: string;
    title: string;
    description: string;
    status: string;
    cards: Card[];
    cta: string;
  };
  roadmap: {
    kicker: string;
    title: string;
    description: string;
    planned: string;
    steps: Card[];
  };
  company: {
    kicker: string;
    title: string;
    description: string;
    focus: string;
    focusDescription: string;
    teamLabel: string;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    options: string[];
    form: {
      topic: string;
      name: string;
      organization: string;
      email: string;
      message: string;
      submit: string;
      note: string;
      opened: string;
      unavailable: string;
      direct: string;
      required: string;
    };
    bullets: Card[];
  };
  footer: {
    description: string;
    top: string;
    privacy: string;
    privacyTitle: string;
    privacyText: string;
  };
};

export const translations: Record<Lang, SiteCopy> = {
  en: {
    metadata: {
      title: "Velastro | Integrated Communications & Navigation from LEO",
      description:
        "Velastro is a concept-stage startup exploring satellite payloads, ground systems and cooperation standards for communications and navigation across operators’ LEO constellations.",
    },
    stage: "Concept-stage startup",
    navigationLabel: "Main navigation",
    languageLabel: "Language",
    homeLabel: "Velastro home",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    skip: "Skip to content",
    nav: {
      vision: "VISION",
      system: "SYSTEM",
      standards: "STANDARDS",
      company: "COMPANY",
    },
    investors: "Investor enquiries",
    learnSystem: "Explore the system",
    exploreArchitecture: "Explore architecture",
    titleText:
      "Integrated communications & navigation across LEO constellations",
    heroDescription:
      "Our ambition is to bring integrated communications and navigation services to different operators’ LEO constellations — through satellite payloads, ground systems and joint work on cooperation standards.",
    focusKicker: "Our development focus",
    focusAreas: [
      "Satellite payloads",
      "Ground systems",
      "Multi-constellation cooperation",
    ],
    scope: {
      title: "System scope",
      items: [
        { label: "Space", value: "Payloads" },
        { label: "Ground", value: "Systems" },
        { label: "Standards", value: "Planned research" },
      ],
    },
    vision: {
      kicker: "01 / Vision",
      title: "One ambition. Across operators.",
      description:
        "We aim to make use of the scale of low Earth orbit satellite constellations by enabling different operators to host our communications and navigation service.",
      cards: [
        {
          title: "Deploy across constellations",
          description:
            "Explore hosting opportunities with different satellite operators, building a path for the service to extend across their constellations.",
        },
        {
          title: "Connect space and ground",
          description:
            "Develop the payload and ground-system foundations together, with service integration guiding the system design.",
        },
        {
          title: "Develop cooperation together",
          description:
            "Work towards joint research into common rules for cross-operator cooperation and the verification of interoperability.",
        },
      ],
    },
    architecture: {
      kicker: "02 / System architecture",
      title: "From satellite payloads to ground systems.",
      description:
        "A concept for hosting VELASTRO services across operators, supported by coordinated space and ground systems.",
      operators: ["Operator A", "Operator B", "Operator C"],
      operatorRole: "LEO constellation · hosting partner",
      payload: "VELASTRO service payload",
      connection: "Space–ground cooperation",
      ground: "VELASTRO ground systems",
      groundDescription:
        "Ground-side capabilities to support the hosted communications and navigation service.",
      standards:
        "Cross-operator cooperation standards · planned joint research",
      note: "Conceptual relationship diagram. Operators are illustrative; connections show intended cooperation, not specified links or existing deployments.",
      legend: [
        "Solid outline · VELASTRO development scope",
        "Dashed outline · operator hosting context",
      ],
    },
    products: {
      kicker: "03 / Space & ground",
      title: "Two parts of an integrated system.",
      description:
        "Our proposed satellite payloads and ground systems are the technical foundation of the service concept. We are at the idea stage and do not yet have a product.",
      scopeLabel: "Development focus",
      interfacesLabel: "Integration scope",
      cards: [
        {
          title: "Satellite payloads",
          description:
            "The space-side foundation for hosting integrated communications and navigation services.",
          scope:
            "Payload design centred on communications and navigation functions and their integration within a service.",
          interfaces:
            "Explore integration with the host satellite platform and coordination with the ground system, together with operators.",
          cta: "Discuss payload cooperation",
        },
        {
          title: "Ground systems",
          description:
            "The ground-side foundation for supporting service delivery across hosted payloads.",
          scope:
            "Ground-system design centred on the processing, management and service support needed by the space segment.",
          interfaces:
            "Explore space–ground integration and connections with operators’ systems, aligned with the service architecture.",
          cta: "Discuss ground systems",
        },
      ],
    },
    standards: {
      kicker: "04 / Multi-constellation cooperation",
      title: "Common ground for different constellations.",
      description:
        "We plan to research and jointly develop cooperation standards so that operators hosting the service can work within a shared framework.",
      status: "Planned research & joint development",
      cards: [
        {
          title: "Cooperation scope",
          description:
            "Define the roles, system boundaries and cooperation needs of participating LEO constellation operators.",
        },
        {
          title: "Interfaces & information",
          description:
            "Study what service information and interface conventions need to be shared across systems.",
        },
        {
          title: "Service coordination",
          description:
            "Investigate coordination requirements for integrated communications and navigation across operators.",
        },
        {
          title: "Interoperability & validation",
          description:
            "Explore joint validation methods and criteria for assessing whether systems can work together.",
        },
      ],
      cta: "Discuss joint research",
    },
    roadmap: {
      kicker: "05 / Development direction",
      title: "From system definition to cooperation.",
      description:
        "Our proposed development path brings system design, operator integration and cross-constellation validation into one sequence. These are forward-looking work areas, not completed milestones.",
      planned: "Planned direction",
      steps: [
        {
          title: "Define the system",
          description:
            "Clarify the service architecture, payload and ground-system boundaries, and operator integration needs.",
        },
        {
          title: "Prototype & validate",
          description:
            "Develop a path for prototypes and ground-based verification of the integrated system.",
        },
        {
          title: "Integrate with operators",
          description:
            "Explore joint integration and demonstration opportunities with hosting operators.",
        },
        {
          title: "Verify cooperation",
          description:
            "Work towards cross-constellation interoperability validation and joint standards research.",
        },
      ],
    },
    company: {
      kicker: "06 / Company",
      title: "Building VELASTRO.",
      description:
        "Velastro is a concept-stage startup focused on integrated communications and navigation from low Earth orbit. Our work is centred on a vision for satellite payloads, ground systems and cooperation between constellations.",
      focus: "Our mission",
      focusDescription:
        "Enable different operators’ constellations to host our service, and work together on standards for their cooperation.",
      teamLabel: "The team",
    },
    contact: {
      kicker: "07 / Contact",
      title: "Help shape what comes next.",
      description:
        "Connect with VELASTRO about investment, operator hosting or joint technical research.",
      options: [
        "Investment",
        "Operator cooperation",
        "Payloads & ground systems",
        "Standards research",
      ],
      bullets: [
        {
          title: "Investors",
          description:
            "Discuss the vision, technical approach and development direction.",
        },
        {
          title: "Constellation operators",
          description: "Explore service hosting and space–ground integration.",
        },
        {
          title: "Research partners",
          description:
            "Discuss cross-constellation cooperation and joint standards research.",
        },
      ],
      form: {
        topic: "Enquiry type",
        name: "Name",
        organization: "Organization",
        email: "Work email",
        message: "What would you like to discuss?",
        submit: "Open email draft",
        note: "This opens a draft in your email app. Review and send it there; this website does not submit the enquiry.",
        opened:
          "An email draft was requested. If your email app did not open, use the address below. Your message has not been sent by this website.",
        unavailable: "Our public contact channel will be announced here.",
        direct: "Email us directly",
        required: "* Required fields",
      },
    },
    footer: {
      description:
        "Integrated communications & navigation from low Earth orbit.",
      top: "Back to top",
      privacy: "Contact privacy",
      privacyTitle: "How this contact form works",
      privacyText:
        "The contact form prepares an email using the details you enter. It does not submit those details to a website server. You choose whether to send the email in your own email app. Your language preference is stored in this browser.",
    },
  },
  de: {
    metadata: {
      title: "Velastro | Integrierte Kommunikation & Navigation aus LEO",
      description:
        "Velastro ist ein Startup in der Konzeptphase für Satellitennutzlasten, Bodensysteme und Kooperationsstandards für Kommunikation und Navigation über LEO-Konstellationen hinweg.",
    },
    stage: "Startup in der Konzeptphase",
    navigationLabel: "Hauptnavigation",
    languageLabel: "Sprache",
    homeLabel: "Velastro Startseite",
    openMenu: "Navigation öffnen",
    closeMenu: "Navigation schließen",
    skip: "Zum Inhalt springen",
    nav: {
      vision: "VISION",
      system: "SYSTEM",
      standards: "STANDARDS",
      company: "UNTERNEHMEN",
    },
    investors: "Investorenkontakt",
    learnSystem: "System entdecken",
    exploreArchitecture: "Architektur entdecken",
    titleText:
      "Integrierte Kommunikation und Navigation über LEO-Konstellationen hinweg",
    heroDescription:
      "Unser Ziel ist es, integrierte Kommunikations- und Navigationsdienste auf den LEO-Konstellationen verschiedener Betreiber bereitzustellen – mit Satellitennutzlasten, Bodensystemen und gemeinsamer Arbeit an Kooperationsstandards.",
    focusKicker: "Unsere Entwicklungsschwerpunkte",
    focusAreas: [
      "Satellitennutzlasten",
      "Bodensysteme",
      "Kooperation mehrerer Konstellationen",
    ],
    scope: {
      title: "Systemumfang",
      items: [
        { label: "Weltraum", value: "Nutzlasten" },
        { label: "Boden", value: "Systeme" },
        { label: "Standards", value: "Forschung geplant" },
      ],
    },
    vision: {
      kicker: "01 / Vision",
      title: "Ein gemeinsames Ziel. Über Betreibergrenzen hinweg.",
      description:
        "Wir wollen die Vielzahl von Satelliten im niedrigen Erdorbit nutzen, indem wir verschiedenen Betreibern ermöglichen, unseren Kommunikations- und Navigationsdienst auf ihren Konstellationen bereitzustellen.",
      cards: [
        {
          title: "Konstellationen verbinden",
          description:
            "Mit verschiedenen Satellitenbetreibern Möglichkeiten zur Aufnahme des Dienstes untersuchen und so einen Weg zur breiteren Bereitstellung schaffen.",
        },
        {
          title: "Weltraum und Boden zusammen denken",
          description:
            "Nutzlasten und Bodensysteme gemeinsam entwickeln und die Integration des Dienstes in den Mittelpunkt des Systementwurfs stellen.",
        },
        {
          title: "Kooperation gemeinsam gestalten",
          description:
            "Die gemeinsame Forschung an Regeln für die Zusammenarbeit zwischen Betreibern und die Prüfung der Interoperabilität vorbereiten.",
        },
      ],
    },
    architecture: {
      kicker: "02 / Systemarchitektur",
      title: "Von Satellitennutzlasten zu Bodensystemen.",
      description:
        "Ein Konzept für VELASTRO-Dienste auf den Konstellationen verschiedener Betreiber, getragen von aufeinander abgestimmten Weltraum- und Bodensystemen.",
      operators: ["Betreiber A", "Betreiber B", "Betreiber C"],
      operatorRole: "LEO-Konstellation · Plattformpartner",
      payload: "VELASTRO-Dienstnutzlast",
      connection: "Zusammenspiel von Weltraum und Boden",
      ground: "VELASTRO-Bodensysteme",
      groundDescription:
        "Bodenseitige Funktionen zur Unterstützung des Kommunikations- und Navigationsdienstes.",
      standards:
        "Standards für Betreiberkooperation · gemeinsame Forschung geplant",
      note: "Konzeptionelles Beziehungsdiagramm. Die Betreiber sind Beispiele; Verbindungen zeigen die geplante Zusammenarbeit, keine spezifizierten Funkverbindungen oder bestehenden Systeme.",
      legend: [
        "Durchgezogen · VELASTRO-Entwicklungsumfang",
        "Gestrichelt · Plattform des Betreibers",
      ],
    },
    products: {
      kicker: "03 / Weltraum & Boden",
      title: "Zwei Teile eines integrierten Systems.",
      description:
        "Geplante Satellitennutzlasten und Bodensysteme bilden die technische Grundlage unseres Dienstkonzepts. Wir befinden uns in der Ideenphase und haben noch kein Produkt.",
      scopeLabel: "Entwicklungsschwerpunkt",
      interfacesLabel: "Integrationsumfang",
      cards: [
        {
          title: "Satellitennutzlasten",
          description:
            "Die weltraumseitige Grundlage für integrierte Kommunikations- und Navigationsdienste.",
          scope:
            "Nutzlastentwurf mit Fokus auf Kommunikations- und Navigationsfunktionen und deren Integration in einen Dienst.",
          interfaces:
            "Gemeinsam mit Betreibern die Integration in die Satellitenplattform und das Zusammenspiel mit dem Bodensystem untersuchen.",
          cta: "Über Nutzlasten sprechen",
        },
        {
          title: "Bodensysteme",
          description:
            "Die bodenseitige Grundlage zur Unterstützung des Dienstes über die eingebundenen Nutzlasten.",
          scope:
            "Bodensystementwurf mit Fokus auf Verarbeitung, Verwaltung und Unterstützung der weltraumseitigen Dienstfunktionen.",
          interfaces:
            "Die Integration von Weltraum- und Bodensegment sowie Schnittstellen zu Betreibersystemen entsprechend der Dienstarchitektur untersuchen.",
          cta: "Über Bodensysteme sprechen",
        },
      ],
    },
    standards: {
      kicker: "04 / Kooperation mehrerer Konstellationen",
      title: "Eine gemeinsame Basis für verschiedene Konstellationen.",
      description:
        "Wir planen die Erforschung und gemeinsame Entwicklung von Kooperationsstandards, damit Betreiber des Dienstes innerhalb eines gemeinsamen Rahmens zusammenarbeiten können.",
      status: "Forschung & gemeinsame Entwicklung geplant",
      cards: [
        {
          title: "Kooperationsumfang",
          description:
            "Rollen, Systemgrenzen und Kooperationsbedarf teilnehmender LEO-Konstellationsbetreiber definieren.",
        },
        {
          title: "Schnittstellen & Informationen",
          description:
            "Untersuchen, welche Dienstinformationen und Schnittstellenkonventionen systemübergreifend benötigt werden.",
        },
        {
          title: "Dienstkoordination",
          description:
            "Koordinationsanforderungen für integrierte Kommunikation und Navigation zwischen Betreibern erforschen.",
        },
        {
          title: "Interoperabilität & Validierung",
          description:
            "Gemeinsame Prüfmethoden und Kriterien für das Zusammenspiel der Systeme untersuchen.",
        },
      ],
      cta: "Gemeinsame Forschung besprechen",
    },
    roadmap: {
      kicker: "05 / Entwicklungsrichtung",
      title: "Vom Systementwurf zur Zusammenarbeit.",
      description:
        "Unser vorgeschlagener Entwicklungsweg verbindet Systementwurf, Betreiberintegration und die Validierung der Zusammenarbeit. Dies sind geplante Arbeitsfelder, keine abgeschlossenen Meilensteine.",
      planned: "Geplante Richtung",
      steps: [
        {
          title: "System definieren",
          description:
            "Dienstarchitektur, Grenzen der Nutzlasten und Bodensysteme sowie Integrationsbedarf der Betreiber klären.",
        },
        {
          title: "Prototypen & Validierung",
          description:
            "Einen Weg zu Prototypen und bodengestützter Überprüfung des integrierten Systems entwickeln.",
        },
        {
          title: "Betreiber einbinden",
          description:
            "Gemeinsame Integrations- und Demonstrationsmöglichkeiten mit Plattformbetreibern untersuchen.",
        },
        {
          title: "Kooperation prüfen",
          description:
            "Auf die Validierung der Interoperabilität und gemeinsame Forschung an Standards hinarbeiten.",
        },
      ],
    },
    company: {
      kicker: "06 / Unternehmen",
      title: "Wir bauen VELASTRO auf.",
      description:
        "Velastro ist ein Startup in der Konzeptphase für integrierte Kommunikation und Navigation aus dem niedrigen Erdorbit. Im Mittelpunkt stehen Satellitennutzlasten, Bodensysteme und die Zusammenarbeit zwischen Konstellationen.",
      focus: "Unsere Mission",
      focusDescription:
        "Verschiedenen Betreibern ermöglichen, unseren Dienst auf ihren Konstellationen bereitzustellen, und gemeinsam Standards für ihre Kooperation entwickeln.",
      teamLabel: "Das Team",
    },
    contact: {
      kicker: "07 / Kontakt",
      title: "Gestalten Sie die nächsten Schritte mit.",
      description:
        "Sprechen Sie mit VELASTRO über Investitionen, die Einbindung auf Betreiberplattformen oder gemeinsame technische Forschung.",
      options: [
        "Investition",
        "Betreiberkooperation",
        "Nutzlasten & Bodensysteme",
        "Standardforschung",
      ],
      bullets: [
        {
          title: "Investoren",
          description:
            "Vision, technischen Ansatz und Entwicklungsrichtung besprechen.",
        },
        {
          title: "Konstellationsbetreiber",
          description:
            "Möglichkeiten zur Diensteinbindung und Integration von Weltraum- und Bodensystemen untersuchen.",
        },
        {
          title: "Forschungspartner",
          description:
            "Kooperation zwischen Konstellationen und gemeinsame Standardforschung besprechen.",
        },
      ],
      form: {
        topic: "Art der Anfrage",
        name: "Name",
        organization: "Organisation",
        email: "Geschäftliche E-Mail",
        message: "Was möchten Sie besprechen?",
        submit: "E-Mail-Entwurf öffnen",
        note: "Öffnet einen Entwurf in Ihrer E-Mail-App. Prüfen und versenden Sie ihn dort; diese Website übermittelt die Anfrage nicht.",
        opened:
          "Ein E-Mail-Entwurf wurde angefordert. Falls sich Ihre E-Mail-App nicht geöffnet hat, nutzen Sie die Adresse unten. Die Website hat Ihre Nachricht nicht versendet.",
        unavailable:
          "Unser öffentlicher Kontaktkanal wird hier bekannt gegeben.",
        direct: "Direkt per E-Mail kontaktieren",
        required: "* Pflichtfelder",
      },
    },
    footer: {
      description:
        "Integrierte Kommunikation und Navigation aus dem niedrigen Erdorbit.",
      top: "Nach oben",
      privacy: "Datenschutz beim Kontakt",
      privacyTitle: "So funktioniert das Kontaktformular",
      privacyText:
        "Das Formular bereitet aus Ihren Angaben eine E-Mail vor. Es übermittelt diese Angaben nicht an einen Website-Server. Sie entscheiden in Ihrer E-Mail-App, ob Sie die Nachricht versenden. Ihre Spracheinstellung wird in diesem Browser gespeichert.",
    },
  },
  cn: {
    metadata: {
      title: "帆星 Velastro | 低轨卫星通信导航一体化",
      description:
        "帆星 Velastro 是处于概念阶段的初创公司，探索卫星载荷、地面系统及跨运营商协同标准，致力于让不同低轨星座搭载通信导航一体化服务。",
    },
    stage: "帆星 / 概念阶段初创公司",
    navigationLabel: "主导航",
    languageLabel: "语言",
    homeLabel: "VELASTRO 首页",
    openMenu: "打开导航",
    closeMenu: "关闭导航",
    skip: "跳至正文",
    nav: {
      vision: "愿景",
      system: "系统",
      standards: "协同标准",
      company: "公司",
    },
    investors: "投资者交流",
    learnSystem: "了解系统",
    exploreArchitecture: "探索系统架构",
    titleText: "低轨卫星通信导航一体化",
    heroDescription:
      "致力于让不同运营商的低轨星座搭载通信导航一体化服务，研制卫星载荷与地面系统，推动跨星座协同标准的联合研究与制定。",
    focusKicker: "我们的研发方向",
    focusAreas: ["卫星载荷", "地面系统", "多星座协同"],
    scope: {
      title: "系统构成",
      items: [
        { label: "空间侧", value: "卫星载荷" },
        { label: "地面侧", value: "地面系统" },
        { label: "协同标准", value: "拟联合研究" },
      ],
    },
    vision: {
      kicker: "01 / 愿景",
      title: "共同的服务愿景，跨越不同星座。",
      description:
        "我们希望充分利用低轨卫星的数量优势，让不同运营商的星座均能搭载 VELASTRO 通信导航一体化服务。",
      cards: [
        {
          title: "跨星座搭载",
          description:
            "与不同卫星运营商探索服务搭载机会，为通信导航一体化服务拓展至更多星座建立路径。",
        },
        {
          title: "空间与地面协同",
          description:
            "围绕一体化服务需求，共同设计卫星载荷与地面系统，让空间侧与地面侧形成完整的系统关系。",
        },
        {
          title: "共同研究协作规则",
          description:
            "推动跨运营商合作规则的联合研究，探索系统之间的互操作与验证方法。",
        },
      ],
    },
    architecture: {
      kicker: "02 / 系统架构",
      title: "从卫星载荷，到地面系统。",
      description:
        "通过空间与地面系统的协同，探索在不同运营商星座上搭载 VELASTRO 服务的系统架构。",
      operators: ["运营商 A", "运营商 B", "运营商 C"],
      operatorRole: "低轨星座 · 搭载合作方",
      payload: "VELASTRO 服务载荷",
      connection: "空间与地面协同",
      ground: "VELASTRO 地面系统",
      groundDescription: "为星上搭载的通信导航一体化服务提供地面侧能力支撑。",
      standards: "跨运营商协同标准 · 拟联合研究",
      note: "概念关系示意。运营商为示意对象；连线表示拟议的协同关系，不代表具体链路或已部署系统。",
      legend: ["实线框 · VELASTRO 研发范围", "虚线框 · 运营商搭载环境"],
    },
    products: {
      kicker: "03 / 卫星载荷与地面系统",
      title: "一体化系统的两个组成部分。",
      description:
        "以拟议的卫星载荷与地面系统为技术基础，探索面向运营商星座的通信导航一体化服务。目前处于想法阶段，尚无实际产品。",
      scopeLabel: "研发方向",
      interfacesLabel: "接入关系",
      cards: [
        {
          title: "卫星载荷",
          description: "承载通信导航一体化服务的空间侧基础。",
          scope: "拟围绕通信与导航功能及其服务集成需求，探索载荷设计。",
          interfaces:
            "与运营商共同探索载荷与卫星平台的集成，以及与地面系统的协同。",
          cta: "交流载荷合作",
        },
        {
          title: "地面系统",
          description: "支撑星上服务运行与协同的地面侧基础。",
          scope:
            "拟围绕空间侧服务所需的处理、管理与服务支撑能力，探索地面系统设计。",
          interfaces:
            "根据整体服务架构，探索空间与地面集成，以及与运营商系统的接入关系。",
          cta: "交流地面系统",
        },
      ],
    },
    standards: {
      kicker: "04 / 多星座协同",
      title: "让不同运营商的星座协同工作。",
      description:
        "我们计划联合研究与制定协同标准，为搭载同一服务的不同运营商建立共同的合作框架。",
      status: "拟开展研究与联合制定",
      cards: [
        {
          title: "协同范围",
          description: "明确参与的低轨星座运营商角色、系统边界与合作需求。",
        },
        {
          title: "接口与信息交换",
          description: "研究跨系统需要共同约定的服务信息与接口规则。",
        },
        {
          title: "服务协同机制",
          description: "探索通信导航一体化服务在不同运营商之间的协同需求。",
        },
        {
          title: "互操作与验证",
          description:
            "研究共同的验证方法与判定条件，评估系统之间能否协同工作。",
        },
      ],
      cta: "探讨联合研究",
    },
    roadmap: {
      kicker: "05 / 发展方向",
      title: "从系统定义，走向协同验证。",
      description:
        "拟议的发展路径将系统设计、运营商集成与跨星座验证连接起来。以下为面向未来的工作方向，不代表已完成的里程碑。",
      planned: "拟议方向",
      steps: [
        {
          title: "系统定义",
          description:
            "明确服务架构、载荷与地面系统边界，以及运营商的集成需求。",
        },
        {
          title: "原型与地面验证",
          description: "探索一体化系统原型研制及地面验证的实施路径。",
        },
        {
          title: "运营商联合集成",
          description: "与搭载合作方探索联合集成与演示机会。",
        },
        {
          title: "跨星座协同验证",
          description: "推进互操作验证方向的探索与协同标准的联合研究。",
        },
      ],
    },
    company: {
      kicker: "06 / 公司",
      title: "帆星，与星座共同成长。",
      description:
        "帆星（Velastro）是一家处于概念阶段的初创公司，专注于低轨卫星通信导航一体化，围绕卫星载荷、地面系统与多星座协同构建服务愿景。",
      focus: "我们的宗旨",
      focusDescription:
        "让不同运营商的星座搭载我们的服务，并共同研究与制定星座之间的协作标准。",
      teamLabel: "团队",
    },
    contact: {
      kicker: "07 / 联系",
      title: "共同推进下一步。",
      description: "与 VELASTRO 交流投资、运营商搭载合作或联合技术研究。",
      options: ["投资交流", "运营商合作", "载荷与地面系统", "标准研究"],
      bullets: [
        { title: "投资者", description: "交流公司愿景、技术思路与发展方向。" },
        {
          title: "星座运营商",
          description: "探索服务搭载及空间与地面系统的集成。",
        },
        { title: "研究伙伴", description: "探讨跨星座协同与标准联合研究。" },
      ],
      form: {
        topic: "合作方向",
        name: "姓名",
        organization: "机构",
        email: "工作邮箱",
        message: "您希望交流什么？",
        submit: "打开邮件草稿",
        note: "将在您的邮件应用中打开草稿，请核对后自行发送；网页不会直接提交咨询。",
        opened:
          "已请求打开邮件草稿。如果邮件应用未打开，请使用下方邮箱联系。网页尚未发送您的消息。",
        unavailable: "公开联系渠道将于此处公布。",
        direct: "直接邮件联系",
        required: "* 为必填项",
      },
    },
    footer: {
      description: "以低轨卫星为基础的通信导航一体化。",
      top: "返回顶部",
      privacy: "联系信息说明",
      privacyTitle: "联系表单如何处理信息",
      privacyText:
        "表单将您填写的内容整理为邮件草稿，不会将这些内容提交至网站服务器。是否发送由您在邮件应用中决定。您的语言偏好会保存在当前浏览器中。",
    },
  },
};
