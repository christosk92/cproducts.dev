"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function HeroEditorial() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 sm:pt-32 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 text-xs font-mono tabular text-muted uppercase tracking-widest">
            <span className="block size-2 rounded-full bg-accent" />
            <span>cproducts / Utrecht</span>
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight max-w-5xl">
            Building apps{" "}
            <span className="italic text-accent">I actually</span>
            <br />
            wanted to use.
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
            I build small products from Utrecht. Right now I am working on{" "}
            <Link
              href="/work/wavee"
              className="text-foreground underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
            >
              a native Spotify client
            </Link>{" "}
            and keeping{" "}
            <Link
              href="/work/lolreview"
              className="text-foreground underline decoration-rule-soft underline-offset-4 hover:decoration-accent"
            >
              a League review tool
            </Link>
            {" "}archived for later.
          </p>

          <div className="flex items-center gap-3 pt-4 text-sm text-muted">
            <Link
              href="#work"
              className="font-mono tabular hover:text-accent transition-colors flex items-center gap-2"
            >
              <span className="inline-block w-8 h-px bg-current" />
              scroll / work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
