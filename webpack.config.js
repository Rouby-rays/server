const path = require('path');

module.exports = {
    entry: {
      main: './src/main.js',
      utils: './src/utils.ts',
      index: './src/index.js'
    },
    output: {
        path:path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                      ]
                    }
                  }
                ]
            },
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    '@babel/preset-env',
                    '@babel/react'
                  ]
                }
              }
            },
            {
              test: /\.jsx?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              options:{
                  presets:[ "@babel/preset-react"]    // используемые плагины
              }
          },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    modules: true
                  }
                }
              ]
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ["file-loader"]
            }
        ]
    }
}