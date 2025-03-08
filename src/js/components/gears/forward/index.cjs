require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-engine/components/gears/forward')

log('`shinkansen` is awake')

module.exports = require('shinkansen-gears/gears/forward')
