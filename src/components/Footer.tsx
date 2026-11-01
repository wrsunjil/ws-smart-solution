import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white">
                  WS Smart <span className="text-cyan-400">Solution</span>
                </span>
                <span className="block text-xs text-slate-400">
                  {SITE_CONFIG.domain}
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4" />
              Hosted Permanently on Cloudflare Global Edge
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Platform Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop" className="hover:text-cyan-400 transition">
                  Tech E-Commerce Store
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  OS Installation & Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition">
                  Laptop & UPS Battery Lab
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition">
                  12+ Engineered Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition">
                  Contact & Service Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Flagship Engineering
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition">
                  PublicWiFi OpenWrt + bKash Zone
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition">
                  SafePrint Armbian Cloud Print Box
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition">
                  Smart Irrigation Pump IoT
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition">
                  Okkhorica AI Bangla OCR Studio
                </Link>
              </li>
              <li>
                <a
                  href="https://geminisub.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-400 transition"
                >
                  GeminiSub Edge Store <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Store & Service Desk
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-white transition"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} <strong>{SITE_CONFIG.name}</strong> ({SITE_CONFIG.domain}). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              100% Static Edge Architecture
            </span>
            <Link href="/sitemap.xml" className="hover:text-cyan-400 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

