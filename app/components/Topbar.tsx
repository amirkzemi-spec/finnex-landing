export default function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
      <div>
        <div className="text-sm font-semibold">Dashboard</div>
        <div className="text-xs text-white/55">
          Structured opportunities • milestone verification • reporting
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80">
        Demo Partner
      </div>
    </div>
  );
}