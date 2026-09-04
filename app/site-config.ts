import type { Lang } from "./i18n";

export type LocalizedText = Record<Lang, string>;
export type TeamMember = {
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
};

// Public company facts supplied by the founders; no assumed product milestones.
export const siteConfig: {
  companyName: LocalizedText;
  contactEmail: string;
  team: TeamMember[];
} = {
  companyName: { en: "Velastro", de: "Velastro", cn: "帆星（Velastro）" },
  contactEmail: "wys3997@outlook.com",
  team: [
    {
      name: "魏叶松",
      role: { en: "CEO", de: "CEO", cn: "CEO" },
      bio: {
        en: "Master’s degree in Space Technology, Technical University of Munich.",
        de: "Masterabschluss in Raumfahrttechnologie, Technische Universität München.",
        cn: "慕尼黑工业大学空间技术硕士。",
      },
    },
    {
      name: "林博策",
      role: { en: "CTO", de: "CTO", cn: "CTO" },
      bio: {
        en: "Doctorate in Electrical Engineering, ETH Zurich.",
        de: "Doktorat in Elektrotechnik, ETH Zürich.",
        cn: "苏黎世联邦理工学院电子系博士。",
      },
    },
  ],
};
