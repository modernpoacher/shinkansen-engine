require('@babel/register')({ ignore: [] })

const debug = require('debug')

const log = debug('shinksansen-engine/components/pinion/common/text-content')

log('`shinkansen` is awake')

module.exports = require('shinkansen-pinion/components/common/text-content')