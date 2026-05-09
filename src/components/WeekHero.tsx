interface DayChip { dot: string; text: string }
interface Day { d: string; n: number; chips: DayChip[]; today?: boolean }

const WEEK: Day[] = [
  { d: "Mon", n: 12, chips: [{ dot: "lavender", text: "Bills · auto" }, { dot: "mint", text: "Yoga · 7am" }] },
  { d: "Tue", n: 13, chips: [{ dot: "peach", text: "Lily — dentist" }, { dot: "mint", text: "Run errands" }] },
  { d: "Wed", n: 14, today: true, chips: [{ dot: "lavender", text: "Date night ✿" }, { dot: "mint", text: "Stand-up · 9" }, { dot: "rose", text: "Mom's bday gift" }] },
  { d: "Thu", n: 15, chips: [{ dot: "peach", text: "Plumber · 4pm" }, { dot: "mint", text: "Library haul" }] },
  { d: "Fri", n: 16, chips: [{ dot: "lavender", text: "Trip prep" }] },
  { d: "Sat", n: 17, chips: [{ dot: "mint", text: "Lisbon → flight" }, { dot: "peach", text: "Hotel · paid" }] },
  { d: "Sun", n: 18, chips: [{ dot: "lavender", text: "Rest day · slow" }] },
];

const DOT: Record<string, string> = {
  lavender: "bg-lavender",
  mint: "bg-mint",
  peach: "bg-peach",
  rose: "bg-rose",
};

export default function WeekHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* organic blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-1 glow-bloom absolute -top-40 -left-20 h-[480px] w-[480px] bg-lavender-soft" />
        <div className="blob-2 glow-bloom absolute -bottom-32 -right-20 h-[420px] w-[420px] bg-mint-soft" style={{ animationDelay: "-3s" }} />
        <div className="blob-3 glow-bloom absolute top-1/2 right-1/3 h-[280px] w-[280px] bg-peach-soft" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-bg-card/60 px-4 py-1.5 text-[12px] font-medium text-ink-muted backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
            Designed to be set down
          </span>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-7 text-[44px] font-semibold leading-[1.04] tracking-[-0.025em] text-balance sm:text-[68px] lg:text-[84px]">
            A calmer life,
            <br />
            <span style={{ fontStyle: "italic" }} className="text-lavender">week by week.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-muted">
            Almyne gathers your week, your money, your family, and your travel into one well-made home — so you spend less time managing life and more time living it.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-medium text-bg hover:bg-ink-muted">
              Try a calmer week
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#rhythm" className="inline-flex items-center gap-2 rounded-full border border-rule-strong bg-bg-card/70 px-6 py-3 text-[14.5px] font-medium text-ink hover:bg-bg-card-2">
              Read the design
            </a>
          </div>
        </div>

        {/* week-at-a-glance card */}
        <div className="float-bob relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-[28px] border border-rule bg-bg-card p-3 shadow-[0_30px_80px_-30px_rgba(60,50,40,0.20)]">
            <div className="rounded-[22px] border border-rule bg-bg-card-2 p-6 sm:p-8">
              <div className="mb-6 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">Week of</div>
                  <h3 style={{ fontFamily: "var(--font-display)" }} className="text-[24px] font-medium tracking-tight">
                    May 12 — May 18
                  </h3>
                </div>
                <span className="rounded-full bg-mint-soft px-3 py-1 text-[11.5px] font-semibold text-mint">3 happy hours saved</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {WEEK.map((day) => (
                  <article
                    key={day.d}
                    className={`relative rounded-2xl border p-3.5 ${
                      day.today ? "border-lavender bg-lavender-soft/50" : "border-rule bg-bg-card"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-dim">{day.d}</span>
                      <span style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-medium leading-none">{day.n}</span>
                    </div>
                    {day.today && (
                      <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-1 block text-[10px] text-lavender">
                        today
                      </span>
                    )}
                    <ul className="mt-2.5 space-y-1.5">
                      {day.chips.map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11.5px] leading-tight text-ink-muted">
                          <span className={`h-1.5 w-1.5 flex-none rounded-full ${DOT[c.dot]}`} />
                          {c.text}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Stat label="Money · in tune" value="$842" sub="saved this month, automatic" tone="mint" />
                <Stat label="Travel · ready" value="Lisbon" sub="hotel, tickets, packing" tone="peach" />
                <Stat label="Family · together" value="4 / 4" sub="everyone in sync" tone="lavender" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub, tone }: { label: string; value: string; sub: string; tone: "mint" | "peach" | "lavender" }) {
  const bg = tone === "mint" ? "bg-mint-soft" : tone === "peach" ? "bg-peach-soft" : "bg-lavender-soft";
  const dot = tone === "mint" ? "bg-mint" : tone === "peach" ? "bg-peach" : "bg-lavender";
  return (
    <div className={`rounded-2xl border border-rule ${bg} p-4`}>
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">{label}</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)" }} className="mt-1.5 text-[24px] font-medium leading-tight tracking-tight">
        {value}
      </div>
      <div className="text-[12.5px] text-ink-muted">{sub}</div>
    </div>
  );
}
