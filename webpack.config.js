const path = require("path");

module.exports = {
  entry: "./dist/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "lib"),
      "node_modules",
    ],
    alias: {
      "@/react": path.resolve(__dirname, "./lib/"),
      "@/src": path.resolve(__dirname, "./src/"),
    },
  },
  mode: "development",
};
