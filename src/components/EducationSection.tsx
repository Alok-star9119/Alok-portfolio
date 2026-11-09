import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 relative" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
            Academic Pedigree
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Education &amp; Scholastic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Rigorous mathematical, algorithmic, and data science training rooted at premier national institutions in India.
          </p>
        </div>

        {/* 2-Column Academic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Institution & Distinction Banner */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {item.institution}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                        <span aria-hidden="true">&middot;</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Degree & Field */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 mb-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Degree &amp; Specialization
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.degree} in {item.field}
                  </div>
                  {item.badge && (
                    <div className="mt-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                      {item.grade && (
                        <>
                          <span aria-hidden="true">&middot;</span>
                          <span>{item.grade}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Academic Achievements &amp; Scope
                  </div>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coursework Matrix with Typographic Separators */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Key Analytical Coursework</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  {item.coursework.map((course, cIdx) => (
                    <span key={course} className="flex items-center gap-1.5">
                      <span className="text-slate-700 dark:text-slate-300">{course}</span>
                      {cIdx < item.coursework.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                          &middot;
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
