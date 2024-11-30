import { expect } from 'chai'

import Gears from 'shinkansen-engine/components/gears'

describe('shinkansen-engine/components/gears', () => {
  it('is a function', () => {
    return expect(Gears)
      .to.be.a('function')
  })
})
