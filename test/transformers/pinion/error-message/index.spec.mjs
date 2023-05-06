import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as errorMessage from 'shinkansen-engine/transformers/pinion/error-message'

chai.use(sinonChai)

describe('shinkansen-engine/transformers/pinion/error-message', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    return expect(errorMessage)
      .to.be.a('module')
  })
})
