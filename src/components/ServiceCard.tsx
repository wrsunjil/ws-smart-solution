'use client';

import React from 'react';
import {
  Wrench,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { useStore } from '@/context/StoreContext';

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const { formatPrice, setBookingServiceTitle } = useStore();

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-400 hover:shadow-md">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            {service.category}
          </span>
          {service.badge && (
            <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-xs font-bold text-blue-700">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-extrabold text-slate-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {service.fullDescription}
        </p>

        <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            What’s Included in This Service:
          </h4>
          <ul className="space-y-2">
            {service.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
              {service.priceLabel}
            </span>
            <span className="text-2xl font-extrabold text-emerald-700">
              {formatPrice(service.priceBDT, service.priceUSD)}
            </span>
          </div>
          <div className="text-right text-xs text-slate-600 space-y-1">
            <div className="flex items-center justify-end gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>{service.turnaroundTime}</span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{service.warranty}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setBookingServiceTitle(service.title)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 px-4 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer"
        >
          <Wrench className="h-4 w-4" />
          Book This Service Now
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
