"use client";

import { Globe2, ShieldCheck } from "lucide-react";
import type { SidebarLeftSlotProps } from "@venore/theme-sdk";
import { cn } from "@venore/theme-sdk/ui";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { SidebarNavLink } from "./SidebarNavLink";
import { SIDEBAR_COLLAPSE_TOOLTIP_COLLAPSED_CLASSES, SIDEBAR_COLLAPSE_TOOLTIP_LABEL_CLASSES } from "./sidebar-collapse-tooltip";

// "Grid" — a sidebar NUNCA expande no desktop: é sempre um rail só-ícone (HUD), sem botão de
// colapso nem o conceito de "expandido" (pedido desta sessão — a simplicidade É a identidade
// "cyberpunk sóbrio" deste tema). `collapsed`/`onToggleCollapsed` de SidebarLeftSlotProps
// continuam chegando (contrato aditivo — outro tema pode ignorá-los), só não são usados aqui:
// o rótulo de cada item só aparece via tooltip no hover/foco (SIDEBAR_COLLAPSE_TOOLTIP_*),
// nunca como coluna expandida. Abaixo de lg o drawer off-canvas mostra a versão completa (com
// rótulo) — colapso é conceito exclusivo de desktop (docs/ui/shell-spec.md §3.1), então o mobile
// não perde acesso ao texto dos itens.
export function SidebarLeftSlot({
  enabled,
  navMode,
  navItems,
  navGroups,
  canToggleAdminNav,
  onToggleNavMode,
}: SidebarLeftSlotProps) {
  if (!enabled) return null;

  const isAdmin = navMode === "admin";

  return (
    <MobileNavDrawer
      asideClassName={cn(
        // px-3 — mesmo racional de espaço do Aurora (ver SidebarNavLink.tsx pra conta completa).
        // Cópia deste tema: sem `lg:w-(--sidebar-width-expanded)` nem branch de collapsed — a
        // largura é SEMPRE --sidebar-width-collapsed a partir de lg, não existe estado expandido.
        "relative flex h-full w-full flex-col px-3 py-6 text-foreground shadow-float bg-(image:--sidebar-bg) lg:w-(--sidebar-width-collapsed) lg:shrink-0 lg:shadow-none ui-motion-emphasis",
        isAdmin ? "border-ring lg:border-r-2" : "border-border lg:border-r",
      )}
    >
      {canToggleAdminNav && (
        <div className="shrink-0 border-b border-border pb-4">
          <SidebarSurfaceSwitch isAdmin={isAdmin} onToggleNavMode={onToggleNavMode} />
        </div>
      )}

      <nav data-nav-mode={navMode} className="min-h-0 flex-1 space-y-1 overflow-y-auto pt-4">
        {isAdmin
          ? navGroups.map((group) => (
              <div key={group.key} className="space-y-1 pb-4">
                <div className="relative h-px" aria-hidden="true">
                  <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-border" />
                </div>
                {group.items.map((item) => (
                  <SidebarNavLink key={item.key} item={item} collapsed isAdmin={isAdmin} />
                ))}
              </div>
            ))
          : navItems.map((item) => <SidebarNavLink key={item.key} item={item} collapsed isAdmin={isAdmin} />)}

        {isAdmin && navGroups.length === 0 && (
          <p className="px-3 text-sm text-muted-foreground/56">—</p>
        )}
        {!isAdmin && navItems.length === 0 && <p className="px-3 text-sm text-muted-foreground/56">—</p>}
      </nav>
    </MobileNavDrawer>
  );
}

// Sem versão "pill de dois segmentos" (essa era pro estado expandido, que este tema não tem) —
// só um botão só-ícone, no mesmo padrão dos itens de nav: rótulo visível no mobile (largura
// cheia), vira tooltip no hover/foco a partir de lg (SIDEBAR_COLLAPSE_TOOLTIP_*), nunca some da
// árvore de acessibilidade.
function SidebarSurfaceSwitch({ isAdmin, onToggleNavMode }: { isAdmin: boolean; onToggleNavMode: () => Promise<void> }) {
  const label = isAdmin ? "Sair do admin" : "Área administrativa";

  return (
    <form action={onToggleNavMode}>
      <button
        type="submit"
        className="group/sidebar-collapse-target relative flex w-full items-center gap-3 rounded-lg border border-border bg-muted px-2 py-2.5 text-sm font-medium text-foreground ui-motion-base outline-none hover:border-ring active:border-ring focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span aria-hidden="true" className="inline-flex size-5 shrink-0 items-center justify-center">
          {isAdmin ? <ShieldCheck className="size-4" aria-hidden="true" /> : <Globe2 className="size-4" aria-hidden="true" />}
        </span>
        <span className={cn(SIDEBAR_COLLAPSE_TOOLTIP_LABEL_CLASSES, SIDEBAR_COLLAPSE_TOOLTIP_COLLAPSED_CLASSES)}>{label}</span>
      </button>
    </form>
  );
}
