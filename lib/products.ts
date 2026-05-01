export type ProductStatus = "live" | "beta" | "in development";

export type Product = {
  slug: "wavee" | "lolreview";
  number: "01" | "02";
  name: string;
  tagline: string;
  blurb: string;
  status: ProductStatus;
  url?: string;
  repo?: string;
  stack: string[];
  accent: string;
  hero: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  features: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "wavee",
    number: "01",
    name: "Wavee",
    tagline: "A Spotify client for Windows, redesigned.",
    blurb:
      "An open-source desktop client for Spotify, built from a clean-room reimplementation of the Access Point, Connect, Mercury, and metadata protocols. Wraps everything in a polished WinUI 3 interface with Spotify Connect, synced lyrics, music videos, and a 10-band EQ.",
    status: "beta",
    repo: "https://github.com/", // TODO: fill in
    stack: [".NET 10", "WinUI 3", "C#", "Rx.NET", "SQLite", "BASS", "Protobuf"],
    accent: "#1DB954",
    hero: {
      src: "/products/wavee/hero.png",
      alt: "Wavee desktop client showing the home view with album art and player controls",
    },
    gallery: [
      {
        src: "/products/wavee/gallery-1.png",
        alt: "Wavee artist and album view in dark theme",
      },
      {
        src: "/products/wavee/gallery-2.png",
        alt: "Wavee album detail view with track list",
      },
      {
        src: "/products/wavee/gallery-3.png",
        alt: "Wavee music video and lyrics view",
      },
    ],
    features: [
      {
        title: "Native, fluent, fast",
        body: "Built on WinUI 3 and the Windows App SDK. Tab-style navigation, transparent surfaces, and Mica/Acrylic done right.",
      },
      {
        title: "Spotify, all of it",
        body: "Connect, lyrics, music videos, library, search, recommendations — implemented from the ground up against Spotify's own protocols.",
      },
      {
        title: "Open source",
        body: "Permissively licensed and shipping in beta. Issues, PRs, and forks welcome.",
      },
    ],
  },
  {
    slug: "lolreview",
    number: "02",
    name: "LOL Review",
    tagline: "Async coaching for League of Legends. High-elo, low-cost.",
    blurb:
      "A SaaS platform that pairs ranked players with verified Challenger and Grandmaster coaches. Players submit a Game ID; coaches return timestamped, written feedback within 24–48 hours. No calls, no scheduling, no awkward live sessions.",
    status: "live",
    url: "https://lolreview.com",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Riot API",
      "Vercel",
    ],
    accent: "#C89B3C",
    hero: {
      src: "/products/lolreview/hero.png",
      alt: "LOL Review marketing graphic",
    },
    gallery: [],
    features: [
      {
        title: "Verified coaches only",
        body: "Every coach is hand-vetted and rank-verified. No teaching from anyone who hasn't been there.",
      },
      {
        title: "Timestamped written feedback",
        body: "Reviews arrive as a structured document tied to specific moments in the match — readable, searchable, and revisitable.",
      },
      {
        title: "Asynchronous by design",
        body: "Submit a Game ID, get a review back in 24–48 hours. Built for players whose schedule does not match a coach's calendar.",
      },
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
