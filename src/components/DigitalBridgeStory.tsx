'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Search, Globe, Building2, User, ArrowRight, ArrowDown } from 'lucide-react';

interface StageData {
  id: string;
  tag: string;
  title: string;
  narrative: string;
}

const stages: StageData[] = [
  {
    id: 'the-gap',
    tag: 'Stage 01 — The Disconnect',
    title: 'Your business has the solution. But the right people cannot find you.',
    narrative:
      'A great service or product without digital discoverability is invisible. On one side, your business is ready to deliver. On the other side, a potential client is in immediate need. But between both, there is only silence.',
  },
  {
    id: 'the-search',
    tag: 'Stage 02 — The Search',
    title: 'Every single day, high-intent buyers search for what you offer.',
    narrative:
      'They open browsers, search queries on Google, compare alternatives, and seek answers. But being the right business is never enough if you do not appear when intent is highest.',
  },
  {
    id: 'the-bridge',
    tag: 'Stage 03 — The Digital Bridge',
    title: 'Technology builds the discoverability bridge.',
    narrative:
      'We construct the digital identity: a lightning-fast web platform, authoritative search presence, and clear structured information. Your business shifts from invisible to directly accessible.',
  },
  {
    id: 'the-connection',
    tag: 'Stage 04 — The Connection',
    title: 'The right person meets the right business.',
    narrative:
      'Search query transforms into a live discovery. The visitor lands, understands the offering in seconds, and reaches out. The gap that used to lose deals is permanently closed.',
  },
  {
    id: 'the-opportunity',
    tag: 'Stage 05 — The Opportunity',
    title: 'We create digital pathways that turn visibility into business opportunity.',
    narrative:
      'Technology is not just code or templates—it is the bridge that continuously connects your business with the people looking for you.',
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

  // Compute active stage index based on progress (0 to 1 split into 5 intervals)
  const activeIdx = Math.min(Math.floor(progress * stages.length), stages.length - 1);
  const currentStage = stages[activeIdx];

  // Visual interpolations:
  const bridgeProgress = Math.min(Math.max((progress - 0.32) / 0.36, 0), 1); // 0 to 1 between 32% and 68%
  const connectionSignal = Math.min(Math.max((progress - 0.65) / 0.25, 0), 1); // 0 to 1 between 65% and 90%
  const opportunityActive = progress >= 0.80;

  // Search input typing effect simulated by progress in stage 2
  const searchProgress = Math.min(Math.max((progress - 0.18) / 0.22, 0), 1);
  const fullSearchQuery = 'corporate legal partner in jakarta';
  const queryChars = Math.floor(searchProgress * fullSearchQuery.length);
  const displayedQuery = fullSearchQuery.slice(0, queryChars);

  return (
    <section
      ref={containerRef}
      className="relative w-full border-t border-[var(--border-mist)] transition-colors select-none"
      style={{ height: '420vh' }}
    >
      {/* Sticky Fullscreen Story Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-8 max-w-[1240px] mx-auto overflow-hidden">
        
        {/* Top Header & Stage Progress Bar */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-mist)] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#41a1cf] animate-pulse" />
            <span className="text-[12px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-wider font-semibold">
              The Digital Bridge Journey
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {stages.map((st, i) => (
                <div
                  key={st.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? 'w-8 bg-[#41a1cf]'
                      : i < activeIdx
                      ? 'w-3 bg-[#41a1cf]/50'
                      : 'w-2 bg-[var(--border-mist)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
              0{activeIdx + 1} / 05
            </span>
          </div>
        </div>

        {/* Central Visual Motion Canvas */}
        <div className="relative w-full my-auto py-4 sm:py-8 flex flex-col items-center justify-center">
          
          {/* Main Visual Arena: Left (Potential Client), Center (Search / The Gap / The Bridge), Right (Your Business) */}
          <div className="relative w-full max-w-[980px] rounded-2xl bg-[var(--card-bg)] border border-[var(--border-mist)] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] flex items-center justify-between overflow-hidden">
            
            {/* Ambient Background Gradient based on progress */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background:
                  progress < 0.4
                    ? 'radial-gradient(circle at 18% 55%, rgba(65, 161, 207, 0.04), transparent 55%)'
                    : 'radial-gradient(circle at 50% 55%, rgba(65, 161, 207, 0.08), transparent 65%)',
              }}
            />

            {/* Connecting Bridge Line (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
            >
              {/* Gap state (Dashed & Broken) */}
              <line
                x1="130"
                y1="160"
                x2="670"
                y2="160"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                className="text-[var(--border-mist)] transition-opacity duration-500"
                style={{ opacity: 1 - bridgeProgress }}
              />

              {/* Active Digital Pathway Line */}
              <line
                x1="130"
                y1="160"
                x2={130 + 540 * bridgeProgress}
                y2="160"
                stroke="#41a1cf"
                strokeWidth={connectionSignal > 0 ? '2.5' : '1.5'}
                className="transition-all duration-300"
                style={{ opacity: bridgeProgress }}
              />

              {/* Pulsing signal along the line when connected */}
              {connectionSignal > 0 && (
                <>
                  <circle
                    cx={130 + 540 * ((progress * 3.5) % 1)}
                    cy="160"
                    r="4.5"
                    fill="#41a1cf"
                    className="opacity-90"
                  />
                  <circle
                    cx={130 + 540 * (((progress * 3.5) + 0.4) % 1)}
                    cy="160"
                    r="3"
                    fill="#75cdd6"
                    className="opacity-60"
                  />
                </>
              )}
            </svg>

            {/* NODE 1: Potential Client (Left) */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[130px] sm:max-w-[160px]">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  connectionSignal > 0
                    ? 'bg-[#41a1cf] text-white shadow-[0_0_24px_rgba(65,161,207,0.4)] scale-105 border-2 border-white dark:border-[#141517]'
                    : 'bg-[var(--canvas-bg)] text-[var(--text-main)] border border-[var(--border-mist)] shadow-xs'
                }`}
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>

              <span className="text-[13px] sm:text-[14px] font-editorial font-semibold text-[var(--text-main)] mt-3">
                Potential Client
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                {progress < 0.2
                  ? 'Needs a solution'
                  : progress < 0.6
                  ? 'Searching Google...'
                  : 'Connected'}
              </span>
            </div>

            {/* CENTER ELEMENT: Search Interface & Digital Bridge Transformer */}
            <div className="relative z-10 flex-1 px-4 sm:px-8 max-w-[420px] flex flex-col items-center">
              
              {/* Stage 1: The Gap / Disconnected indicator */}
              {progress < 0.2 && (
                <div className="px-4 py-2 rounded-full bg-[var(--canvas-bg)] border border-[var(--border-mist)] text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-2.5 shadow-xs transition-all">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="tracking-wide">The Gap: Client ↛ Business</span>
                </div>
              )}

              {/* Stage 2: Live Search Bar Interface */}
              {progress >= 0.2 && progress < 0.42 && (
                <div className="w-full rounded-xl bg-[var(--canvas-bg)] border border-[var(--border-mist)] p-3.5 shadow-sm transition-all">
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-muted)] font-mono mb-1.5">
                    <Search className="w-3.5 h-3.5 text-[#41a1cf]" />
                    <span>google.com/search</span>
                  </div>
                  <div className="flex items-center gap-1 text-[13px] font-mono text-[var(--text-main)]">
                    <span className="font-medium truncate">{displayedQuery}</span>
                    <span className="w-1.5 h-4 bg-[#41a1cf] animate-pulse shrink-0" />
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-rose-500/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>Result: Your business does not appear on Page 1.</span>
                  </div>
                </div>
              )}

              {/* Stage 3 & 4: Digital Presence & Search Indexing Bridge */}
              {progress >= 0.42 && progress < 0.80 && (
                <div className="w-full rounded-xl bg-[var(--canvas-bg)] border border-[#41a1cf]/50 p-3.5 shadow-[0_4px_20px_rgba(65,161,207,0.12)] transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#006699] dark:text-[#41a1cf] mb-1.5 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Digital Touchpoint Built
                    </span>
                    <span className="text-[#3fb950] font-mono">Indexed Top 3</span>
                  </div>
                  <div className="text-[13px] font-editorial font-bold text-[var(--text-main)] line-clamp-1">
                    Your Business Platform &amp; Clear Offerings
                  </div>
                  <p className="text-[11px] text-[var(--text-sub)] font-sans mt-0.5 line-clamp-1">
                    Direct answers, mobile-first speed, immediate WhatsApp reach.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-[var(--border-mist)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                    <span>High-Intent Discovery</span>
                    <span className="text-[#41a1cf] flex items-center gap-1">
                      Connecting
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              )}

              {/* Stage 5: Connected Opportunity Card */}
              {opportunityActive && (
                <div className="w-full rounded-xl bg-[#0c182b] text-white p-4 shadow-[0_8px_30px_rgba(12,24,43,0.35)] border border-[#41a1cf]/40 text-center transition-all">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#41a1cf]/20 text-[10px] font-mono text-[#75cdd6] mb-1.5 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#75cdd6] animate-pulse" />
                    Business Opportunity Formed
                  </div>
                  <div className="text-[14px] sm:text-[15px] font-editorial font-bold">
                    Right Client ↔ Right Business
                  </div>
                  <p className="text-[11px] text-white/80 font-sans mt-1">
                    Inbound inquiry confirmed. Zero friction. Continuous pipeline.
                  </p>
                </div>
              )}

            </div>

            {/* NODE 2: Business / Solution (Right) */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[130px] sm:max-w-[160px]">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  progress < 0.4
                    ? 'bg-[var(--canvas-bg)] text-[var(--text-muted)] opacity-50 scale-95 border border-dashed border-[var(--border-mist)]'
                    : connectionSignal > 0
                    ? 'bg-[var(--text-main)] text-[var(--canvas-bg)] shadow-[0_0_24px_rgba(0,0,0,0.15)] scale-105 border-2 border-[#41a1cf]'
                    : 'bg-[var(--canvas-bg)] text-[var(--text-main)] border border-[#41a1cf]/40'
                }`}
              >
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>

              <span className="text-[13px] sm:text-[14px] font-editorial font-semibold text-[var(--text-main)] mt-3">
                Your Business
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                {progress < 0.4
                  ? 'Invisible online'
                  : progress < 0.7
                  ? 'Found on Google'
                  : 'Receiving Leads'}
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Narrative Anchor & Seamless Transition to Case Study */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-[var(--border-mist)]">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-wider font-semibold block mb-1.5">
              {currentStage.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-editorial text-[var(--text-main)] leading-snug mb-2">
              {currentStage.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[var(--text-sub)] font-sans leading-relaxed">
              {currentStage.narrative}
            </p>
          </div>

          {/* Smooth Lead-In to Case Studies */}
          <div className="shrink-0 flex flex-col items-start md:items-end">
            <div className="text-[11px] font-mono text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
              <span>Next up: Real-world proof</span>
              <ArrowDown className="w-3 h-3 text-[#41a1cf] animate-bounce" />
            </div>
            <a
              href="#case-study"
              className="px-5 py-2.5 rounded-lg border border-[var(--border-mist)] bg-[var(--text-main)] text-[var(--canvas-bg)] text-[12px] font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 active:scale-95 shadow-sm"
            >
              <span>See How We Made It Real</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
