import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Rails from 'shinkansen-engine/components/rails'

chai.use(sinonChai)

describe('shinkansen-engine/components/rails', () => {
  it('is a function', () => {
    return expect(Rails)
      .to.be.a('function')
  })
})
