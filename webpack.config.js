const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ts/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src', 'js'), // путь для сохранения бандла
  },
  resolve: {
    extensions: ['.ts', '.js'], // поддержка .ts и .js файлов
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // все .ts файлы
        use: 'ts-loader',
        exclude: /node_modules/, // исключаем node_modules
      },
    ],
  },
};
