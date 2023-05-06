import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as checkAnswers from 'shinkansen-engine/transformers/pinion/check-answers'

chai.use(sinonChai)

describe('shinkansen-engine/transformers/pinion/check-answers', () => {
  /**
   *  A pass-through from `shinkansen-pinion` so we don't interrogate the module
   *
   *  (This project exports exactly what `shinkansen-pinion` exports)
   */
  it('is a module', () => {
    return expect(checkAnswers)
      .to.be.a('module')
  })
})
