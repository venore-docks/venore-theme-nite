import type { ThemeManifest } from "@venore/theme-sdk";

export const niteManifest: ThemeManifest = {
  key: "nite",
  name: "Nite",
  version: "0.1.0",
  themeContractVersion: "6.0.0",
  // mode "text": a marca é o losango de circuito do BrandMark do próprio tema.
  brandAesthetics: { mode: "text", size: 100, scrolledSize: 80, position: "left", color: "#d63aa8" },
  // single-mode: cyberpunk só faz sentido escuro. O root layout força .dark; o toggle some.
  colorModes: ["dark"],
};
