const COLS = [
  { t: "The home", l: ["Money", "Family", "Travel", "Tasks", "Local"] },
  { t: "About", l: ["The design", "The team", "Press", "Brand"] },
  { t: "Care", l: ["Privacy", "Help center", "Status", "Co-op"] },
];

export default function LightFooter() {
  return (
    <footer className="border-t border-rule bg-bg-card-2/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-lavender to-mint">
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="text-[16px] font-semibold text-white">a</span>
            </span>
            <span style={{ fontFamily: "var(--font-display)" }} className="text-[20px] font-semibold tracking-[-0.02em]">Almyne</span>
          </div>
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-muted">
            Designed to be set down. Almyne is a member-owned co-operative for calm, quiet, well-lived weeks.
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }} className="mt-5 text-[16px] text-lavender">
            Lisbon · Bengaluru · San Francisco
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.t}>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-dim">{c.t}</div>
            <ul className="mt-3 space-y-2">
              {c.l.map((x) => <li key={x}><a href="#" className="text-[13.5px] text-ink-muted hover:text-ink">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-rule px-5 py-5 text-center text-[12px] text-ink-dim sm:px-10">
        © {new Date().getFullYear()} Almyne — owned by members, made for the small things in life.
      </div>
    </footer>
  );
}
