require('@babel/register')({ ignore: [] })

const debug = require('debug')

const {
  Rails
} = require('shinkansen-rails')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = Rails
