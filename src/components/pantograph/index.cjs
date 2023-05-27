require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const {
  Pantograph
} = require('shinkansen-pantograph')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = Pantograph
