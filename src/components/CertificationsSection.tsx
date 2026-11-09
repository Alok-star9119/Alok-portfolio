import React from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATION_ITEMS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#0E1420]/60 relative" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
            Accreditations &amp; Verifications
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Licenses &amp; Professional Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Standardized technical accreditations validating mastery in space remote sensing, data engineering pipelines, process mining, and deep learning.
          </p>
        </div>

        {/* 2x2 Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATION_ITEMS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 shrink-0 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills verified */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Verified Competencies
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={skill} className="flex items-center gap-1.5">
                        <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                        {sIdx < cert.skills.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                            &middot;
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Credential ID and Link */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
                {cert.credentialId && (
                  <span className="text-slate-400 dark:text-slate-500 truncate">
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold ml-auto"
                  >
                    <span>Issuer Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
