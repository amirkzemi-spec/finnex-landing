import { Opportunity } from "./types";

export const opportunities: Opportunity[] = [
  {
    id: "ghana-maize-01",
    title: "Maize Regeneration (Ghana)",
    country: "Ghana",
    category: "Regenerative Farming",
    score: 82,
    projected_irr: "12.4%",
    term: "18 months",
    funding_type: "Milestone release",
    impact_signals: ["Yield uplift", "Jobs", "CO₂ (where measurable)"],
    ticket_min: "$5,000",
    status: "open",
    summary:
      "Smallholder cooperative project with offtake readiness. Structured disbursement with verification checkpoints.",
    milestones: [
      { id: "m1", name: "Farmer verification", status: "verified" },
      { id: "m2", name: "Inputs delivered", status: "verified" },
      { id: "m3", name: "Field monitoring check", status: "pending" },
      { id: "m4", name: "Harvest & sales settlement", status: "pending" },
    ],
    documents: [
      { name: "Project Brief", type: "pdf" },
      { name: "Verification Evidence", type: "image" },
      { name: "Offtake Letter", type: "pdf" },
    ],
  },
  {
    id: "kenya-agroforestry-02",
    title: "Agroforestry Expansion (Kenya)",
    country: "Kenya",
    category: "Agroforestry",
    score: 76,
    projected_irr: "10–13%",
    term: "24 months",
    funding_type: "Milestone release",
    impact_signals: ["Soil health", "Income stability", "Biodiversity"],
    ticket_min: "$10,000",
    status: "funding",
    summary:
      "Tree-crop integration program with staged expansion and field verification for each tranche.",
    milestones: [
      { id: "m1", name: "Baseline assessment", status: "verified" },
      { id: "m2", name: "Seedlings + training delivered", status: "pending" },
      { id: "m3", name: "Mid-cycle field audit", status: "pending" },
      { id: "m4", name: "Performance reporting", status: "pending" },
    ],
    documents: [
      { name: "Project Brief", type: "pdf" },
      { name: "Baseline Report", type: "pdf" },
    ],
  },
];

export function getOpportunity(id: string) {
  return opportunities.find((o) => o.id === id);
}