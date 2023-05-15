require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const {
  default: component
} = require('./index.jsx')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports = component
