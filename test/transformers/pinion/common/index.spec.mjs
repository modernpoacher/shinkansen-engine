import {
  expect
} from 'chai'

import * as common from '#engine/transformers/pinion/common'

describe('#engine/transformers/pinion/common', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    expect(common)
      .to.be.an('object')
  })
})
