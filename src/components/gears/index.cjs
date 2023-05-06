require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  Gears
} = require('shinkansen-gears')

const log = debug('shinksansen-engine/components/gears')

log('`shinkansen` is awake')

module.exports = Gears
