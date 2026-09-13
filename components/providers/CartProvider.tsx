"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

type CartContextValue = {
  count: number;
  add: (productName: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [toast, setToast] = useState<{ id: number; name: string } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const add = (productName: string) => {
    setCount((c) => c + 1);
    setToast({ id: Date.now(), name: productName });
  };

  return (
    <CartContext value={{ count, add }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center px-4"
      >
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              role="status"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-full border border-verdant-500/40 bg-onyx-900/90 py-3 pl-3 pr-5 text-sm text-ivory shadow-2xl backdrop-blur-xl"
            >
              <span className="grid size-7 place-items-center rounded-full bg-verdant-600">
                <Check className="size-4" strokeWidth={2} />
              </span>
              <span>
                <strong className="font-medium">{toast.name}</strong> sepete eklendi
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CartContext>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
