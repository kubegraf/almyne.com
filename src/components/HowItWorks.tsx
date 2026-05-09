const STEPS = [
  {
    n: "01",
    title: "Add what's on your mind",
    body: "Drop a task, a bill, a trip, a chore — Almyne accepts it however you think.",
  },
  {
    n: "02",
    title: "Almyne organises & nudges",
    body: "It groups, schedules and surfaces what needs you. Auto-saves, auto-tracks, auto-pings.",
  },
  {
    n: "03",
    title: "Approve in one tap",
    body: "Pay, book, share, or schedule. Almyne does the rest — privately, on your terms.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
            Three steps
          </p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">
            From scattered to sorted in
            <span className="bg-gradient-to-r from-brand-bright to-accent bg-clip-text text-transparent">
              {" "}under a minute.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <article
              key={s.n}
              className="relative rounded-2xl border border-border bg-bg-soft p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-4 top-9 hidden h-px w-12 md:block"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(167,139,250,0.4), transparent)",
                  }}
                />
              )}
              <div className="font-mono text-[13px] tracking-[0.18em] text-brand-bright">
                {s.n}
              </div>
              <h3 className="mt-3 text-[20px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
