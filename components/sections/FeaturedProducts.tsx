import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProducts } from "@/lib/data";

export default function FeaturedProducts() {
  return (
    <section id="koleksiyon" className="relative overflow-hidden bg-onyx-900 py-24 md:py-32">
      {/* Emerald light behind the glass so the refraction has something to bend */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Drift only from md up: on phones the moving blur costs more than it adds. */}
        <div className="absolute -left-24 top-32 size-[28rem] rounded-full bg-verdant-600/40 blur-[110px] md:animate-drift" />
        <div className="absolute -right-24 top-1/2 size-[32rem] rounded-full bg-verdant-500/25 blur-[120px] [animation-delay:-6s] md:animate-drift" />
        <div className="absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-verdant-800/70 blur-[100px] [animation-delay:-12s] md:animate-drift" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      </div>

      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Seçkin Koleksiyon"
          title={
            <>
              Öne Çıkan <em className="text-emerald-gradient pr-[0.08em]">Saatler</em>
            </>
          }
          description="Ustalarımızın imzasını taşıyan, sınırlı sayıda üretilen ve koleksiyonerlerin en çok tercih ettiği modeller."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 0.12}>
              <GlassCard>
                <ProductCard product={product} />
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href="#yeni"
            className="group inline-flex min-h-12 items-center gap-3 border border-ivory/20 px-8 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ivory transition hover:border-verdant-400 hover:text-verdant-300"
          >
            Tüm Koleksiyonu Gör
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
