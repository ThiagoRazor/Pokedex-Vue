module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        dirs: [
          "src/components/elements",
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
  },
};
