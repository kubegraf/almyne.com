interface Tile { kicker: string; title: string; body: string; emoji: string; bg: string; ring: string; size?: "wide" }

const TILES: Tile[] = [
  { kicker: "Money", title: "Quietly tracked.", body: "Bills, subscriptions, recurring spend — Almyne sees them, sorts them, and trims what you don't use.", emoji: "✦", bg: "bg-mint-soft", ring: "ring-mint/30", size: "wide" },
  { kicker: "Family", title: "Everyone in sync.", body: "One shared rhythm. Roles, calendars, lists — kids and grandparents included.", emoji: "✿", bg: "bg-lavender-soft", ring: "ring-lavender/30" },
  { kicker: "Travel", title: "Quietly packed.", body: "Bookings, documents, packing lists — your itinerary lives where you need it.", emoji: "✈", bg: "bg-peach-soft", ring: "ring-peach/40" },
  { kicker: "Tasks", title: "Triaged for you.", body: "Drop a thought; Almyne categorises and surfaces the right ones at the right time.", emoji: "❀", bg: "bg-bg-card", ring: "ring-rule" },
  { kicker: "Local", title: "Trusted neighbours.", body: "Vetted plumbers, cleaners, sitters — booked in two taps, rated honestly.", emoji: "✸", bg: "bg-bg-card-2", ring: "ring-rule" },
  { kicker: "Privacy", title: "Yours alone.", body: "End-to-end encrypted. Never sold. Built by a co-op, not a venture machine.", emoji: "✧", bg: "bg-mint-soft", ring: "ring-mint/30", size: "wide" },
];

export default function OrbitTiles() {
  return (
    <section id="tiles" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-end">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[36px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            The home,<br />
            <span style={{ fontStyle: "italic" }} className="text-lavender">in six rooms.</span>
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-muted">
            Each room has one job. None of them ask for your attention. They just hold what you put down — and hand it back when you reach for it.
          </p>
        </div>

        <div className="grid auto-rows-[200px] gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-3 lg:auto-rows-[240px]">
          {TILES.map((t, i) => (
            <article
              key={t.title}
              className={`group relative overflow-hidden rounded-[28px] border border-rule p-7 ring-1 ring-inset transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(60,50,40,0.15)] ${t.bg} ${t.ring} ${t.size === "wide" ? "lg:col-span-2" : ""}`}
              style={{ transform: `rotate(${(i % 2 === 0 ? -0.3 : 0.3)}deg)` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-dim">
                  {t.kicker}
                </span>
                <span className="text-[36px] leading-none text-ink-muted/60">{t.emoji}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[24px] font-medium leading-snug tracking-[-0.01em] sm:text-[28px]">
                {t.title}
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-muted">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
