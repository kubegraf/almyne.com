const HOURS = [
  { time: "06:30", do: "Almyne quietly pays the rent", side: "background" },
  { time: "07:45", do: "School run · packed lunch reminder", side: "you" },
  { time: "09:10", do: "Wednesday stand-up · 25 mins", side: "you" },
  { time: "11:20", do: "Almyne books Lily's dentist follow-up", side: "background" },
  { time: "13:00", do: "Lunch with mom · table for 2 confirmed", side: "you" },
  { time: "16:45", do: "Plumber arrived (2 mins early) — Almyne paid", side: "background" },
  { time: "18:30", do: "Date-night dinner · paid in app · receipt saved", side: "you" },
  { time: "21:00", do: "Almyne nudges you to read for 20 mins", side: "background" },
];

export default function RhythmStory() {
  return (
    <section id="rhythm" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <span className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-dim">A Wednesday on Almyne</span>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px]">
              Eight things, all<br />
              <span style={{ fontStyle: "italic" }} className="text-mint">handled themselves.</span>
            </h2>
            <p className="mt-5 max-w-prose text-[15.5px] leading-relaxed text-ink-muted">
              Almyne moves quietly through your day. The interruptions you do see are the ones that genuinely deserve your attention — the rest happen in the background, leaving small notes for the morning.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-[12.5px]">
              <div className="rounded-2xl border border-rule bg-bg-card p-4">
                <div className="font-medium uppercase tracking-[0.16em] text-ink-dim text-[11px]">YOU</div>
                <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[20px]">3 things</div>
                <div className="mt-0.5 text-ink-muted">that earned your time</div>
              </div>
              <div className="rounded-2xl border border-rule bg-mint-soft p-4">
                <div className="font-medium uppercase tracking-[0.16em] text-mint text-[11px]">ALMYNE</div>
                <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[20px]">5 things</div>
                <div className="mt-0.5 text-ink-muted">handled, quietly</div>
              </div>
            </div>
          </div>

          <ol className="space-y-2.5">
            {HOURS.map((h, i) => {
              const isBg = h.side === "background";
              return (
                <li
                  key={i}
                  className={`grid grid-cols-[60px_1fr_auto] items-center gap-4 rounded-2xl border p-4 ${
                    isBg ? "border-mint/30 bg-mint-soft/40" : "border-rule bg-bg-card"
                  }`}
                >
                  <span style={{ fontFamily: "var(--font-display)" }} className="text-[18px] font-medium tracking-tight">
                    {h.time}
                  </span>
                  <span className="text-[14.5px] leading-snug">{h.do}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                    isBg ? "bg-mint text-white" : "bg-bg-card-2 text-ink-muted ring-1 ring-rule"
                  }`}>
                    {h.side}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
