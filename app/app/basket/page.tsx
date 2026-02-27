export default function BasketPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold tracking-tight">Basket</h1>
      <p className="mt-1 text-sm text-white/70">
        Saved opportunities (UI placeholder). We’ll connect this to user accounts later.
      </p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-sm font-semibold">No saved opportunities yet</div>
        <div className="mt-2 text-sm text-white/70">
          Open an opportunity and click “Save to Basket”.
        </div>
      </div>
    </div>
  );
}