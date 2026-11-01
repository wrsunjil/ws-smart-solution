'use client';

import React from 'react';
import {
  Wrench,
  MonitorCheck,
  BatteryCharging,
  Cpu,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { SERVICES } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { useStore } from '@/context/StoreContext';

export default function ServicesPage() {
  const { setBookingServiceTitle } = useStore();

  const faqs = [
    {
      q: 'Will my personal files on D: or E: drives be deleted during Windows 10/11 installation?',
      a: 'No. We strictly format only the system partition (C: drive) and also back up your Desktop, Documents, and Downloads folders before reinstalling Windows or Linux.',
    },
    {
      q: 'How long does an OS installation or battery service take?',
      a: 'Standard Windows 10/11 Pro installation with full drivers and Office software takes 45 to 60 minutes. Laptop and UPS battery replacement takes 30 minutes, while custom lithium pack cell-balancing takes 1–3 hours.',
    },
    {
      q: 'Do you provide warranty on laptop and UPS batteries?',
      a: 'Yes! Our replacement laptop batteries and 12V UPS batteries come with up to 6 months official replacement warranty along with free charging voltage diagnostics.',
    },
    {
      q: 'Can you install Linux or dual-boot Windows + Ubuntu on my laptop?',
      a: 'Absolutely. We configure UEFI dual-boot systems (Windows 11 + Ubuntu / Linux Mint) as well as headless Armbian Linux servers on TV boxes.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Banner */}
      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/30 p-8 sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
            <Wrench className="h-3.5 w-3.5" />
            WS Smart Solution Service Lab
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Computer OS Installation, Battery Servicing & Firmware Lab
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether your PC is running slow, needs a clean Windows 11 Pro or Linux setup, suffers from sudden battery drops, or requires custom OpenWrt/TV-box firmware flashing—our hardware lab delivers fast, guaranteed results.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setBookingServiceTitle(
                  'Computer OS Installation & System Optimization'
                )
              }
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 hover:brightness-110 transition cursor-pointer"
            >
              <MonitorCheck className="h-4 w-4" />
              Book OS Installation
            </button>
            <button
              type="button"
              onClick={() =>
                setBookingServiceTitle(
                  'Laptop, UPS & Lithium Battery Servicing & Rebuilding'
                )
              }
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition cursor-pointer"
            >
              <BatteryCharging className="h-4 w-4" />
              Book Battery Diagnostics
            </button>
          </div>
        </div>
      </div>

      {/* All Service Packages */}
      <div>
        <h2 className="text-2xl font-extrabold text-white mb-6">
          Detailed Service Packages & Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Our 4-Step Service Workflow */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Cpu className="h-4 w-4" />
          <span>How Our Service Center Works</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-6">
          4-Step Diagnostic & Servicing Workflow
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '01',
              title: 'Free Initial Checkup',
              desc: 'We inspect your SSD/HDD health (SMART status), RAM stability, or battery internal resistance before starting.',
            },
            {
              step: '02',
              title: 'Safe C-Drive Backup',
              desc: 'Before formatting for Windows/Linux installation, we secure your Desktop, Documents, and critical files.',
            },
            {
              step: '03',
              title: 'Precision Execution',
              desc: 'Clean UEFI OS installation with genuine OEM drivers, or spot-welded Grade-A battery cell replacement.',
            },
            {
              step: '04',
              title: 'Stress Test & Warranty',
              desc: 'We verify thermal load, boot speed, and battery discharge curve, backed by our service guarantee.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5"
            >
              <span className="text-xs font-extrabold text-cyan-400">
                STEP {item.step}
              </span>
              <h3 className="mt-1 text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="h-4 w-4" />
          <span>Common Questions</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-6">
          OS Installation & Battery Service FAQs
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="flex items-start gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

