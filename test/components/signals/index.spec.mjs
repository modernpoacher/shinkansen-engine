import { expect } from 'chai'

import Signals from 'shinkansen-engine/components/signals'

describe('shinkansen-engine/components/signals', () => {
  it('is an object', () => {
    return expect(Signals)
      .to.be.an('object')
  })
})
