const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = (env, argv) => {
  const { mode } = argv;
  const config = {
    mode,
    entry: path.resolve(__dirname, "src/index"),

    output: {
      filename: "bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.jsx?$/,
          use: "babel-loader"
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: "file-loader"
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html")
      }),
      new CleanWebpackPlugin()
    ]
  };

  return Object.assign(
    config,
    require(`./config/webpack/${mode}.js`)(config, { mode })
  );
};
