"use client";

import { useEffect, useState } from "react";

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

const STEPS = [
  {
    num: "01",
    title: "Farmer onboarding",
    desc: "Cooperatives submit structured project applications. Field agents verify land ownership, farmer profiles, input plans, and market linkages on the ground before scoring begins.",
  },
  {
    num: "02",
    title: "Scoring engine",
    desc: "The six-dimension AI scoring model evaluates each project against sector benchmarks. Every output is reviewed by a human analyst before it reaches the investor layer.",
  },
  {
    num: "03",
    title: "Investor dashboard",
    desc: "Verified projects enter the live pipeline with full score cards, field evidence, financial projections, and milestone-linked monitoring data.",
  },
];

const STATS = [
  { value: "6×", label: "Scoring dimensions" },
  { value: "48h", label: "Turnaround per project" },
  { value: "12+", label: "Countries covered" },
  { value: "100%", label: "Admin reviewed" },
];


const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #0A1A0F;
    --card:     #0D1F12;
    --sage:     #B8D4C0;
    --green:    #4ADE80;
    --muted:    rgba(184, 212, 192, 0.50);
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
    background: rgba(10, 26, 15, 0.92);
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

  .fn-logo-dot { color: var(--green); }

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
    border: 1px solid var(--green);
    border-radius: 5px;
    color: var(--green);
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
    color: var(--green);
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
    border: 1px solid rgba(184, 212, 192, 0.22);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.15s;
  }

  .fn-btn-ghost:hover { border-color: rgba(184, 212, 192, 0.42); }

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
    color: var(--sage);
    margin-bottom: 7px;
  }

  .fn-project-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: var(--muted);
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
    color: var(--muted);
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
    color: var(--muted);
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
    color: var(--muted);
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
    color: var(--sage);
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
    color: var(--muted);
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
    color: var(--green);
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .fn-step-card {
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--card);
    transition: border-color 0.2s;
  }

  .fn-step-card:hover { border-color: var(--border-hi); }

  .fn-step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--green);
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 14px;
  }

  .fn-step-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--sage);
    margin-bottom: 10px;
  }

  .fn-step-desc {
    font-size: 13.5px;
    color: var(--muted);
    line-height: 1.72;
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
    color: var(--sage);
    margin-bottom: 8px;
  }

  .fn-dim-card-desc {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.67;
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
    color: var(--sage);
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
    color: var(--sage);
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .fn-cta-sub {
    font-size: 15px;
    color: var(--muted);
    margin-bottom: 32px;
    line-height: 1.65;
  }

  .fn-cta-fine {
    margin-top: 18px;
    font-size: 12.5px;
    color: var(--muted);
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
    .fn-steps-grid    { grid-template-columns: 1fr; }
    .fn-dim-cards     { grid-template-columns: repeat(2, 1fr); }
    .fn-stats-inner   { grid-template-columns: repeat(2, 1fr); }
    .fn-audience-grid { grid-template-columns: 1fr; }
    .fn-stat-cell:nth-child(2)  { border-right: none; }
    .fn-stat-cell:nth-child(3), .fn-stat-cell:nth-child(4) {
      border-top: 1px solid var(--border);
    }
  }

  @media (max-width: 560px) {
    .fn-dim-cards   { grid-template-columns: 1fr; }
    .fn-footer      { flex-direction: column; text-align: center; gap: 8px; }
    .fn-section     { padding: 56px 20px; }
    .fn-hero        { padding: 44px 20px 56px; }
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
          <h1 className="fn-h1">
            Investable African farmland projects,
            <br />
            scored to <em>institutional</em> standard
          </h1>
          <p className="fn-hero-body">
            FINNEX connects African smallholder farming cooperatives with
            institutional capital. Every project is structured, scored across six
            dimensions, and reviewed before reaching investors.
          </p>
          <div className="fn-btn-row">
            <a href="#access" className="fn-btn-primary">
              Request portfolio access
            </a>
            <a href="#how" className="fn-btn-ghost">
              See how it works
            </a>
          </div>
        </div>

        {/* Right column — animated score card */}
        <div className="fn-score-card">
          <div className="fn-card-top">
            <div>
              <div className="fn-project-name">Nakuru Maize Cooperative</div>
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

      {/* ── HOW IT WORKS ── */}
      <div className="fn-section" id="how">
        <div className="fn-section-label">Process</div>
        <h2 className="fn-section-h2">How it works</h2>
        <div className="fn-steps-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="fn-step-card">
              <span className="fn-step-num">{s.num}</span>
              <div className="fn-step-title">{s.title}</div>
              <div className="fn-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SCORING MODEL ── */}
      <div
        className="fn-section"
        id="model"
        style={{ paddingTop: 0 }}
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
                href="https://finnex-app-production.up.railway.app"
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
            <a href="#" className="fn-btn-primary">
              Apply for access
            </a>
            <a
              href="https://finnex-app-production.up.railway.app"
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
