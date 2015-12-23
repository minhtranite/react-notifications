var fs = require('fs-extra');
var path = require('path');

var webpackStatsHelper = {
  StatsToFilePlugin: function (file, options) {
    file = file || './webpack.stats.json';
    options = options || {};
    return function () {
      this.plugin('done', function (stats) {
        var defaultOptions = {
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false,
          modules: false,
          children: false,
          version: true,
          cached: false,
          cachedAssets: false,
          reasons: false,
          source: false,
          errorDetails: false
        };
        for (var option in options) {
          if (options.hasOwnProperty(option)) {
            defaultOptions[option] = options[option];
          }
        }
        fs.ensureFileSync(file);
        fs.writeFileSync(file, JSON.stringify(stats.toJson(defaultOptions)));
      });
    }
  },
  getProperty: function (name, file) {
    file = file || './webpack.stats.json';
    if (!fs.existsSync(file)) {
      return undefined;
    }
    var stats = require(file);
    return stats[name];
  },
  getReplacePatterns: function (file) {
    var patterns = [];
    var assetsByChunkName = this.getProperty('assetsByChunkName', file) || {};
    for (var chunkName in assetsByChunkName) {
      if (assetsByChunkName.hasOwnProperty(chunkName)) {
        var assets = assetsByChunkName[chunkName];
        if (typeof assets === 'string') {
          var ext = path.extname(assets);
          var pattern = {
            pattern: chunkName + ext,
            replacement: assets
          };
          patterns.push(pattern);
        } else {
          assets.forEach(function (asset) {
            var ext = path.extname(asset);
            var pattern = {
              pattern: chunkName + ext,
              replacement: asset
            };
            patterns.push(pattern);
          });
        }
      }
    }
    return patterns;
  }
};

module.exports = webpackStatsHelper;
