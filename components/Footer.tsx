import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-rule-soft">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2 space-y-3">
          <div className="font-display text-2xl">
            cproducts<span className="text-accent">.</span>
          </div>
          <p className="text-muted max-w-sm">
            Software for things that should exist. Made in {site.city.split(",")[0]}.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-muted">Site</div>
          <ul className="space-y-1.5">
            <li><Link href="/#work" className="hover:text-accent">Work</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Writing</Link></li>
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-muted">Legal</div>
          <ul className="space-y-1.5">
            <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule-soft">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted font-mono tabular">
          <div>© {year} {site.legalName} · {site.city}</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>KvK {site.kvk}</span>
            <span>BTW {site.btw}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
