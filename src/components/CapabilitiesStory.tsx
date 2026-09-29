'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Stage {
  id: string;
  step: string;
  title: string;
  summary: string;
  nodes: { label: string; x: number; y: number; active: boolean; isCore?: boolean }[];
  connections: { from: number; to: number; active: boolean }[];
}

const stages: Stage[] = [
  {
    id: 'isolated-systems',
    step: '01 / 05',
    title: 'Isolated Systems',
    summary: 'Most companies run on disconnected tools: CRMs, payroll sheets, and manual chats. Teams waste hours bridging data between systems by hand.',
    nodes: [
      { label: 'Web & App', x: 20, y: 25, active: true },
      { label: 'Payroll', x: 80, y: 25, active: true },
      { label: 'Inventory', x: 20, y: 75, active: true },
      { label: 'Support', x: 80, y: 75, active: true },
      { label: 'Manual Work', x: 50, y: 50, active: false, isCore: true }
    ],
    connections: [],
  },
  {
    id: 'foundational-architecture',
    step: '02 / 05',
    title: 'Unified Architecture',
    summary: 'We build structured data foundations: Next.js 16, typed databases, and clear APIs. Fragile spreadsheets are replaced with audited internal software.',
    nodes: [
      { label: 'Web Edge', x: 20, y: 25, active: true },
      { label: 'Database', x: 80, y: 25, active: true },
      { label: 'API Gateway', x: 50, y: 50, active: true, isCore: true },
      { label: 'Core System', x: 20, y: 75, active: true },
      { label: 'Billing', x: 80, y: 75, active: true }
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
    title: 'Autonomous AI Agents',
    summary: 'Practical AI connected directly to company APIs. Agents handle document verification, regulatory checks, and search indexing automatically.',
    nodes: [
      { label: 'Legal Agent', x: 20, y: 20, active: true },
      { label: 'SEO Agent', x: 80, y: 20, active: true },
      { label: 'Coordinator', x: 50, y: 50, active: true, isCore: true },
      { label: 'Invoice Agent', x: 20, y: 80, active: true },
      { label: 'Support Bot', x: 80, y: 80, active: true }
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
    title: 'Cross-Team Coordination',
    summary: 'Agents coordinate between departments around the clock: incoming inquiries trigger compliance checks, generate invoices, and alert team leads.',
    nodes: [
      { label: 'Marketing', x: 25, y: 20, active: true },
      { label: 'Compliance', x: 75, y: 20, active: true },
      { label: 'Agent Mesh', x: 50, y: 50, active: true, isCore: true },
      { label: 'Finance', x: 25, y: 80, active: true },
      { label: 'Operations', x: 75, y: 80, active: true }
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
    title: 'Automated Operations',
    summary: 'Routine execution runs autonomously in the background. Founders focus on strategic decisions while systems handle daily workflows.',
    nodes: [
      { label: 'Central Core', x: 50, y: 50, active: true, isCore: true },
      { label: 'Legalizin', x: 20, y: 20, active: true },
      { label: 'ERP Systems', x: 80, y: 20, active: true },
      { label: 'Auto Indexing', x: 20, y: 80, active: true },
      { label: 'Finance Mesh', x: 80, y: 80, active: true },
      { label: 'Operations', x: 50, y: 15, active: true }
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
      style={{ height: `${stages.length * 85}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-20 px-4 sm:px-6 max-w-[1240px] mx-auto overflow-hidden">
        
        {/* Header */}
        <div className="max-w-3xl mb-4 sm:mb-8 pt-6 sm:pt-2">
          <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-3 tracking-tight">
            02 / Capabilities
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-editorial text-[#2c2c2c] dark:text-white leading-[1.2] tracking-[-0.035em]">
            Specialized tools work well in isolation.{' '}
            <span className="text-[#646464] dark:text-[#a0a5ad] font-sans text-xl sm:text-2xl md:text-3xl block mt-1">
              Your business needs a coordinator.
            </span>
          </h2>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 pb-4">
          
          {/* Left Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full max-h-[400px]">
            <div>
              {/* Progress bars */}
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

              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                {currentStage.title}
              </h3>

              <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
                {currentStage.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              <span>Scroll to view workflow ↓</span>
            </div>
          </div>

          {/* Right Diagram Card */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="w-full aspect-[16/10] max-w-[620px] rounded-[24px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,161,207,0.08),transparent_70%)] pointer-events-none" />

              {/* SVG Network */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full max-h-[300px] overflow-visible">
                  {currentStage.connections.map((c, i) => {
                    const fromNode = currentStage.nodes[c.from];
                    const toNode = currentStage.nodes[c.to];
                    if (!fromNode || !toNode) return null;
                    return (
                      <line
                        key={i}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="#41a1cf"
                        strokeWidth="0.8"
                        strokeDasharray="2,2"
                        className="opacity-70 animate-pulse transition-all duration-500"
                      />
                    );
                  })}

                  {currentStage.nodes.map((node, i) => (
                    <g
                      key={i}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="transition-all duration-700 ease-out"
                    >
                      {node.isCore && (
                        <circle
                          r="7"
                          fill="none"
                          stroke="#41a1cf"
                          strokeWidth="0.5"
                          className="animate-ping opacity-30"
                        />
                      )}
                      <circle
                        r={node.isCore ? '4.5' : '3'}
                        fill={node.isCore ? '#41a1cf' : '#282834'}
                        className="dark:fill-[#41a1cf] transition-colors"
                      />
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

              {/* Clean Bottom Label */}
              <div className="pt-3 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad] relative z-10">
                <span className="text-[#171717] dark:text-white font-medium">
                  {currentStage.title}
                </span>
                <span className="text-[#41a1cf]">
                  Active
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
