import { expect } from 'chai'

import * as errorMessage from 'shinkansen-engine/transformers/pinion/error-message'

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
