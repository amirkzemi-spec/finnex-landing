import Link from "next/link";

const Item = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] transition"
  >
    {label}
  </Link>
);

export default function Sidebar() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center">
          <span className="text-sm font-semibold">FX</span>
        </div>
        <div>
          <div className="text-sm font-semibold">FINNEX</div>
          <div className="text-xs text-white/55">Investor / Partner View</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <Item href="/projects" label="Opportunities" />
        <Item href="/basket" label="Basket" />
        <Item href="/coming-soon" label="Farmer onboarding (Coming soon)" />
        <Item href="/settings" label="Settings" />
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="text-xs text-white/55">Status</div>
        <div className="mt-1 text-sm font-semibold">MVP UI (Mock Data)</div>
        <div className="mt-2 text-xs text-white/55">
          Backend will be connected via <span className="text-white/80">api.finnex.capital</span>.
        </div>
      </div>
    </aside>
  );
}