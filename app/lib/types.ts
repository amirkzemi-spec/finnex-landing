export type Milestone = {
  id: string;
  name: string;
  status: "verified" | "pending";
  note?: string;
};

export type Opportunity = {
  id: string;
  title: string;
  country: string;
  category: string; // e.g. "Regenerative Farming"
  score: number; // 0-100
  projected_irr: string; // keep string for UI (e.g. "12.4%")
  term: string; // e.g. "18 months"
  funding_type: string; // e.g. "Milestone release"
  impact_signals: string[];
  ticket_min: string; // e.g. "$5,000"
  status: "open" | "funding" | "closed";
  summary: string;
  milestones: Milestone[];
  documents: { name: string; type: "pdf" | "image" | "link"; href?: string }[];
};