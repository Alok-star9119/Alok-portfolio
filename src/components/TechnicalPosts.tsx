import React, { useState } from 'react';
import { Newspaper, Clock, ArrowUpRight, BookOpen, Tag } from 'lucide-react';
import { POSTS_AND_INSIGHTS } from '../data/portfolioData';
import { PostItem } from '../types';

export const TechnicalPosts: React.FC = () => {
  const [activePost, setActivePost] = useState<PostItem | null>(null);

  return (
    <section className="py-20 relative" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
            Engineering Logs &amp; Articles
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Technical Insights &amp; Publications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Architectural teardowns, mathematical derivations, and implementation notes on process discovery, multi-agent frameworks, and geospatial data processing.
          </p>
        </div>

        {/* 3-Column Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS_AND_INSIGHTS.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Post Category & Read Time */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags with clean unboxed styling */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tag} className="flex items-center gap-1">
                      <span>#{tag}</span>
                      {tIdx < post.tags.length - 1 && (
                        <span className="text-slate-300 dark:text-slate-700">&middot;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Post Excerpt Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {post.date}
                </span>
                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article Excerpt</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative w-full max-w-2xl my-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                {activePost.category} &middot; {activePost.readTime}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                [ESC or Close]
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {activePost.title}
            </h3>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <strong className="block text-slate-900 dark:text-white font-mono text-xs mb-1.5 uppercase">
                Technical Synthesis:
              </strong>
              {activePost.contentSnippet}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Published by Alok Kumar Mishra as part of research &amp; engineering investigations at IIT Patna.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
