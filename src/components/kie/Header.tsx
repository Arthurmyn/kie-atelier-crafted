import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { categories } from "@/lib/kie-data";

const icons = [
  { Icon: Search, label: "Поиск" },
  { Icon: User, label: "Профиль" },
  { Icon: Heart, label: "Избранное" },
  { Icon: ShoppingBag, label: "Корзина" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-4 py-4 md:px-8">
        <span className="hidden text-[11px] tracking-[0.18em] text-muted-foreground uppercase sm:block">
          Est. 2026
        </span>
        <Link
          to="/"
          className="font-display justify-self-start text-2xl leading-none font-semibold tracking-tight transition-colors hover:text-accent sm:justify-self-center"
        >
          kie
        </Link>
        <div className="flex items-center justify-end gap-4">
          {icons.map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="text-foreground transition-colors hover:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
            </button>
          ))}
        </div>
      </div>

      <nav className="hairline-t">
        <ul className="mx-auto flex max-w-[1400px] snap-x gap-6 overflow-x-auto px-4 py-3 text-[12px] tracking-[0.12em] uppercase md:justify-center md:px-8 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <li key={category.href} className="shrink-0 snap-start">
              <a
                href={category.href}
                className="text-foreground transition-colors hover:text-accent"
              >
                {category.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hairline-t" />
    </header>
  );
}
