require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  Signals
} = require('shinkansen-signals')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = Signals
