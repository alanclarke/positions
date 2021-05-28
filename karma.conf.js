const path = require('path')

const cfg = {
  frameworks: ['mocha'],
  files: ['test/*'],
  preprocessors: {
    'test/**/*.js': ['webpack', 'sourcemap']
  },
  webpackMiddleware: {
    stats: 'errors-only',
    logLevel: 'error'
  },
  reporters: ['progress'],
  webpack: {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map'
  },
  browsers: ['Chrome']
}

module.exports = function (config) {
  const coverage =
    process.argv.indexOf('--coverage') > -1 || process.argv.indexOf('-c') > -1

  if (coverage) {
    enableCoverage(cfg)
  }

  config.set(cfg)
}

function enableCoverage (cfg) {
  cfg.webpack.module = {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'lib'), path.join(__dirname, 'dom')],
        loader: 'istanbul-instrumenter-loader'
      }
    ]
  }
  cfg.reporters.push('coverage')
  cfg.customLaunchers = {
    ChromeCustom: {
      base: 'ChromeHeadless',
      flags: ['--headless', '--no-sandbox']
    }
  }
  cfg.coverageReporter = {
    reporters: [{ type: 'html' }, { type: 'text' }],
    check: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  }
  cfg.browsers = ['ChromeCustom']
  return cfg
}
