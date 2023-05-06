import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Gears from 'shinkansen-engine/components/gears'

chai.use(sinonChai)

describe('shinkansen-engine/components/gears', () => {
  it('is a function', () => {
    return expect(Gears)
      .to.be.a('function')
  })
})
