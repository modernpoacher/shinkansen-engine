import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import Fieldset from 'shinkansen-engine/components/pinion/fieldset'

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/fieldset', () => {
  it('is a function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
