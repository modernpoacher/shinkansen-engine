require('@babel/register')

const debug = require('debug')

const log = debug('shinkansen-engine/components/gears/forward')

log('`shinkansen` is awake')

module.exports = require('shinkansen-gears/gears/forward')
