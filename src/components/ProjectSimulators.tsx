import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle, CheckCircle, ArrowRight, Activity, Layers, Sparkles, Cpu } from 'lucide-react';

// 1. CareFlow Petri-Net Replay Simulator
export const PetriNetSimulator: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'case1' | 'case2' | 'case3'>('case1');
  const [currentStep, setCurrentStep] = useState<number>(0);

  interface PetriCase {
    id: string;
    description: string;
    status: string;
    fitness: string;
    steps: string[];
    hasDeviation: boolean;
    deviationReason?: string;
  }

  const cases: Record<'case1' | 'case2' | 'case3', PetriCase> = {
    case1: {
      id: 'Patient #101 (Conforming Standard Path)',
      description: 'Standard emergency triage with sequential biomarker testing and physician consultation.',
      status: 'Conforming',
      fitness: '1.00 (100%)',
      steps: ['T1 Registration', 'T2 Triage', 'T3 Consult', 'T4 Lab Test', 'T6 Medication', 'T8 Billing & Discharge'],
      hasDeviation: false,
    },
    case2: {
      id: 'Patient #102 (Critical Fast-Track Deviation)',
      description: 'Emergency resuscitation bypasses initial consultation directly to urgent medication.',
      status: 'Deviant (Protocol Bypass)',
      fitness: '0.78 (Missing T3 Token)',
      steps: ['T1 Registration', 'T2 Triage', 'T6 Medication (Bypassed Consult)', 'T4 Lab Test (Post-hoc)', 'T8 Billing'],
      hasDeviation: true,
      deviationReason: 'Skipped standard T3 clinical consultation node; produced missing token on P3.',
    },
    case3: {
      id: 'Patient #103 (Lab Rework Anomaly)',
      description: 'Inconclusive liver panel triggered double lab cycle creating queue bottleneck.',
      status: 'Anomaly (Rework Loop)',
      fitness: '0.86 (Re-entrant)',
      steps: ['T1 Registration', 'T2 Triage', 'T3 Consult', 'T4 Lab Test', 'T4 Lab Test (Rework)', 'T6 Medication', 'T8 Billing'],
      hasDeviation: true,
      deviationReason: 'Excess token consumption on place P4; increased triage wait time by 42 minutes.',
    },
  };

  const activeData = cases[selectedCase];

  const handleNextStep = () => {
    if (currentStep < activeData.steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 font-mono text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            PM4Py Token Replay Conformance Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 text-[10px]">SELECT TRACE:</span>
          <select
            value={selectedCase}
            onChange={(e) => {
              setSelectedCase(e.target.value as any);
              setCurrentStep(0);
            }}
            className="bg-slate-900 border border-slate-700 text-cyan-300 rounded px-2 py-1 text-[11px] focus:outline-none"
          >
            <option value="case1">Case #101 (Conforming)</option>
            <option value="case2">Case #102 (Bypass Deviation)</option>
            <option value="case3">Case #103 (Rework Loop)</option>
          </select>
        </div>
      </div>

      <p className="text-slate-400 text-[11px] leading-relaxed">
        {activeData.description}
      </p>

      {/* Visual Petri-Net Step Flow */}
      <div className="py-3 px-2 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-[500px]">
          {activeData.steps.map((step, idx) => {
            const isReached = idx <= currentStep;
            const isCurrent = idx === currentStep;
            return (
              <React.Fragment key={idx}>
                <div
                  className={`p-2 rounded-lg border text-center transition-all ${
                    isCurrent
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 scale-105 shadow-md shadow-cyan-500/20'
                      : isReached
                      ? 'bg-slate-900 border-emerald-500/60 text-emerald-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="text-[9px] uppercase tracking-wider">
                    {idx === 0 ? 'SOURCE' : idx === activeData.steps.length - 1 ? 'SINK' : `T${idx}`}
                  </div>
                  <div className="font-medium text-[10px] mt-0.5 whitespace-nowrap px-1">
                    {step}
                  </div>
                </div>
                {idx < activeData.steps.length - 1 && (
                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ${
                      idx < currentStep ? 'text-emerald-400' : 'text-slate-700'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Simulation Diagnostics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800">
        <div className="p-2 rounded bg-slate-900">
          <span className="text-slate-500 text-[10px] block">TRACE STATUS</span>
          <span className={`font-bold text-[11px] ${activeData.hasDeviation ? 'text-amber-400' : 'text-emerald-400'}`}>
            {activeData.status}
          </span>
        </div>
        <div className="p-2 rounded bg-slate-900">
          <span className="text-slate-500 text-[10px] block">CONFORMANCE FITNESS</span>
          <span className="text-cyan-400 font-bold text-[11px]">{activeData.fitness}</span>
        </div>
        <div className="p-2 rounded bg-slate-900 flex items-center justify-between">
          <div>
            <span className="text-slate-500 text-[10px] block">REPLAY PROGRESS</span>
            <span className="text-slate-200 font-bold text-[11px]">
              Step {currentStep + 1} of {activeData.steps.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleNextStep}
              className="p-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold"
              title="Step Forward"
            >
              <Play className="w-3 h-3 fill-current" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
              title="Reset"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {activeData.hasDeviation && (
        <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>{activeData.deviationReason}</span>
        </div>
      )}
    </div>
  );
};

// 2. Project Maieutic Socratic Multi-Agent Simulator
export const MultiAgentSimulator: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<number>(0);

  const scenarios = [
    {
      studentInput: "Why is my binary search code getting stuck in an infinite while (low <= high) loop?",
      misconception: "Learner computes mid = (low + high) / 2 without incrementing or decrementing low/high on miss (e.g. low = mid instead of mid + 1).",
      agents: [
        { name: '1. Orchestrator', role: 'Decomposes query -> assigns to Misconception Scanner.', latency: '12ms' },
        { name: '2. Misconception Scanner', role: 'Identified non-advancing search boundary: low=mid freezes when high-low=1.', latency: '48ms' },
        { name: '3. Pedagogical Guardrail', role: 'BLOCKED: Direct code correction spoon-feeding.', latency: '4ms' },
        { name: '4. Socratic Questioner', role: 'Outputs: "Consider an array of size 2 where target > both. If low=0, high=1, mid=0: what happens to low if you assign low=mid?"', latency: '120ms' },
      ],
    },
    {
      studentInput: "Why do we use PM4Py token replay instead of just calculating string edit distance on activity names?",
      misconception: "Assuming business processes are strictly linear strings rather than concurrent branching Petri-nets.",
      agents: [
        { name: '1. Orchestrator', role: 'Detected Domain: Conformance Checking in Process Mining.', latency: '15ms' },
        { name: '2. Misconception Scanner', role: 'Identified assumption of total ordering over concurrent transitions.', latency: '52ms' },
        { name: '3. Pedagogical Guardrail', role: 'BLOCKED: Theoretical definition textbook quote.', latency: '6ms' },
        { name: '4. Socratic Questioner', role: 'Outputs: "If Lab Test and X-Ray happen concurrently in any order, does string order change the clinical validity of the care protocol?"', latency: '110ms' },
      ],
    },
  ];

  const current = scenarios[activeQuery];

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 font-mono text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            Multi-Agent Socratic Interaction Loop
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveQuery((prev) => (prev === 0 ? 1 : 0))}
            className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300 hover:bg-slate-800"
          >
            Switch STEM Problem
          </button>
        </div>
      </div>

      {/* Student Prompt */}
      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
        <span className="text-[10px] uppercase text-slate-400 block mb-1">LEARNER INPUT QUERY</span>
        <p className="text-slate-100 font-sans font-medium text-xs">&ldquo;{current.studentInput}&rdquo;</p>
      </div>

      {/* Coordinated Agents Execution Stream */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 block">COORDINATED AGENT PIPELINE TRACE</span>
        <div className="space-y-2">
          {current.agents.map((ag, i) => (
            <div
              key={i}
              className={`p-2.5 rounded-lg border text-[11px] ${
                i === 3
                  ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                  : i === 2
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                  : 'bg-slate-900/90 border-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[10px] uppercase">{ag.name}</span>
                <span className="text-[10px] text-slate-400">{ag.latency}</span>
              </div>
              <p className="font-sans leading-relaxed text-xs">{ag.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Autonomous Financial Sentiment Simulator
export const FinancialSimulator: React.FC = () => {
  const [sentimentScore, setSentimentScore] = useState<number>(0.65);
  const [rsiIndicator, setRsiIndicator] = useState<number>(58);

  const blendedMomentum = (sentimentScore * 0.55 + (rsiIndicator / 100) * 0.45).toFixed(2);
  const forecastDirection =
    Number(blendedMomentum) > 0.65 ? 'Bullish Expansion' : Number(blendedMomentum) < 0.45 ? 'Bearish Volatility' : 'Neutral Rangebound';

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            NLP Sentiment &amp; Volatility Signal Blender
          </span>
        </div>
        <span className="text-emerald-400 font-bold text-[11px]">LIVE BACKTEST ENGINE</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] uppercase text-slate-400 block mb-1">
            FinBERT NLP Sentiment Polarity (Compound): {sentimentScore.toFixed(2)}
          </label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.05"
            value={sentimentScore}
            onChange={(e) => setSentimentScore(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
          <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
            <span>-1.0 (Panic)</span>
            <span>0.0 (Neutral)</span>
            <span>+1.0 (Euphoria)</span>
          </div>
        </div>

        <div>
          <label className="text-[10px] uppercase text-slate-400 block mb-1">
            Technical RSI (14-Period): {rsiIndicator}
          </label>
          <input
            type="range"
            min="10"
            max="90"
            step="1"
            value={rsiIndicator}
            onChange={(e) => setRsiIndicator(parseInt(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
          <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
            <span>10 (Oversold)</span>
            <span>50 (Median)</span>
            <span>90 (Overbought)</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block">SYNTHESIZED VOLATILITY VECTOR</span>
          <span className="text-sm font-bold text-white">{forecastDirection}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-slate-400 block">ALPHA CONFIDENCE</span>
          <span className="text-sm font-bold text-cyan-400">{(Number(blendedMomentum) * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

// 4. Team ANSA9119 Space Geodata Simulator
export const GeodataSimulator: React.FC = () => {
  const [bandMode, setBandMode] = useState<'rgb' | 'ndvi' | 'ndwi'>('ndvi');

  const modeDescriptions = {
    rgb: {
      name: 'Natural Color (B4-Red, B3-Green, B2-Blue)',
      desc: 'True surface representation replicating human visual perception for terrain baseline.',
      metric: 'Reflectance: 0.12 - 0.48',
    },
    ndvi: {
      name: 'NDVI Vegetation Index (NIR - Red) / (NIR + Red)',
      desc: 'Highlights dense alpine forest canopy and distinguishes crop health from barren rock.',
      metric: 'Mean NDVI: +0.64 (High Vitality)',
    },
    ndwi: {
      name: 'NDWI Water & Glacial Index (Green - NIR) / (Green + NIR)',
      desc: 'Isolates glacial melt lakes and river runoff boundaries with sub-pixel edge detection.',
      metric: 'Surface Water Extent: 14.8 km²',
    },
  };

  const active = modeDescriptions[bandMode];

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            ISRO Sentinel-2 Multispectral Raster Processor
          </span>
        </div>
        <span className="text-cyan-400 font-bold text-[10px]">10M / PIXEL GEO-TIFF</span>
      </div>

      <div className="flex items-center gap-2">
        {(['rgb', 'ndvi', 'ndwi'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setBandMode(m)}
            className={`px-2.5 py-1 text-[10px] font-semibold uppercase rounded transition-colors ${
              bandMode === m
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
        <div className="text-white font-bold text-xs">{active.name}</div>
        <p className="text-slate-400 text-[11px] leading-relaxed">{active.desc}</p>
        <div className="text-emerald-400 font-mono text-[11px] font-bold pt-1">
          {active.metric}
        </div>
      </div>
    </div>
  );
};
