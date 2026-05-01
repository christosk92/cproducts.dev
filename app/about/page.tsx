import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description: "About cproducts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-6">
        About
      </div>
      <h1 className="font-display text-6xl sm:text-7xl tracking-tight leading-[0.95] mb-10">
        An indie studio of one,{" "}
        <span className="italic text-accent">making things on purpose.</span>
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
        <p>
          cproducts is the umbrella for the products I build out of {site.city}. The studio is
          deliberately small — one person, two products, no roadmap committee. The goal is to
          ship things that should exist and that I'd want to use.
        </p>

        <p>
          Today that means <strong>Wavee</strong>, an open-source Spotify desktop client for
          Windows reimplemented from the protocols up, and <strong>LOL Review</strong>, an
          asynchronous coaching marketplace that pairs ranked players with verified
          high-elo coaches.
        </p>

        <p>
          The work spans low-level protocol implementations, interface design, payments
          infrastructure, and the occasional weekend rewrite. It's run as a registered Dutch
          business (cproducts, KvK {site.kvk}, BTW {site.btw}) so contracts, invoices, and
          payouts can all happen properly.
        </p>

        <p>
          If you want to talk about either product, a collaboration, or a technical question
          you can't get a straight answer to elsewhere — drop a note at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
