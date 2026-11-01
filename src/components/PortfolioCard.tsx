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
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-400 hover:shadow-md">
      <div>
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-semibold text-blue-800">
            <FolderGit2 className="h-3.5 w-3.5 text-blue-600" />
            {project.category}
          </span>
          <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
            ● {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-blue-700">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Key Engineering Achievements */}
        <div className="mt-4 space-y-2 border-t border-slate-100 pt-3.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Engineering Highlights:
          </h4>
          <ul className="space-y-1.5">
            {project.keyAchievements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack & Actions */}
      <div className="mt-5 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-2">
          <Layers className="h-3.5 w-3.5 text-blue-600" />
          <span>Tech Stack:</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
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
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2.5 px-3 text-xs font-bold text-white hover:bg-blue-700 transition"
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
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition cursor-pointer"
          >
            <MessageSquareCode className="h-3.5 w-3.5" />
            Request Solution
          </button>
        </div>
      </div>
    </div>
  );
}
