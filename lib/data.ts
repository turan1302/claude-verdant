export type Product = {
  id: string;
  name: string;
  collection: string;
  specs: string;
  price: number;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  product: string;
  quote: string;
  rating: number;
};

// Base URL only: lib/unsplash-loader.ts adds the width and quality per srcset entry.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const brand = {
  name: "VERDANT",
  founded: 1887,
  city: "Cenevre",
  tagline: "Zamanın Ötesinde Zarafet",
  description:
    "1887'den bu yana Cenevre atölyemizde, her biri yüzlerce saatlik el işçiliğiyle hayat bulan haute horlogerie saatler.",
};

export const navLinks = [
  { label: "Koleksiyon", href: "#koleksiyon" },
  { label: "Hikayemiz", href: "#hikaye" },
  { label: "Yeni Gelenler", href: "#yeni" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export const heroImages = [
  unsplash("1587836374828-4dbafa94cf0e"),
  unsplash("1612817159949-195b6eb9e31a"),
  unsplash("1548171915-e79a380a2a4b"),
];

export const aboutVideo = {
  src: "https://videos.pexels.com/video-files/11965317/11965317-hd_1280_720_24fps.mp4",
  // Not rendered through next/image, so it carries its own size.
  poster: `${unsplash("1622434641406-a158123450f9")}?auto=format&fit=crop&w=900&q=60`,
};

export const featuredProducts: Product[] = [
  {
    id: "emeraude-kronograf",
    name: "Émeraude Kronograf",
    collection: "Émeraude",
    specs: "41 mm · Otomatik",
    price: 485000,
    image: unsplash("1629581678313-36cf745a9af9"),
  },
  {
    id: "heritage-1887",
    name: "Heritage 1887",
    collection: "Heritage",
    specs: "39 mm · Kurmalı",
    price: 392000,
    image: unsplash("1620625515032-6ed0c1790c75"),
  },
  {
    id: "nocturne-tourbillon",
    name: "Nocturne Tourbillon",
    collection: "Nocturne",
    specs: "43 mm · Tourbillon",
    price: 1250000,
    image: unsplash("1614164185128-e4ec99c436d7"),
  },
  {
    id: "monarch-automatique",
    name: "Monarch Automatique",
    collection: "Monarch",
    specs: "40 mm · Otomatik",
    price: 318000,
    image: unsplash("1547996160-81dfa63595aa"),
  },
  {
    id: "atelier-classique",
    name: "Atelier Classique",
    collection: "Atelier",
    specs: "38 mm · Otomatik",
    price: 264000,
    image: unsplash("1557531365-e8b22d93dbd0"),
  },
  {
    id: "abyssal-diver",
    name: "Abyssal Diver 300",
    collection: "Abyssal",
    specs: "42 mm · 300 m",
    price: 356000,
    image: unsplash("1526045431048-f857369baa09"),
  },
];

export const newArrivals: Product[] = [
  {
    id: "rose-kronograf",
    name: "Rosé Kronograf",
    collection: "Rosé",
    specs: "40 mm · Otomatik",
    price: 298000,
    image: unsplash("1522312346375-d1a52e2b99b3"),
  },
  {
    id: "bleu-nuit",
    name: "Bleu Nuit",
    collection: "Atelier",
    specs: "41 mm · Otomatik",
    price: 274000,
    image: unsplash("1619134778706-7015533a6150"),
  },
  {
    id: "rouge-racing",
    name: "Rouge Racing",
    collection: "Monarch",
    specs: "42 mm · Kronograf",
    price: 336000,
    image: unsplash("1539874754764-5a96559165b0"),
  },
  {
    id: "panda-kronograf",
    name: "Panda Kronograf",
    collection: "Heritage",
    specs: "40 mm · Kronograf",
    price: 289000,
    image: unsplash("1542496658-e33a6d0d50f6"),
  },
  {
    id: "oceanique",
    name: "Océanique",
    collection: "Abyssal",
    specs: "44 mm · 600 m",
    price: 412000,
    image: unsplash("1523170335258-f5ed11844a49"),
  },
  {
    id: "deux-tons-diver",
    name: "Deux-Tons Diver",
    collection: "Abyssal",
    specs: "41 mm · 300 m",
    price: 445000,
    image: unsplash("1639006570490-79c0c53f1080"),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Kerem A.",
    city: "İstanbul",
    product: "Émeraude Kronograf",
    rating: 5,
    quote:
      "Kutuyu açtığım an zümrüt kadranın ışığı yakalayışı nefesimi kesti. İşçilik kusursuz, concierge ekibinin ilgisi ise saatin kendisi kadar özel.",
  },
  {
    id: "t2",
    name: "Selin D.",
    city: "Ankara",
    product: "Heritage 1887",
    rating: 5,
    quote:
      "Babamdan kalan saatin yerini hiçbir şeyin tutamayacağını düşünürdüm. Heritage 1887, aynı ruhu taşıyan ve kızıma devredeceğim bir aile yadigarı oldu.",
  },
  {
    id: "t3",
    name: "Murat Y.",
    city: "İzmir",
    product: "Nocturne Tourbillon",
    rating: 5,
    quote:
      "Tourbillon mekanizmasını safir kasa arkasından izlemek başlı başına bir deneyim. Özel teslimat ve kişisel gravür hizmeti beklentimin çok üzerindeydi.",
  },
];

export const footerLinks = [
  {
    title: "Koleksiyonlar",
    links: ["Émeraude", "Heritage", "Nocturne", "Abyssal", "Sınırlı Üretim"],
  },
  {
    title: "Kurumsal",
    links: ["Hikayemiz", "Atölye", "Kariyer", "Basın", "Sürdürülebilirlik"],
  },
  {
    title: "Hizmetler",
    links: ["Sipariş Takibi", "Bakım & Onarım", "Garanti", "İade & Değişim", "SSS"],
  },
];

export const contact = {
  address: "Abdi İpekçi Cad. No: 18, Nişantaşı, İstanbul",
  phone: "+90 212 000 18 87",
  email: "concierge@verdant.com.tr",
  hours: "Pzt – Cmt · 10:00 – 20:00",
};
