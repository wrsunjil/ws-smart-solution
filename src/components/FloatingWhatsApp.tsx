'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick Direct Call Button */}
      <a
        href={`tel:${SITE_CONFIG.contact.phone}`}
        className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-md hover:bg-slate-50 transition"
        title="Call WS Smart Solution"
      >
        <Phone className="h-3.5 w-3.5 text-blue-600" />
        <span>Direct Call</span>
      </a>

      {/* WhatsApp Floating Action Pill */}
      <a
        href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
          'Hello WS Smart Solution! I would like to inquire about your products and services.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-105 transition cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 fill-white" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}

