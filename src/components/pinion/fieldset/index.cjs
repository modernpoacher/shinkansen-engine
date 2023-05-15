require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const Fieldset = require('shinkansen-pinion/components/sprockets/fieldset')

const log = debug('shinksansen-engine/components/pinion/fieldset')

log('`shinkansen` is awake')

module.exports = Fieldset
