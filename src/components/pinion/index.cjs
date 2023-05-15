require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const {
  Pinion
} = require('shinkansen-pinion')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = Pinion
