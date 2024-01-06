import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Signals from 'shinkansen-engine/components/signals'

use(sinonChai)

describe('shinkansen-engine/components/signals', () => {
  it('is an object', () => {
    return expect(Signals)
      .to.be.an('object')
  })
})
