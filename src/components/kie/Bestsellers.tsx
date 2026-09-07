import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { bestsellers, formatPrice } from "@/lib/kie-data";

export function Bestsellers() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h2 className="truncate text-[13px] tracking-[0.18em] uppercase">
          Бестселлеры
        </h2>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Назад"
            onClick={() => scrollBy(-1)}
            className="border border-border p-2 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => scrollBy(1)}
            className="border border-border p-2 transition-colors hover:text-accent"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {bestsellers.map((product) => (
          <article
            key={product.name}
            className="w-[70%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]"
          >
            <a href="/catalog" className="group block">
              <div className="aspect-square w-full bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-sm transition-colors group-hover:text-accent">
                {product.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{product.spec}</p>
              <p className="mt-2 text-sm text-price">{formatPrice(product.price)}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
