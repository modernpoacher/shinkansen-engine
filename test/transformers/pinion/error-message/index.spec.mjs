import {
  expect
} from 'chai'

import * as errorMessage from '#engine/transformers/pinion/error-message'

describe('#engine/transformers/pinion/error-message', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    expect(errorMessage)
      .to.be.a('module')
  })
})
