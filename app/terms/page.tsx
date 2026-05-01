import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for cproducts.dev.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-6">
        Terms
      </div>
      <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.95] mb-10">
        Terms of use
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          {site.url.replace(/^https?:\/\//, "")} is a portfolio site operated by{" "}
          {site.legalName} (KvK {site.kvk}, BTW {site.btw}, {site.city}). Using the site means
          you accept these terms.
        </p>

        <h2 className="font-display text-2xl mt-10">Content</h2>
        <p>
          The text and images on this site are © {new Date().getFullYear()} {site.legalName}{" "}
          unless stated otherwise. You are welcome to link to any page. Quoting short passages
          with attribution is fine. Wholesale copying is not.
        </p>
        <p>
          The products described here have their own terms. See their respective sites.
        </p>

        <h2 className="font-display text-2xl mt-10">No warranty</h2>
        <p>
          The site is provided as-is. We do not guarantee uptime or that everything is current,
          accurate, or correct. If something is wrong, let us know at{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>
          .
        </p>

        <h2 className="font-display text-2xl mt-10">Liability</h2>
        <p>
          To the maximum extent permitted by Dutch law, {site.legalName} is not liable for any
          loss arising from use of this site.
        </p>

        <h2 className="font-display text-2xl mt-10">Governing law</h2>
        <p>
          These terms are governed by the laws of the Netherlands. Disputes go to the
          competent court in Utrecht.
        </p>

        <p className="text-sm text-muted pt-8 border-t border-rule-soft">
          Last updated: {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
