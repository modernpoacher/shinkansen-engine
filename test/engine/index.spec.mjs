import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Engine from 'shinkansen-engine/engine'

use(sinonChai)

describe('shinkansen-engine/engine', () => {
  it('is a function', () => {
    return expect(Engine)
      .to.be.a('function')
  })
})
