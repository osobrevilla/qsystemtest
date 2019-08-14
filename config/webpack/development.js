const path = require("path");

module.exports = (base = { plugins: [] }) => {
  return {
    plugins: [...base.plugins],
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      port: 3030,
      host: "localhost",
      hot: true,
      open: true
    }
  };
};
