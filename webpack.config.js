var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname+'/dist',
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel-loader"
      },
      {
       test: /\.css$/,
       use: [
         'style-loader',
         { loader: 'css-loader', options: { importLoaders: 1 } },
         'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "postcss-loader" // compiles Sass to CSS
        },{
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [{
  	      	  	loader: 'url-loader',
  	      	  	options: {
  	      	  	  limit: 10000,
  	      	  	  name: 'assets/[name]-[hash:5].[ext]'
  	      	  	}
  	      	  },
  	      	  {
  	      	  	loader: 'img-loader'
              }
            ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is scss.webpack'
    })
  ]
}
