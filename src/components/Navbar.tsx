'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShoppingCart,
  Wrench,
  Cpu,
  Menu,
  X,
  FolderGit2,
  Home,
  Store,
  PhoneCall,
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function Navbar() {
  const pathname = usePathname();
  const {
    totalItems,
    setIsCartOpen,
    currency,
    setCurrency,
    setBookingServiceTitle,
  } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/shop', label: 'Tech Shop', icon: Store },
    { href: '/services', label: 'OS & Battery Services', icon: Wrench },
    { href: '/portfolio', label: 'Project Portfolio', icon: FolderGit2 },
    { href: '/contact', label: 'Contact', icon: PhoneCall },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Cpu className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-lg font-extrabold tracking-tight text-white">
              WS Smart <span className="text-cyan-400">Solution</span>
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-slate-400">
              wssmartsolution.pages.dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Currency Switcher */}
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setCurrency('BDT')}
              className={`rounded-md px-2.5 py-1 transition-all ${
                currency === 'BDT'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Display prices in Bangladeshi Taka (৳)"
            >
              ৳ BDT
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`rounded-md px-2.5 py-1 transition-all ${
                currency === 'USD'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Display prices in US Dollars ($)"
            >
              $ USD
            </button>
          </div>

          {/* Quick Service Booking Button */}
          <button
            type="button"
            onClick={() =>
              setBookingServiceTitle('Computer OS Installation / Battery Service')
            }
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <Wrench className="h-3.5 w-3.5" />
            Book Service
          </button>

          {/* Cart Trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 hover:brightness-110 transition-all cursor-pointer"
            aria-label="Open Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4 stroke-[2.5]" />
            <span className="hidden md:inline">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1.5 text-[11px] font-extrabold text-cyan-400">
              {totalItems}
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                    active
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingServiceTitle('Computer OS Installation / Battery Service');
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/15 py-2.5 text-sm font-semibold text-emerald-300"
            >
              <Wrench className="h-4 w-4" />
              Book OS / Battery Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

