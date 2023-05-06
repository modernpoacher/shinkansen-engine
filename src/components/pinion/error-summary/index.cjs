require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  default: ErrorSummary
} = require('shinkansen-pinion/components/error-summary')

const log = debug('shinksansen-engine/components/pinion/error-summary')

log('`shinkansen` is awake')

module.exports = ErrorSummary
