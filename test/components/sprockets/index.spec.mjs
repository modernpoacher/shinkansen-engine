import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Sprockets from 'shinkansen-engine/components/sprockets'

chai.use(sinonChai)

describe('shinkansen-engine/components/sprockets', () => {
  it('is an object', () => {
    return expect(Sprockets)
      .to.be.a('object')
  })
})
