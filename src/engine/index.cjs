require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const {
  default: component // @ts-ignore
} = require('./index.jsx')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = component
