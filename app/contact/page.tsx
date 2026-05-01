import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with cproducts.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-6">
        Contact
      </div>
      <h1 className="font-display text-6xl sm:text-7xl tracking-tight leading-[0.95] mb-10">
        Say hello.
      </h1>

      <div className="space-y-10 max-w-2xl">
        <div className="space-y-3">
          <p className="text-lg text-muted leading-relaxed">
            Email is the fastest way to reach me. I read everything and reply when I
            have a useful answer.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 font-display text-3xl sm:text-4xl tracking-tight italic text-accent underline decoration-rule-soft underline-offset-8 hover:decoration-accent"
          >
            {site.email}
            <span className="not-italic">{"->"}</span>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 pt-8 border-t border-rule-soft text-sm">
          <div>
            <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-2">
              Studio
            </div>
            <div className="space-y-0.5">
              <div>{site.legalName}</div>
              <div className="text-muted">{site.city}</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-2">
              Registered
            </div>
            <div className="space-y-0.5 font-mono tabular">
              <div>KvK {site.kvk}</div>
              <div>BTW {site.btw}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
