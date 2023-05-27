require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const CheckAnswers = require('shinkansen-pinion/components/sprockets/check-answers')

const log = debug('shinksansen-engine/components/pinion/check-answers')

log('`shinkansen` is awake')

module.exports = CheckAnswers
