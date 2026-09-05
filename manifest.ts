import type { ThemeManifest } from "@venore/theme-sdk";

export const niteManifest: ThemeManifest = {
  key: "nite",
  name: "Nite",
  version: "0.1.0",
  themeContractVersion: "7.0.0",
  // A marca usa o logo real do site (brand.logoUrl de contexts/settings), via PlatformBrand.
  brandAesthetics: { mode: "svg", size: 100, scrolledSize: 80, position: "left", color: "#d63aa8" },
  // single-mode: cyberpunk só faz sentido escuro. O root layout força .dark; o toggle some.
  colorModes: ["dark"],
};
