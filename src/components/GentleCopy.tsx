export default function GentleCopy() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-10">
        <p className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-dim">A small belief</p>
        <p style={{ fontFamily: "var(--font-display)" }} className="mt-5 text-[28px] font-medium leading-[1.32] tracking-[-0.01em] sm:text-[36px] lg:text-[44px]">
          Modern apps mostly want your attention. Almyne quietly returns it — by handling the small things in the background, and showing you only what's actually yours to do.
        </p>
        <div className="mx-auto mt-9 h-px w-12 bg-rule-strong" />
        <p className="mt-7 text-[14px] text-ink-muted" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
          — the design team, Almyne
        </p>
      </div>
    </section>
  );
}
