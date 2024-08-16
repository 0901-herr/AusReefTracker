// const path = require("path");

// module.exports = {
//   entry: "./frontend/react/index.js",
//   output: {
//     filename: "_react.js",
//     path: path.resolve(__dirname, "frontend/static/scripts"),
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.[j]sx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
// };

const path = require("path");

module.exports = {
  entry: "./frontend/react/index.js",
  output: {
    filename: "_react.js",
    path: path.resolve(__dirname, "frontend/static/scripts"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[j]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
