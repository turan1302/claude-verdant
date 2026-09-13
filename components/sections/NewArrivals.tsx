"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { newArrivals } from "@/lib/data";

const arrowClass =
  "grid size-12 place-items-center rounded-full border border-white/15 text-ivory transition hover:border-verdant-400 hover:bg-verdant-600";

export default function NewArrivals() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  // With loop + align:start every slide is a snap point, so dots map 1:1 to products.
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="yeni" className="relative overflow-hidden bg-onyx-950 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-full bg-verdant-800/30 blur-[140px]"
      />

      <div className="container-lux relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Yeni Gelenler"
            title={
              <>
                Koleksiyona <em className="text-emerald-gradient pr-[0.08em]">yeni</em> katılanlar
              </>
            }
            description="Atölyemizden yeni çıkan, sezonun en çok beklenen modelleriyle tanışın."
          />
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Önceki ürün"
              className={arrowClass}
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Sonraki ürün"
              className={arrowClass}
            >
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={emblaRef}
          className="mt-12 overflow-hidden lg:mt-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Yeni eklenen saatler"
        >
          <div className="-ml-5 flex touch-pan-y touch-pinch-zoom lg:-ml-6">
            {newArrivals.map((product, i) => (
              <div
                key={product.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${newArrivals.length}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-1/2 lg:basis-1/3 lg:pl-6 xl:basis-1/4"
              >
                <div className="h-full rounded-[28px] border border-white/10 bg-linear-to-b from-onyx-800/80 to-onyx-900/80 transition-colors duration-500 hover:border-verdant-500/40">
                  <ProductCard
                    product={product}
                    badge="Yeni"
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-1">
          {newArrivals.map((product, i) => (
            <button
              key={product.id}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`${i + 1}. ürüne git`}
              aria-current={i === selected}
              className="group grid h-11 place-items-center px-1.5"
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  i === selected ? "w-10 bg-verdant-400" : "w-5 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
