import { ArrowRight } from "lucide-react";
import AutoplayVideo from "@/components/ui/AutoplayVideo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutVideo, brand } from "@/lib/data";

const stats = [
  { value: String(brand.founded), label: "Kuruluş Yılı" },
  { value: "42", label: "Usta Saatçi" },
  { value: "600+", label: "Saat El İşçiliği" },
];

const corners = [
  "left-3 top-3 border-l border-t",
  "right-3 top-3 border-r border-t",
  "bottom-3 left-3 border-b border-l",
  "bottom-3 right-3 border-b border-r",
];

export default function About() {
  return (
    <section id="hikaye" className="relative overflow-hidden bg-onyx-950 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 size-[36rem] rounded-full bg-verdant-800/40 blur-[140px]"
      />

      <div className="container-lux relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Video — left */}
        <Reveal>
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-2 translate-y-2 border border-verdant-600/40 sm:-inset-4 sm:translate-x-5 sm:translate-y-5"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-onyx-800 sm:aspect-[16/11] lg:aspect-[4/5]">
              <AutoplayVideo
                src={aboutVideo.src}
                poster={aboutVideo.poster}
                label="Lüks bir saatin kadranına yakın çekim"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-onyx-950/85 via-onyx-950/10 to-verdant-900/25" />
              {corners.map((position) => (
                <span
                  key={position}
                  aria-hidden
                  className={`absolute size-6 border-verdant-400/80 ${position}`}
                />
              ))}
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8">
                <div>
                  <p className="eyebrow">Cenevre Atölyesi</p>
                  <p className="mt-2 font-serif text-2xl font-light text-ivory sm:text-3xl">
                    Her saniyede ustalık
                  </p>
                </div>
                <span className="font-serif text-4xl font-light text-ivory/25 sm:text-5xl">
                  {brand.founded}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Story — right */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Marka Hikayemiz"
            title={
              <>
                Bir asrı aşan <em className="text-emerald-gradient pr-[0.08em]">zanaat</em> tutkusu
              </>
            }
          />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-mist sm:text-base">
              <p>
                Hikayemiz {brand.founded}&apos;de, {brand.city}&apos;nin dar sokaklarındaki küçük bir
                atölyede başladı. Kurucumuz Aurélien Verdant&apos;ın tek bir hayali vardı: zamanı
                yalnızca ölçen değil, onu onurlandıran saatler yaratmak.
              </p>
              <p>
                Bugün 42 usta saatçimiz, her VERDANT saatini yüzlerce saat süren titiz bir el
                işçiliğiyle hayata geçiriyor. Zümrüt yeşili imzamız; doğanın dinginliğini, nesilden
                nesile aktarılan zamansız bir zarafetle buluşturuyor.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl font-light text-verdant-300 sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-mist sm:text-[0.65rem]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <blockquote className="mt-8">
              <p className="font-serif text-xl italic text-ivory/85 sm:text-2xl">
                “Zaman, insanın sahip olabileceği en değerli mücevherdir.”
              </p>
              <footer className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-mist">
                — Aurélien Verdant, Kurucu
              </footer>
            </blockquote>

            <a
              href="#iletisim"
              className="group mt-10 inline-flex min-h-11 items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-verdant-300 transition-colors hover:text-verdant-200"
            >
              Butiğimizi Ziyaret Edin
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
