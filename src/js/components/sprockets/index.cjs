require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = require('shinkansen-sprockets')
