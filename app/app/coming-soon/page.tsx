export default function ComingSoon() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h1 className="text-xl font-semibold tracking-tight">Farmer onboarding</h1>
      <p className="mt-2 text-sm text-white/70">
        Coming soon. The first release focuses on investor/partner visibility: scoring, milestones, and reporting.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          "Verified farmer profiles",
          "Project intake & documentation",
          "Field verification workflow",
        ].map((t) => (
          <div key={t} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}