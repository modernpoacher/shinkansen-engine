require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  default: Fieldset
} = require('shinkansen-pinion/components/fieldset')

const log = debug('shinksansen-engine/components/pinion/fieldset')

log('`shinkansen` is awake')

module.exports = Fieldset
