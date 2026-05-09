const MEMBERS = [
  { who: "Maya", role: "Mum", color: "lavender", lines: ["Wed: dentist · 4pm", "Travel pack · started"] },
  { who: "Theo", role: "Dad", color: "mint", lines: ["Pay rent · auto · ✓", "Pickup Lily · 4:45"] },
  { who: "Lily", role: "8 yrs", color: "peach", lines: ["School play · costume done", "Tooth #4 · wobbling"] },
  { who: "Granny", role: "Visits Sun", color: "rose", lines: ["Cab booked · airport", "Saved meal: dal · ✓"] },
];

const COLOR: Record<string, { bg: string; ring: string; ink: string }> = {
  lavender: { bg: "bg-lavender-soft", ring: "ring-lavender/40", ink: "text-lavender" },
  mint: { bg: "bg-mint-soft", ring: "ring-mint/40", ink: "text-mint" },
  peach: { bg: "bg-peach-soft", ring: "ring-peach/50", ink: "text-peach" },
  rose: { bg: "bg-[#fbe5dc]", ring: "ring-rose/50", ink: "text-rose" },
};

export default function FamilyView() {
  return (
    <section id="family" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-end">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[36px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            Together,<br />
            <span style={{ fontStyle: "italic" }} className="text-peach">without the calendar fights.</span>
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-muted">
            Each member of the family has their own private space and their own visibility. Almyne handles the seams — so the calendar is always whole.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m) => {
            const c = COLOR[m.color];
            return (
              <article key={m.who} className={`rounded-[28px] border border-rule p-6 ring-1 ring-inset ${c.bg} ${c.ring}`}>
                <div className="flex items-center gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-full bg-bg-card ring-1 ring-rule-strong text-[20px] font-semibold ${c.ink}`} style={{ fontFamily: "var(--font-display)" }}>
                    {m.who.charAt(0)}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)" }} className="text-[20px] font-medium leading-tight">{m.who}</div>
                    <div className="text-[11.5px] uppercase tracking-[0.16em] text-ink-muted">{m.role}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {m.lines.map((l) => (
                    <li key={l} className="flex items-start gap-2 text-[13.5px] text-ink-muted">
                      <span className={`mt-1.5 h-1 w-1 flex-none rounded-full ${c.ink.replace("text-", "bg-")}`} />
                      {l}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
