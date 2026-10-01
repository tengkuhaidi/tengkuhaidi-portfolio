'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Search, Globe, Link2, Sparkles, Building2, User, ArrowRight, ArrowDown } from 'lucide-react';

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
  // p: 0.0 -> 1.0
  // Stage 1: p 0.0 - 0.20
  // Stage 2: p 0.20 - 0.40
  // Stage 3: p 0.40 - 0.60
  // Stage 4: p 0.60 - 0.80
  // Stage 5: p 0.80 - 1.00

  // Bridge opacity and width progress
  const bridgeProgress = Math.min(Math.max((progress - 0.35) / 0.35, 0), 1); // 0 to 1 between 35% and 70%
  const connectionSignal = Math.min(Math.max((progress - 0.65) / 0.25, 0), 1); // 0 to 1 between 65% and 90%
  const opportunityActive = progress >= 0.82;

  // Search input typing effect simulated by progress in stage 2
  const searchProgress = Math.min(Math.max((progress - 0.18) / 0.22, 0), 1);
  const fullSearchQuery = 'corporate legal partner in jakarta';
  const queryChars = Math.floor(searchProgress * fullSearchQuery.length);
  const displayedQuery = fullSearchQuery.slice(0, queryChars);

  return (
    <section
      ref={containerRef}
      className="relative w-full border-t border-[#dee2de] dark:border-[#24272b] transition-colors"
      style={{ height: '420vh' }}
    >
      {/* Sticky Fullscreen Story Canvas */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 md:py-16 px-4 sm:px-6 max-w-[1240px] mx-auto overflow-hidden">
        
        {/* Top Header & Stage Progress Bar */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#dee2de]/70 dark:border-[#24272b]/70 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#41a1cf] animate-pulse" />
            <span className="text-[12px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-wider font-semibold">
              The Digital Bridge Journey
            </span>
          </div>

          <div className="flex items-center gap-2">
            {stages.map((st, i) => (
              <div
                key={st.id}
                className="flex items-center gap-1.5"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? 'w-8 bg-[#41a1cf]'
                      : i < activeIdx
                      ? 'w-3 bg-[#41a1cf]/50'
                      : 'w-2 bg-[#dee2de] dark:bg-neutral-800'
                  }`}
                />
              </div>
            ))}
            <span className="text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] ml-2">
              0{activeIdx + 1} / 05
            </span>
          </div>
        </div>

        {/* Central Visual Motion Canvas */}
        <div className="relative w-full my-auto py-6 sm:py-10 flex flex-col items-center justify-center">
          
          {/* Main Visual Arena: Left (Customer), Center (Search/Bridge), Right (Business) */}
          <div className="relative w-full max-w-[960px] h-[260px] sm:h-[320px] rounded-[24px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between overflow-hidden">
            
            {/* Ambient Background Gradient based on progress */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background:
                  progress < 0.4
                    ? 'radial-gradient(circle at 15% 50%, rgba(65, 161, 207, 0.05), transparent 60%)'
                    : 'radial-gradient(circle at 50% 50%, rgba(65, 161, 207, 0.12), transparent 70%)',
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
                x1="120"
                y1="150"
                x2="680"
                y2="150"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 8"
                className="text-[#dee2de] dark:text-neutral-800 transition-opacity duration-500"
                style={{ opacity: 1 - bridgeProgress }}
              />

              {/* Active Digital Pathway Line */}
              <line
                x1="120"
                y1="150"
                x2={120 + 560 * bridgeProgress}
                y2="150"
                stroke="#41a1cf"
                strokeWidth={connectionSignal > 0 ? '3.5' : '2'}
                className="transition-all duration-300"
                style={{ opacity: bridgeProgress }}
              />

              {/* Pulsing signal along the line when connected */}
              {connectionSignal > 0 && (
                <circle
                  cx={120 + 560 * (0.2 + 0.6 * ((progress * 4) % 1))}
                  cy="150"
                  r="6"
                  fill="#41a1cf"
                  className="animate-ping opacity-75"
                />
              )}
            </svg>

            {/* NODE 1: Potential Customer (Left) */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[120px] sm:max-w-[150px]">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  connectionSignal > 0
                    ? 'bg-[#41a1cf] text-white shadow-[0_0_24px_rgba(65,161,207,0.5)] scale-105'
                    : 'bg-[#f4f7f6] dark:bg-neutral-800 text-[#171717] dark:text-white border border-[#dee2de] dark:border-neutral-700'
                }`}
              >
                <User className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <span className="text-[12px] sm:text-[13px] font-editorial font-semibold text-[#171717] dark:text-white mt-3">
                Potential Client
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] mt-0.5">
                {progress < 0.2
                  ? 'Needs a solution'
                  : progress < 0.6
                  ? 'Searching Google...'
                  : 'Connected'}
              </span>
            </div>

            {/* CENTER ELEMENT: Search Interface & Digital Bridge Transformer */}
            <div className="relative z-10 flex-1 px-4 sm:px-8 max-w-[440px] flex flex-col items-center">
              
              {/* Stage 1: The Gap / Disconnected indicator */}
              {progress < 0.2 && (
                <div className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-[#dee2de] dark:border-neutral-700 text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] flex items-center gap-2 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>The Gap: Client ↛ Business</span>
                </div>
              )}

              {/* Stage 2: Live Search Bar Interface */}
              {progress >= 0.2 && progress < 0.42 && (
                <div className="w-full rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-[#dee2de] dark:border-neutral-700 p-3 shadow-sm transition-all animate-fadeIn">
                  <div className="flex items-center gap-2 text-[12px] text-[#646464] dark:text-[#a0a5ad] font-mono mb-1.5">
                    <Search className="w-3.5 h-3.5 text-[#41a1cf]" />
                    <span>google.com/search</span>
                  </div>
                  <div className="flex items-center gap-1 text-[13px] sm:text-[14px] font-sans text-[#171717] dark:text-white">
                    <span className="font-medium">{displayedQuery}</span>
                    <span className="w-1.5 h-4 bg-[#41a1cf] animate-pulse" />
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-red-500/80">
                    Result: Your business does not appear on Page 1.
                  </div>
                </div>
              )}

              {/* Stage 3 & 4: Digital Presence & Search Indexing Bridge */}
              {progress >= 0.42 && progress < 0.82 && (
                <div className="w-full rounded-xl bg-[#ffffff] dark:bg-neutral-900 border border-[#41a1cf]/60 p-3.5 shadow-[0_4px_20px_rgba(65,161,207,0.15)] transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#41a1cf] mb-2 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Digital Touchpoint Built
                    </span>
                    <span className="text-[#3fb950]">Indexed Top 3</span>
                  </div>
                  <div className="text-[13px] font-editorial font-bold text-[#171717] dark:text-white line-clamp-1">
                    Your Business Platform &amp; Clear Offerings
                  </div>
                  <p className="text-[11px] text-[#4b5563] dark:text-[#9ca3af] font-sans mt-0.5 line-clamp-1">
                    Direct answers, mobile-first speed, immediate WhatsApp reach.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-[#dee2de]/60 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-[#646464] dark:text-[#a0a5ad]">
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
                <div className="w-full rounded-xl bg-[#081d3d] text-white p-4 shadow-[0_8px_30px_rgba(8,29,61,0.35)] border border-[#41a1cf]/40 text-center transition-all animate-scaleUp">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#41a1cf]/20 text-[10px] font-mono text-[#52b4e5] mb-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3 h-3 text-[#41a1cf]" />
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
            <div className="relative z-10 flex flex-col items-center text-center max-w-[120px] sm:max-w-[150px]">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  progress < 0.4
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-[#9ca3af] opacity-40 scale-90 border border-dashed border-neutral-300 dark:border-neutral-700'
                    : connectionSignal > 0
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] shadow-[0_0_24px_rgba(0,0,0,0.2)] scale-105 border border-[#41a1cf]'
                    : 'bg-[#f4f7f6] dark:bg-neutral-800 text-[#171717] dark:text-white border border-[#41a1cf]/40'
                }`}
              >
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <span className="text-[12px] sm:text-[13px] font-editorial font-semibold text-[#171717] dark:text-white mt-3">
                Your Business
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] mt-0.5">
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
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-[#dee2de]/70 dark:border-[#24272b]/70">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-wider font-semibold block mb-1">
              {currentStage.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white leading-snug mb-2">
              {currentStage.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#4b5563] dark:text-[#9ca3af] font-sans leading-relaxed">
              {currentStage.narrative}
            </p>
          </div>

          {/* Smooth Lead-In to Case Studies */}
          <div className="shrink-0 flex flex-col items-start md:items-end">
            <div className="text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 flex items-center gap-1.5">
              <span>Next up: Real-world proof</span>
              <ArrowDown className="w-3 h-3 text-[#41a1cf] animate-bounce" />
            </div>
            <a
              href="#case-study"
              className="px-4 py-2 rounded-lg bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-[13px] font-sans font-medium hover:opacity-90 transition-all flex items-center gap-2 active:scale-95 shadow-sm"
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
