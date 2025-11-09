import { MetricCard } from "./components/MetricCard";
import { Slide } from "./components/Slide";

type AgendaItem = {
  label: string;
  description: string;
};

type Metric = {
  label: string;
  value: string;
  description: string;
  trend?: "up" | "down";
};

type ExperiencePillar = {
  title: string;
  points: string[];
};

type TimelineItem = {
  quarter: string;
  headline: string;
  highlights: string[];
};

type RiskControl = {
  category: string;
  detail: string;
};

type KPI = {
  label: string;
  target: string;
  baseline: string;
  driver: string;
};

const agenda: AgendaItem[] = [
  { label: "Vision", description: "Reimagine financial engagement through embedded, intelligent experiences." },
  { label: "Signals", description: "Macro trends guiding investment focus and resource allocation." },
  { label: "Architecture", description: "Composable platforms to power open, API-first ecosystems." },
  { label: "Roadmap", description: "90-day, 12-month, and horizon milestones to operationalize the strategy." }
];

const metrics: Metric[] = [
  {
    label: "Embedded finance TAM",
    value: "$7T by 2030",
    description: "Merchants and platforms expect seamless financial services within their native journeys.",
  },
  {
    label: "AI-driven personalization",
    value: "4.6x ROI",
    description: "Institutions harnessing real-time personalization outperform peers on retention and share of wallet.",
  },
  {
    label: "Digital trust",
    value: "62%",
    description: "Consumers now rank security and transparency as deciding factors when switching providers.",
  },
  {
    label: "Operational efficiency",
    value: "35% automation",
    description: "Target cost takeout achievable by orchestrating straight-through processing across key flows.",
    trend: "up",
  }
];

const experiencePillars: ExperiencePillar[] = [
  {
    title: "Contextual Finance",
    points: [
      "Serve credit, insurance, and wealth offers within customer workflows",
      "Leverage behavioral scoring for dynamic product bundles",
      "Deliver instant decisioning with embedded compliance"
    ]
  },
  {
    title: "Trusted Infrastructure",
    points: [
      "Zero-trust architecture with continuous identity and risk scoring",
      "Unified data fabric for accurate, explainable insights",
      "Programmable guardrails for regulatory alignment"
    ]
  },
  {
    title: "Adaptive Operations",
    points: [
      "Real-time treasury and liquidity management dashboards",
      "Automation-first fulfillment across onboarding to servicing",
      "Human-in-the-loop governance for critical exceptions"
    ]
  }
];

const timeline: TimelineItem[] = [
  {
    quarter: "Now - 90 Days",
    headline: "Foundation & quick wins",
    highlights: [
      "Launch cross-functional digital finance council",
      "Stand up unified data pipeline + customer 360",
      "Pilot embedded lending with two strategic partners"
    ]
  },
  {
    quarter: "90-180 Days",
    headline: "Scale differentiators",
    highlights: [
      "Automate credit decisioning across SME segments",
      "Deploy AI-led financial coaching in mobile channels",
      "Integrate regulatory reporting automation layer"
    ]
  },
  {
    quarter: "H2 2025",
    headline: "Ecosystem expansion",
    highlights: [
      "Open marketplace for third-party fintech collaborations",
      "Tokenized asset rails enabling new yield products",
      "Customer-led savings and investment journeys across regions"
    ]
  }
];

const riskControls: RiskControl[] = [
  {
    category: "Regulatory Intelligence",
    detail: "Continuous monitoring of policy shifts with automated impact scoring and playbooks aligned to Basel IV, DORA, and emerging CBDC frameworks."
  },
  {
    category: "Trust & Safety",
    detail: "End-to-end encryption, behavioral biometrics, and anomaly detection reduce fraud loss while maintaining low-friction UX."
  },
  {
    category: "Ethical AI",
    detail: "Model governance board with fairness audits, synthetic data sandboxes, and explainability dashboards for regulators and customers."
  }
];

const kpis: KPI[] = [
  { label: "Digital revenue mix", target: "55%", baseline: "31%", driver: "Embedded lending + wealth" },
  { label: "Cost-to-income", target: "42%", baseline: "54%", driver: "Automation and straight-through processing" },
  { label: "Net promoter score", target: "+18", baseline: "+2", driver: "Hyper-personalized journeys" },
  { label: "Risk-adjusted return", target: "+320 bps", baseline: "+180 bps", driver: "Dynamic risk pricing" }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-grid opacity-40"></div>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-night/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon to-aurora shadow-[0_0_30px_rgba(0,228,255,0.6)]"></div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg tracking-tight">Digital Finance</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Vision 2025</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200/80 md:flex">
            {[
              { href: "#vision", label: "Vision" },
              { href: "#signals", label: "Signals" },
              { href: "#architecture", label: "Architecture" },
              { href: "#roadmap", label: "Roadmap" },
              { href: "#kpis", label: "Outcomes" }
            ].map((item) => (
              <a key={item.href} href={item.href} className="hover:text-neon transition">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#roadmap"
            className="hidden rounded-full border border-neon/60 bg-neon/10 px-5 py-2 text-sm font-medium text-neon shadow-[0_0_20px_rgba(0,228,255,0.4)] transition hover:bg-neon/20 md:inline-flex"
          >
            Explore roadmap
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-8">
            <span className="badge w-fit uppercase tracking-widest">Executive Narrative</span>
            <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
              Orchestrating the next era of digital finance.
            </h1>
            <p className="text-lg text-slate-200/90 md:text-xl">
              We are moving from channel-driven digital banking to an ecosystem where finance is ambient, intelligent, and trusted.
              This narrative aligns leadership on the opportunity, path to value, and guardrails required to scale responsibly.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="tag">Embedded services</span>
              <span className="tag">AI orchestration</span>
              <span className="tag">Composable platforms</span>
              <span className="tag">Regulatory readiness</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#vision"
                className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-medium text-night transition hover:bg-white"
              >
                View the Strategy
              </a>
              <a
                href="#signals"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                Key Market Signals
              </a>
            </div>
          </div>
          <div className="glass-panel grid gap-6 p-8">
            <div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-300/70">Agenda</h3>
            </div>
            <div className="flex flex-col gap-6">
              {agenda.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_25px_rgba(0,0,0,0.2)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-neon/80">{item.label}</p>
                  <p className="mt-2 text-base text-slate-200/90">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-night/70 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Strategic Anchor</p>
                <p className="mt-2 text-base text-white/90">
                  Deliver ambient finance moments with measurable trust and profitability.
                </p>
              </div>
              <span className="font-display text-3xl text-cash">2025</span>
            </div>
          </div>
        </div>
      </section>

      <Slide
        id="vision"
        eyebrow="01"
        title="Vision: Finance that anticipates, empowers, and protects"
        subtitle="Design an ambient layer of financial experiences that blend into daily life, leverage predictive intelligence, and safeguard trust at every interaction."
      >
        <div className="slide-grid">
          {experiencePillars.map((pillar) => (
            <div key={pillar.title} className="glass-panel flex flex-col gap-4 p-8">
              <h3 className="slide-title">{pillar.title}</h3>
              <ul className="flex flex-col gap-3 text-slate-200/85">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-neon"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Slide>

      <Slide
        id="signals"
        eyebrow="02"
        title="Signals: Momentum reshaping digital finance"
        subtitle="Macro shifts and consumer expectations point to a decisive window for investing in platform-native products and intelligent operations."
      >
        <div className="slide-grid">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </Slide>

      <Slide
        id="architecture"
        eyebrow="03"
        title="Architecture: Composable, intelligent, and trusted"
        subtitle="Modernize the stack into an API-first, event-driven platform that welcomes partners, accelerates innovation, and maintains regulatory alignment."
      >
        <div className="glass-panel grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-2xl text-white">Experience Layer</h3>
              <p className="mt-3 text-slate-200/85">
                Unified design language, cross-channel orchestration, and personalization models drive contextual offers across web, mobile, and partner surfaces.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-300/70">
                <span className="tag">Design system</span>
                <span className="tag">Journey orchestration</span>
                <span className="tag">Real-time insights</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-2xl text-white">Intelligence Layer</h3>
              <p className="mt-3 text-slate-200/85">
                Streaming data fabric feeds feature stores and decisioning services. AI models handle credit risk, anomaly detection, and conversational guidance with human oversight.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-300/70">
                <span className="tag">Feature store</span>
                <span className="tag">ML Ops</span>
                <span className="tag">Explainability</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-2xl text-white">Core & Ecosystem Layer</h3>
              <p className="mt-3 text-slate-200/85">
                API gateway, microservices, and partner sandbox enable rapid launches, while ledger, payments, and compliance engines remain robust and auditable.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-300/70">
                <span className="tag">API gateway</span>
                <span className="tag">Partner sandbox</span>
                <span className="tag">Composable services</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="callout p-6">
              <h4 className="font-display text-xl text-neon">Key Enablers</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-slate-200/90">
                <li>Zero-trust security posture with continuous compliance automation</li>
                <li>Event-driven architecture enabling real-time settlement and alerts</li>
                <li>Partner APIs with monetization and SLA governance baked in</li>
              </ul>
            </div>
            <div className="callout p-6">
              <h4 className="font-display text-xl text-neon">Value Accelerators</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-slate-200/90">
                <li>Strategic alliances with fintechs for reach and specialization</li>
                <li>Unified data governance to unlock AI responsibly</li>
                <li>Composable product catalog shortening time-to-market</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        id="roadmap"
        eyebrow="04"
        title="Roadmap: Execute with precision and velocity"
        subtitle="Sequenced milestones that deliver measurable value, prove scalability, and derisk transformation."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-8">
            <div className="timeline-item">
              <h3 className="font-display text-2xl text-white">Strategic Sprints</h3>
              <p className="mt-2 text-slate-200/80">
                Each phase pairs product pods with risk, compliance, and data squads to accelerate delivery without compromising trust.
              </p>
            </div>
            {timeline.map((item) => (
              <div key={item.quarter} className="timeline-item">
                <h4 className="text-sm uppercase tracking-[0.3em] text-neon/80">{item.quarter}</h4>
                <h3 className="mt-2 font-display text-2xl text-white">{item.headline}</h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-200/90">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cash"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="glass-panel flex flex-col gap-6 p-8">
            <h3 className="font-display text-2xl text-white">Operating Model Shifts</h3>
            <div className="grid gap-4 text-sm text-slate-200/90">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="uppercase tracking-[0.3em] text-xs text-neon/70">People</p>
                <p className="mt-2">Multi-disciplinary pods, paired executives, and product-aligned KPIs.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="uppercase tracking-[0.3em] text-xs text-neon/70">Process</p>
                <p className="mt-2">Continuous discovery, experimentation guardrails, and automated controls.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="uppercase tracking-[0.3em] text-xs text-neon/70">Technology</p>
                <p className="mt-2">Cloud-native services, API monetization, and unified data mesh.</p>
              </div>
            </div>
            <div className="callout p-6">
              <h4 className="font-display text-xl text-neon">Change Management</h4>
              <p className="mt-3 text-sm text-slate-200/90">
                Executive sponsorship cadences, transparent OKR dashboards, and capability academies ensure adoption and sustained momentum.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        id="kpis"
        eyebrow="05"
        title="Outcomes: Measurable value creation"
        subtitle="Scorecard aligns leadership, product teams, and partners on tangible progress toward the North Star vision."
      >
        <div className="glass-panel grid gap-6 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-300/70">{kpi.label}</p>
                <div className="mt-4 flex items-end gap-4">
                  <p className="font-display text-4xl text-cash">{kpi.target}</p>
                  <div className="text-xs text-slate-300/70">
                    <p>Baseline: {kpi.baseline}</p>
                    <p>Driver: {kpi.driver}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="callout border border-aurora/30 p-6 text-slate-200/90">
            <h4 className="font-display text-xl text-aurora">Governance & Reporting</h4>
            <p className="mt-3 text-sm leading-relaxed">
              Monthly digital finance council reviews, customer sentiment telemetry, and regulatory compliance dashboards provide transparency and enable agile adjustments.
            </p>
          </div>
        </div>
      </Slide>

      <Slide
        id="risk"
        eyebrow="06"
        title="Risk & Compliance: Scaling responsibly"
        subtitle="Trust is the ultimate differentiator. Guardrails anchor innovation in compliance and ethical delivery."
      >
        <div className="slide-grid">
          {riskControls.map((control) => (
            <div key={control.category} className="glass-panel p-8">
              <h3 className="font-display text-2xl text-white">{control.category}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-200/90">{control.detail}</p>
            </div>
          ))}
        </div>
      </Slide>

      <section className="px-6 pb-24 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="glass-panel grid gap-6 overflow-hidden p-10 text-center">
            <span className="badge mx-auto uppercase tracking-[0.35em]">Call to action</span>
            <h2 className="font-display text-4xl md:text-5xl">Invest now to lead the digital finance horizon.</h2>
            <p className="text-lg text-slate-200/90">
              Align leadership around the roadmap, unleash cross-functional squads, and launch the first wave of ambient finance products.
            </p>
            <div className="mx-auto flex flex-wrap justify-center gap-4">
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full bg-cash px-6 py-3 font-medium text-night">
                Initiate Roadmap Sprint
              </a>
              <a href="#vision" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white/90">
                Share Strategy Brief
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Digital Finance Transformation Office
      </footer>
    </main>
  );
}
