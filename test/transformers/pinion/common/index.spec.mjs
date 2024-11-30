import { expect } from 'chai'

import * as common from 'shinkansen-engine/transformers/pinion/common'

describe('shinkansen-engine/transformers/pinion/common', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    return expect(common)
      .to.be.a('module')
  })
})
