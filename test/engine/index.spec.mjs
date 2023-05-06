import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Engine from 'shinkansen-engine/engine'

chai.use(sinonChai)

describe('shinkansen-engine/engine', () => {
  it('is a function', () => {
    return expect(Engine)
      .to.be.a('function')
  })
})
