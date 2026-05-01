export type ProductStatus = "live" | "beta" | "in development" | "postponed";

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
  version?: string;
  requirements?: string[];
  overview?: string[];
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
    version: "0.1.0-beta",
    repo: "https://github.com/", // TODO: fill in
    stack: [
      ".NET 10",
      "WinUI 3",
      "C#",
      "Rx.NET",
      "SQLite",
      "BASS",
      "Protobuf",
      "Shannon",
    ],
    accent: "#1DB954",
    overview: [
      "The official Spotify desktop client is the same Chromium app the website is, wrapped. It works, but it doesn't feel like a Windows app, and there's no way to extend or customise the experience without going around the company.",
      "Wavee takes the other path: a from-scratch implementation of Spotify's own protocols — Access Point, Connect, Mercury, and the metadata APIs — wired up to a native WinUI 3 interface. It speaks the same language Spotify's official clients do; it just chose to draw a different face on top.",
      "It's open source, runs on .NET 10, ships in beta, and gets weekly improvements. A Spotify Premium account is required because the protocols require one.",
    ],
    requirements: [
      "Windows 11, version 24H2 (build 26100) or later",
      "An active Spotify Premium account",
      "x64 or ARM64",
    ],
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
        title: "Clean-room protocol stack",
        body: "Access Point, Connect, Mercury, and metadata protocols reimplemented from observed wire behaviour — no Spotify SDK or proprietary code touched.",
      },
      {
        title: "Native, fluent, fast",
        body: "Built on WinUI 3 and the Windows App SDK. Tab-style navigation, transparent Mica surfaces, and 60fps scroll on a long library.",
      },
      {
        title: "Spotify Connect, both directions",
        body: "Cast to and from Wavee like any other Spotify endpoint. Hand off between phone, browser, and desktop without missing a beat.",
      },
      {
        title: "Synced lyrics with shaders",
        body: "Word-by-word synced lyrics with shader-driven visuals that react to the track. Optional per-line translations.",
      },
      {
        title: "Music videos and 10-band EQ",
        body: "Built-in playback for the official music videos Spotify ships, plus a real 10-band parametric equalizer for the audio path.",
      },
      {
        title: "On-device AI on Copilot+",
        body: "On Copilot+ PCs, several features (smart search, mood mixing, recommendation explanations) run locally on-device — fast and private.",
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
    status: "postponed",
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
    overview: [
      "The thesis was simple: high-elo players will pay for review feedback, but they don't want a 60-minute call at 9pm. They want a thoughtful written review delivered overnight.",
      "The platform shipped, processed real orders, and the marketplace mechanics worked. It is currently postponed — the public site stays online as an archive, but new orders and coach onboarding are paused while focus shifts elsewhere.",
    ],
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
