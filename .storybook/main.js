const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
  framework: "@storybook/react",
  logLevel: "debug",
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\,css&/,
      use: [{
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [require("tailwindcss"), require("autoprefixer")]
        }
      }],
      include: path.resolve(__dirname, "../")
    });
    return config;
  },
  core: {
    builder: "webpack5"
  }
};