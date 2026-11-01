'use client';

import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Layers,
  MessageSquareCode,
} from 'lucide-react';
import { PortfolioProject } from '@/data/portfolio';
import { useStore } from '@/context/StoreContext';

export default function PortfolioCard({
  project,
}: {
  project: PortfolioProject;
}) {
  const { setBookingServiceTitle } = useStore();

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/40 hover:bg-slate-900/90">
      <div>
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 text-xs font-semibold text-cyan-400">
            <FolderGit2 className="h-3.5 w-3.5" />
            {project.category}
          </span>
          <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
            ● {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-extrabold text-white leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-cyan-300/90">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Key Engineering Achievements */}
        <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-3.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Engineering Highlights:
          </h4>
          <ul className="space-y-1.5">
            {project.keyAchievements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack & Actions */}
      <div className="mt-5 border-t border-slate-800/80 pt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-2">
          <Layers className="h-3.5 w-3.5 text-cyan-400" />
          <span>Tech Stack:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 px-3 text-xs font-bold text-slate-950 hover:brightness-110 transition"
            >
              Visit Live Project
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
          <button
            type="button"
            onClick={() =>
              setBookingServiceTitle(`Custom Project / Hardware Inquiry: ${project.title}`)
            }
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-950 py-2.5 px-3 text-xs font-semibold text-slate-200 hover:border-cyan-500/40 hover:text-cyan-400 transition cursor-pointer"
          >
            <MessageSquareCode className="h-3.5 w-3.5" />
            Request Similar Solution
          </button>
        </div>
      </div>
    </div>
  );
}

