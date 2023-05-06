import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Forward from 'shinkansen-engine/components/gears/forward'

chai.use(sinonChai)

describe('shinkansen-engine/components/gears/forward', () => {
  it('is a function', () => {
    return expect(Forward)
      .to.be.a('function')
  })
})
