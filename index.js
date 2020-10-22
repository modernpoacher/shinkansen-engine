const debug = require('debug')

const log = debug('shinkansen:engine')

log('`engine` is awake')

module.exports = require('./lib')
