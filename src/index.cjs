require('@babel/register')({ ignore: [] })

const Engine = require('./engine/index.cjs')

const Cogs = require('./components/cogs/index.cjs')
const Sprockets = require('./components/sprockets/index.cjs')
const Gears = require('./components/gears/index.cjs')
const Pinion = require('./components/pinion/index.cjs')
const Rails = require('./components/rails/index.cjs')
const Signals = require('./components/signals/index.cjs')
const Pantograph = require('./components/pantograph/index.cjs')

const { default: fromDocumentToHash } = require('./transformers/transmission/from-document-to-hash/index.mjs')
const { default: fromHashToDocument } = require('./transformers/transmission/from-hash-to-document/index.mjs')
const { default: toZashiki } = require('./transformers/transmission/to-zashiki/index.mjs')

module.exports.Engine = Engine

module.exports.Cogs = Cogs
module.exports.Sprockets = Sprockets
module.exports.Gears = Gears
module.exports.Pinion = Pinion
module.exports.Rails = Rails
module.exports.Signals = Signals
module.exports.Pantograph = Pantograph

module.exports.fromDocumentToHash = fromDocumentToHash
module.exports.fromHashToDocument = fromHashToDocument
module.exports.toZashiki = toZashiki
