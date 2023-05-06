import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Signals from 'shinkansen-engine/components/signals'

chai.use(sinonChai)

describe('shinkansen-engine/components/signals', () => {
  it('is an object', () => {
    return expect(Signals)
      .to.be.an('object')
  })
})
