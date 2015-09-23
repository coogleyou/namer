var path = require('path'),
    _ = require('lodash'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'namer'
    },
    port: 3000,
    db: 'mongodb://localhost/namer-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'namer'
    },
    port: 3000,
    db: 'mongodb://localhost/namer-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'namer'
    },
    port: 3000,
    db: 'mongodb://localhost/namer-production'
  }
};

module.exports = _.merge(config[env], require('option') || {});
