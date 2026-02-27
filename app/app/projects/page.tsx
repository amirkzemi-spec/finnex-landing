import Link from "next/link";
import { opportunities } from "../../lib/mock";
import Badge from "../../components/Badge";

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Opportunities</h1>
          <p className="mt-1 text-sm text-white/70">
            Explore verified projects with scoring, milestones, and transparency signals.
          </p>
        </div>

        {/* UI-only filters */}
        <div className="mt-3 flex gap-2 md:mt-0">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/70">
            Filter: Country
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/70">
            Sort: Score
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {opportunities.map((o) => (
          <Link
            key={o.id}
            href={`/projects/${o.id}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/55">{o.country} • {o.category}</div>
                <div className="mt-1 text-lg font-semibold tracking-tight">{o.title}</div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">
                <div className="text-[10px] text-emerald-200/90">Score</div>
                <div className="text-lg font-semibold text-emerald-200">{o.score}</div>
              </div>
            </div>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">{o.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge label={`IRR: ${o.projected_irr}`} />
              <Badge label={`Term: ${o.term}`} />
              <Badge label={`Min ticket: ${o.ticket_min}`} />
              <Badge label={`Status: ${o.status}`} />
            </div>

            <div className="mt-4 text-sm font-semibold text-white/80 group-hover:text-white">
              View details →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}