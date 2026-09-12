import { defineConfig } from "blume";

export default defineConfig({
  title: "Blume Playground",
  description: "Documentation powered by Blume.",
  content: {
    root: "content",
  },
  deployment: {
    site: "https://cbossi.github.io",
    base: "/blume-playground",
  },
});
