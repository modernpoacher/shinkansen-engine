import {
  expect
} from 'chai'

import * as checkAnswers from '#engine/transformers/pinion/check-answers'

describe('#engine/transformers/pinion/check-answers', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is an object', () => {
    expect(checkAnswers)
      .to.be.an('object')
  })
})
