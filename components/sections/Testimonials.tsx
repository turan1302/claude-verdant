import { Quote, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function Testimonials() {
  return (
    <section id="yorumlar" className="relative overflow-hidden bg-onyx-900 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-verdant-700/20 blur-[120px]"
      />

      <div className="container-lux relative">
        <SectionHeading
          eyebrow="Müşteri Deneyimleri"
          title={
            <>
              Zamanı <em className="text-emerald-gradient pr-[0.08em]">bizimle</em> paylaşanlar
            </>
          }
          description="VERDANT sahiplerinin gözünden zanaat, zarafet ve kişiye özel hizmet."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.id}
              delay={i * 0.12}
              className={i === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <figure className="relative flex h-full flex-col rounded-[28px] border border-white/10 bg-linear-to-b from-onyx-800 to-onyx-900 p-7 transition duration-500 hover:-translate-y-1.5 hover:border-verdant-500/40 sm:p-10">
                <Quote className="size-10 text-verdant-500/50" strokeWidth={1} aria-hidden />
                <div
                  role="img"
                  aria-label={`5 üzerinden ${testimonial.rating} yıldız`}
                  className="mt-6 flex gap-1"
                >
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      aria-hidden
                      strokeWidth={1.5}
                      className={`size-4 ${s < testimonial.rating ? "fill-verdant-400 text-verdant-400" : "text-white/20"}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl font-light leading-relaxed text-ivory/90 sm:text-[1.35rem]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-verdant-500/40 bg-verdant-900 font-serif text-lg leading-none text-verdant-300">
                    {initials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium tracking-wide text-ivory">
                      {testimonial.name}
                    </span>
                    <span className="mt-0.5 block text-xs text-mist">
                      {testimonial.city} · {testimonial.product}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
