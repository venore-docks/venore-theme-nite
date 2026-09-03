// Marca do tema Nite — losango de circuito com glitch, em currentColor. Símbolo fixo do tema,
// nome vindo de brand.name.
export function BrandMark({ name }: { name: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 text-foreground">
      <svg
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className="size-7 shrink-0 text-primary drop-shadow-[0_0_6px_currentColor]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M16 3l13 13-13 13L3 16z" opacity="0.5" />
        <path d="M16 9l7 7-7 7-7-7z" />
        <path d="M2 16h5M25 16h5M16 2v4M16 26v4" />
      </svg>
      <span className="min-w-0 truncate font-[700] uppercase tracking-[0.18em]">{name}</span>
    </span>
  );
}
