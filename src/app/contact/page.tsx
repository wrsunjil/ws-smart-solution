'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  Wrench,
  MessageSquare,
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import { useStore } from '@/context/StoreContext';

export default function ContactPage() {
  const { setBookingServiceTitle } = useStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('OS Installation / Battery Service');
  const [message, setMessage] = useState('');

  const handleDirectWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*INQUIRY — ${SITE_CONFIG.name} (${SITE_CONFIG.domain})*`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Topic:* ${topic}`,
      `*Message:* ${message}`,
    ].join('\n');

    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
        text
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 p-8 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Get In Touch
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
          Contact WS Smart Solution
        </h1>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl">
          Reach out to order tech hardware, book a Windows/Linux OS setup or battery replacement, or discuss a custom IoT/software engineering project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-5">
            <h2 className="text-lg font-extrabold text-white">
              Store & Service Desk Information
            </h2>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {SITE_CONFIG.contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone & WhatsApp Hotline
                </h3>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="mt-0.5 block text-sm font-semibold text-white hover:text-cyan-400"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Email
                </h3>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="mt-0.5 block text-sm font-semibold text-white hover:text-cyan-400"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Service Hours
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {SITE_CONFIG.contact.businessHours}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  setBookingServiceTitle(
                    'Computer OS Installation / Battery Service'
                  )
                }
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 py-3 text-xs font-bold text-emerald-300 hover:bg-emerald-500/25 transition cursor-pointer"
              >
                <Wrench className="h-4 w-4" />
                Open Quick Service Booking Modal
              </button>
            </div>
          </div>
        </div>

        {/* Right: Direct Inquiry Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleDirectWhatsApp}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="h-4 w-4" />
              <span>Instant Message</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              Send Us a Direct Inquiry
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="017XXXXXXXX"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Inquiry Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="OS Installation / Battery Service">
                  OS Installation / Battery Service
                </option>
                <option value="Product Stock & Bulk Order">
                  Tech Product Stock & Order Inquiry
                </option>
                <option value="OpenWrt Router / SafePrint Linux Box">
                  OpenWrt Hotspot Router / SafePrint Print Box
                </option>
                <option value="Custom Software / IoT Project">
                  Custom Software / IoT Engineering Project
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                How Can We Help You? *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your device model, required product, or project requirements..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 transition cursor-pointer"
            >
              <Send className="h-4 w-4" />
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

