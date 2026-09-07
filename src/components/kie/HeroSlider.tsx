import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/kie-data";

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active] ?? heroSlides[0]!;

  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8">
      <div className="grid gap-8 py-10 md:grid-cols-2 md:items-center md:py-16">
        <div className="min-w-0">
          <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-5 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {slide.kicker}
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed">{slide.quote}</p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
            {slide.note}
          </p>
          <a
            href={slide.href}
            className="mt-8 inline-block border-b border-foreground pb-1 text-[12px] tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Смотреть коллекцию
          </a>

          <div className="mt-10 flex gap-2">
            {heroSlides.map((s, index) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Слайд ${index + 1}`}
                aria-current={index === active}
                className={`h-[6px] w-8 transition-colors ${
                  index === active ? "bg-foreground" : "bg-foreground/25"
                } hover:bg-accent`}
              />
            ))}
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden bg-surface">
          <img
            src={slide.image}
            alt={`Коллекция ${slide.title}`}
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
