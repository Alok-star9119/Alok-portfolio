import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Code2, Cpu, FileCheck2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import {
  PetriNetSimulator,
  MultiAgentSimulator,
  FinancialSimulator,
  GeodataSimulator,
} from './ProjectSimulators';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'architecture' | 'code'>('simulator');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const renderSimulator = () => {
    switch (project.demoType) {
      case 'petri_net':
        return <PetriNetSimulator />;
      case 'multi_agent':
        return <MultiAgentSimulator />;
      case 'sentiment':
        return <FinancialSimulator />;
      case 'geodata':
        return <GeodataSimulator />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <span>{project.domain}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Case Study &amp; Architecture Deep Dive</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Visual Showcase Banner */}
          <div className="relative rounded-xl overflow-hidden aspect-video max-h-64 border border-slate-200 dark:border-slate-800 bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-200">
                {project.tags.map((t, idx) => (
                  <span key={t} className="flex items-center gap-1.5 font-mono text-[11px]">
                    {t}
                    {idx < project.tags.length - 1 && <span className="text-slate-500">&middot;</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
              >
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  {m.label}
                </div>
                <div className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs for Deep Dive */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Pipeline &amp; Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Production Code Excerpt</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'simulator' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Interactive real-time demonstration of the pipeline engine logic. Test parameters and observe system transitions.
              </div>
              {renderSimulator()}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1.5">
                  End-to-End System Flow
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.deepDive.architecture}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Transformation &amp; Execution Pipeline
                </h4>
                <div className="space-y-2">
                  {project.deepDive.pipelineSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
                <span><strong>Dataset Reference:</strong> {project.deepDive.dataset}</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{project.deepDive.conformanceOrAccuracy}</span>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-2">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Core algorithmic implementation excerpt:
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.deepDive.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Repository maintained by Alok Kumar Mishra
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-cyan-500 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
