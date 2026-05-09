const CASES = [
  {
    title: "Busy parents",
    body: "Permission slips, dentist runs, weekend logistics — Almyne keeps the village in sync without a thousand chats.",
    items: ["Shared family calendar", "Kids' schedule, birthdays, school", "Trusted babysitters and tutors"],
  },
  {
    title: "Solo professionals",
    body: "Move fast, sleep well. Almyne tracks bills, packs travel, and keeps your weekends actually free.",
    items: ["Auto-paid bills & taxes", "Smart focus blocks", "Concierge-grade trip prep"],
  },
  {
    title: "Multi-gen households",
    body: "Three generations, one home — Almyne respects each person while keeping the whole family in sync.",
    items: ["Roles & private spaces", "Pillar reminders for elders", "Shared shopping & errands"],
  },
  {
    title: "Frequent travellers",
    body: "Hop cities without losing track. Itineraries, docs and trusted local pros wherever you land.",
    items: ["Trip dossiers in one tap", "Visa & insurance reminders", "Verified locals, anywhere"],
  },
];

export default function UseCases() {
  return (
    <section id="use" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
            Who it's for
          </p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">
            Built for the lives we actually lead.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-8 transition-all hover:border-accent/40"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/0 via-brand/60 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-[22px] font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                {c.body}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13.5px] text-ink-muted">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
