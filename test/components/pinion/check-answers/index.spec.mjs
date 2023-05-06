import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import CheckAnswers from 'shinkansen-engine/components/pinion/check-answers'

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/check-answers', () => {
  it('is a function', () => {
    return expect(CheckAnswers)
      .to.be.a('function')
  })
})
