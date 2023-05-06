import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Pantograph from 'shinkansen-engine/components/pantograph'

chai.use(sinonChai)

describe('shinkansen-engine/components/pantograph', () => {
  it('is a function', () => {
    return expect(Pantograph)
      .to.be.a('function')
  })
})
