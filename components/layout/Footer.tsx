import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { brand, contact, footerLinks } from "@/lib/data";
import NewsletterForm from "./NewsletterForm";

const socials = [
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    icon: <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5a.5.5 0 0 1 .5-.5z" />,
  },
  {
    label: "YouTube",
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "X",
    icon: <path d="M4 4h4.5L20 20h-4.5zM20 4l-6.8 7.4M4 20l6.8-7.4" />,
  },
];

const legalLinks = ["KVKK Aydınlatma Metni", "Gizlilik Politikası", "Kullanım Koşulları", "Çerez Tercihleri"];

export default function Footer() {
  return (
    <footer id="iletisim" className="relative overflow-hidden border-t border-white/5 bg-onyx-950">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-verdant-500/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[50rem] max-w-full -translate-x-1/2 rounded-full bg-verdant-800/30 blur-[120px]"
      />

      <div className="container-lux relative">
        {/* Newsletter */}
        <div className="grid items-center gap-10 border-b border-white/10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Bülten</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Özel lansmanlardan <em className="text-emerald-gradient pr-[0.08em]">ilk siz</em> haberdar olun
            </h2>
          </div>
          <NewsletterForm />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-4 lg:gap-8 xl:grid-cols-12">
          <div className="col-span-2 lg:col-span-4 xl:col-span-3">
            <a href="#top" className="font-serif text-3xl font-light tracking-[0.35em] text-ivory">
              {brand.name}
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">{brand.description}</p>
            <ul className="mt-8 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 text-ivory/80 transition hover:border-verdant-400 hover:bg-verdant-600 hover:text-ivory"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-[18px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="xl:col-span-2">
              <h3 className="eyebrow">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ivory/70 transition-colors hover:text-verdant-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1 xl:col-span-3">
            <h3 className="eyebrow">İletişim</h3>
            <ul className="mt-6 space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-verdant-400" strokeWidth={1.5} />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-verdant-400" strokeWidth={1.5} />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-verdant-300">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-verdant-400" strokeWidth={1.5} />
                <a href={`mailto:${contact.email}`} className="[overflow-wrap:anywhere] hover:text-verdant-300">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-verdant-400" strokeWidth={1.5} />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 border-t border-white/10 py-8 text-center text-xs text-mist lg:flex-row lg:justify-between lg:text-left">
          <p>
            © {new Date().getFullYear()} {brand.name} Haute Horlogerie. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-ivory">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-verdant-400" strokeWidth={1.5} />
            256-bit SSL ile güvenli ödeme
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[3vw] select-none whitespace-nowrap text-center font-serif text-[16vw] font-light leading-none tracking-[0.05em] text-white/[0.035]"
      >
        {brand.name}
      </p>
    </footer>
  );
}
