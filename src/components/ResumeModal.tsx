import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textSummary = `
ALOK KUMAR MISHRA
Data Scientist & Full-Stack AI Engineer
Indian Institute of Technology Patna (IIT Patna)
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.summary}

EDUCATION:
- Indian Institute of Technology Patna (IIT Patna), Bihar (2024 — 2027 Expected)
  B.S. (Honours) in Computer Science and Data Analytics (CSDA)
  Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, DBMS, Big Data, Statistical Inference.
- Jawahar Navodaya Vidyalaya (JNV) Balrampur, Uttar Pradesh
  Higher Secondary & Secondary Examination (CBSE) — Science Stream (Physics, Chemistry, Maths, CS)
  Distinction: JNVST Merit Scholar (Selected through nationwide competitive entrance).

KEY ACHIEVEMENTS & HACKATHONS:
- National Contender, Team ANSA9119 — Bharatiya Antariksh Space Hackathon (ISRO & Hack2skill)
- National Semi-Finalist — The Economic Times AI Hackathon
- Certified: AI/ML for Geodata Analytics — Indian Institute of Remote Sensing (IIRS, ISRO)

CORE SKILLS:
- Data Engineering & Process Mining: Python, SQL, Google BigQuery, dbt, PM4Py, Pandas, NumPy, Conformance Checking, Petri-Nets
- Machine Learning & AI: PyTorch, Scikit-Learn, TensorFlow, NLTK, Multi-Agent LLMs, Time-Series
- Full-Stack & Systems: React.js, Node.js, Express, Tailwind CSS, PostgreSQL, Linux, Git

FEATURED PROJECTS:
1. CareFlow: Healthcare Process Mining & Conformance Pipeline (PM4Py, BigQuery, dbt, PowerBI)
2. Project Maieutic: Multi-Agent Socratic GenAI Tutoring Architecture (Python, LLMs, Vector DB)
3. Autonomous Financial Sentiment & Market Intelligence Forecaster (Scikit-Learn, NLTK, Yahoo Finance)
4. Team ANSA9119: Space Geodata & Remote Sensing Platform (ISRO Hackathon, Python, PyTorch)
    `.trim();

    navigator.clipboard.writeText(textSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden print:border-none print:shadow-none print:m-0 print:p-0 print:w-full print:max-w-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-950/60 print:hidden">
          <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
            ATS-Optimized Engineering Resume
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto text-slate-900 dark:text-slate-100 font-sans print:max-h-none print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
              {PERSONAL_INFO.headline} &middot; Indian Institute of Technology Patna
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-cyan-500">
                <Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}
              </a>
              <span aria-hidden="true">&middot;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-500">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span aria-hidden="true">&middot;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-500">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">Indian Institute of Technology Patna (IIT Patna)</span>
                  <span className="font-mono text-xs text-slate-500">2024 — 2027 (Expected)</span>
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  Bachelor of Science (Honours) in Computer Science and Data Analytics (CSDA) &middot; Bihar, India
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  <strong>Coursework:</strong> Data Structures &amp; Algorithms, Machine Learning, Deep Learning, DBMS, Big Data Engineering, Statistical Inference, Cloud Computing.
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">Jawahar Navodaya Vidyalaya (JNV) Balrampur</span>
                  <span className="font-mono text-xs text-slate-500">Completed with Honors</span>
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  Higher Secondary &amp; Secondary (CBSE) &middot; Science Stream (Physics, Chemistry, Maths, CS) &middot; Uttar Pradesh, India
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Selected via nationwide Jawahar Navodaya Vidyalaya Selection Test (JNVST) for top rural talent.
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-white">Data Engineering &amp; Process Mining:</strong>{' '}
                Python, SQL, Google BigQuery, dbt, PM4Py, Pandas, NumPy, Conformance Checking, Inductive Miner, Token Replay.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Machine Learning &amp; AI:</strong>{' '}
                PyTorch, Scikit-Learn, TensorFlow, NLTK, Multi-Agent LLM Orchestration, Time-Series Volatility Forecasting.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Full-Stack &amp; Visualization:</strong>{' '}
                React.js, Node.js, Express, Tailwind CSS, PostgreSQL, MySQL, PowerBI, Canvas Visualizers.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">DevOps &amp; Environments:</strong>{' '}
                Git, GitHub, Linux / Arch Linux, Bash, Google Colab, VS Code.
              </div>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Production Projects &amp; Architecture
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">CareFlow: Healthcare Process Mining &amp; Conformance Pipeline</span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs">PM4Py · BigQuery · dbt</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                  <li>Ingested and transformed 45,000+ EHR event traces in BigQuery using structured dbt staging models.</li>
                  <li>Discovered reference Petri-nets and ran token-based replay conformance checking, identifying 32% clinical bottleneck reduction.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">Project Maieutic: Multi-Agent Socratic GenAI Tutoring Architecture</span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs">Python · Multi-Agent LLMs</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                  <li>Engineered a 5-agent pedagogical dialogue network preventing static answer spoon-feeding.</li>
                  <li>Delivered real-time misconception feedback with sub-650ms inference latency.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm font-bold">
                  <span className="text-slate-900 dark:text-white">Autonomous Financial Sentiment &amp; Market Intelligence Forecaster</span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs">NLP · Scikit-Learn · Yahoo Finance</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                  <li>Synthesized breaking financial news sentiment polarity with RSI/EMA momentum indicators, reaching 72.4% directional accuracy.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hackathons & Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Recognitions, Hackathons &amp; Certifications
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex justify-between">
                <span><strong>Bharatiya Antariksh Space Hackathon (ISRO)</strong> &mdash; National Contender (Team ANSA9119)</span>
                <span className="font-mono text-xs text-slate-500">2024</span>
              </div>
              <div className="flex justify-between">
                <span><strong>The Economic Times AI Hackathon</strong> &mdash; National Semi-Finalist</span>
                <span className="font-mono text-xs text-slate-500">2024</span>
              </div>
              <div className="flex justify-between">
                <span><strong>AI/ML for Geodata Analytics Certification</strong> &mdash; Indian Institute of Remote Sensing (IIRS, ISRO)</span>
                <span className="font-mono text-xs text-slate-500">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

