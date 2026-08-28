"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  description?: string;
  image: string;
  quantity: number;
  specs?: string[];
  category?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "obifoks_cart_items_v1";

// Default initial items so cart has sample items if empty or first visit
const DEFAULT_ITEMS: CartItem[] = [
  {
    id: "felicity-m-175w-mono-solar-panel",
    name: "Felicity M-175W MONO Solar Panel",
    description: "175W Rated Power Monocrystalline Solar Panel",
    image: "/assets/products/solar-panels.png",
    quantity: 2,
    category: "Solar Panels",
    specs: ["175W Rated Power", "Monocrystalline Cells"]
  },
  {
    id: "felicity-12-8v-200ah-lithium-lifepo4-battery",
    name: "Felicity 12.8V 200Ah Lithium LiFePO4 Battery",
    description: "2.56kWh Lithium Battery with built-in Smart BMS",
    image: "/assets/products/batteries.png",
    quantity: 1,
    category: "Batteries",
    specs: ["2.56kWh Capacity", "6000+ Cycle Life"]
  }
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from local storage or set default items on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
        } else {
          setItems(DEFAULT_ITEMS);
        }
      } else {
        setItems(DEFAULT_ITEMS);
      }
    } catch {
      setItems(DEFAULT_ITEMS);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to local storage whenever items change
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch (err) {
        console.error("Failed to save cart to localStorage", err);
      }
    }
  }, [items, isInitialized]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addToCart = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === newItem.id);
      const qtyToAdd = newItem.quantity || 1;

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qtyToAdd,
        };
        return updated;
      } else {
        return [...prevItems, { ...newItem, quantity: qtyToAdd }];
      }
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
