import { Instagram } from "lucide-react";
import { categories, collections, jewelryWorld } from "@/lib/kie-data";
import atelierEnamel from "@/assets/atelier-enamel.jpg";
import aboutAtelier from "@/assets/about-atelier.jpg";
import detailChain from "@/assets/detail-chain.jpg";
import lifestyleEar from "@/assets/lifestyle-ear.jpg";
import lifestyleHand from "@/assets/lifestyle-hand.jpg";
import heroCollection from "@/assets/hero-collection.jpg";
import productEarrings from "@/assets/product-earrings.jpg";

export function Divider() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 md:px-8">
      <div className="hairline-t" />
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[13px] tracking-[0.18em] uppercase">{children}</h2>
  );
}

export function BrandMarquee() {
  const items = [...jewelryWorld, ...jewelryWorld];
  return (
    <section className="overflow-hidden py-8">
      <p className="mx-auto max-w-[1400px] px-4 text-[11px] tracking-[0.2em] text-muted-foreground uppercase md:px-8">
        Ювелирный мир
      </p>
      {/* Атмосферный контекст, а не список брендов, которые мы продаём. */}
      <div className="mt-5 flex w-[200%] marquee-track">
        {items.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="shrink-0 px-8 text-xs tracking-[0.12em] whitespace-nowrap text-muted-foreground uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Collections() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <SectionTitle>Популярные коллекции</SectionTitle>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {collections.map((collection) => (
          <a
            key={collection.title}
            href={collection.href}
            className="group relative block aspect-square overflow-hidden bg-surface"
          >
            <img
              src={collection.image}
              alt={collection.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 pt-16">
              <h3 className="font-display text-2xl font-semibold text-background">
                {collection.title}
              </h3>
              <p className="mt-1 text-xs text-background/80">
                {collection.description}
              </p>
              <span className="mt-3 inline-block border-b border-background/60 pb-0.5 text-[11px] tracking-[0.16em] text-background uppercase group-hover:border-accent group-hover:text-accent">
                Смотреть
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Lookbook() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <SectionTitle>Мир kie</SectionTitle>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="md:row-span-2">
          <img
            src={lifestyleEar}
            alt="Серьга на ухе"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-surface p-6 md:col-span-2">
          <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Техника
          </p>
          <p className="mt-4 text-xl leading-snug">
            Ручная роспись эмалью по металлу
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Каждый слой наносится вручную и обжигается отдельно. Одна и та же
            рука ведёт модель от эскиза до полировки.
          </p>
        </div>
        <img
          src={atelierEnamel}
          alt="Роспись эмалью в ателье"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
        <img
          src={detailChain}
          alt="Макро: звено цепи"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="min-w-0">
          <SectionTitle>О доме</SectionTitle>
          <p className="mt-6 max-w-md leading-relaxed">
            kie — ювелирный дом Нургуль Утеп. Ателье в Астане: небольшие партии
            вместо массовой витрины, форма важнее орнамента, качество металла
            важнее количества камней.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Один и тот же мастер ведёт модель от эскиза до полировки. Поэтому
            многие вещи существуют в единственном экземпляре — повторить их
            точно невозможно.
          </p>
        </div>
        <img
          src={aboutAtelier}
          alt="Верстак ювелира в ателье"
          loading="lazy"
          width={1280}
          height={1024}
          className="aspect-[5/4] w-full object-cover"
        />
      </div>
    </section>
  );
}

export function OnPerson() {
  const shots = [
    { src: lifestyleHand, alt: "Кольцо и браслет на руке" },
    { src: productEarrings, alt: "Серьги с эмалью, деталь" },
    { src: heroCollection, alt: "Украшения крупным планом" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <SectionTitle>На человеке</SectionTitle>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {shots.map((shot) => (
          <img
            key={shot.alt}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full bg-surface object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export function AllCategories() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <SectionTitle>Все категории</SectionTitle>
      <ul className="mt-8 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.href}>
            <a
              href={category.href}
              className="transition-colors hover:text-accent"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div className="min-w-0">
          <SectionTitle>Подписка на новости</SectionTitle>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Письма о новых партиях и коллекциях. Без частых рассылок.
          </p>
        </div>
        <form
          className="flex gap-0"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="E-mail"
            aria-label="E-mail"
            className="min-w-0 flex-1 border border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground"
          />
          <button
            type="submit"
            className="shrink-0 bg-foreground px-6 py-3 text-[12px] tracking-[0.16em] text-background uppercase transition-colors hover:bg-accent"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-4xl font-semibold">kie</p>
          <p className="mt-3 text-xs text-background/60">
            Единичные экземпляры. Единственные в своём роде.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-background/60 uppercase">
            О доме
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-accent">
                Ателье
              </a>
            </li>
            <li>
              <a href="/collections" className="hover:text-accent">
                Коллекции
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-background/60 uppercase">
            Клиентам
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/catalog" className="hover:text-accent">
                Каталог
              </a>
            </li>
            <li>
              <a href="/care" className="hover:text-accent">
                Уход за украшениями
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-background/60 uppercase">
            Контакты
          </p>
          {/* Подтверждён только Instagram — телефон и e-mail не добавляем. */}
          <p className="mt-4 text-sm text-background/80">Астана, Казахстан</p>
          <a
            href="https://instagram.com/kie.kz"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-accent"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
            @kie.kz
          </a>
        </div>
      </div>
      <div className="border-t border-background/20">
        <p className="mx-auto max-w-[1400px] px-4 py-6 text-[11px] text-background/50 md:px-8">
          © 2026 kie
        </p>
      </div>
    </footer>
  );
}
