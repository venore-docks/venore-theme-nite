import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

export const NITE_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.7 0.27 330)",
      primaryForeground: "oklch(0.12 0.03 330)",
      accent: "oklch(0.82 0.16 195)",
      accentForeground: "oklch(0.14 0.04 210)",
      ring: "oklch(0.82 0.16 195)",
    },
    dark: {
      primary: "oklch(0.7 0.27 330)",
      primaryForeground: "oklch(0.12 0.03 330)",
      accent: "oklch(0.82 0.16 195)",
      accentForeground: "oklch(0.14 0.04 210)",
      ring: "oklch(0.82 0.16 195)",
    },
  },
  THEME_HUE_PRESETS,
);
