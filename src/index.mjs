import debug from 'debug'

import Cogs from './components/cogs/index.cjs'
import Sprockets from './components/sprockets/index.cjs'
import Gears from './components/gears/index.cjs'
import Pinion from './components/pinion/index.mjs'
import Rails from './components/rails/index.cjs'
import Signals from './components/signals/index.cjs'
import Pantograph from './components/pantograph/index.cjs'

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
