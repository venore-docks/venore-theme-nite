import type { ThemeManifest } from "@venore/theme-sdk";

export const niteManifest: ThemeManifest = {
  key: "nite",
  name: "Nite",
  version: "2.0.0",
  themeContractVersion: "7.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand. Cor
  // aproxima o magenta neon de --primary no modo claro (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 84, position: "left", color: "oklch(0.58 0.26 330)" },
  // Deixa de ser single-mode (refatoração completa desta sessão) — "cyberpunk diurno" funciona
  // tão bem quanto a versão escura original.
  colorModes: ["light", "dark"],
};
