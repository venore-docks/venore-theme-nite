import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// "Grid" — HUD cyberpunk. Header full-width no topo, sidebar à esquerda SEMPRE em modo rail
// só-ícone (sem expandir, sem botão de colapso — ver SidebarLeftSlot.tsx). A simplicidade radical
// da navegação é a identidade: nada compete com o brilho neon dos tokens de cor. Agora bimodal
// (claro/escuro) — antes só existia versão escura.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeaderSlot {...header} />
      <div className="flex flex-1">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col">
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
          <FooterSlot {...footer} />
        </div>
      </div>
    </div>
  );
}
