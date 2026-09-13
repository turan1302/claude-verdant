"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { brand, heroImages } from "@/lib/data";
import { DESKTOP_QUERY, useMediaQuery } from "@/lib/useMediaQuery";

const SLIDE_DURATION = 7000;
const ease = [0.22, 1, 0.36, 1] as const;

const withNext = (loaded: ReadonlySet<number>, i: number) =>
  new Set(loaded).add(i).add((i + 1) % heroImages.length);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  // Scroll parallax (inline styles every frame) and the text shimmer (a repaint
  // every frame) are desktop-only; the CSS loops pause once the hero is off screen.
  const desktop = useMediaQuery(DESKTOP_QUERY);
  const inView = useInView(sectionRef);
  // Slides mount once they're current or next up, so the first paint downloads
  // two images instead of all of them and each is ready before it fades in.
  const [loaded, setLoaded] = useState<ReadonlySet<number>>(() => withNext(new Set(), 0));

  const show = (i: number) => {
    setActive(i);
    setLoaded((prev) => withNext(prev, i));
  };

  // Scroll parallax: background drifts slower than the page, content fades out.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse parallax (desktop pointers only).
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 40, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 40, damping: 18 });
  const parallaxX = useTransform(springX, (v) => v * -28);
  const parallaxY = useTransform(springY, (v) => v * -28);

  // Crossfade to the next image; restarts whenever a slide is picked manually.
  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => {
      const next = (active + 1) % heroImages.length;
      setActive(next);
      setLoaded((prev) => withNext(prev, next));
    }, SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, reduceMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-onyx-950 pb-32 pt-28"
    >
      {/* Moving watch imagery */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={desktop ? { y: backgroundY } : undefined}
      >
        <motion.div className="absolute -inset-10" style={{ x: parallaxX, y: parallaxY }}>
          {heroImages.map(
            (src, i) =>
              loaded.has(i) && (
                <motion.div
                  key={src}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                >
                  {/* CSS zoom runs on the compositor; hidden slides pause in place
                      so the outgoing one doesn't jump while it fades out. */}
                  <div
                    className={`animate-ken-burns absolute inset-0 ${
                      i % 2 === 0 ? "[--kb-x:-3%]" : "[--kb-x:3%]"
                    } ${i === active && inView ? "" : "[animation-play-state:paused]"}`}
                  >
                    <Image src={src} alt="" fill preload={i === 0} sizes="100vw" className="object-cover" />
                  </div>
                </motion.div>
              ),
          )}
        </motion.div>
      </motion.div>

      {/* Emerald & onyx atmosphere */}
      <div aria-hidden className="absolute inset-0 bg-verdant-900/40 mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-onyx-950/85 via-onyx-950/45 to-onyx-950" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.5)_60%,rgba(5,5,5,0.92)_100%)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[40rem] w-[60rem] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-verdant-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 hidden opacity-[0.08] mix-blend-overlay md:block"
      />

      {/* Vertical side label */}
      <p
        aria-hidden
        className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 rotate-180 text-[0.6rem] uppercase tracking-[0.5em] text-ivory/45 [writing-mode:vertical-rl] md:block xl:left-10"
      >
        Haute Horlogerie · Swiss Made
      </p>

      {/* Center content */}
      <motion.div
        className="container-lux relative z-10 flex flex-col items-center text-center"
        style={desktop ? { y: contentY, opacity: contentOpacity } : undefined}
      >
        <motion.div
          className="flex items-center gap-3 sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <span className="h-px w-8 bg-verdant-400/70 sm:w-16" />
          <p className="eyebrow">
            Kuruluş {brand.founded} · {brand.city}
          </p>
          <span className="h-px w-8 bg-verdant-400/70 sm:w-16" />
        </motion.div>

        <h1 className="mt-6 sm:mt-8">
          <span className="sr-only">{brand.name}</span>
          <span aria-hidden className="brand-wordmark relative inline-block text-ivory">
            <span className="flex [text-shadow:0_0_60px_rgba(80,200,120,0.35)]">
              {brand.name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.35em", filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                  transition={{ duration: 1.3, delay: 0.45 + i * 0.09, ease }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <motion.span
              className={`text-sweep animate-shimmer pointer-events-none absolute inset-0 hidden desktop:block ${
                inView ? "" : "[animation-play-state:paused]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
            >
              {brand.name}
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-6 h-px w-40 bg-linear-to-r from-transparent via-verdant-400 to-transparent sm:w-72"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease }}
        />

        <motion.p
          className="mt-6 font-serif text-2xl font-light italic text-ivory/90 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
        >
          {brand.tagline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-md text-sm leading-relaxed text-mist sm:max-w-xl sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.55, ease }}
        >
          {brand.description}
        </motion.p>

        <motion.div
          className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease }}
        >
          <a
            href="#koleksiyon"
            className="inline-flex min-h-12 items-center justify-center bg-verdant-600 px-8 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ivory shadow-[0_0_40px_-8px_rgba(80,200,120,0.6)] transition-colors hover:bg-verdant-500"
          >
            Koleksiyonu Keşfet
          </a>
          <a
            href="#hikaye"
            className="inline-flex min-h-12 items-center justify-center border border-ivory/25 bg-white/10 px-8 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ivory transition desktop:bg-white/5 desktop:backdrop-blur-md hover:border-verdant-400 hover:text-verdant-300"
          >
            Hikayemiz
          </a>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-5 z-10 hidden items-center gap-5 md:flex xl:right-10">
        {heroImages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => show(i)}
            aria-label={`${i + 1}. görsele geç`}
            aria-current={i === active}
            className="group flex min-h-11 items-center gap-2.5 text-[0.65rem] tracking-[0.2em]"
          >
            <span
              className={`transition-colors ${i === active ? "text-ivory" : "text-ivory/40 group-hover:text-ivory/70"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`h-px transition-all duration-700 ${i === active ? "w-10 bg-verdant-400" : "w-4 bg-white/30"}`}
            />
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#hikaye"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-ivory/60 transition-colors hover:text-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <span className="pl-[0.4em]">Kaydır</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15">
          <span
            className={`animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-verdant-400 ${
              inView ? "" : "[animation-play-state:paused]"
            }`}
          />
        </span>
      </motion.a>
    </section>
  );
}
