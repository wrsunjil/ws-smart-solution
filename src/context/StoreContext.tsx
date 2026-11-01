'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '@/data/products';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export type Currency = 'BDT' | 'USD';

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceBDT: number, priceUSD: number) => string;
  bookingServiceTitle: string | null;
  setBookingServiceTitle: (title: string | null) => void;
  totalItems: number;
  subtotalBDT: number;
  subtotalUSD: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [bookingServiceTitle, setBookingServiceTitle] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('wsss_cart_v1');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      const savedCurrency = localStorage.getItem('wsss_currency_v1') as Currency | null;
      if (savedCurrency === 'BDT' || savedCurrency === 'USD') {
        setCurrency(savedCurrency);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('wsss_cart_v1', JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem('wsss_currency_v1', c);
    } catch {
      // Ignore
    }
  };

  const addToCart = (product: ProductItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const formatPrice = (priceBDT: number, priceUSD: number) => {
    if (currency === 'BDT') {
      return `৳${priceBDT.toLocaleString()}`;
    }
    return `$${priceUSD.toLocaleString()}`;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalBDT = cart.reduce(
    (sum, item) => sum + item.product.priceBDT * item.quantity,
    0
  );
  const subtotalUSD = cart.reduce(
    (sum, item) => sum + item.product.priceUSD * item.quantity,
    0
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        currency,
        setCurrency: handleSetCurrency,
        formatPrice,
        bookingServiceTitle,
        setBookingServiceTitle,
        totalItems,
        subtotalBDT,
        subtotalUSD,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

