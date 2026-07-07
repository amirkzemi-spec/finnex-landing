"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ── ICONS ───────────────────────────────────
   Simple line icons, stroke = currentColor, sized via .fn-icon-badge.
   No icon system existed on the site prior to this — these are new. */

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconUpload() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 15V4M12 4L7.5 8.5M12 4l4.5 4.5" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function IconGauge() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <path d="M12 15h.01" />
    </svg>
  );
}

function IconCheckShield() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 12l4-3 3 2 3-2 3 2 5-3" />
      <path d="M7 9l4 6 3-2" />
      <path d="M13 13l3 2 4-3" />
    </svg>
  );
}

function IconDatabaseOff() {
  return (
    <svg {...ICON_PROPS}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3 1.6 0 3.06-.24 4.24-.66" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

function IconAlertTriangle() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 4l9 16H3l9-16z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconScatter() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="6" cy="7" r="2" />
      <circle cx="17" cy="6" r="2" />
      <circle cx="10" cy="15" r="2" />
      <circle cx="18" cy="17" r="2" />
    </svg>
  );
}

function IconSearchClock() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6.5V10l2.5 1.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}

const DIMENSIONS = [
  { code: "D1", name: "Agronomy", score: 87 },
  { code: "D2", name: "Operator", score: 79 },
  { code: "D3", name: "Market", score: 82 },
  { code: "D4", name: "Finance", score: 74 },
  { code: "D5", name: "Monitoring", score: 91 },
  { code: "D6", name: "Impact", score: 88 },
];

const SCORING_CARDS = [
  {
    code: "D1",
    name: "Agronomy",
    desc: "Soil health, crop suitability, yield history, and input utilization benchmarked against regional climate and productivity data.",
  },
  {
    code: "D2",
    name: "Operator",
    desc: "Cooperative governance structure, management capacity, legal registration status, and verified repayment track record.",
  },
  {
    code: "D3",
    name: "Market",
    desc: "Offtake agreement quality, commodity price volatility, market access infrastructure, and demand-side risk profile.",
  },
  {
    code: "D4",
    name: "Finance",
    desc: "Project budget integrity, funding structure, cost of capital, capital efficiency, and projected financial sustainability.",
  },
  {
    code: "D5",
    name: "Monitoring",
    desc: "Remote sensing coverage, field verification cadence, data pipeline quality, and real-time alert responsiveness.",
  },
  {
    code: "D6",
    name: "Impact",
    desc: "Quantified jobs created, income improvement per household, carbon proxy estimates, and SDG alignment indicators.",
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Apply",
    desc: "A farming cooperative submits its project through a structured onboarding form.",
    icon: <IconUpload />,
  },
  {
    num: "02",
    title: "Score",
    desc: "Our six-dimension engine evaluates Agronomy, Operator, Market, Finance, Monitoring, and Impact.",
    icon: <IconGauge />,
  },
  {
    num: "03",
    title: "Review",
    desc: "Our team verifies the submission before it's listed.",
    icon: <IconCheckShield />,
  },
  {
    num: "04",
    title: "List",
    desc: "Approved projects appear on the investor dashboard, organized by risk band.",
    icon: <IconGrid />,
  },
  {
    num: "05",
    title: "Fund",
    desc: "Verified investors connect directly with scored, ready-to-fund projects.",
    icon: <IconHandshake />,
  },
];

const PROBLEM_ITEMS = [
  {
    title: "No trustworthy data",
    desc: "Farms don't produce the financial history investors expect.",
    icon: <IconDatabaseOff />,
  },
  {
    title: "High perceived risk",
    desc: "Without structured underwriting, smallholder projects look riskier than they are.",
    icon: <IconAlertTriangle />,
  },
  {
    title: "Fragmented opportunities",
    desc: "Good projects exist; there's no consistent place to find them.",
    icon: <IconScatter />,
  },
  {
    title: "Costly diligence",
    desc: "Manual vetting doesn't scale to thousands of small farms.",
    icon: <IconSearchClock />,
  },
];

const TEAM_MEMBERS = [
  {
    name: "Amir Kazemi",
    role: "CEO",
    bio: "4 years in agri-development finance.",
    photo: "/team/amir.jpg",
  },
  {
    name: "Alireza Sharifmoghaddasi",
    role: "CFO",
    bio: "PhD in Economics (Monetary Economics); Assistant Professor at Iran's Agricultural Research, Education & Extension Organization (AREEO), specializing in agricultural economics and finance.",
    photo: "/team/alireza.jpg",
  },
  {
    name: "Shirin Razghandi",
    role: "COO",
    bio: "A decade of experience in strategic marketing, market research, and program management; leads FINNEX's operations and go-to-market execution.",
    photo: "/team/shirin.jpg",
  },
];

const WHY_FINNEX = [
  {
    num: "01",
    title: "Built for structured capital, not seasonal cash.",
    desc: "FINNEX targets project-scale financing — irrigation, land, equipment — the capital smallholder cooperatives can't get from mobile money or microloans.",
  },
  {
    num: "02",
    title: "Rules-based scoring, on purpose.",
    desc: "Our scoring engine runs on transparent, auditable rules — not an unproven model. We'll introduce machine learning only once we have real outcome data to train it on, not before.",
  },
  {
    num: "03",
    title: "Partnered, not reinvented.",
    desc: "Insurance, input distribution, payments — where strong local and regional partners already exist, we work with them instead of building competing infrastructure from scratch.",
  },
];

const STATS = [
  { value: "6×", label: "Scoring dimensions" },
  { value: "48h", label: "Turnaround per project" },
  { value: "5", label: "Target markets" },
  { value: "100%", label: "Admin reviewed" },
];


const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #FAF9F5;
    --card:     #0D1F12;
    --sage:     #12251A;
    --sage-on-dark: #B8D4C0;
    --green:    #4ADE80;
    --green-text: #14532D;
    --muted:    rgba(18, 37, 26, 0.55);
    --muted-on-dark: rgba(184, 212, 192, 0.50);
    --border:   rgba(74, 222, 128, 0.11);
    --border-hi: rgba(74, 222, 128, 0.26);
  }

  html, body {
    background: var(--bg) !important;
    color: var(--sage) !important;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif !important;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* ── NAV ─────────────────────────────────── */
  .fn-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(250, 249, 245, 0.92);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }

  .fn-nav-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  .fn-logo {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.025em;
    color: var(--sage);
    flex-shrink: 0;
    text-decoration: none;
  }

  .fn-logo-dot { color: var(--green-text); }

  .fn-nav-links {
    display: flex;
    align-items: center;
    gap: 26px;
    list-style: none;
    flex: 1;
  }

  .fn-nav-links a {
    font-size: 13.5px;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s;
  }

  .fn-nav-links a:hover { color: var(--sage); }

  .fn-btn-access {
    display: inline-block;
    padding: 7px 16px;
    border: 1px solid var(--green-text);
    border-radius: 5px;
    color: var(--green-text);
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    background: transparent;
    white-space: nowrap;
    transition: background 0.15s;
    flex-shrink: 0;
  }

  .fn-btn-access:hover { background: rgba(74, 222, 128, 0.07); }

  /* ── HERO ────────────────────────────────── */
  .fn-hero {
    max-width: 1120px;
    margin: 0 auto;
    padding: 76px 24px 84px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .fn-eyebrow {
    display: inline-block;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--green-text);
    margin-bottom: 18px;
  }

  .fn-h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(30px, 3.4vw, 44px);
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.02em;
    color: var(--sage);
    margin-bottom: 20px;
  }

  .fn-h1 em {
    font-style: normal;
    color: var(--green);
  }

  .fn-hero-body {
    font-size: 15px;
    line-height: 1.75;
    color: var(--muted);
    max-width: 445px;
    margin-bottom: 32px;
  }

  .fn-btn-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .fn-btn-primary {
    display: inline-block;
    padding: 11px 22px;
    background: var(--green);
    color: #0A1A0F;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .fn-btn-primary:hover { opacity: 0.85; }

  .fn-btn-ghost {
    display: inline-block;
    padding: 11px 22px;
    background: transparent;
    color: var(--sage);
    border: 1px solid rgba(18, 37, 26, 0.22);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.15s;
  }

  .fn-btn-ghost:hover { border-color: rgba(18, 37, 26, 0.42); }

  /* .fn-btn-ghost is reused inside .fn-cta, which sits on the dark --card
     background — override to the on-dark values so it isn't dark-on-dark. */
  .fn-cta .fn-btn-ghost {
    color: var(--sage-on-dark);
    border-color: rgba(184, 212, 192, 0.22);
  }

  .fn-cta .fn-btn-ghost:hover { border-color: rgba(184, 212, 192, 0.42); }

  /* ── SCORE CARD ──────────────────────────── */
  .fn-score-card {
    background: var(--card);
    border: 1px solid var(--border-hi);
    border-radius: 10px;
    padding: 24px;
  }

  .fn-card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 16px;
  }

  .fn-project-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--sage-on-dark);
    margin-bottom: 7px;
  }

  .fn-sample-tag {
    display: inline-block;
    padding: 1px 6px;
    margin-bottom: 7px;
    border: 1px solid rgba(184, 212, 192, 0.22);
    border-radius: 4px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted-on-dark);
  }

  .fn-project-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--muted-on-dark);
    line-height: 1.9;
  }

  .fn-score-wrap {
    text-align: center;
    flex-shrink: 0;
  }

  .fn-score-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 40px;
    font-weight: 500;
    color: var(--green);
    line-height: 1;
    display: block;
    min-width: 56px;
    text-align: center;
  }

  .fn-score-sub {
    font-size: 9.5px;
    color: var(--muted-on-dark);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
    margin-top: 4px;
  }

  .fn-status-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .fn-live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    flex-shrink: 0;
    animation: fn-pulse 2s ease-in-out infinite;
  }

  @keyframes fn-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); opacity: 1; }
    50%       { box-shadow: 0 0 0 6px rgba(74,222,128,0); opacity: 0.65; }
  }

  .fn-live-text {
    font-size: 11.5px;
    color: var(--muted-on-dark);
  }

  .fn-risk-badge {
    margin-left: auto;
    padding: 2px 10px;
    border: 1px solid rgba(74,222,128,0.32);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
    color: var(--green);
    background: rgba(74,222,128,0.07);
  }

  .fn-divider {
    height: 1px;
    background: var(--border);
    margin: 14px 0;
  }

  .fn-dim-bars { display: flex; flex-direction: column; gap: 10px; }

  .fn-dim-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .fn-dim-name {
    font-size: 11.5px;
    color: var(--muted-on-dark);
    width: 70px;
    flex-shrink: 0;
  }

  .fn-dim-track {
    flex: 1;
    height: 3px;
    background: rgba(184,212,192,0.08);
    border-radius: 2px;
    overflow: hidden;
  }

  .fn-dim-bar {
    height: 100%;
    background: var(--green);
    border-radius: 2px;
    width: 0%;
    transition: width 1.1s cubic-bezier(0.34, 1.3, 0.64, 1);
  }

  .fn-dim-val {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--sage-on-dark);
    width: 26px;
    text-align: right;
    flex-shrink: 0;
  }

  /* ── STATS BAR ───────────────────────────── */
  .fn-stats {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: var(--card);
  }

  .fn-stats-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .fn-stat-cell {
    padding: 38px 24px;
    text-align: center;
    border-right: 1px solid var(--border);
  }

  .fn-stat-cell:last-child { border-right: none; }

  .fn-stat-val {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 34px;
    font-weight: 600;
    color: var(--green);
    display: block;
    line-height: 1;
    margin-bottom: 7px;
  }

  .fn-stat-lbl {
    font-size: 12.5px;
    color: var(--muted-on-dark);
  }

  /* ── SECTIONS ────────────────────────────── */
  .fn-section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 80px 24px;
  }

  .fn-section-label {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--green-text);
    margin-bottom: 10px;
  }

  .fn-section-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(24px, 2.8vw, 34px);
    font-weight: 600;
    color: var(--sage);
    letter-spacing: -0.02em;
    margin-bottom: 40px;
    line-height: 1.2;
  }

  /* ── HOW IT WORKS ────────────────────────── */
  .fn-steps-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }

  .fn-step-card {
    padding: 24px 20px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
    transition: border-color 0.2s;
  }

  .fn-step-card:hover { border-color: var(--border-hi); }

  /* Shared icon badge — reused across How-it-works, Problem, and any
     future section that needs an icon + short line, so they read as
     one visual system anchored on the score card's --green/--card tokens. */
  .fn-icon-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background: rgba(74, 222, 128, 0.09);
    color: var(--green);
    margin-bottom: 16px;
  }

  .fn-step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--green);
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 8px;
  }

  .fn-step-title {
    font-size: 15.5px;
    font-weight: 600;
    color: var(--sage-on-dark);
    margin-bottom: 8px;
  }

  .fn-step-desc {
    font-size: 13px;
    color: var(--muted-on-dark);
    line-height: 1.65;
  }

  /* ── SCORING MODEL ───────────────────────── */
  .fn-dim-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .fn-dim-card {
    padding: 22px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
    transition: border-color 0.2s;
  }

  .fn-dim-card:hover { border-color: var(--border-hi); }

  .fn-dim-code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--green);
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 7px;
  }

  .fn-dim-card-name {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--sage-on-dark);
    margin-bottom: 8px;
  }

  .fn-dim-card-desc {
    font-size: 13px;
    color: var(--muted-on-dark);
    line-height: 1.67;
  }

  /* ── PROBLEM ─────────────────────────────── */
  .fn-problem-intro {
    font-size: 15px;
    line-height: 1.75;
    color: var(--muted);
    max-width: 680px;
    margin-bottom: 40px;
  }

  .fn-problem-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .fn-problem-item .fn-icon-badge { margin-bottom: 14px; }

  .fn-problem-title {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--sage);
    margin-bottom: 6px;
  }

  .fn-problem-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.6;
  }

  .fn-problem-closing {
    margin-top: 40px;
    font-size: 15.5px;
    font-weight: 500;
    color: var(--sage);
    font-family: 'Playfair Display', Georgia, serif;
  }

  /* ── WHY FINNEX ──────────────────────────── */
  .fn-why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .fn-why-card {
    padding: 26px 22px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
    transition: border-color 0.2s;
  }

  .fn-why-card:hover { border-color: var(--border-hi); }

  .fn-why-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--green);
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 14px;
  }

  .fn-why-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--sage-on-dark);
    margin-bottom: 10px;
    line-height: 1.35;
  }

  .fn-why-desc {
    font-size: 13px;
    color: var(--muted-on-dark);
    line-height: 1.68;
  }

  /* ── AUDIENCE SPLIT ─────────────────────── */
  .fn-partners {
    border-top: 1px solid var(--border);
    padding: 52px 24px;
  }

  .fn-partners-inner {
    max-width: 1120px;
    margin: 0 auto;
  }

  .fn-audience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .fn-audience-card {
    padding: 36px 32px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
    transition: border-color 0.2s;
  }

  .fn-audience-card:hover { border-color: var(--border-hi); }

  .fn-audience-label {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 12px;
  }

  .fn-audience-desc {
    font-size: 15px;
    color: var(--sage-on-dark);
    line-height: 1.7;
  }

  .fn-audience-link {
    display: inline-block;
    margin-top: 18px;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--green);
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .fn-audience-link:hover { opacity: 0.75; }

  /* ── TEAM / TRUST ────────────────────────── */
  .fn-team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .fn-team-card {
    padding: 32px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
  }

  .fn-team-photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-hi);
    margin-bottom: 16px;
  }

  .fn-team-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--sage-on-dark);
    margin-bottom: 3px;
  }

  .fn-team-role {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--green);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .fn-team-label {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 14px;
  }

  .fn-team-body {
    font-size: 14.5px;
    color: var(--sage-on-dark);
    line-height: 1.75;
  }

  /* ── CTA ─────────────────────────────────── */
  .fn-cta {
    background: var(--card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .fn-cta-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 84px 24px;
    text-align: center;
  }

  .fn-cta-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(26px, 3.5vw, 40px);
    font-weight: 600;
    color: var(--sage-on-dark);
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .fn-cta-sub {
    font-size: 15px;
    color: var(--muted-on-dark);
    margin-bottom: 32px;
    line-height: 1.65;
  }

  .fn-cta-fine {
    margin-top: 18px;
    font-size: 12.5px;
    color: var(--muted-on-dark);
  }

  /* ── FOOTER ──────────────────────────────── */
  .fn-footer {
    max-width: 1120px;
    margin: 0 auto;
    padding: 28px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .fn-footer-logo {
    font-size: 14px;
    font-weight: 600;
    color: var(--sage);
    letter-spacing: -0.01em;
  }

  .fn-footer-copy {
    font-size: 12.5px;
    color: var(--muted);
  }

  /* ── RESPONSIVE ──────────────────────────── */
  @media (max-width: 920px) {
    .fn-hero          { grid-template-columns: 1fr; gap: 44px; padding-top: 52px; }
    .fn-hero-body     { max-width: 100%; }
    .fn-nav-links     { display: none; }
    .fn-steps-grid    { grid-template-columns: repeat(2, 1fr); }
    .fn-dim-cards     { grid-template-columns: repeat(2, 1fr); }
    .fn-stats-inner   { grid-template-columns: repeat(2, 1fr); }
    .fn-problem-grid  { grid-template-columns: repeat(2, 1fr); }
    .fn-why-grid      { grid-template-columns: 1fr; }
    .fn-audience-grid { grid-template-columns: 1fr; }
    .fn-team-grid     { grid-template-columns: 1fr; }
    .fn-stat-cell:nth-child(2)  { border-right: none; }
    .fn-stat-cell:nth-child(3), .fn-stat-cell:nth-child(4) {
      border-top: 1px solid var(--border);
    }
  }

  @media (max-width: 560px) {
    .fn-steps-grid    { grid-template-columns: 1fr; }
    .fn-dim-cards     { grid-template-columns: 1fr; }
    .fn-problem-grid  { grid-template-columns: 1fr; }
    .fn-footer        { flex-direction: column; text-align: center; gap: 8px; }
    .fn-section       { padding: 56px 20px; }
    .fn-hero          { padding: 44px 20px 56px; }
  }
`;

export default function Home() {
  const [displayScore, setDisplayScore] = useState(0);
  const [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    const TARGET = 83;
    const DURATION = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayScore(Math.round(eased * TARGET));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    const timer = setTimeout(() => setBarsActive(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      />

      <style>{CSS}</style>

      {/* ── NAV ── */}
      <nav className="fn-nav">
        <div className="fn-nav-inner">
          <a href="#" className="fn-logo">
            FINNEX<span className="fn-logo-dot">.</span>
          </a>
          <ul className="fn-nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#investors">For investors</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#model">Data model</a></li>
          </ul>
          <a href="#access" className="fn-btn-access">Get started</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="fn-hero">
        {/* Left column */}
        <div>
          <span className="fn-eyebrow">Agricultural capital intelligence</span>
          <h1 className="fn-h1">Making smallholder agriculture investable.</h1>
          <p className="fn-hero-body">
            FINNEX connects East African farming cooperatives with impact
            investors through a structured six-dimension scoring engine —
            Agronomy, Operator, Market, Finance, Monitoring, Impact.
          </p>
          <div className="fn-btn-row">
            <a
              href="mailto:invest@finnex.capital?subject=Investor%20Access%20Request"
              className="fn-btn-primary"
            >
              For Investors: Request Access
            </a>
            <a
              href="https://app.finnex.capital/farmer/apply"
              className="fn-btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Farmers: Apply for Funding
            </a>
          </div>
        </div>

        {/* Right column — animated score card */}
        <div className="fn-score-card">
          <div className="fn-card-top">
            <div>
              <div className="fn-project-name">Nakuru Maize Cooperative</div>
              <span className="fn-sample-tag">Sample project</span>
              <div className="fn-project-meta">
                PRJ-2024-KEN-0047
                <br />
                Kenya · Maize + Soy · $84K
              </div>
            </div>
            <div className="fn-score-wrap">
              <span className="fn-score-num">{displayScore}</span>
              <span className="fn-score-sub">Overall score</span>
            </div>
          </div>

          <div className="fn-status-row">
            <div className="fn-live-dot" />
            <span className="fn-live-text">Live monitoring active</span>
            <span className="fn-risk-badge">Low risk</span>
          </div>

          <div className="fn-divider" />

          <div className="fn-dim-bars">
            {DIMENSIONS.map((dim, i) => (
              <div key={dim.code} className="fn-dim-row">
                <span className="fn-dim-name">{dim.name}</span>
                <div className="fn-dim-track">
                  <div
                    className="fn-dim-bar"
                    style={{
                      width: barsActive ? `${dim.score}%` : "0%",
                      transitionDelay: barsActive ? `${i * 75}ms` : "0ms",
                    }}
                  />
                </div>
                <span className="fn-dim-val">{dim.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW FINNEX WORKS ── */}
      <div className="fn-section" id="how">
        <div className="fn-section-label">Process</div>
        <h2 className="fn-section-h2">How FINNEX works</h2>
        <div className="fn-steps-grid">
          {HOW_STEPS.map((s) => (
            <div key={s.num} className="fn-step-card">
              <div className="fn-icon-badge">{s.icon}</div>
              <span className="fn-step-num">{s.num}</span>
              <div className="fn-step-title">{s.title}</div>
              <div className="fn-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <div className="fn-section" id="problem" style={{ paddingTop: 0 }}>
        <div className="fn-section-label">The gap</div>
        <h2 className="fn-section-h2">Why smallholder agriculture stays unfunded</h2>
        <p className="fn-problem-intro">
          Smallholder farmers produce over a third of the world&apos;s food, yet
          face a systemic financing gap — not because the opportunity isn&apos;t
          real, but because it isn&apos;t legible to formal capital.
        </p>
        <div className="fn-problem-grid">
          {PROBLEM_ITEMS.map((p) => (
            <div key={p.title} className="fn-problem-item">
              <div className="fn-icon-badge">{p.icon}</div>
              <div className="fn-problem-title">{p.title}</div>
              <div className="fn-problem-desc">{p.desc}</div>
            </div>
          ))}
        </div>
        <p className="fn-problem-closing">
          FINNEX exists to close this gap — with structure, not guesswork.
        </p>
      </div>

      {/* ── WHY FINNEX ── */}
      <div className="fn-section" id="why" style={{ paddingTop: 0 }}>
        <div className="fn-section-label">Our approach</div>
        <h2 className="fn-section-h2">Why FINNEX</h2>
        <div className="fn-why-grid">
          {WHY_FINNEX.map((w) => (
            <div key={w.num} className="fn-why-card">
              <span className="fn-why-num">{w.num}</span>
              <div className="fn-why-title">{w.title}</div>
              <div className="fn-why-desc">{w.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="fn-stats" id="investors">
        <div className="fn-stats-inner">
          {STATS.map((s) => (
            <div key={s.label} className="fn-stat-cell">
              <span className="fn-stat-val">{s.value}</span>
              <span className="fn-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SCORING MODEL ── */}
      <div
        className="fn-section"
        id="model"
      >
        <div className="fn-section-label">Methodology</div>
        <h2 className="fn-section-h2">Six-dimension scoring model</h2>
        <div className="fn-dim-cards">
          {SCORING_CARDS.map((d) => (
            <div key={d.code} className="fn-dim-card">
              <span className="fn-dim-code">{d.code}</span>
              <div className="fn-dim-card-name">{d.name}</div>
              <div className="fn-dim-card-desc">{d.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AUDIENCE SPLIT ── */}
      <div className="fn-partners" id="impact">
        <div className="fn-partners-inner">
          <div className="fn-audience-grid">
            <div className="fn-audience-card">
              <div className="fn-audience-label">For farmers</div>
              <p className="fn-audience-desc">
                Submit your project and get a structured investment-grade profile
                that speaks the language of institutional capital.
              </p>
              <a
                href="https://app.finnex.capital/farmer/apply"
                className="fn-audience-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your application →
              </a>
            </div>
            <div className="fn-audience-card">
              <div className="fn-audience-label">For investors</div>
              <p className="fn-audience-desc">
                Browse scored, admin-reviewed agricultural projects with full
                dimension breakdowns and risk classifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAM / TRUST ── */}
      <div className="fn-section" id="team">
        <div className="fn-section-label">Trust</div>
        <h2 className="fn-section-h2">Built on the ground, backed by structure</h2>
        <div className="fn-team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="fn-team-card">
              <Image
                src={member.photo}
                alt={member.name}
                width={72}
                height={72}
                className="fn-team-photo"
              />
              <div className="fn-team-name">{member.name}</div>
              <span className="fn-team-role">{member.role}</span>
              <p className="fn-team-body">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="fn-team-card">
          <div className="fn-team-label">Support</div>
          <p className="fn-team-body">
            FINNEX is supported by We Are Changemakers, a Dutch
            government-recognized Startup Visa facilitator, as part of our
            founder&apos;s presence in the Netherlands.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="fn-cta" id="access">
        <div className="fn-cta-inner">
          <h2 className="fn-cta-h2">A smarter pipeline for agricultural capital.</h2>
          <p className="fn-cta-sub">
            Whether you manage a cooperative or deploy capital into emerging
            markets — FINNEX gives you the structure to move faster and with more
            confidence.
          </p>
          <div className="fn-btn-row" style={{ justifyContent: "center" }}>
            <a href="mailto:invest@finnex.capital?subject=Investor%20Access%20Request" className="fn-btn-primary">
              Apply for access
            </a>
            <a
              href="https://app.finnex.capital/farmer/apply"
              className="fn-btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit your project
            </a>
          </div>
          <p className="fn-cta-fine">
            Responses within 2 business days · NDA available on request
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="fn-footer">
          <span className="fn-footer-logo">FINNEX.capital</span>
          <span className="fn-footer-copy">
            © {new Date().getFullYear()} FINNEX. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
