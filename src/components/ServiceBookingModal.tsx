'use client';

import React, { useState, useEffect } from 'react';
import { X, Wrench, Send, CheckCircle2, Copy, CalendarClock } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { SERVICES } from '@/data/services';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function ServiceBookingModal() {
  const { bookingServiceTitle, setBookingServiceTitle } = useStore();
  const [selectedService, setSelectedService] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [issueDetails, setIssueDetails] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Today (Shop Drop-off)');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (bookingServiceTitle) {
      setSelectedService(bookingServiceTitle);
    }
  }, [bookingServiceTitle]);

  if (!bookingServiceTitle) return null;

  const generateBookingText = () => {
    return [
      `*SERVICE BOOKING REQUEST — ${SITE_CONFIG.name}*`,
      `-----------------------------------------`,
      `*Service Type:* ${selectedService}`,
      `*Device / Battery Model:* ${deviceModel || 'Not specified'}`,
      `*Requirement / Issue:* ${issueDetails || 'Standard installation / servicing'}`,
      `*Preferred Schedule:* ${preferredTime}`,
      `-----------------------------------------`,
      `*Customer Name:* ${customerName}`,
      `*Phone Number:* ${customerPhone}`,
    ].join('\n');
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(generateBookingText());
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateBookingText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Book Hardware / OS / Battery Service
              </h2>
              <p className="text-xs text-slate-400">
                Fast turnaround at WS Smart Solution Service Lab
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setBookingServiceTitle(null)}
            className="rounded-lg border border-slate-800 bg-slate-900 p-1.5 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="mt-4 space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Select Service Category *
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
            >
              <option value="Computer OS Installation / Battery Service">
                Computer OS Installation / Battery Service (General)
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Laptop / PC / Battery Model *
              </label>
              <input
                type="text"
                required
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
                placeholder="e.g., HP Pavilion 15 / 650VA UPS"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Preferred Schedule
              </label>
              <div className="relative">
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="Today (Shop Drop-off)">Today (Shop Drop-off)</option>
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                  <option value="Tomorrow Evening">Tomorrow Evening</option>
                  <option value="Remote AnyDesk Setup">Remote AnyDesk / Online Setup</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Describe OS Preference or Battery Issue
            </label>
            <textarea
              rows={3}
              value={issueDetails}
              onChange={(e) => setIssueDetails(e.target.value)}
              placeholder="e.g., Need Windows 11 Pro + Office 2021 on C drive without losing D drive data, or laptop battery drains in 15 mins..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:brightness-110 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Confirm Booking via WhatsApp
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Details
                </>
              )}
            </button>
          </div>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <CalendarClock className="h-3.5 w-3.5 text-cyan-400" />
            Most OS setups & battery diagnostics complete within 45–90 minutes.
          </p>
        </form>
      </div>
    </div>
  );
}

