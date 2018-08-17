var path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: [ 'mocha' ],
    files: [ 'test/test-*' ],
    preprocessors: {
      '/**/*.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: { loader: 'istanbul-instrumenter-loader' },
            include: path.resolve('lib/')
          }
        ]
      }
    },
    webpackMiddleware: { stats: 'errors-only', logLevel: 'error' },
    browsers: [ 'Chrome' ],
    reporters: [ 'progress', 'coverage' ],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      reporters: [ { type: 'html' }, { type: 'text-summary' } ]
    }
  })
}
