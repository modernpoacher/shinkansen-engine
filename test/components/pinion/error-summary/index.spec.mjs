import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/error-summary', () => {
  it('is a function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
