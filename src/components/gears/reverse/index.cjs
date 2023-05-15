require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-engine/components/gears/reverse')

log('`shinkansen` is awake')

module.exports = require('shinkansen-gears/gears/reverse')
