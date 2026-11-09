import React, { useState, useEffect } from 'react';
import { ArrowDown, ExternalLink, Terminal, Activity, CheckCircle2, GitBranch, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'stream' | 'metrics'>('stream');
  const [streamStep, setStreamStep] = useState(0);

  const pipelineLogs = [
    { tag: 'dbt', msg: 'models/staging/stg_ehr_events.sql OK [280k rows in 1.4s]', status: 'ok' },
    { tag: 'pm4py', msg: 'InductiveMiner: discovered Petri-Net (8 places, 12 transitions)', status: 'ok' },
    { tag: 'token-replay', msg: 'Fitness: 0.947 | Deviant traces flagged: 18 (T3->T6 bypass)', status: 'accent' },
    { tag: 'genai', msg: 'Multi-Agent Socratic loop initialized: [Orchestrator -> Tutor]', status: 'ok' },
    { tag: 'latency', msg: 'End-to-end inference & conformance check completed in 18ms', status: 'metric' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStreamStep((prev) => (prev + 1) % pipelineLogs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [pipelineLogs.length]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status availability indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Transforming Raw Event Streams & Complex Data into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-emerald-500 dark:from-cyan-400 dark:via-sky-300 dark:to-emerald-400">
                Production AI Solutions.
              </span>
            </h1>

            {/* Sub-headline & Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.subHeadline}
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm hover:shadow-cyan-500/25 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Full Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Data Pipeline Architecture Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    pipeline.session.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    live stream
                  </span>
                  <Activity className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                </div>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 space-y-4 font-mono text-xs">
                {/* Active Architecture Status */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                      SYSTEM ARCHITECTURE
                    </span>
                    <span className="text-emerald-500 font-medium">REPRESENTATION: READY</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 text-[11px]">
                    BigQuery (ELT) &rarr; dbt (Models) &rarr; PM4Py (Process Discovery) &rarr; PyTorch/LLM Agents
                  </p>
                </div>

                {/* Animated Pipeline Logs */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                    Live Event Trace Stream
                  </div>
                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto">
                    {pipelineLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded transition-all duration-300 flex items-start gap-2 ${
                          idx === streamStep
                            ? 'bg-cyan-500/10 dark:bg-cyan-500/15 border-l-2 border-cyan-500'
                            : 'bg-slate-100/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {log.tag}
                        </span>
                        <span className="text-slate-800 dark:text-slate-200 text-[11px] break-all">
                          {log.msg}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Metric Pillows */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                    <div className="text-slate-400 dark:text-slate-500 text-[10px]">CONFORMANCE FITNESS</div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">94.7% (PM4Py)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                    <div className="text-slate-400 dark:text-slate-500 text-[10px]">INFERENCE LATENCY</div>
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">&lt; 20ms Edge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Key Proof Points Strip Below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERSONAL_INFO.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
