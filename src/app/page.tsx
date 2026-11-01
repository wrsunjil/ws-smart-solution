'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag,
  Wrench,
  FolderGit2,
  ArrowRight,
  Cpu,
  BatteryCharging,
  HardDrive,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Terminal,
  PhoneCall,
  Clock,
  Award,
  Layers,
} from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteConfig';
import { PRODUCTS } from '@/data/products';
import { SERVICES } from '@/data/services';
import { PORTFOLIO_PROJECTS } from '@/data/portfolio';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import { useStore } from '@/context/StoreContext';

export default function HomePage() {
  const { setBookingServiceTitle } = useStore();
  const [selectedShopCat, setSelectedShopCat] = useState<string>('All');
  const [selectedPortfolioCat, setSelectedPortfolioCat] = useState<string>('All');

  const shopCategories = [
    'All',
    'Batteries & Power',
    'Storage & RAM',
    'Smart IoT & Routers',
    'Audio & Gadgets',
    'Software & OS Licenses',
  ];

  const portfolioCategories = [
    'All',
    'IoT & Embedded Systems',
    'AI & Cloud SaaS',
    'E-Commerce & Web',
    'System & Mobile Tools',
  ];

  const filteredProducts =
    selectedShopCat === 'All'
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === selectedShopCat);

  const filteredPortfolio =
    selectedPortfolioCat === 'All'
      ? PORTFOLIO_PROJECTS.slice(0, 6)
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedPortfolioCat);

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION — Clean, Soothing White/Light */}
      <section className="border-b border-slate-200 bg-white pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-blue-700 mb-6 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Tech Store, Computer OS & Battery Service Lab & Engineering Studio</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              WS Smart{' '}
              <span className="text-blue-600">Solution</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Your trusted partner for <strong>genuine computer hardware & batteries</strong>,{' '}
              <strong>clean Windows & Linux OS installation</strong>,{' '}
              <strong>laptop & UPS battery servicing</strong>, and{' '}
              <strong>custom IoT, OpenWrt & cloud software engineering</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop Tech & Batteries
              </Link>

              <button
                type="button"
                onClick={() =>
                  setBookingServiceTitle(
                    'Computer OS Installation & System Optimization'
                  )
                }
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-6 py-3.5 text-sm font-bold text-emerald-800 hover:bg-emerald-100 transition cursor-pointer"
              >
                <Wrench className="h-4 w-4 text-emerald-600" />
                Book OS / Battery Service
              </button>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition shadow-xs"
              >
                <FolderGit2 className="h-4 w-4" />
                Explore 12+ Projects
              </Link>
            </div>
          </div>

          {/* 3 Core Business Pillars */}
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs hover:border-blue-300 transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-4">
                <HardDrive className="h-6 w-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Tech Hardware & E-Commerce Store
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                High-speed NVMe/SATA SSDs, DDR4/DDR5 RAM, pre-flashed OpenWrt hotspot routers, SafePrint Linux boxes, and genuine digital OS licenses.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs hover:border-emerald-300 transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                OS Installation & Battery Servicing Lab
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Windows 10/11 Pro & Linux clean setups, driver tuning, laptop battery replacement, 18650/LiFePO4 cell balancing, and UPS battery servicing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs hover:border-purple-300 transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 mb-4">
                <Terminal className="h-6 w-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Full-Stack, AI & IoT Engineering
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Proven portfolio of 12+ production systems including PublicWiFi bKash routers, Smart Irrigation IoT, SafePrint CUPS servers, and AI SaaS tools.
              </p>
            </div>
          </div>

          {/* Business Stats Ribbon */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:grid-cols-4">
            {SITE_CONFIG.stats.map((st) => (
              <div key={st.label} className="text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {st.value}
                </span>
                <span className="mt-1 block text-xs font-semibold text-slate-500">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OS INSTALLATION & BATTERY SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="services">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Hardware & System Service Center
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Computer OS Setup & Battery Servicing
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Professional diagnostics, clean Windows/Linux installations, laptop & UPS battery cell restoration, and custom router/TV-box firmware flashing.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            View All Service Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* SECTION 3: TECH E-COMMERCE SHOP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="shop">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              WS Smart Solution Retail Store
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Tech Products & Batteries
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Order authentic SSDs, RAM, laptop & UPS batteries, pre-flashed OpenWrt routers, and digital licenses with instant WhatsApp checkout.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            Open Full Catalog ({PRODUCTS.length} Products){' '}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {shopCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedShopCat(cat)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                selectedShopCat === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 4: PROJECT PORTFOLIO SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="portfolio">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Software, Firmware & IoT Engineering
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Engineered Project Portfolio ({PORTFOLIO_PROJECTS.length})
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Real-world hardware, embedded firmware, Cloudflare serverless platforms, and AI applications built by WS Smart Solution.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            View All {PORTFOLIO_PROJECTS.length} Case Studies{' '}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Portfolio Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedPortfolioCat(cat)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                selectedPortfolioCat === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* SECTION 5: TRUST GUARANTEE BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Hardware + Software Expertise Under One Roof
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Need an OS Reinstall, a New Battery, or a Custom IoT/Web Project?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Visit the WS Smart Solution service desk or book online. Every SSD upgrade includes complimentary Windows 10/11 Pro installation, and every battery replacement includes free charging circuit diagnostics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Zero C-Drive Data Loss OS Reinstallation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>True-Capacity Laptop & UPS Battery Lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Pre-Flashed OpenWrt & Linux Print Boxes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Custom Next.js, Flutter & Cloudflare Development</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() =>
                  setBookingServiceTitle(
                    'Computer OS Installation / Battery Service'
                  )
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-extrabold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer"
              >
                <Wrench className="h-4 w-4" />
                Book Service Appointment
              </button>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:border-blue-400 hover:text-blue-600 transition shadow-xs"
              >
                <PhoneCall className="h-4 w-4" />
                Contact Store & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
