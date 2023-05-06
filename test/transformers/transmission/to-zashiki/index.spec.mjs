import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import toZashiki from 'shinkansen-engine/transformers/transmission/to-zashiki'

chai.use(sinonChai)

describe('shinkansen-engine/transformers/transmission/to-zashiki', () => {
  it('is a function', () => {
    return expect(toZashiki)
      .to.be.a('function')
  })
})
