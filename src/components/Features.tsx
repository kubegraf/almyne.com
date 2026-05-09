type Icon = "inbox" | "money" | "family" | "travel" | "service" | "shield";

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  {
    icon: "inbox",
    title: "One inbox for life",
    body: "Tasks, bills, family items, errands — all flowing into one calm place. Triaged automatically.",
  },
  {
    icon: "money",
    title: "Smart money lens",
    body: "See subscriptions, recurring spend and savings in one view. Almyne trims waste and forecasts the month.",
  },
  {
    icon: "family",
    title: "Family coordination",
    body: "Shared calendars, lists and roles. Kids, grandparents, partners — everyone on the same page.",
  },
  {
    icon: "travel",
    title: "Travel, ready",
    body: "Plan trips with bookings, documents and packing lists. Your itinerary lives where you need it.",
  },
  {
    icon: "service",
    title: "Trusted local pros",
    body: "Vetted plumbers, cleaners, electricians, tutors. Booked through Almyne, rated by neighbours.",
  },
  {
    icon: "shield",
    title: "Private by default",
    body: "End-to-end encrypted. Never sold. Your data, only you and the people you choose see it.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-brand-bright">
            What it does
          </p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">
            Six surfaces. One calm life.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">
            Each surface earns its place. No filler. No friction.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-7 transition-all hover:border-brand/40 hover:bg-bg-elev"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-soft via-transparent to-transparent" />
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-bright ring-1 ring-inset ring-brand/30">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: Icon }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "inbox":
      return (
        <svg {...props}>
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
        </svg>
      );
    case "money":
      return (
        <svg {...props}>
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "family":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "travel":
      return (
        <svg {...props}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      );
    case "service":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}
