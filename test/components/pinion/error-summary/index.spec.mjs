import { expect } from 'chai'

import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

describe('shinkansen-engine/components/pinion/error-summary', () => {
  it('is a function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
