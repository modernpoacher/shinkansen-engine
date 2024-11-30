import { expect } from 'chai'

import Engine from 'shinkansen-engine/engine'

describe('shinkansen-engine/engine', () => {
  it('is a function', () => {
    return expect(Engine)
      .to.be.a('function')
  })
})
