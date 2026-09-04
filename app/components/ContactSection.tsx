"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { translations, type Lang } from "../i18n";
import { siteConfig } from "../site-config";
import { buildContactMailto } from "../contact";

export const CONTACT_TOPICS = [
  "investment",
  "operators",
  "systems",
  "standards",
] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

type ContactSectionProps = {
  lang: Lang;
  topic: ContactTopic;
  onTopicChange: (topic: ContactTopic) => void;
};

export default function ContactSection({
  lang,
  topic,
  onTopicChange,
}: ContactSectionProps) {
  const t = translations[lang].contact;
  const [draftRequested, setDraftRequested] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const topicLabel = t.options[CONTACT_TOPICS.indexOf(topic)];
    const mailto = buildContactMailto(siteConfig.contactEmail, {
      topic: topicLabel,
      name: String(form.get("name") ?? ""),
      organization: String(form.get("organization") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });
    window.location.href = mailto;
    setDraftRequested(true);
  }

  return (
    <section id="contact-us" className="section contact-section content-width">
      <div id="investors" className="contact-grid">
        <div>
          <p className="eyebrow">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p className="section-description">{t.description}</p>
          <div className="contact-directions">
            {t.bullets.map((bullet) => (
              <div key={bullet.title}>
                <Plus size={19} strokeWidth={1.3} aria-hidden="true" />
                <div>
                  <h3>{bullet.title}</h3>
                  <p>{bullet.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            className="contact-email"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            {siteConfig.contactEmail}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          onChange={() => setDraftRequested(false)}
          className="contact-form"
          aria-label={t.title}
        >
          <div className="form-field">
            <label htmlFor="contact-topic">{t.form.topic}</label>
            <select
              id="contact-topic"
              name="topic"
              value={topic}
              onChange={(event) =>
                onTopicChange(event.target.value as ContactTopic)
              }
            >
              {CONTACT_TOPICS.map((value, i) => (
                <option key={value} value={value}>
                  {t.options[i]}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">{t.form.name} *</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-organization">
                {t.form.organization}
              </label>
              <input
                id="contact-organization"
                name="organization"
                autoComplete="organization"
                maxLength={150}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">{t.form.email} *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">{t.form.message} *</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              maxLength={1500}
            />
          </div>
          <p id="contact-note" className="form-note">
            {t.form.required}
            <br />
            {t.form.note}
          </p>
          <button
            type="submit"
            className="button button-primary"
            aria-describedby="contact-note"
          >
            {t.form.submit}
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p role="status" aria-live="polite" className="form-status">
            {draftRequested ? t.form.opened : ""}
          </p>
          {draftRequested && (
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-link">
              {t.form.direct}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </form>
      </div>
    </section>
  );
}
