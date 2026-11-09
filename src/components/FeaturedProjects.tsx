import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
            Proven Implementations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Production-grade systems delivering quantifiable impact across process mining conformance, multi-agent pedagogical orchestration, financial NLP momentum, and satellite geodata analytics.
          </p>
        </div>

        {/* 2x2 Case Study Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Image Container with Zero-Broken-Image fallback */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-5">
                    <div className="w-full">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                        {project.domain}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                        {idx < project.tags.length - 1 && <span className="text-slate-400 dark:text-slate-600">&middot;</span>}
                      </span>
                    ))}
                  </div>

                  {/* Problem Solved */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Problem Solved
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technical Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Technical Deep Dive
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-snug"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                        <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase truncate">
                          {metric.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Deep Dive &amp; Simulator</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center gap-1.5 transition-colors p-2"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">Code Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive & Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
