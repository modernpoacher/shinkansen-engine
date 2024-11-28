import debug from 'debug'

import Cogs from './components/cogs/index.mjs'
import Sprockets from './components/sprockets/index.mjs'
import Gears from './components/gears/index.mjs'
import Pinion from './components/pinion/index.mjs'
import Rails from './components/rails/index.mjs'
import Signals from './components/signals/index.mjs'
import Pantograph from './components/pantograph/index.mjs'

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

export {
  Cogs,
  Sprockets,
  Gears,
  Pinion,
  Rails,
  Signals,
  Pantograph
}

export {
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from './transformers/transmission/index.mjs'

export {
  default as Engine
} from './engine/index.cjs'
