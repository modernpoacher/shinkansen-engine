import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import toZashiki from 'shinkansen-engine/transformers/transmission/to-zashiki'

use(sinonChai)

describe('shinkansen-engine/transformers/transmission/to-zashiki', () => {
  it('is a function', () => {
    return expect(toZashiki)
      .to.be.a('function')
  })
})
