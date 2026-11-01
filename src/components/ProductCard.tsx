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
      <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-400 hover:shadow-md">
        <div>
          {/* Top Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="rounded-md bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
              {product.category}
            </span>
            {product.badge && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                <Sparkles className="h-3 w-3 text-amber-600" />
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title & Spec */}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs font-semibold text-emerald-700">
            {product.shortSpec}
          </p>
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {product.description}
          </p>

          {/* Highlights preview */}
          <ul className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3">
            {product.highlights.slice(0, 2).map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-xs text-slate-700"
              >
                <Check className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Price & Action */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xl font-extrabold text-slate-900">
                {formatPrice(product.priceBDT, product.priceUSD)}
              </span>
              {product.originalPriceBDT && (
                <span className="ml-2 text-xs text-slate-400 line-through">
                  {formatPrice(
                    product.originalPriceBDT,
                    Math.round(product.priceUSD * 1.2)
                  )}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4 stroke-[2.5]" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition cursor-pointer"
              title="View Full Specifications"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              {product.warranty}
            </span>
            <span className="text-emerald-700 font-semibold">● In Stock</span>
          </div>
        </div>
      </div>

      {/* Quick Spec Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {product.sku} • {product.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {product.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-xs font-semibold text-emerald-700">
                {product.shortSpec}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {product.description}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Key Highlights & Package Inclusions
                </h4>
                <ul className="space-y-2">
                  {product.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div>
                  <span className="block text-xs text-slate-500">Price</span>
                  <span className="text-xl font-extrabold text-blue-700">
                    {formatPrice(product.priceBDT, product.priceUSD)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowDetails(false);
                    addToCart(product, 1);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition cursor-pointer"
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
