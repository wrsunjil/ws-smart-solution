'use client';

import React, { useState } from 'react';
import {
  ShoppingCart,
  Star,
  ShieldCheck,
  Check,
  Sparkles,
  Eye,
  X,
} from 'lucide-react';
import { ProductItem } from '@/data/products';
import { useStore } from '@/context/StoreContext';

export default function ProductCard({ product }: { product: ProductItem }) {
  const { addToCart, formatPrice } = useStore();
  const [added, setAdded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <>
      <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/50 p-5 transition-all hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-500/5">
        <div>
          {/* Top Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="rounded-md bg-slate-800/90 px-2.5 py-1 text-[11px] font-semibold text-cyan-400">
              {product.category}
            </span>
            {product.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                <Sparkles className="h-3 w-3" />
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title & Spec */}
          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs font-medium text-emerald-400/90">
            {product.shortSpec}
          </p>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-400 line-clamp-3">
            {product.description}
          </p>

          {/* Highlights preview */}
          <ul className="mt-3 space-y-1.5 border-t border-slate-800/70 pt-3">
            {product.highlights.slice(0, 2).map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-xs text-slate-300"
              >
                <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Price & Action */}
        <div className="mt-5 border-t border-slate-800/80 pt-4">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xl font-extrabold text-white">
                {formatPrice(product.priceBDT, product.priceUSD)}
              </span>
              {product.originalPriceBDT && (
                <span className="ml-2 text-xs text-slate-500 line-through">
                  {formatPrice(
                    product.originalPriceBDT,
                    Math.round(product.priceUSD * 1.2)
                  )}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-slate-500">({product.reviewsCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/10'
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4 stroke-[2.5]" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 stroke-[2.5]" />
                  Add to Cart
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 p-2.5 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition cursor-pointer"
              title="View Full Specifications"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              {product.warranty}
            </span>
            <span className="text-emerald-400 font-semibold">● In Stock</span>
          </div>
        </div>
      </div>

      {/* Quick Spec Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-100 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {product.sku} • {product.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {product.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="rounded-lg border border-slate-800 bg-slate-900 p-1.5 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-xs font-semibold text-emerald-400">
                {product.shortSpec}
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                {product.description}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Highlights & Package Inclusions
                </h4>
                <ul className="space-y-2">
                  {product.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-200"
                    >
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-3.5">
                <div>
                  <span className="block text-xs text-slate-400">Price</span>
                  <span className="text-xl font-extrabold text-cyan-400">
                    {formatPrice(product.priceBDT, product.priceUSD)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowDetails(false);
                    addToCart(product, 1);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-bold text-slate-950 hover:brightness-110 transition cursor-pointer"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

