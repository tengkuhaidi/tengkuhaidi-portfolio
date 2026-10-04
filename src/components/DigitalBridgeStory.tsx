'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface StageData {
  id: string;
  phase: string;
  tag: string;
  title: string;
  narrative: string;
  demandStatus: string;
  supplyStatus: string;
  bridgeStatus: string;
}

const stages: StageData[] = [
  {
    id: 'the-gap',
    phase: 'SYSTEM DISCONNECT',
    tag: 'Stage 01 // Structural Asymmetry',
    title: 'Enterprise value is useless if the market cannot locate it.',
    narrative:
      'High-tier clients actively seek specialized solutions every hour. On the supply side, your business possesses the exact operational capacity to execute. Yet between both exists an unindexed void—zero discoverability, zero commercial velocity.',
    demandStatus: 'INTENT UNMATCHED',
    supplyStatus: 'UNINDEXED (VOID)',
    bridgeStatus: 'CIRCUIT: OPEN (AIR GAP)',
  },
  {
    id: 'the-search',
    phase: 'INTENT ARBITRAGE',
    tag: 'Stage 02 // The Market Query',
    title: 'High-intent decision makers search by specificity, not brand.',
    narrative:
      'Buyers open search engines, compare authority signals, and evaluate compliance credentials. If your domain fails to occupy Page 1 real estate during high-intent queries, competitor platforms capture the contract by default.',
    demandStatus: 'SCANNING SEARCH INDEX',
    supplyStatus: 'PAGE 1: ABSENT',
    bridgeStatus: 'TRAFFIC: DEFLECTED',
  },
  {
    id: 'the-bridge',
    phase: 'INFRASTRUCTURE DEPLOYMENT',
    tag: 'Stage 03 // The Digital Bridge',
    title: 'Architecting authoritative discoverability through edge systems.',
    narrative:
      'We construct the sovereign digital infrastructure: sub-second Next.js edge runtimes, verified JSON-LD statutory taxonomy, and structured organic content pipelines. The invisible enterprise becomes an undeniable market authority.',
    demandStatus: 'INDEX HIT DETECTED',
    supplyStatus: 'TOP-TIER PLACEMENT',
    bridgeStatus: 'PIPELINE: SYNCHRONIZING',
  },
  {
    id: 'the-connection',
    phase: 'NETWORK CONVERGENCE',
    tag: 'Stage 04 // Direct Handshake',
    title: 'Precision routing turns anonymous traffic into direct engagement.',
    narrative:
      'Search intent resolves directly into an authoritative landing experience. Cognitive friction drops to zero. Technical credibility is established in under three seconds, routing the client straight into the negotiation funnel.',
    demandStatus: 'HANDSHAKE VERIFIED',
    supplyStatus: 'PROPOSAL ENGAGED',
    bridgeStatus: 'CIRCUIT: LOCKED (SUB-20MS)',
  },
  {
    id: 'the-opportunity',
    phase: 'TRANSACTIONAL VELOCITY',
    tag: 'Stage 05 // Sustained Pipeline',
    title: 'Digital infrastructure is not marketing—it is compounding equity.',
    narrative:
      'A resilient digital bridge operates around the clock without manual intervention. It systematically converts market friction into recurring enterprise pipelines, enterprise defensibility, and scalable revenue growth.',
    demandStatus: 'CONTRACT SECURED',
    supplyStatus: 'COMPOUNDING ASSET',
    bridgeStatus: 'AUTONOMOUS RUNTIME',
  },
];

export default function DigitalBridgeStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const current = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setProgress(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIdx = Math.min(Math.floor(progress * stages.length), stages.length - 1);
  const currentStage = stages[activeIdx];

  // Continuous visual transitions
  const bridgeProgress = Math.min(Math.max((progress - 0.30) / 0.35, 0), 1);
  const connectionSignal = Math.min(Math.max((progress - 0.65) / 0.25, 0), 1);

  // Search query animation for stage 2
  const searchProgress = Math.min(Math.max((progress - 0.18) / 0.22, 0), 1);
  const fullSearchQuery = 'corporate legal tech & cloud partner jakarta';
  const queryChars = Math.floor(searchProgress * fullSearchQuery.length);
  const displayedQuery = fullSearchQuery.slice(0, queryChars);

  return (
    <section
      ref={containerRef}
      className="relative w-full border-t border-[var(--border-mist)] transition-colors select-none"
      style={{ height: '420vh' }}
    >
      {/* Sticky Story Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-8 max-w-[1280px] mx-auto overflow-hidden">
        
        {/* Top Telemetry Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-mist)] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#41a1cf] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#006699] dark:text-[#41a1cf] uppercase font-medium">
              SYSTEM DYNAMICS // {currentStage.phase}
            </span>
          </div>

          {/* Stepped Stage Index Indicator */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {stages.map((st, i) => (
                <div
                  key={st.id}
                  className={`h-1 rounded-sm transition-all duration-300 ${
                    i === activeIdx
                      ? 'w-7 bg-[#41a1cf]'
                      : i < activeIdx
                      ? 'w-2.5 bg-[#41a1cf]/50'
                      : 'w-2 bg-[var(--border-mist)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[var(--text-muted)]">
              [ 0{activeIdx + 1} // 05 ]
            </span>
          </div>
        </div>

        {/* Central Architectural Blueprint Canvas */}
        <div className="relative w-full my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-[1040px] rounded-2xl bg-[var(--card-bg)] border border-[var(--border-mist)] p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
            
            {/* Technical Corner Crosshairs (Architectural Drafting Aesthetic) */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[var(--text-muted)] opacity-40 leading-none">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[var(--text-muted)] opacity-40 leading-none">+</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[var(--text-muted)] opacity-40 leading-none">+</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--text-muted)] opacity-40 leading-none">+</span>

            {/* Subtle Grid Ambient Texture */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Top Canvas Status Bar */}
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-[var(--text-muted)] mb-8 border-b border-[var(--border-mist)] pb-3">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                TELEMETRY: {currentStage.bridgeStatus}
              </span>
              <span className="hidden sm:inline">
                SCALE: 1:1 ENTERPRISE ARCHITECTURE
              </span>
            </div>

            {/* Interactive Schematic Diagram */}
            <div className="relative w-full h-[180px] sm:h-[220px] flex items-center justify-between px-2 sm:px-6">
              
              {/* SVG Dynamic Data Pathway */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 800 220"
                preserveAspectRatio="none"
              >
                {/* Background Guide Axis */}
                <line
                  x1="140"
                  y1="110"
                  x2="660"
                  y2="110"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  className="text-[var(--border-mist)] opacity-60"
                />

                {/* Dynamic Optical Fiber / Bridge Line */}
                <line
                  x1="140"
                  y1="110"
                  x2={140 + 520 * bridgeProgress}
                  y2="110"
                  stroke="#41a1cf"
                  strokeWidth={connectionSignal > 0 ? '2.5' : '1.5'}
                  className="transition-all duration-300"
                  style={{ opacity: bridgeProgress }}
                />

                {/* Sub-pixel Transmission Packets when Connected */}
                {connectionSignal > 0 && (
                  <>
                    <circle
                      cx={140 + 520 * ((progress * 3.5) % 1)}
                      cy="110"
                      r="4"
                      fill="#41a1cf"
                      className="opacity-90"
                    />
                    <circle
                      cx={140 + 520 * (((progress * 3.5) + 0.5) % 1)}
                      cy="110"
                      r="3"
                      fill="#75cdd6"
                      className="opacity-60"
                    />
                  </>
                )}
              </svg>

              {/* NODE A: Client Intent (Demand Vector) */}
              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-[140px] sm:max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-colors duration-300 ${
                    connectionSignal > 0 
                      ? 'bg-[#41a1cf] text-white' 
                      : 'bg-[var(--canvas-bg)] border border-[var(--border-mist)] text-[var(--text-main)]'
                  }`}>
                    01
                  </div>
                  <div>
                    <div className="text-[12px] font-mono tracking-wider font-semibold text-[var(--text-main)] uppercase">
                      Client Demand
                    </div>
                    <div className="text-[9px] font-mono text-[var(--text-muted)] tracking-tight">
                      SEARCH INTENT VECTOR
                    </div>
                  </div>
                </div>

                <div className="mt-3 px-2.5 py-1 rounded bg-[var(--canvas-bg)] border border-[var(--border-mist)] text-[10px] font-mono text-[var(--text-muted)]">
                  {currentStage.demandStatus}
                </div>
              </div>

              {/* CENTER TRANSMISSION INTERACTION */}
              <div className="relative z-10 flex-1 px-4 sm:px-8 max-w-[380px] flex flex-col items-center">
                
                {/* Stage 1: The Disconnect (Air Gap) */}
                {progress < 0.22 && (
                  <div className="text-center">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-amber-600 dark:text-amber-400 block mb-1">
                      [ PACKET VOID // 100% DEFLECTION ]
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] font-mono">
                      Query isolated. Zero discovery channel.
                    </span>
                  </div>
                )}

                {/* Stage 2: Intent Query Searching */}
                {progress >= 0.22 && progress < 0.42 && (
                  <div className="w-full rounded-lg bg-[var(--canvas-bg)] border border-[var(--border-mist)] p-3 text-left">
                    <div className="text-[9px] font-mono text-[var(--text-muted)] mb-1 flex items-center justify-between">
                      <span>HTTP / QUERY PIPELINE</span>
                      <span className="text-red-500 font-semibold">404 REACH</span>
                    </div>
                    <div className="text-xs font-mono text-[var(--text-main)] truncate">
                      &gt; {displayedQuery}
                      <span className="inline-block w-1.5 h-3.5 bg-[#41a1cf] ml-1 animate-pulse align-middle" />
                    </div>
                  </div>
                )}

                {/* Stage 3: Systems Pipeline Active */}
                {progress >= 0.42 && progress < 0.75 && (
                  <div className="w-full rounded-lg bg-[var(--canvas-bg)] border border-[#41a1cf]/50 p-3 text-left shadow-sm">
                    <div className="text-[9px] font-mono text-[#006699] dark:text-[#41a1cf] mb-1 flex items-center justify-between">
                      <span>SEO &amp; CLOUD ARCHITECTURE</span>
                      <span className="text-[#3fb950] font-semibold">SYNCHRONIZED</span>
                    </div>
                    <div className="text-xs font-mono font-medium text-[var(--text-main)] truncate">
                      Next.js Edge + Schema Indexing
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                      Direct organic ranking · Sub-30ms load
                    </div>
                  </div>
                )}

                {/* Stage 4 & 5: Verified Connection */}
                {progress >= 0.75 && (
                  <div className="w-full rounded-lg bg-[#006699]/10 dark:bg-[#41a1cf]/10 border border-[#41a1cf] p-3 text-center">
                    <div className="text-[9px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-widest font-semibold mb-1">
                      TRANSACTION PIPELINE VERIFIED
                    </div>
                    <div className="text-xs font-mono font-medium text-[var(--text-main)]">
                      High-Intent Client ↔ Enterprise Solution
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                      Zero friction handshake completed
                    </div>
                  </div>
                )}

              </div>

              {/* NODE B: Business Solution (Supply Entity) */}
              <div className="relative z-10 flex flex-col items-center sm:items-end text-center sm:text-right max-w-[140px] sm:max-w-[200px]">
                <div className="flex items-center gap-3 mb-2 flex-row-reverse sm:flex-row">
                  <div>
                    <div className="text-[12px] font-mono tracking-wider font-semibold text-[var(--text-main)] uppercase">
                      Your Business
                    </div>
                    <div className="text-[9px] font-mono text-[var(--text-muted)] tracking-tight">
                      ENTERPRISE CAPABILITY
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs transition-colors duration-300 ${
                    connectionSignal > 0 
                      ? 'bg-[var(--text-main)] text-[var(--canvas-bg)]' 
                      : 'bg-[var(--canvas-bg)] border border-[var(--border-mist)] text-[var(--text-muted)]'
                  }`}>
                    02
                  </div>
                </div>

                <div className="mt-3 px-2.5 py-1 rounded bg-[var(--canvas-bg)] border border-[var(--border-mist)] text-[10px] font-mono text-[var(--text-muted)]">
                  {currentStage.supplyStatus}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Editorial Narrative & Lead-In to Case Studies */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-[var(--border-mist)]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#006699] dark:text-[#41a1cf] tracking-[0.2em] uppercase font-semibold block mb-2">
              {currentStage.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial text-[var(--text-main)] leading-snug mb-3">
              {currentStage.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[var(--text-sub)] font-sans leading-relaxed">
              {currentStage.narrative}
            </p>
          </div>

          {/* Clean Case Study Action Button */}
          <div className="shrink-0 flex flex-col items-start md:items-end">
            <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <span>Next up: Real-world proof</span>
              <ArrowDown className="w-3 h-3 text-[#41a1cf]" />
            </div>
            <a
              href="#case-study"
              className="px-5 py-2.5 rounded-lg border border-[var(--border-mist)] bg-[var(--card-bg)] hover:bg-[var(--card-subtle-bg)] text-[var(--text-main)] text-[12px] font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 active:scale-98 shadow-sm"
            >
              <span>See How We Made It Real</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#41a1cf]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
