require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = require('shinkansen-cogs')
