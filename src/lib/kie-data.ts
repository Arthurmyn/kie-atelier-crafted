// Каталог kie.
// ВАЖНО: названия коллекций («Nur», «Dala», «Kum») и наименования товаров ниже —
// ВРЕМЕННЫЕ ПЛЕЙСХОЛДЕРЫ до подключения реального POS-каталога через Go API.
// Цены — ориентировочные медианы по категориям из экспорта каталога, не финальные прайсы.

import productRing from "@/assets/product-ring-gold.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";
import heroCollection from "@/assets/hero-collection.jpg";
import heroCollection2 from "@/assets/hero-collection-2.jpg";
import collectionSilver from "@/assets/collection-silver.jpg";

export const formatPrice = (value: number) =>
  `${value.toLocaleString("ru-RU").replace(/\u00A0/g, " ")} ₸`;

export type Product = {
  name: string;
  spec: string;
  price: number;
  image: string;
};

export const bestsellers: Product[] = [
  {
    name: "Кольцо с бриллиантом",
    spec: "Золото 585 · 3,4 г · 0,15 ct",
    price: 1_098_000,
    image: productRing,
  },
  {
    name: "Серьги с эмалью",
    spec: "Золото 585 · 5,1 г · роспись эмалью",
    price: 712_400,
    image: productEarrings,
  },
  {
    name: "Колье с подвеской",
    spec: "Золото 585 · 2,8 г",
    price: 437_600,
    image: productNecklace,
  },
  {
    name: "Браслет-жёсткий",
    spec: "Золото 585 · 12,6 г",
    price: 1_004_800,
    image: productBracelet,
  },
];

export const heroSlides = [
  {
    // латиница — набирается Archivo
    title: "Nur",
    kicker: "Новая коллекция",
    quote: "Форма важнее орнамента. Металл важнее количества камней.",
    note: "Малая партия. Один мастер ведёт модель от эскиза до полировки.",
    image: heroCollection,
    href: "/collections/nur",
  },
  {
    title: "Dala",
    kicker: "Новая коллекция",
    quote: "Единичные экземпляры. Единственные в своём роде.",
    note: "Ручная работа, ателье в Астане.",
    image: heroCollection2,
    href: "/collections/dala",
  },
];

export const collections = [
  {
    title: "Nur",
    description: "Золото, гладкие объёмы, минимум камней",
    image: heroCollection,
    href: "/collections/nur",
  },
  {
    title: "Dala",
    description: "Крупные формы, серебро и золото",
    image: heroCollection2,
    href: "/collections/dala",
  },
  {
    title: "Kum",
    description: "Серебро, матовые поверхности",
    image: collectionSilver,
    href: "/collections/kum",
  },
];

export const categories = [
  { label: "Кольца", href: "/catalog/rings" },
  { label: "Серьги", href: "/catalog/earrings" },
  { label: "Колье", href: "/catalog/necklaces" },
  { label: "Браслеты", href: "/catalog/bracelets" },
  { label: "Подвески", href: "/catalog/pendants" },
  { label: "Цепи", href: "/catalog/chains" },
  { label: "Броши", href: "/catalog/brooches" },
  { label: "Часы", href: "/catalog/watches" },
];

// Roberto Bravo и Leonardo — реальные сторонние линии в каталоге.
// Остальные имена — атмосферный контекст ювелирного мира, НЕ список брендов, которые мы продаём.
export const jewelryWorld = [
  "Roberto Bravo",
  "Cartier",
  "Leonardo",
  "Tiffany & Co.",
  "Van Cleef & Arpels",
  "Bvlgari",
  "Chopard",
  "Pandora",
  "Swarovski",
];
