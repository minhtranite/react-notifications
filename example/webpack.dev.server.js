var express = require('express');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.dev.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var fs = require('fs');
var path = require('path');
var preProcess = require('preprocess');
var http = require('http');
var opn = require('opn');
var httpProxy = require('http-proxy');

var host = 'localhost';
var port = 3000;
var proxyOptions = [];
var serverUrl = 'http://' + host + ':' + port;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});

var compiler = webpack(webpackDevConfig);

var app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
    version: false,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/assets', express.static(path.join(__dirname, 'app/assets')));

proxyOptions.forEach(function (option) {
  app.all(option.path, function (req, res) {
    proxy.web(req, res, option, function (err) {
      console.log(err.message);
      res.statusCode = 502;
      res.end();
    });
  });
});

app.get('*', function (req, res) {
  var indexSource = fs.readFileSync(path.join(__dirname, 'app/index.html'));
  res.send(preProcess.preprocess(indexSource, null, {
    srcDir: path.join(__dirname, 'app')
  }));
});

var server = http.createServer(app);

server.listen(port, host, function () {
  console.log('Listening at ' + serverUrl);
  opn(serverUrl);
});
