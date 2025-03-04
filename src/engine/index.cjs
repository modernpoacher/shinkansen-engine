require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinksansen-engine/engine')

log('`shinkansen` is awake')

const {
  default: Engine // @ts-expect-error
} = require('./index.jsx')

/**
 *  Exports only default
 */
module.exports = Engine
