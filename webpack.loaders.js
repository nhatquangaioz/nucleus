module.exports = [
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|bower_components|public_out\/)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: "file-loader",
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?prefix=font/&limit=5000",
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?limit=10000&mimetype=application/octet-stream",
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?limit=10000&mimetype=image/svg+xml",
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?limit=10000&mimetype=image/gif",
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?limit=10000&mimetype=image/jpg",
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    use: "url-loader?limit=10000&mimetype=image/png",
  },
  {
    test: /\.css$/,
    exclude: /[/\\]src[/\\]/,
    use: ["style-loader", { loader: "css-loader", options: { sourceMap: true } }],
  },
  {
    test: /\.scss$/,
    exclude: /[/\\](node_modules|bower_components|public_out\/)[/\\]/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: {
            localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
          },
          importLoaders: 1,
        },
      },
      "postcss-loader",
      "sass-loader",
    ],
  },
  {
    test: /\.css$/,
    exclude: /[/\\](node_modules|bower_components|public_out\/)[/\\]/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: {
            localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
          },
          importLoaders: 1,
        },
      },
    ],
  },
]
