import {
  expect
} from 'chai'

import * as checkAnswers from 'shinkansen-engine/transformers/pinion/check-answers'

describe('shinkansen-engine/transformers/pinion/check-answers', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    expect(checkAnswers)
      .to.be.a('module')
  })
})
