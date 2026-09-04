"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Orbit,
  Radio,
  Network,
  Satellite,
  Server,
  Plus,
  Menu,
  X,
} from "lucide-react";
import ContactSection, { type ContactTopic } from "./components/ContactSection";
import velastroLogo from "../Velastro_logos-3.png";
import { translations, type Lang } from "./i18n";
import { siteConfig } from "./site-config";

const NAV_LINKS = [
  { id: "vision", key: "vision" },
  { id: "solution", key: "system" },
  { id: "standards", key: "standards" },
  { id: "company", key: "company" },
] as const;
const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "cn", label: "中文" },
] as const;
const FOCUS_LINKS = ["payloads", "ground-systems", "standards"];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: reduced ? 0 : 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [languageReady, setLanguageReady] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [topic, setTopic] = useState<ContactTopic>("investment");
  const menuButton = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const orbitX = useSpring(pointerX, { stiffness: 50, damping: 20 });
  const orbitY = useSpring(pointerY, { stiffness: 50, damping: 20 });
  const t = translations[lang];

  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "de" || stored === "cn")
        setLang(stored);
    } catch {
      /* Language switching works when browser storage is unavailable. */
    }
    setLanguageReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "cn" ? "zh-CN" : lang;
    document.title = t.metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.metadata.description);
    if (languageReady) {
      try {
        localStorage.setItem("lang", lang);
      } catch {
        /* Optional preference storage. */
      }
    }
  }, [lang, languageReady, t.metadata.title, t.metadata.description]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      pointerX.set(0);
      pointerY.set(0);
      return;
    }
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointerX.set((event.clientX / window.innerWidth - 0.5) * -20);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * -20);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, [reducedMotion, pointerX, pointerY]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onEscape);
      desktop.removeEventListener("change", onResize);
    };
  }, [isMobileMenuOpen]);

  const selectTopic = (value: ContactTopic) => {
    setTopic(value);
    setIsMobileMenuOpen(false);
  };
  const languageButtons = (
    <div className="language-switch" role="group" aria-label={t.languageLabel}>
      {LANGUAGES.map((language) => (
        <button
          key={language.code}
          type="button"
          lang={language.code === "cn" ? "zh-CN" : language.code}
          aria-label={`${t.languageLabel}: ${language.label}`}
          aria-pressed={lang === language.code}
          onClick={() => {
            setLang(language.code);
            setIsMobileMenuOpen(false);
          }}
        >
          {language.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>
      <div
        className="fixed inset-0 z-0 bg-grid-dots opacity-10 pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        className="orbital-background"
        style={{ x: orbitX, y: orbitY }}
        aria-hidden="true"
      >
        <div className="orbital-ring orbital-ring-inner animate-spin-slow">
          <span />
        </div>
        <div className="orbital-ring orbital-ring-outer animate-spin-slow-reverse">
          <span />
        </div>
      </motion.div>

      <nav
        aria-label={t.navigationLabel}
        className={`site-nav ${isScrolled || isMobileMenuOpen ? "site-nav-scrolled" : ""}`}
      >
        <a href="#home" aria-label={t.homeLabel} className="brand-mark">
          <Image src={velastroLogo} alt="" width={40} height={40} priority />
          <span>VELASTRO</span>
        </a>
        <div className="desktop-navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href="#contact-us"
            className="button button-outline nav-investors"
            onClick={() => selectTopic("investment")}
          >
            {t.investors}
          </a>
          {languageButtons}
        </div>
        <button
          ref={menuButton}
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <a
              href="#contact-us"
              className="button button-outline"
              onClick={() => selectTopic("investment")}
            >
              {t.investors}
            </a>
            {languageButtons}
          </div>
        )}
      </nav>

      <main id="main-content">
        <section id="home" className="hero-section">
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.2 }}
            className="hero-content"
          >
            <p className="eyebrow hero-stage">{t.stage}</p>
            <h1 className="hero-brand">VELASTRO</h1>
            <p className="hero-title">{t.titleText}</p>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="button-row">
              <a
                href="#contact-us"
                className="button button-primary"
                onClick={() => selectTopic("investment")}
              >
                {t.investors}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#solution" className="button button-outline">
                {t.learnSystem}
              </a>
            </div>
          </motion.div>
          <aside className="scope-panel" aria-label={t.scope.title}>
            <p className="eyebrow">
              <Orbit size={14} aria-hidden="true" />
              {t.scope.title}
            </p>
            <dl>
              {t.scope.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <a href="#solution" className="explore-link">
            {t.exploreArchitecture}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="focus-strip" aria-label={t.focusKicker}>
          <div className="content-width">
            <p className="eyebrow text-center">{t.focusKicker}</p>
            <div className="focus-items">
              {t.focusAreas.map((area, i) => (
                <a key={area} href={`#${FOCUS_LINKS[i]}`}>
                  <span className="mono-index">0{i + 1}</span>
                  {area}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="section content-width">
          <Reveal>
            <SectionHeading {...t.vision} />
            <div className="three-column">
              {t.vision.cards.map((card, i) => {
                const Icon = [Orbit, Radio, Network][i];
                return (
                  <article className="principle-card" key={card.title}>
                    <Icon size={23} strokeWidth={1.3} aria-hidden="true" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section id="solution" className="section content-width">
          <Reveal>
            <SectionHeading {...t.architecture} />
            <figure className="architecture-panel">
              <div className="operator-grid">
                {t.architecture.operators.map((operator) => (
                  <div className="operator-node" key={operator}>
                    <p className="operator-name">{operator}</p>
                    <p className="operator-role">
                      {t.architecture.operatorRole}
                    </p>
                    <div className="payload-node">
                      <Satellite
                        size={21}
                        strokeWidth={1.3}
                        aria-hidden="true"
                      />
                      <span>{t.architecture.payload}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="architecture-bridge" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="architecture-connection">
                {t.architecture.connection}
              </p>
              <div className="ground-node">
                <Server size={26} strokeWidth={1.3} aria-hidden="true" />
                <div>
                  <h3>{t.architecture.ground}</h3>
                  <p>{t.architecture.groundDescription}</p>
                </div>
              </div>
              <div className="standard-band">
                <Network size={18} aria-hidden="true" />
                <p>{t.architecture.standards}</p>
              </div>
              <figcaption>
                <div className="diagram-legend">
                  {t.architecture.legend.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p>{t.architecture.note}</p>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section id="products" className="section content-width">
          <Reveal>
            <SectionHeading {...t.products} />
            <div className="product-grid">
              {t.products.cards.map((product, i) => {
                const Icon = i === 0 ? Satellite : Server;
                return (
                  <article
                    id={i === 0 ? "payloads" : "ground-systems"}
                    className="product-panel"
                    key={product.title}
                  >
                    <div className="product-top">
                      <span className="mono-index">0{i + 1}</span>
                      <Icon size={28} strokeWidth={1.3} aria-hidden="true" />
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <dl>
                      <dt>{t.products.scopeLabel}</dt>
                      <dd>{product.scope}</dd>
                      <dt>{t.products.interfacesLabel}</dt>
                      <dd>{product.interfaces}</dd>
                    </dl>
                    <a
                      className="text-link"
                      href="#contact-us"
                      onClick={() => selectTopic("systems")}
                    >
                      {product.cta}
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section id="standards" className="section standards-section">
          <div className="content-width">
            <Reveal>
              <SectionHeading {...t.standards} />
              <p className="status-label">
                <span aria-hidden="true" />
                {t.standards.status}
              </p>
              <div className="standard-list">
                {t.standards.cards.map((card, i) => (
                  <article key={card.title}>
                    <span className="mono-index">0{i + 1}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Plus size={18} aria-hidden="true" />
                  </article>
                ))}
              </div>
              <a
                className="text-link"
                href="#contact-us"
                onClick={() => selectTopic("standards")}
              >
                {t.standards.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="roadmap" className="section content-width">
          <Reveal>
            <SectionHeading {...t.roadmap} />
            <div className="roadmap-grid">
              {t.roadmap.steps.map((step, i) => (
                <article className="roadmap-step" key={step.title}>
                  <div className="roadmap-marker">
                    <span>0{i + 1}</span>
                    <span className="roadmap-line" />
                  </div>
                  <p className="eyebrow">{t.roadmap.planned}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="company" className="section content-width">
          <Reveal>
            <div className="company-grid">
              <SectionHeading {...t.company} />
              <div className="company-mission">
                <p className="eyebrow">{t.company.focus}</p>
                <p>{t.company.focusDescription}</p>
                <span className="status-label">{t.stage}</span>
              </div>
            </div>
            <div id="team" className="team-section">
              <h3 className="eyebrow">{t.company.teamLabel}</h3>
              <div className="team-grid">
                {siteConfig.team.map((member) => (
                  <article className="team-card" key={member.name}>
                    <div>
                      <h4>{member.name}</h4>
                      <span className="eyebrow">{member.role[lang]}</span>
                    </div>
                    <p>{member.bio[lang]}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <ContactSection lang={lang} topic={topic} onTopicChange={setTopic} />
      </main>
      <footer className="site-footer content-width">
        <div className="footer-top">
          <div>
            <a href="#home" className="footer-brand">
              VELASTRO{lang === "cn" && <span>帆星</span>}
            </a>
            <p>{t.footer.description}</p>
          </div>
          <a href="#home" className="text-link">
            {t.footer.top}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName[lang]}
          </span>
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          <details>
            <summary>{t.footer.privacy}</summary>
            <div>
              <h2>{t.footer.privacyTitle}</h2>
              <p>{t.footer.privacyText}</p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  );
}
