import React from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return <Award className="w-4 h-4 text-amber-500" />;
      case 'Certification':
        return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      case 'Engineering':
      default:
        return <Briefcase className="w-4 h-4 text-cyan-500" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#0E1420]/60 relative" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
            Trajectory &amp; Verification
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Experience, Hackathons &amp; Credentials
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Demonstrated engineering caliber evaluated by technical juries at ISRO, The Economic Times, and real-world system deployments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Node Pin */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {getTypeIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.title}</span>
                      {item.award && (
                        <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                          [{item.award}]
                        </span>
                      )}
                    </h3>
                    <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {item.period}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags with clean unboxed styling */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="text-slate-600 dark:text-slate-400">{tag}</span>
                        {tIdx < item.tags.length - 1 && <span className="text-slate-400 dark:text-slate-600">&middot;</span>}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Verify Code / Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
