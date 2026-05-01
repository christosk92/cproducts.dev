export const site = {
  name: "cproducts",
  url: "https://cproducts.dev",
  legalName: "cproducts",
  description:
    "Software for things that should exist. Indie products from Utrecht.",
  city: "Utrecht, Netherlands",
  email: "hello@cproducts.dev",
  kvk: "98954148",
  btw: "NL005363432B71",
  social: {
    github: "https://github.com/", // TODO: set username
    x: "",
  },
} as const;

export type Site = typeof site;
