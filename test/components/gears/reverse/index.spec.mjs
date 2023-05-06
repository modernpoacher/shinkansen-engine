import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Reverse from 'shinkansen-engine/components/gears/reverse'

chai.use(sinonChai)

describe('shinkansen-engine/components/gears/reverse', () => {
  it('is a function', () => {
    return expect(Reverse)
      .to.be.a('function')
  })
})
