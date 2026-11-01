'use client';

import React, { useState } from 'react';
import { FolderGit2, Code2, Cpu, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
import PortfolioCard from '@/components/PortfolioCard';
import { useStore } from '@/context/StoreContext';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { setBookingServiceTitle } = useStore();

  const categories = [
    'All',
    'IoT & Embedded Systems',
    'AI & Cloud SaaS',
    'E-Commerce & Web',
    'System & Mobile Tools',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 p-8 sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300">
            <FolderGit2 className="h-3.5 w-3.5" />
            WS Smart Solution Engineering Showcase
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            12+ Production Projects across IoT, Embedded Linux, AI & E-Commerce
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Explore our complete engineering portfolio—ranging from automated OpenWrt bKash WiFi hotspot firmware and Armbian Linux cloud print servers to AI-powered Bangla OCR platforms and full-stack Next.js + Flutter ecosystems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setBookingServiceTitle(
                  'Custom Software / IoT / Firmware Development Inquiry'
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 transition cursor-pointer"
            >
              <Code2 className="h-4 w-4" />
              Hire Us for Custom Engineering
            </button>
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-xs font-medium text-slate-300">
              <Cpu className="h-4 w-4 text-emerald-400" />
              Hardware + Cloud + Mobile Full-Stack
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} Projects
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

