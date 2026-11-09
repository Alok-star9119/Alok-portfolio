/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NetworkCanvas } from './components/NetworkCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { TechnicalPosts } from './components/TechnicalPosts';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('am_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default dark-mode-first
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('am_portfolio_theme', 'dark');
      document.body.className =
        'bg-[#0B0F17] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 transition-colors duration-200';
    } else {
      root.classList.remove('dark');
      localStorage.setItem('am_portfolio_theme', 'light');
      document.body.className =
        'bg-slate-50 text-slate-900 antialiased selection:bg-cyan-500/20 selection:text-cyan-700 transition-colors duration-200';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen relative font-sans transition-colors duration-200">
      {/* Interactive Node-Network Particle Canvas */}
      <NetworkCanvas isDark={isDark} />

      {/* Main Content Tree */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <EducationSection />
          <TechnicalArsenal />
          <FeaturedProjects />
          <ExperienceTimeline />
          <CertificationsSection />
          <TechnicalPosts />
          <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        <Footer />
      </div>

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
