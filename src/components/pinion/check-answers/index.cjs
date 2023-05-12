require('@babel/register')({ ignore: [] })

const debug = require('debug')

const CheckAnswers = require('shinkansen-pinion/components/check-answers')

const log = debug('shinksansen-engine/components/pinion/check-answers')

log('`shinkansen` is awake')

module.exports = CheckAnswers
