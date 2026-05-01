export type ProductStatus = "live" | "in development" | "archived";

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
    tagline: "A native-feeling Spotify client for Windows, in development.",
    blurb:
      "An open-source Spotify desktop client in development, built around a clean-room implementation of Access Point, Connect, Mercury, and the metadata APIs. The goal is a native WinUI 3 interface with Spotify Connect, synced lyrics, music videos, and a 10-band EQ.",
    status: "in development",
    repo: "https://github.com/christosk92/WaveeMusic",
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
      "Spotify's official desktop app works, but it still feels like the website in a wrapper. I wanted a client that felt at home on Windows and left room for the features I wanted.",
      "Wavee implements Spotify's protocols from scratch: Access Point, Connect, Mercury, and the metadata APIs. It speaks to Spotify like the official clients do, then draws its own WinUI 3 interface on top.",
      "It is open source, runs on .NET 10, and is still in development. A Spotify Premium account is required because the underlying protocols require one.",
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
        body: "Access Point, Connect, Mercury, and metadata APIs implemented from observed wire behaviour. No Spotify SDK or proprietary client code in the tree.",
      },
      {
        title: "Native, fluent, fast",
        body: "Built with WinUI 3 and the Windows App SDK, with tab navigation, Mica surfaces, and smooth scrolling through large libraries.",
      },
      {
        title: "Spotify Connect, both directions",
        body: "Cast to and from Wavee like any other Spotify endpoint. Hand off between phone, browser, and desktop without interrupting playback.",
      },
      {
        title: "Synced lyrics with shaders",
        body: "Word-by-word synced lyrics, shader-backed visuals, and optional per-line translations.",
      },
      {
        title: "Music videos and 10-band EQ",
        body: "Playback for Spotify's official music videos, plus a 10-band parametric equalizer in the audio path.",
      },
      {
        title: "On-device AI on Copilot+",
        body: "On Copilot+ PCs, smart search, mood mixing, and recommendation notes can run locally on-device.",
      },
    ],
  },
  {
    slug: "lolreview",
    number: "02",
    name: "LOL Review",
    tagline: "Archived League review tool. Offline for now.",
    blurb:
      "A SaaS platform where ranked players could send a Game ID and get written review notes from verified Challenger and Grandmaster coaches. It is archived for now, the domain is revoked, and new orders are closed.",
    status: "archived",
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
      "The idea was simple: some players want higher level review, but not a 60-minute call at 9pm. A written review fits how they already play and learn.",
      "The platform shipped, took real orders, and the marketplace flow worked. It is archived now, and the domain is revoked for the moment. I want to bring it back later, but it is offline while I focus on Wavee.",
    ],
    hero: {
      src: "/products/lolreview/hero.png",
      alt: "LOL Review marketing graphic",
    },
    gallery: [],
    features: [
      {
        title: "Verified coaches only",
        body: "Coaches were hand-vetted and rank-verified before taking reviews.",
      },
      {
        title: "Timestamped written feedback",
        body: "Reviews came back as a structured document tied to specific moments in the match, so players could reread and search them later.",
      },
      {
        title: "Asynchronous by design",
        body: "Players submitted a Game ID and got a review back in 24 to 48 hours, without matching a coach's calendar.",
      },
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
