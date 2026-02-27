import { Milestone } from "../lib/types";
import { cn } from "../lib/utils";

export default function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="space-y-3">
      {milestones.map((m) => (
        <div key={m.id} className="flex items-center gap-3">
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full border",
              m.status === "verified"
                ? "bg-emerald-400 border-emerald-400"
                : "bg-transparent border-white/20"
            )}
          />
          <div className="flex-1 text-sm text-white/80">{m.name}</div>
          <div className="text-xs text-white/55">
            {m.status === "verified" ? "Verified" : "Pending"}
          </div>
        </div>
      ))}
    </div>
  );
}