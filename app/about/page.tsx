import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description: "About the person behind cproducts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-6">
        About
      </div>
      <h1 className="font-display text-6xl sm:text-7xl tracking-tight leading-[0.95] mb-10">
        A one-person studio in Utrecht,{" "}
        <span className="italic text-accent">building products I actually use.</span>
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/90 max-w-2xl">
        <p>
          cproducts is where I put the products I build from {site.city}. It is one
          person, two projects, and no formal roadmap. I work on the parts that feel
          worth solving, then ship when they are usable.
        </p>

        <p>
          Right now that means <strong>Wavee</strong>, an open-source Spotify desktop
          client for Windows that is still in development, and <strong>LOL Review</strong>,
          a League of Legends review tool that is archived and offline for now.
        </p>

        <p>
          Most days, the work is protocol code, interface design, payments, and maintenance.
          cproducts is a registered Dutch business (cproducts, KvK {site.kvk}, BTW{" "}
          {site.btw}), so contracts, invoices, and payouts have a proper home.
        </p>

        <p>
          Outside cproducts, I work full-time as a Senior Software Engineer at{" "}
          <a
            href="https://isoplanner.app"
            className="text-foreground underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >
            ISOPlanner
          </a>
          , a SaaS product for ISO compliance, audits, tasks, documents, and operational
          workflows. That is professional work rather than a cproducts project, but it is
          part of the same day-to-day product engineering context.
        </p>

        <p>
          For product questions, collaboration, or something technical that needs a straight
          answer, email{" "}
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
