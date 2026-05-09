export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 py-5 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-lavender to-mint shadow-[0_8px_24px_rgba(155,135,214,0.30)]">
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="text-[16px] font-semibold text-white">a</span>
          </span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-[20px] font-semibold tracking-[-0.02em]">Almyne</span>
        </a>
        <nav className="hidden items-center gap-7 text-[14px] text-ink-muted md:flex">
          <a href="#tiles" className="hover:text-ink">The home</a>
          <a href="#rhythm" className="hover:text-ink">The week</a>
          <a href="#family" className="hover:text-ink">Together</a>
          <a href="#prices" className="hover:text-ink">Plans</a>
        </nav>
        <a href="#cta" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bg hover:bg-ink-muted">
          Try a calmer week
        </a>
      </div>
    </header>
  );
}
