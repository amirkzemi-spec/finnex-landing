// app/page.tsx
// FINNEX Landing — Forest Green palette + "Our Work" track record section

const Pillar = ({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300/80">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {tag}
    </div>
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
  </div>
);

const Stat = ({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) => (
  <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
    <div className="text-xs text-white/55">{label}</div>
    <div className="mt-1 text-sm font-semibold">{value}</div>
    {note ? <div className="mt-1 text-xs text-white/50">{note}</div> : null}
  </div>
);

const projects = [
  {
    year: "2022",
    name: "AgriScore Pilot — Nigeria",
    type: "Risk Scoring Model",
    desc: "Built and tested the first version of our AI-based project scoring model across 40 smallholder cooperatives in Ogun State. Delivered structured credit profiles for NGO partners.",
    tags: ["AI Scoring", "Pilot", "NGO"],
    status: "Completed",
  },
  {
    year: "2023",
    name: "Milestone Disbursal System — Kenya",
    type: "Fintech Infrastructure",
    desc: "Designed and deployed a milestone-controlled fund release system for a DFI-backed maize program. Reduced capital leakage by enabling phased, verified disbursements.",
    tags: ["DFI", "Milestone Finance", "Kenya"],
    status: "Completed",
  },
  {
    year: "2023",
    name: "Field Verification Module",
    type: "Monitoring & Verification",
    desc: "Launched mobile-first field verification tooling allowing on-ground agents to attach evidence to project milestones in real time. Integrated with investor-facing dashboards.",
    tags: ["Mobile", "Verification", "Real-time"],
    status: "Completed",
  },
  {
    year: "2024",
    name: "FINNEX Platform v1 — Ghana",
    type: "Full Platform Launch",
    desc: "Shipped the first full version of FINNEX: investor dashboard, farmer profiles, project scoring, and monitoring in a unified platform. Piloted with a maize regeneration cooperative.",
    tags: ["Platform", "Investors", "Ghana"],
    status: "Live",
  },
  {
    year: "2024–25",
    name: "Impact Reporting Engine",
    type: "Analytics & Reporting",
    desc: "Built automated impact reporting covering yield improvements, jobs created, and CO₂ proxies — delivered as structured reports to fund managers and DFI partners.",
    tags: ["Impact", "Reporting", "Analytics"],
    status: "Live",
  },
  {
    year: "2025–Now",
    name: "FINNEX Capital Intelligence",
    type: "Current Product",
    desc: "Ongoing development of the full Agricultural Capital Intelligence suite — combining AI scoring, milestone disbursal, field verification, and investor-grade reporting in one place.",
    tags: ["Active", "AI", "Full Stack"],
    status: "Active",
  },
];

const statusColor: Record<string, string> = {
  Completed: "border-white/10 text-white/50 bg-white/[0.03]",
  Live: "border-emerald-400/25 text-emerald-300 bg-emerald-400/[0.07]",
  Active: "border-cyan-400/25 text-cyan-300 bg-cyan-400/[0.07]",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1A0F] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep forest green radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_550px_at_10%_5%,rgba(16,185,129,0.13),transparent_55%),radial-gradient(800px_500px_at_88%_15%,rgba(6,95,70,0.18),transparent_55%),radial-gradient(900px_600px_at_50%_95%,rgba(4,120,87,0.10),transparent_55%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#0A1A0F]" />
      </div>

      {/* ── HEADER ── */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] flex items-center justify-center">
            <span className="text-sm font-semibold tracking-tight text-emerald-300">FX</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">FINNEX</div>
            <div className="text-xs text-white/50">Agricultural Capital Intelligence</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#why" className="hover:text-white transition">Why FINNEX</a>
          <a href="#our-work" className="hover:text-white transition">Our Work</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a
            href="https://app.finnex.capital"
            className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-emerald-300 hover:bg-emerald-400/[0.13] transition"
          >
            Go to App
          </a>
        </nav>

        <a
          href="https://app.finnex.capital"
          className="md:hidden rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-400/[0.13] transition"
        >
          App
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Verified projects • Milestone-controlled funding • Transparent reporting
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-[1.06]">
              Making Smallholder Agriculture{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Investable
              </span>
              .
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              FINNEX transforms high-potential farm projects into structured opportunities through{" "}
              <span className="text-white/85">AI-based scoring</span>,{" "}
              <span className="text-white/85">milestone-based disbursement</span>, and{" "}
              <span className="text-white/85">real-time verification</span>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.finnex.capital"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400 hover:text-black transition"
              >
                View Investment Opportunities
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.06] transition"
              >
                How It Works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              {[
                { label: "Focus", value: "Smallholders" },
                { label: "Model", value: "Milestones" },
                { label: "Outputs", value: "Impact + Return" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-xs text-white/55">{s.label}</div>
                  <div className="mt-1 text-sm font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-r from-emerald-600/15 via-emerald-500/10 to-cyan-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0D1F15]/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.50)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-white/55">Example opportunity</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">
                    Maize Regeneration (Ghana)
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Smallholder cooperative • 18-month cycle • Offtake-ready
                  </div>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">
                  <div className="text-[10px] text-emerald-200/90">Project Score</div>
                  <div className="text-xl font-semibold text-emerald-200">82</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat label="Projected IRR" value="12.4%" note="Scenario-based estimate" />
                <Stat label="Funding Type" value="Milestone release" note="Verified disbursement" />
                <Stat label="Milestones" value="2 / 4 verified" note="Next: Inputs delivery" />
                <Stat label="Impact signals" value="Yield + jobs + CO₂" note="Measured & reported" />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Milestone timeline</div>
                  <div className="text-xs text-white/55">Demo view</div>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { name: "Farmer verification", done: true },
                    { name: "Inputs delivered", done: true },
                    { name: "Field monitoring check", done: false },
                    { name: "Harvest & sales settlement", done: false },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-3">
                      <div
                        className={[
                          "h-2.5 w-2.5 rounded-full border",
                          m.done
                            ? "bg-emerald-400 border-emerald-400"
                            : "bg-transparent border-white/20",
                        ].join(" ")}
                      />
                      <div className="flex-1 text-sm text-white/80">{m.name}</div>
                      <div className="text-xs text-white/50">
                        {m.done ? "Verified" : "Pending"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://app.finnex.capital"
                  className="flex-1 rounded-xl bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-400 hover:text-black transition"
                >
                  Open Dashboard
                </a>
                <a
                  href="#how"
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-sm font-semibold hover:bg-white/[0.06] transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGNED FOR ── */}
      <section id="why" className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Built for capital that demands evidence.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                FINNEX is designed to reduce information asymmetry in smallholder finance—so
                projects can be assessed, funded, and monitored with clarity.
              </p>
            </div>
            <a
              href="https://app.finnex.capital"
              className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold hover:bg-white/[0.06] transition"
            >
              View the App
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Impact investors", "Funds & family offices", "NGOs & DFIs", "Agribusiness partners"].map(
              (t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80"
                >
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">How FINNEX works</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
            Three capabilities that turn high-potential farms into investable, monitored opportunities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Pillar
            tag="1 • Intelligence"
            title="AI-Based Project Scoring"
            desc="Evaluate risk, yield potential, and credibility using structured agricultural inputs and verification signals."
          />
          <Pillar
            tag="2 • Control"
            title="Milestone-Based Fund Disbursement"
            desc="Release capital only after progress is verified—improving accountability and reducing deployment risk."
          />
          <Pillar
            tag="3 • Transparency"
            title="Real-Time Monitoring & Reporting"
            desc="Track project status and measurable outcomes—so investors see where funds go and what changes."
          />
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-xs text-white/55">What you get</div>
              <div className="mt-2 text-base font-semibold">A trustworthy investment pipeline</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Verified farmer profiles, structured project pages, and consistent reporting—built to scale.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-semibold">Typical metrics</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Repayment & deployment status</li>
                <li>• Yield / productivity improvements</li>
                <li>• Jobs and local income signals</li>
                <li>• Climate outcomes (where measurable)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-semibold">Governance signals</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Field verification checkpoints</li>
                <li>• Digital evidence attachments</li>
                <li>• Audit-ready milestone history</li>
                <li>• Investor-facing transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section id="our-work" className="mx-auto max-w-6xl px-6 pb-20">
        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Track Record • 2022 – Present
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Our Work</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
            FINNEX didn't start as a product — it started as a set of problems we kept running into in the field. Here's what we've built, tested, and shipped since 2022.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent md:left-1/2 md:-translate-x-px hidden md:block" />

          <div className="space-y-6">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={[
                  "relative grid gap-4 md:grid-cols-2",
                  i % 2 === 0 ? "md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1",
                ].join(" ")}
              >
                {/* Year label — alternates sides on desktop */}
                <div
                  className={[
                    "flex items-start",
                    i % 2 === 0 ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10",
                  ].join(" ")}
                >
                  <div className="pt-1 md:pt-4">
                    <div className="text-2xl font-semibold text-emerald-400/60 tabular-nums">
                      {p.year}
                    </div>
                    <div className="mt-1 text-xs text-white/40 uppercase tracking-widest">{p.type}</div>
                  </div>
                </div>

                {/* Dot on the center line */}
                <div className="absolute left-1/2 top-5 -translate-x-1/2 hidden md:flex h-3 w-3 items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[#0A1A0F]" />
                </div>

                {/* Card */}
                <div
                  className={[
                    i % 2 === 0 ? "md:pl-10" : "md:pr-10",
                  ].join(" ")}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-400/20 hover:bg-emerald-400/[0.03] transition">
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-base font-semibold tracking-tight">{p.name}</div>
                      <span
                        className={[
                          "shrink-0 rounded-full border px-2.5 py-0.5 text-xs",
                          statusColor[p.status],
                        ].join(" ")}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-r from-emerald-600/10 via-white/[0.03] to-cyan-600/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to explore opportunities?</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">
            Start with the dashboard UI now. Backend logic can be connected as your pipeline and scoring evolve.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app.finnex.capital"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400 hover:text-black transition"
            >
              Open FINNEX App
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold hover:bg-white/[0.06] transition"
            >
              Read FAQ
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">
            Early-stage clarity. You can refine these as the product and compliance posture mature.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Is FINNEX for individuals or institutions?",
              a: "Hybrid for now. The platform is designed to support both mission-aligned individuals and professional capital partners.",
            },
            {
              q: "How is risk reduced?",
              a: "Through verified project onboarding, AI-assisted scoring signals, and milestone-based capital disbursement with monitoring.",
            },
            {
              q: "Is this a marketplace or a financing operator?",
              a: "FINNEX is a platform that structures and monitors investable opportunities. The exact model can evolve by jurisdiction and partner type.",
            },
            {
              q: "Do you use blockchain?",
              a: "It's an optional capability for auditability and transparency. The core value is verification + reporting, regardless of the underlying tech.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-emerald-400/15 transition"
            >
              <div className="text-sm font-semibold">{item.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} FINNEX. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-sm text-white/60">
            <a className="hover:text-white transition" href="#how">How it works</a>
            <a className="hover:text-white transition" href="#our-work">Our Work</a>
            <a className="hover:text-white transition" href="https://app.finnex.capital">App</a>
            <a className="hover:text-white transition" href="mailto:info@finnex.capital">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
