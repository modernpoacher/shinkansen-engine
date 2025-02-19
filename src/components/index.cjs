const debug = require('debug')

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

module.exports.Cogs = require('./cogs/index.cjs')
module.exports.Gears = require('./gears/index.cjs')
module.exports.Pantograph = require('./pantograph/index.cjs')
module.exports.Pinion = require('./pinion/index.cjs')
module.exports.Rails = require('./rails/index.cjs')
module.exports.Signals = require('./signals/index.cjs')
module.exports.Sprockets = require('./sprockets/index.cjs')
