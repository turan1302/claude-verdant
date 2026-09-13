"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// Front-end only: shows a confirmation without sending the address anywhere.
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p role="status" className="flex items-center gap-4 text-sm text-ivory sm:text-base">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-verdant-600">
          <Check className="size-5" strokeWidth={1.75} />
        </span>
        Teşekkürler! <span className="text-verdant-300">{email}</span> adresi bültenimize eklendi.
      </p>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="w-full"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        E-posta adresiniz
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:border-b sm:border-white/20 sm:focus-within:border-verdant-400">
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-posta adresiniz"
          className="min-h-12 w-full border-b border-white/20 bg-transparent px-1 text-base text-ivory outline-none transition-colors placeholder:text-mist/70 focus:border-verdant-400 sm:border-0"
        />
        <button
          type="submit"
          className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-verdant-600 px-8 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-verdant-500"
        >
          Abone Ol
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-mist">
        Abone olarak KVKK Aydınlatma Metni&apos;ni okuduğunuzu kabul etmiş olursunuz.
      </p>
    </form>
  );
}
