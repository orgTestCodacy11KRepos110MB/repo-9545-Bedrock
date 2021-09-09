module.exports = {
  stories: [
    "./pages/Landing.stories.mdx",
    "./pages/introduction.stories.mdx",
    "./pages/installation.stories.mdx",
    "./pages/stack.stories.mdx",
    "./pages/spacing.stories.mdx",
    "../packages/**/examples/*.stories.(js|ts|tsx|mdx)",
    "./pages/contributing.stories.mdx",
    "../examples/examples.stories.mdx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],
};
