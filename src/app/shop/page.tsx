'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ShieldCheck, Truck, Cpu } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Batteries & Power',
    'Storage & RAM',
    'Smart IoT & Routers',
    'Audio & Gadgets',
    'Software & OS Licenses',
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCat =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortSpec.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Header Banner */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          WS Smart Solution Official Store
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
          Tech Hardware, Batteries & Smart IoT Store
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          Browse our curated inventory of high-speed SSDs, DDR4/DDR5 RAM, Grade-A laptop & UPS batteries, pre-flashed OpenWrt hotspot routers, and genuine digital licenses.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-700 font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Official Shop Replacement Warranty
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Cpu className="h-4 w-4 text-blue-600" />
            Free OS Setup with Any SSD Purchase
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Truck className="h-4 w-4 text-amber-600" />
            Nationwide Courier & Instant Shop Pickup
          </span>
        </div>
      </div>

      {/* Search & Category Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search SSD, Battery, OpenWrt, SKU..."
            className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-xs">
          <SlidersHorizontal className="mx-auto h-8 w-8 text-slate-400 mb-3" />
          <h3 className="text-base font-bold text-slate-900">
            No matching tech products found
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Try clearing your search filter or contact us directly for custom hardware stock.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
