"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number; // Storing price for total calculations if needed
  quantity: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem('morusu_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // If we detect an old item with a broken price (like 0 or 0.1199 due to old parsing bug), clear it out.
        if (Array.isArray(parsedCart) && parsedCart.some(item => item.price < 1)) {
           setItems([]);
           localStorage.removeItem('morusu_cart');
        } else {
           setItems(parsedCart);
        }
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('morusu_cart', JSON.stringify(items));
    }
  }, [items, mounted]);

  const addToCart = (newItem: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i);
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
