require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const ErrorSummary = require('shinkansen-pinion/components/sprockets/error-summary')

const log = debug('shinksansen-engine/components/pinion/error-summary')

log('`shinkansen` is awake')

module.exports = ErrorSummary
