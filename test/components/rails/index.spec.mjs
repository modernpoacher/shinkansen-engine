import { expect } from 'chai'

import Rails from 'shinkansen-engine/components/rails'

describe('shinkansen-engine/components/rails', () => {
  it('is a function', () => {
    return expect(Rails)
      .to.be.a('function')
  })
})
