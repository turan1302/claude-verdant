"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { brand, contact, navLinks } from "@/lib/data";

const linkClass =
  "relative text-[0.68rem] font-medium uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:text-ivory after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-verdant-400 after:transition-transform after:duration-500 hover:after:scale-x-100";

const iconButtonClass =
  "grid size-11 place-items-center rounded-full text-ivory/85 transition hover:bg-white/5 hover:text-ivory";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-onyx-950/80 py-2 backdrop-blur-xl"
            : "border-b border-transparent py-3 md:py-5"
        }`}
      >
        <nav aria-label="Ana menü" className="container-lux grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`-ml-2.5 lg:hidden ${iconButtonClass}`}
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
            <ul className="hidden items-center gap-9 lg:flex">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#top"
            className="font-serif text-2xl font-light tracking-[0.35em] text-ivory md:text-[1.75rem]"
            style={{ marginRight: "-0.35em" }}
          >
            {brand.name}
          </a>

          <div className="flex items-center justify-end">
            <ul className="mr-6 hidden items-center gap-9 lg:flex">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" aria-label="Ara" className={`hidden sm:grid ${iconButtonClass}`}>
              <Search className="size-[18px]" strokeWidth={1.5} />
            </button>
            <button type="button" aria-label="Favoriler" className={`hidden sm:grid ${iconButtonClass}`}>
              <Heart className="size-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Sepet, ${count} ürün`}
              className={`relative -mr-2.5 ${iconButtonClass}`}
            >
              <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    className="absolute right-1 top-1 grid size-[18px] place-items-center rounded-full bg-verdant-500 text-[0.6rem] font-semibold text-onyx-950"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Kept outside <header>: its backdrop-filter would trap a fixed child. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menü"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-onyx-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-verdant-700/30 blur-[100px]"
            />
            <div className="container-lux relative flex items-center justify-between py-3">
              <span className="font-serif text-2xl font-light tracking-[0.35em]">{brand.name}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Menüyü kapat"
                className={`-mr-2.5 ${iconButtonClass}`}
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="container-lux relative mt-6 flex flex-1 flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/5 py-5 font-serif text-4xl font-light text-ivory transition-colors hover:text-verdant-300"
                  >
                    <span className="font-sans text-[0.65rem] tracking-[0.2em] text-verdant-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-lux relative space-y-1 pb-10 pt-8 text-xs leading-relaxed text-mist">
              <p>{contact.address}</p>
              <p>
                {contact.phone} · {contact.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
