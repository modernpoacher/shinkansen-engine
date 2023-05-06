import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Cogs from 'shinkansen-engine/components/cogs'

chai.use(sinonChai)

describe('shinkansen-engine/components/cogs', () => {
  it('is an object', () => {
    return expect(Cogs)
      .to.be.an('object')
  })
})