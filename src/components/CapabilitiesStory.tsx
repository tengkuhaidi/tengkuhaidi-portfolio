'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Stage {
  id: string;
  step: string;
  title: string;
  figTitle: string;
  figNum: string;
  description: string[];
  nodes: { label: string; x: number; y: number; active: boolean; isCore?: boolean }[];
  connections: { from: number; to: number; active: boolean }[];
  activeField: string;
}

const stages: Stage[] = [
  {
    id: 'isolated-systems',
    step: '01 / 05',
    title: 'Isolated Systems & Operational Drag',
    figTitle: 'Operational fragmentation prior to autonomous orchestration',
    figNum: 'Fig. 1',
    description: [
      'Modern businesses typically run on disconnected islands of software: CRMs, payroll spreadsheets, legacy inventory databases, and manual customer support channels.',
      'Because these systems cannot coordinate with each other, humans are forced to become manual bridges—wasting hundreds of hours each month re-entering data and managing cross-checks.'
    ],
    activeField: 'Coding',
    nodes: [
      { label: 'Web & Mobile App', x: 20, y: 25, active: true },
      { label: 'HRIS & Payroll', x: 80, y: 25, active: true },
      { label: 'Inventory DB', x: 20, y: 75, active: true },
      { label: 'Customer Support', x: 80, y: 75, active: true },
      { label: 'Manual Human Bridge', x: 50, y: 50, active: false, isCore: true }
    ],
    connections: [],
  },
  {
    id: 'foundational-architecture',
    step: '02 / 05',
    title: 'Foundational Web Architecture & Data Pipelines',
    figTitle: 'Consolidating data through high-throughput APIs & Next.js 16',
    figNum: 'Fig. 2',
    description: [
      'Our first engineering imperative is establishing an unshakeable digital foundation: high-performance Next.js 16 web engines, strictly typed PostgreSQL schemas, and clean REST APIs.',
      'We replace fragile spreadsheets with unified internal platforms featuring complete cryptographic audit trails and bank-grade data integrity.'
    ],
    activeField: 'Customer Support',
    nodes: [
      { label: 'Next.js 16 Edge', x: 20, y: 25, active: true },
      { label: 'PostgreSQL DB', x: 80, y: 25, active: true },
      { label: 'REST API Gateway', x: 50, y: 50, active: true, isCore: true },
      { label: 'Legalizin Engine', x: 20, y: 75, active: true },
      { label: 'Billing / CRM', x: 80, y: 75, active: true }
    ],
    connections: [
      { from: 2, to: 0, active: true },
      { from: 2, to: 1, active: true },
      { from: 2, to: 3, active: true },
      { from: 2, to: 4, active: true }
    ],
  },
  {
    id: 'ai-implementation',
    step: '03 / 05',
    title: 'Applied AI for Business & Autonomous Agents',
    figTitle: 'Embedding autonomous coordinator agents into operational workflows',
    figNum: 'Fig. 3',
    description: [
      'We engineer pragmatic, reliable AI systems: autonomous agentic workflows capable of verifying regulatory legal frameworks, cross-referencing KBLI codes, and pushing instant search engine indexing.',
      'Never cosmetic toys or hallucinating chatbots. These are deterministic AI agents granted authorized internal API credentials to execute repetitive corporate tasks with zero human latency.'
    ],
    activeField: 'Marketing',
    nodes: [
      { label: 'Legal Review Agent', x: 20, y: 20, active: true },
      { label: 'SEO & Indexing Agent', x: 80, y: 20, active: true },
      { label: 'Central Coordinator AI', x: 50, y: 50, active: true, isCore: true },
      { label: 'Financial & Invoicing', x: 20, y: 80, active: true },
      { label: 'CRM & Bot Worker', x: 80, y: 80, active: true }
    ],
    connections: [
      { from: 2, to: 0, active: true },
      { from: 2, to: 1, active: true },
      { from: 2, to: 3, active: true },
      { from: 2, to: 4, active: true },
      { from: 0, to: 1, active: true },
      { from: 3, to: 4, active: true }
    ],
  },
  {
    id: 'multi-agent-orchestration',
    step: '04 / 05',
    title: 'Cross-Department Multi-Agent Orchestration',
    figTitle: 'Continuous self-coordinating business operations 24/7',
    figNum: 'Fig. 4',
    description: [
      'Once each departmental module is powered by an autonomous agent, cross-organizational coordination becomes seamless: incoming leads trigger automatic legal feasibility checks, draft authentic deeds, dispatch invoices, and notify stakeholders.',
      'Your business continues to transact, deliver, and expand value even while the executive team is offline.'
    ],
    activeField: 'Sales',
    nodes: [
      { label: 'Growth & Marketing', x: 25, y: 20, active: true },
      { label: 'Legal & Compliance', x: 75, y: 20, active: true },
      { label: 'Multi-Agent Mesh', x: 50, y: 50, active: true, isCore: true },
      { label: 'Treasury & Finance', x: 25, y: 80, active: true },
      { label: 'Fulfillment & Ops', x: 75, y: 80, active: true }
    ],
    connections: [
      { from: 2, to: 0, active: true },
      { from: 2, to: 1, active: true },
      { from: 2, to: 3, active: true },
      { from: 2, to: 4, active: true },
      { from: 0, to: 1, active: true },
      { from: 1, to: 4, active: true },
      { from: 4, to: 3, active: true },
      { from: 3, to: 0, active: true }
    ],
  },
  {
    id: 'automating-organizations',
    step: '05 / 05',
    title: 'Automating Organizations (The Calm Enterprise)',
    figTitle: 'Autonomous, resilient, and super-optimized business engines',
    figNum: 'Fig. 5',
    description: [
      'This is the highest engineering doctrine of Digitas Solusi Indonesia: converting exhausting operational toil into a self-sustaining, high-velocity digital asset.',
      'Founders and leadership regain total focus for strategic breakthroughs, while software and AI super-optimizers quietly execute everyday corporate reality.'
    ],
    activeField: 'multiple fields',
    nodes: [
      { label: 'Autonomous Core', x: 50, y: 50, active: true, isCore: true },
      { label: 'LegalTech (Legalizin)', x: 20, y: 20, active: true },
      { label: 'Enterprise Systems', x: 80, y: 20, active: true },
      { label: 'Instant Indexing Engine', x: 20, y: 80, active: true },
      { label: 'Automated Finance', x: 80, y: 80, active: true },
      { label: 'AI Operations Mesh', x: 50, y: 15, active: true }
    ],
    connections: [
      { from: 0, to: 1, active: true },
      { from: 0, to: 2, active: true },
      { from: 0, to: 3, active: true },
      { from: 0, to: 4, active: true },
      { from: 0, to: 5, active: true },
      { from: 1, to: 5, active: true },
      { from: 2, to: 5, active: true },
      { from: 3, to: 4, active: true }
    ],
  }
];

export default function CapabilitiesStory() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / totalHeight, 0), 0.999);
      const stageIdx = Math.floor(progress * stages.length);
      setActiveIdx(stageIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStage = stages[activeIdx];

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative w-full border-t border-[#dee2de] dark:border-[#24272b] transition-colors"
      style={{ height: `${stages.length * 90}vh` }}
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-20 px-4 sm:px-6 max-w-[1240px] mx-auto overflow-hidden">
        
        {/* Editorial Top Headline with Floating Badges (1:1 with General Intelligence) */}
        <div className="max-w-3xl mb-4 sm:mb-8 pt-6 sm:pt-2">
          <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-3 tracking-tight">
            02 / Capabilities &amp; Systems Engineering
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-editorial text-[#2c2c2c] dark:text-white leading-[1.2] tracking-[-0.035em]">
            Existing specialized systems have shown success across{' '}
            <span className="relative inline-block px-2 py-0.5 border-b border-[#dee2de] dark:border-neutral-700 text-[#41a1cf]">
              isolated domains
            </span>
            , but they remain disconnected.{' '}
            <span className="text-[#646464] dark:text-[#a0a5ad] font-sans text-xl sm:text-2xl md:text-3xl block mt-1">
              Your enterprise needs an intelligent coordinator and unified architecture.
            </span>
          </h2>
        </div>

        {/* Dynamic Split Content (Narrative Left + Interactive SVG Diagram Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 pb-4">
          
          {/* Left Column: Stage Narrative & Progress Indicators */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full max-h-[440px]">
            <div>
              {/* Vertical Step Dash Indicators */}
              <div className="flex items-center gap-2 mb-6">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!containerRef.current) return;
                      const targetY = containerRef.current.offsetTop + (i / stages.length) * (containerRef.current.offsetHeight - window.innerHeight);
                      window.scrollTo({ top: targetY, behavior: 'smooth' });
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? 'w-10 bg-[#41a1cf]'
                        : 'w-3 bg-[#dee2de] dark:bg-neutral-800 hover:bg-[#b4b8b4]'
                    }`}
                    aria-label={`Go to stage ${i + 1}`}
                  />
                ))}
                <span className="text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad] ml-2">
                  {currentStage.step}
                </span>
              </div>

              {/* Stage Title */}
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-4">
                {currentStage.title}
              </h3>

              {/* Stage Description */}
              <div className="space-y-3 text-[14px] sm:text-[15px] text-[#444141] dark:text-[#d1d5db] leading-[1.55] font-sans">
                {currentStage.description.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Service Highlight Badge */}
            <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              <span className="text-[#41a1cf]">● Live Focus: Applied AI &amp; Full-Stack Engineering</span>
              <span className="text-neutral-400 dark:text-neutral-600">Scroll to advance ↓</span>
            </div>
          </div>

          {/* Right Column: SVG Diagram Card (Fig Frame Style) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full aspect-[16/10] max-w-[620px] rounded-[24px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between">
              
              {/* Subtle background radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,161,207,0.08),transparent_70%)] pointer-events-none" />

              {/* SVG Animated Mesh Coordinator */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full max-h-[300px] overflow-visible"
                >
                  {/* Connection Lines */}
                  {currentStage.connections.map((c, i) => {
                    const fromNode = currentStage.nodes[c.from];
                    const toNode = currentStage.nodes[c.to];
                    if (!fromNode || !toNode) return null;
                    return (
                      <g key={i}>
                        <line
                          x1={fromNode.x}
                          y1={fromNode.y}
                          x2={toNode.x}
                          y2={toNode.y}
                          stroke="#41a1cf"
                          strokeWidth="0.8"
                          strokeDasharray="2,2"
                          className="opacity-70 animate-pulse transition-all duration-500"
                        />
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  {currentStage.nodes.map((node, i) => (
                    <g
                      key={i}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="transition-all duration-700 ease-out"
                    >
                      {/* Pulse Ring for Core Node */}
                      {node.isCore && (
                        <circle
                          r="7"
                          fill="none"
                          stroke="#41a1cf"
                          strokeWidth="0.5"
                          className="animate-ping opacity-30"
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        r={node.isCore ? '4.5' : '3'}
                        fill={node.isCore ? '#41a1cf' : '#282834'}
                        className="dark:fill-[#41a1cf] transition-colors"
                      />

                      {/* Node Label */}
                      <text
                        y={node.y > 50 ? 7 : -6}
                        textAnchor="middle"
                        className="text-[3.2px] font-mono fill-[#2c2c2c] dark:fill-white font-medium"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Figure Caption (1:1 with General Intelligence) */}
              <div className="pt-3 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad] relative z-10">
                <span className="font-semibold text-[#171717] dark:text-white">
                  {currentStage.figNum} {currentStage.figTitle}
                </span>
                <span className="text-[#41a1cf] text-[11px]">
                  Engine Status: Active &amp; Synchronized
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
