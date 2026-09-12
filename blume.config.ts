import { defineConfig } from "blume";

// Set by the GitHub Actions workflow so local builds stay at the root path.
const githubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  title: "Blume Playground",
  description: "Documentation powered by Blume.",
  content: {
    root: "content",
  },
  deployment: githubPages
    ? {
        site: "https://cbossi.github.io",
        base: "/blume-playground",
      }
    : {},
});
