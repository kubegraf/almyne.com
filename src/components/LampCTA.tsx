export default function LampCTA() {
  return (
    <section id="cta" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-1 glow-bloom absolute -top-32 left-1/4 h-[460px] w-[460px] bg-lavender-soft" />
        <div className="blob-2 glow-bloom absolute -bottom-24 right-1/4 h-[420px] w-[420px] bg-mint-soft" style={{ animationDelay: "-3s" }} />
      </div>
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-10">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[44px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[68px]">
          Begin a calmer week.<br />
          <span style={{ fontStyle: "italic" }} className="text-lavender">Set the rest down.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-muted">
          Free to begin. No card. Quiet by default. If Almyne doesn't lift weight from your week within seven days, the door is just there.
        </p>

        <form className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="you@home.com" className="flex-1 rounded-full border border-rule-strong bg-bg-card px-5 py-3.5 text-[14.5px] text-ink placeholder:text-ink-dim outline-none focus:border-lavender" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-medium text-bg hover:bg-ink-muted">
            Send my invite
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
}
