module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader" },
          { loader: "ts-loader" },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              // tslint時に自動的に修正する
              fix: true,
              // warningをエラーにすることでその後のビルドを止める
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
};
