"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: Product;
  badge?: string;
  sizes?: string;
};

export default function ProductCard({
  product,
  badge,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: ProductCardProps) {
  const { add } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex h-full flex-col p-3 sm:p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-onyx-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-onyx-950/70 via-transparent to-transparent" />

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-verdant-600/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-ivory backdrop-blur">
            {badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? `${product.name} favorilerden çıkar` : `${product.name} favorilere ekle`}
          className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-onyx-950/50 text-ivory backdrop-blur-md transition hover:bg-onyx-950/80"
        >
          <Heart
            className={`size-4 transition ${liked ? "fill-verdant-400 text-verdant-400" : ""}`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-verdant-400">
          {product.collection} Koleksiyonu
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-ivory">{product.name}</h3>
        <p className="mb-5 mt-1 text-xs tracking-wide text-mist">{product.specs}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="font-serif text-xl text-verdant-300">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => add(product.name)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-verdant-400/40 px-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-ivory transition hover:border-verdant-400 hover:bg-verdant-600"
          >
            <ShoppingBag className="size-4" strokeWidth={1.5} />
            Sepete Ekle
          </button>
        </div>
      </div>
    </article>
  );
}
