const PLANS = [
  { tier: "Quiet", price: "Free", line: "All the rooms. Up to 3 family members.", lines: ["All surfaces unlocked", "3 members · shared spaces", "Mobile · web · all platforms", "Forever-free, no card"], cta: "Begin", featured: false },
  { tier: "Calm", price: "$9", line: "For households that want it all.", lines: ["Unlimited members", "Smart money + travel", "Trusted local pros", "Priority support"], cta: "Choose Calm", featured: true },
  { tier: "Heirloom", price: "$299", line: "One lifetime of Almyne.", lines: ["Pay once · keep forever", "All future plans included", "Priority support · always", "Heirloom edition perks"], cta: "Make it forever", featured: false },
];

export default function PriceLeaves() {
  return (
    <section id="prices" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-dim">Plans</span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px]">
            Three calm options.<br />
            <span style={{ fontStyle: "italic" }} className="text-mint">No upsell ladders.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-[32px] p-7 ${
              p.featured
                ? "bg-gradient-to-br from-lavender-soft via-bg-card to-mint-soft ring-2 ring-lavender/40 shadow-[0_30px_80px_-30px_rgba(155,135,214,0.30)]"
                : "border border-rule bg-bg-card"
            }`}>
              {p.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-lavender px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white">
                  Most chosen
                </span>
              )}
              <div className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink-dim">{p.tier}</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span style={{ fontFamily: "var(--font-display)" }} className="text-[44px] font-medium leading-none tracking-[-0.02em]">{p.price}</span>
                {p.tier === "Calm" && <span className="text-[13px] text-ink-muted">/ month</span>}
                {p.tier === "Heirloom" && <span className="text-[13px] text-ink-muted">once</span>}
              </div>
              <p className="mt-2.5 text-[14px] text-ink-muted">{p.line}</p>
              <ul className="mt-6 space-y-2.5">
                {p.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-[14px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-1 flex-none text-mint"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {l}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium ${
                p.featured ? "bg-ink text-bg" : "border border-rule-strong bg-bg-card-2 text-ink"
              }`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
