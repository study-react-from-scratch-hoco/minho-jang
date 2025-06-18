const path = require("path");

module.exports = {
  entry: "./dist/main.js",
  output: {
    filename: "bundle.js",
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
      path.resolve(__dirname, "react"),
      path.resolve(__dirname, "react-component"),
      "node_modules",
    ],
    alias: {
      react: path.resolve(__dirname, "./react/"),
      "react-component": path.resolve(__dirname, "./react-component/"),
      "@/src": path.resolve(__dirname, "./src/"),
    },
  },
  mode: "development",
};
