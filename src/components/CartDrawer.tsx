'use client';

import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Send,
  CheckCircle2,
  Copy,
  ShieldCheck,
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    formatPrice,
    subtotalBDT,
    subtotalUSD,
    currency,
  } = useStore();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Cash on Delivery / Shop Pickup' | 'bKash / Nagad' | 'Direct Inquiry'>('Cash on Delivery / Shop Pickup');
  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const generateOrderSummaryText = () => {
    const lines = [
      `*NEW ORDER — ${SITE_CONFIG.name}*`,
      `-----------------------------------------`,
      `*Customer:* ${customerName || 'Guest Customer'}`,
      `*Phone:* ${customerPhone || 'Not provided'}`,
      `*Delivery / Pickup:* ${customerAddress || 'Shop Pickup'}`,
      `*Payment Preference:* ${paymentMethod}`,
      `-----------------------------------------`,
      `*Ordered Items:*`,
      ...cart.map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (${item.product.sku}) — Qty: ${
            item.quantity
          } × ${formatPrice(item.product.priceBDT, item.product.priceUSD)}`
      ),
      `-----------------------------------------`,
      `*Total Payable:* ${
        currency === 'BDT'
          ? `৳${subtotalBDT.toLocaleString()} BDT`
          : `$${subtotalUSD.toLocaleString()} USD`
      }`,
    ];
    return lines.join('\n');
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(generateOrderSummaryText());
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopyInvoice = () => {
    navigator.clipboard.writeText(generateOrderSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
      <div className="relative flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white text-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              Your Tech Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-slate-500 hover:text-slate-900 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Cart Items & Checkout Form */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Your cart is empty</h3>
            <p className="mt-1 text-sm text-slate-500">
              Explore our SSDs, laptop/UPS batteries, pre-flashed OpenWrt routers, and genuine OS licenses.
            </p>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition cursor-pointer"
            >
              Browse Tech Store
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
            {/* Items List */}
            <div className="space-y-3">
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        {product.sku}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                        {product.name}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="text-slate-500 hover:text-slate-900 cursor-pointer"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-slate-900">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="text-slate-500 hover:text-slate-900 cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-extrabold text-blue-700">
                      {formatPrice(
                        product.priceBDT * quantity,
                        product.priceUSD * quantity
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Express Order Details Form */}
            <form onSubmit={handleWhatsAppCheckout} className="space-y-3 border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Instant Order & Delivery Details
                </h3>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-rose-600 font-semibold hover:underline cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g., Tanvir Ahmed"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g., 017XXXXXXXX"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Delivery Address or Shop Pickup *
                </label>
                <input
                  type="text"
                  required
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Full courier address or write 'Shop Pickup'"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value as
                        | 'Cash on Delivery / Shop Pickup'
                        | 'bKash / Nagad'
                        | 'Direct Inquiry'
                    )
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="Cash on Delivery / Shop Pickup">
                    Cash on Delivery / Shop Pickup
                  </option>
                  <option value="bKash / Nagad">bKash / Nagad Mobile Payment</option>
                  <option value="Direct Inquiry">Request Official Quotation</option>
                </select>
              </div>

              {/* Order Total Box */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 font-semibold">Total Payable:</span>
                  <span className="text-lg font-extrabold text-blue-700">
                    {formatPrice(subtotalBDT, subtotalUSD)}
                  </span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-600">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  100% Authentic Product & Official WS Smart Solution Warranty
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Complete Order via WhatsApp
              </button>

              <button
                type="button"
                onClick={handleCopyInvoice}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Order Invoice Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Invoice Text (For Email / SMS)
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
