import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o magenta neon do bloco base de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const NITE_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.58 0.26 330)",
      primaryForeground: "oklch(0.99 0.008 330)",
      accent: "oklch(0.85 0.15 195)",
      accentForeground: "oklch(0.18 0.05 195)",
      ring: "oklch(0.58 0.22 330)",
    },
    dark: {
      primary: "oklch(0.68 0.24 330)",
      primaryForeground: "oklch(0.12 0.02 330)",
      accent: "oklch(0.4 0.12 195)",
      accentForeground: "oklch(0.94 0.03 195)",
      ring: "oklch(0.66 0.22 330)",
    },
  },
  THEME_HUE_PRESETS,
);
