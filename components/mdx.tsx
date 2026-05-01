import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-5xl sm:text-6xl tracking-tight mt-12 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-2xl sm:text-3xl tracking-tight mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-relaxed text-foreground/90 mb-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    const className =
      "text-foreground underline decoration-rule-soft underline-offset-4 hover:decoration-accent";
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? "#"} className={className}>
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-lg leading-relaxed text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-lg leading-relaxed text-foreground/90">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent pl-5 my-6 italic text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-[0.9em] bg-surface-2 px-1.5 py-0.5 rounded">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="font-mono text-sm bg-surface-2 border border-rule-soft rounded-md p-4 overflow-x-auto my-6">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-12 border-rule-soft" />,
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      width={1200}
      height={630}
      className="w-full h-auto rounded-md border border-rule-soft my-6"
      alt={props.alt ?? ""}
    />
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};
