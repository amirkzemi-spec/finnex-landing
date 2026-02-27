import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_500px_at_90%_20%,rgba(56,189,248,0.07),transparent_55%),radial-gradient(900px_600px_at_50%_90%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <div className="grid gap-4 md:grid-cols-[260px_1fr]">
          <Sidebar />
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <Topbar />
            <div className="p-5 md:p-7">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}