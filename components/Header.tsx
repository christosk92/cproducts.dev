import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_70%,transparent)] border-b border-rule-soft">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight hover:text-accent transition-colors"
        >
          cproducts<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm tabular">
          <Link
            href="/#work"
            className="hover:text-accent transition-colors"
          >
            work
          </Link>
          <Link
            href="/blog"
            className="hover:text-accent transition-colors"
          >
            writing
          </Link>
          <Link
            href="/about"
            className="hover:text-accent transition-colors"
          >
            about
          </Link>
          <Link
            href="/contact"
            className="hover:text-accent transition-colors"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
