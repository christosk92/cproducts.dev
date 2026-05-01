import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Privacy policy for cproducts.dev.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 sm:px-10 pt-20 pb-24">
      <div className="text-xs font-mono tabular text-muted uppercase tracking-widest mb-6">
        Privacy
      </div>
      <h1 className="font-display text-5xl sm:text-6xl tracking-tight leading-[0.95] mb-10">
        Privacy policy
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          This policy covers <strong>{site.url.replace(/^https?:\/\//, "")}</strong>, operated by{" "}
          {site.legalName} (KvK {site.kvk}, BTW {site.btw}, {site.city}). Individual
          products linked from this site have their own policies.
        </p>

        <h2 className="font-display text-2xl mt-10">What we collect</h2>
        <p>
          We use <a
            href="https://vercel.com/docs/analytics"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >Vercel Web Analytics</a> to understand which pages people visit. It records the
          pathname, referrer, country, and device type. It does not use cookies and does not
          identify individual visitors.
        </p>
        <p>
          The site is hosted on Vercel, which records standard server logs (IP address,
          user agent, request path). These logs are retained by Vercel for a short period and
          are not joined with any other data we hold.
        </p>

        <h2 className="font-display text-2xl mt-10">What we do not do</h2>
        <p>
          We do not run advertising trackers, fingerprinting, A/B testing, or any third-party
          analytics beyond what is listed above. We do not sell or share any data.
        </p>

        <h2 className="font-display text-2xl mt-10">Email</h2>
        <p>
          If you email us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>
          , we keep that correspondence as long as it is useful and delete it when it is not.
        </p>

        <h2 className="font-display text-2xl mt-10">Your rights</h2>
        <p>
          Under the GDPR you can ask us what we hold, ask us to correct or delete it, or
          object to our use of it. Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>{" "}
          and we will respond within 30 days.
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
