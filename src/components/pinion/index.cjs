require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  default: Pinion
} = require('shinkansen-pinion/pinion')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = Pinion
