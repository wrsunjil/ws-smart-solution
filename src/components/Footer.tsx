import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import LogoIcon from '@/components/LogoIcon';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <LogoIcon className="h-9 w-9" />
              <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                WSSS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              100% Authentic Products & Official Warranty
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Platform Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="hover:text-blue-600 transition">
                  Tech E-Commerce Store
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  OS Installation & Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Laptop & UPS Battery Lab
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  12+ Engineered Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact & Service Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Flagship Engineering
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  PublicWiFi OpenWrt + bKash Zone
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  SafePrint Armbian Cloud Print Box
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  Smart Irrigation Pump IoT
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition">
                  Okkhorica AI Bangla OCR Studio
                </Link>
              </li>
              <li>
                <a
                  href="https://geminisub.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition"
                >
                  GeminiSub Edge Store <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Store & Service Desk
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="text-slate-700 hover:text-blue-600 transition"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-slate-700 hover:text-blue-600 transition"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{SITE_CONFIG.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs sm:flex-row text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>{SITE_CONFIG.name}</strong>. All rights reserved.
          </p>
          <p>
            Computer Hardware, OS Installation & Battery Service Center
          </p>
        </div>
      </div>
    </footer>
  );
}
